import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';

const AddNote = () => {

    const context = useContext(noteContext);
    const {addNote } = context;

    const [note, setNote] = useState({title: "", description:"",tag:"default"});

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({...note,[e.target.name]: e.target.value})
    }
  return (
    <div>
       <div className="container my-3">
        <h2>Add a Note</h2>
        <form className='my-3'>
          <div className="row mb-3">
            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="title" name='title' onChange={onChange} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="tag" className="col-sm-2 col-form-label">Tag</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}/>
            </div>
          </div>
         
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
       
      </div>
    </div>
  )
}

export default AddNote
