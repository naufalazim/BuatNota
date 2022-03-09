import { MdDeleteForever } from 'react-icons/md';

//Component a note 
const Note = () => {
    return(
        <div className="note">
            <span>Hello world!</span>

            <div className="note-footer">
                <small>15/05/2022</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>
        </div>
    )
}

export default Note;