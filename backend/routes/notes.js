const express = require("express");
const router = express.Router();
const { fetchuser } = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");

//router isiliye kyuki perticular router (api) k liyer rahey h isiliye app.get nahi
//ROUTE 1: Get all the notes : GET "api/notes/fetchallnotes". No login require
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
    }

});

//ROUTE 2: Add a new not using POST "api/notes/addnote". No login require
router.post(
    "/addnotes",
    fetchuser,
    [
        body("title", "Enter a valid name").isLength({ min: 3 }),
        body("description", "Description should be atleast 5 characters").isLength({
            min: 3,
        }),
    ],
    async (req, res) => {

        try {
            const { title, description, tag } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const note = new Notes({
                title, description, tag, user: req.user.id
            });

            const savedNote = await note.save();
            res.json(savedNote);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server error");
        }
    }
);

//ROUTE 3: UPDATE existing "api/notes/updatenote". login requireD
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        //create a new note object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //fine a NOTE to be updated and update it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
    }

})

//ROUTE 4: DELETE existing "api/notes/updatenote". login requireD
router.delete("/deletenote/:id", fetchuser, async (req, res) => {

    try {
        //find a NOTE to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }


        // allow deletion only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
    }

})

module.exports = router;


