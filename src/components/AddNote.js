import { useState } from "react";


const AddNote = ({handleAddNote}) => {

    //Usestate for new note:
    const [ noteText, setNoteText ] = useState('');

    //for character limit:
    const characterLimit = 200;

    //detect user typing
    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
        } //limitation character
       
    }

    //user click button"
    const handleSaveClick = () => {
        //prevent save from empty!
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
        
    }
    
    return(
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder='What are you thinking...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}


export default AddNote;