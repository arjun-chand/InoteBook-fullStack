const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchema = new Schema({  

    //so that the other user can't see (associate with user)
    user:{
        type:mongoose.Schema.Types.ObjectId, //acting as foriegn key
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default : 'general' 
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes', NotesSchema);