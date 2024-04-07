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
      "_id": "660d43fdcfcf7d1ec8d72c1a",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
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
      "_id": "660d43fdcfcf7d1ec8d72c1a",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
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
      "_id": "660d43fdcfcf7d1ec8d72c1a",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
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
      "_id": "660d43fdcfcf7d1ec8d72c1a",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
    {
      "_id": "660d43fdcfcf7d1ec8d72c1a",
      "user": "660c1ecaf0f42e35c6eb3747",
      "title": "my title",
      "description": "please wake up early",
      "tag": "personal",
      "date": "2024-04-03T11:56:45.386Z",
      "__v": 0
    },
  ]

  const [notes, setNotes] = useState(notesInitital);
   
    return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NoteState;
