import { useState } from "react";


const AddNote = ({handleAddNote}) => {

    //Usestate for new note:
    const [ noteText, setNoteText ] = useState('');

    //detect user typing
    const handleChange = (event) => {
        setNoteText(event.target.value);
    }

    //user click button"
    const handleSaveClick = () => {
        handleAddNote(noteText);
    }
    
    return(
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder='Tulis nota sini...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>140 remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}


export default AddNote;