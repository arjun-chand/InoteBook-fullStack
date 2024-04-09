const connectToMongo = require('./db');
connectToMongo();

var cors = require('cors')
var express = require('express')
const port = 5000
var app = express()


app.use(cors())

//middleware for using api
app.use(express.json());


//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`I-NoteBook Backend listening on port ${port}`)
})
