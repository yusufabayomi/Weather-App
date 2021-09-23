import { FC, useCallback } from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { Note } from '../../helpers/interfaces';
import { removeNote } from '../../state/action-creators';
import './NoteItem.css';

type Props = {
  note: Note;
  cityName: string;
  editedNoteId?: string;
  resetNoteForm: () => void;
  editNoteHandler: (text: string, editedNoteId: string) => void;
};

const NoteItem: FC<Props> = ({ note, cityName, editedNoteId, editNoteHandler, resetNoteForm }) => {
  const dispatch = useDispatch();

  const onDeleteClickHandler = useCallback(() => {
    dispatch(removeNote(note.id, cityName));
    // reset form if user tried to edit, stopped and then deleted
    if (editedNoteId && editedNoteId === note.id) {
      resetNoteForm();
    }
  }, [dispatch, cityName, note.id, editedNoteId, resetNoteForm]);

  const onEditClickHandler = useCallback(() => {
    editNoteHandler(note.content, note.id);
  }, [note, editNoteHandler]);

  return (
    <div className='flex text-white note-item'>
      <p>{note.content}</p>
      <div>
        <FontAwesomeIcon icon={faEdit} onClick={onEditClickHandler} />
        <FontAwesomeIcon icon={faTrash} onClick={onDeleteClickHandler} />
      </div>
    </div>
  );
};

export default NoteItem;
