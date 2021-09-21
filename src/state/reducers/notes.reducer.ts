import { NoteState } from '../../helpers/interfaces';
import { ActionType } from '../action-types';
import { NoteAction } from '../actions';

const initialState: NoteState = {
  notes: [],
};

const noteReducer = (state = initialState, action: NoteAction): NoteState => {
  switch (action.type) {
    case ActionType.ADD_NOTE:
      return {
        notes: state.notes.map((cityNote) => (cityNote.cityName === action.payload.city ? { ...cityNote, cityNotes: [action.payload.note, ...cityNote.cityNotes] } : { cityName: action.payload.city, cityNotes: [action.payload.note] })),
      };
    case ActionType.EDIT_NOTE:
      return {
        notes: state.notes.map((cityNote) => (cityNote.cityName === action.payload.city ? { ...cityNote, cityNotes: cityNote.cityNotes.map((note) => (note.id === action.payload.note.id ? action.payload.note : note)) } : cityNote)),
      };
    case ActionType.DELETE_NOTE:
      return {
        notes: state.notes.map((cityNote) => (cityNote.cityName === action.payload.city ? { ...cityNote, cityNotes: cityNote.cityNotes.filter((note) => note.id !== action.payload.id) } : cityNote)),
      };
    default:
      return state;
  }
};

export default noteReducer;
