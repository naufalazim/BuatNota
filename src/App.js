import { nanoid } from "nanoid";
import { useState } from "react";
import NotesList from "./components/NotesList";
import Header from "./components/Header";


const App = () => {
  const [notes, setNotes] = useState([

    {
    id: nanoid(),
    text: "Buat nota 🇲🇾",
    date: "15/05/2022"
  },

  {
    id: nanoid(),
    text: "'The way to get started is to quit talking and begin doing.' - Walt Disney",
    date: "15/05/2022"
  },

]);

//SEARCH FUNCTIONS:


//DARK MODE FUNCTIONS: Default turn off 


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
    <div>
        <div className="container">
        <Header />
        
        <NotesList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote = {deleteNote}
        />
      </div>
    </div>
  )
}

export default App;