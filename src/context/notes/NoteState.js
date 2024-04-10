import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {

  const  host = "http://localhost:5000"
  const notesInitital = [ ]

  const [notes, setNotes] = useState(notesInitital);


  //Get a Note
  const getNotes = async () => {

    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYzFlY2FmMGY0MmUzNWM2ZWIzNzQ3In0sImlhdCI6MTcxMjEzMDMyOX0.lzPJYHhiokSNEs47ljEiQ4eW-HizHKWdK0LqqsJ8yEc"
      }, 
    });
    const json = await response.json();
    setNotes(json)
  }

  //Add a Note
  const addNote = async(title, description, tag) => {

    //api call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYzFlY2FmMGY0MmUzNWM2ZWIzNzQ3In0sImlhdCI6MTcxMjEzMDMyOX0.lzPJYHhiokSNEs47ljEiQ4eW-HizHKWdK0LqqsJ8yEc",

      },

      body: JSON.stringify({title, description, tag}),
    });
    const note = await response.json();
    setNotes(notes.concat(note))
   
  }

  //Delete a Note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYzFlY2FmMGY0MmUzNWM2ZWIzNzQ3In0sImlhdCI6MTcxMjEzMDMyOX0.lzPJYHhiokSNEs47ljEiQ4eW-HizHKWdK0LqqsJ8yEc"
      } 
    });
    const json = await response.json();
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote);
  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        'Content-Type': "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYzFlY2FmMGY0MmUzNWM2ZWIzNzQ3In0sImlhdCI6MTcxMjEzMDMyOX0.lzPJYHhiokSNEs47ljEiQ4eW-HizHKWdK0LqqsJ8yEc",

      },

      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
     
    }
    setNotes(newNotes);
  }



  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
