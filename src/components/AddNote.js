import { useState } from "react";

//35.31
const AddNote = () => {

    //Usestate for new note:
    const [ noteText, setNoteText ] = useState('');

    //detect user typing
    const handleChange = (event) => {
        console.log(event.target.value);
    }
    
    return(
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder='Tulis nota sini...'
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>140 remaining</small>
                <button className="save">Save</button>
            </div>
        </div>
    )
}


export default AddNote;