const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 5000

//middleware for using api
app.use(express.json());


//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`I-NoteBook Backend listening on port ${port}`)
})
