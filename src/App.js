import { nanoid } from "nanoid";
import { useState } from "react";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is the note!",
    date: "15/04/2021"
  },

  {
    id: nanoid(),
    text: "This is the  2nd note!",
    date: "15/04/2021"
  },

  {
    id: nanoid(),
    text: "This is the 3rd note!",
    date: "15/04/2021"
  },

]);

  return(
    <div className="container">
      <NotesList notes={notes} />
    </div>
  )
}

export default App;