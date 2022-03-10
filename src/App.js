import { nanoid } from "nanoid";
import { useState } from "react";
import NotesList from "./components/NotesList";


const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "Ini adalah contoh nota!",
    date: "15/05/2022"
  },

]);

//SEARCH FUNCTIONS:



// ADD NOTE FUNCTION:
  const addNote = (text) => {
    //setup date:
    const date = new Date();

    //elements in note:
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]; //List of new notes:
    setNotes(newNotes); //update with new data
  }


// DELETE NOTE FUNCTION:
  const deleteNote = (id) => {
    const newNotes =  notes.filter( (note) => note.id !== id);
    setNotes(newNotes);
  }



  return(
    <div className="container">

      <h1 className="title">Buat Nota</h1>
      <NotesList 
      notes={notes} 
      handleAddNote={addNote}
      handleDeleteNote = {deleteNote}
       />
    </div>
  )
}

export default App;