import { Note } from '../../helpers/interfaces';
import { ActionType } from '../action-types';
import { NoteAction } from '../actions';

export const addNote = (note: Note, city: string): NoteAction => {
  return {
    type: ActionType.ADD_NOTE,
    payload: {
      note,
      city,
    },
  };
};

export const removeNote = (id: string, city: string): NoteAction => {
  return {
    type: ActionType.DELETE_NOTE,
    payload: {
      id,
      city,
    },
  };
};

export const editNote = (note: Note, city: string): NoteAction => {
  return {
    type: ActionType.EDIT_NOTE,
    payload: {
      note,
      city,
    },
  };
};
