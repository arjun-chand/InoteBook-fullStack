const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "iamabatman";
const { fetchuser }  = require( '../middleware/fetchUser' );

//ROUTE 1: create a user using : POST "api/auth/createuser". No login require
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").notEmpty().escape(),
    body("email", "Enter a valid Email").isEmail(),
    body("password").notEmpty().withMessage("Password must not be empty"),
  ],
  async (req, res) => {
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Check if user with this email already exists
      let user = await User.findOne({ email: req.body.email });

      // If user already exists, return error
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // Creating new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      // Creating JWT token
      const tokenData = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(tokenData, JWT_SECRET);
      
      // Sending response with the newly created user
    //   res.json(user);
        res.json(authtoken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);

//ROUTE 2:  Authenticate a user

router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password can not be blanked").exists(),
  ],
  async (req, res) => {

    //if there are errors return bad requets and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const{email, password} = req.body;
    try {
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"please try to login with correct credentials"});
      }

      const passwordCompare = bcrypt.compare(password, user.password);
      if(!passwordCompare){
        return res.status(400).json({error:"please try to login with correct credentials"});
      }

      const data = {
        user:{
          id: user.id
        }
      }

      const authtoken = await jwt.sign(data, JWT_SECRET);
      res.json({authtoken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
    }
  })

  //ROUTE 3: Get User Details using POST "api/auth/getuser" (login required)

  router.post("/getuser",fetchuser, async (req, res) => {
      try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
      }
    });
    
module.exports = router;
