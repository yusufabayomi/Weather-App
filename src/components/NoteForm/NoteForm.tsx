import { FC, useCallback, useState, FormEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Note } from '../../helpers/interfaces';
import { generateId } from '../../helpers/utils';
import { addNote, editNote } from '../../state/action-creators';
import './NoteForm.css';

type Props = {
  textValue: string;
  formActionType: 'Add' | 'Edit';
  editedNoteId?: string;
  resetNoteForm: () => void;
};

const NoteForm: FC<Props> = ({ textValue, formActionType, editedNoteId, resetNoteForm }) => {
  const [value, setValue] = useState(textValue);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(textValue);
  }, [textValue]);

  const onChangeHandler = useCallback((e: FormEvent<HTMLTextAreaElement>) => setValue(e.currentTarget.value), []);

  const onsubmitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (formActionType === 'Add') {
        const note: Note = {
          id: generateId(),
          content: value,
        };
        dispatch(addNote(note, id));
        setValue('');
      } else {
        const note: Note = {
          id: editedNoteId!,
          content: value,
        };
        dispatch(editNote(note, id));
        resetNoteForm();
      }
    },
    [dispatch, id, value, editedNoteId, formActionType, resetNoteForm]
  );

  return (
    <form className='note-form' onSubmit={onsubmitHandler}>
      <div>
        <textarea value={value} onChange={onChangeHandler} placeholder='Type a note here...' />
      </div>
      <button type='submit' disabled={!value.length}>
        {formActionType} Note
      </button>
    </form>
  );
};

export default NoteForm;
