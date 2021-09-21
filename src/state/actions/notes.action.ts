import { Note } from '../../helpers/interfaces';
import { ActionType } from '../action-types';

interface EditNoteAction {
  type: ActionType.EDIT_NOTE;
  payload: {
    note: Note;
    city: string;
  };
}

interface AddNoteAction {
  type: ActionType.ADD_NOTE;
  payload: {
    note: Note;
    city: string;
  };
}

interface DeleteNoteAction {
  type: ActionType.DELETE_NOTE;
  payload: {
    id: string;
    city: string;
  };
}

export type NoteAction = EditNoteAction | AddNoteAction | DeleteNoteAction;
