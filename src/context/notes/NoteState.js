import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitital = [
    {
      "_id": "660d43fdcfcf7d1ec8d72c1a",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
    {
      "_id": "660d43fdcfcf7d1ec8d72c1",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
    {
      "_id": "660d43fdcfcf7d1ec8d72c1b",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
    {
      "_id": "660d43fdcfcf7d1ec8d72c1ac",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
    {
      "_id": "660d43fdcfcf7d1ec8d72c",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
    {
      "_id": "660d43fdcfcf7d1ec8d7",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
    {
      "_id": "660d43fdcfcf7d1ec8d",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
    {
      "_id": "660d43fdcfcf7d1ec8",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
    {
      "_id": "660d43fdcfcf7d1ec",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
  ]

  const [notes, setNotes] = useState(notesInitital);

  //Add a Note
  const addNote = (title, desc, tag) =>{

    // to do: api call
    console.log("Adding a new note")
    const note =  {
      "_id": "660d43fdcfc",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title Added",
      "description": "please wake up early(added)",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }

  //Delete a Note
  const deleteNote = () =>{

  }

  //Edit a Note
  const  editNote = (note) =>{}

 
   
    return (
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NoteState;
