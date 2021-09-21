import { Note } from '../../helpers/interfaces';
import { ActionType } from '../action-types';

interface FetchNoteAction {
  type: ActionType.FETCH_NOTES;
  payload: Note[];
}

interface EditNoteAction {
  type: ActionType.EDIT_NOTE;
  payload: Note;
}

interface AddNoteAction {
  type: ActionType.ADD_NOTE;
  payload: Note;
}

interface DeleteNoteAction {
  type: ActionType.DELETE_NOTE;
  payload: string;
}

export type NoteAction = FetchNoteAction | EditNoteAction | AddNoteAction | DeleteNoteAction;
