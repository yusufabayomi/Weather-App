import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { RootState } from '../../state/reducers';
import CardHeader from '../CardHeader/CardHeader';
import EmptyRecord from '../EmptyRecord/EmptyRecord';
import NoteForm from '../NoteForm/NoteForm';
import NoteItem from '../NoteItem/NoteItem';

const CityNotes: FC = () => {
  const { id } = useParams<{ id: string }>();
  const cityNote = useSelector((state: RootState) => state.cityNotes.notes.find((note) => note.cityName === id));

  // initialize the note form textarea form value, the form action type (Edit or Delete Form)
  const [textValue, setTextValue] = useState('');
  const [formActionType, setFormActionType] = useState<'Add' | 'Edit'>('Add');
  const [editedNoteId, setEditedNoteId] = useState<string>();

  // when user wants to edit a note, set the value of the textarea to the note to edit,
  // then set the action type to 'edit' and also set the id of the note to edit
  const editNoteHandler = (text: string, noteId: string) => {
    setTextValue(text);
    setFormActionType('Edit');
    setEditedNoteId(noteId);
  };

  // resets the form when a note has been added or deleted
  const resetNoteForm = () => {
    setTextValue('');
    setFormActionType('Add');
  };

  return (
    <div className='col2'>
      <CardHeader heading='Notes Report' />
      <div className='card'>
        <NoteForm formActionType={formActionType} textValue={textValue} editedNoteId={editedNoteId} resetNoteForm={resetNoteForm} />

        <div className='mt-20 scroll-div'>{cityNote && cityNote.cityNotes.length && cityNote.cityNotes.map((note) => <NoteItem key={note.id} note={note} cityName={cityNote.cityName} editNoteHandler={editNoteHandler} editedNoteId={editedNoteId} resetNoteForm={resetNoteForm} />)}</div>
      </div>
    </div>
  );
};

export default CityNotes;
