import { CityNote, NoteState } from '../../helpers/interfaces';
import { ActionType } from '../action-types';
import { NoteAction } from '../actions';

const initialState: NoteState = {
  notes: [],
};

const noteReducer = (state = initialState, action: NoteAction): NoteState => {
  switch (action.type) {
    case ActionType.ADD_NOTE:
      const elementToAdd: CityNote = { cityName: action.payload.city, cityNotes: [action.payload.note] };
      if (state.notes.length) {
        const cityNoteExists = state.notes.find((cityNote) => cityNote.cityName === action.payload.city);
        if (!cityNoteExists) {
          return {
            notes: [...state.notes, elementToAdd],
          };
        } else {
          return {
            notes: state.notes.map((cityNote) => (cityNote.cityName === cityNoteExists.cityName ? { ...cityNote, cityNotes: [action.payload.note, ...cityNote.cityNotes] } : cityNote)),
          };
        }
      } else {
        return { notes: [elementToAdd] };
      }
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
