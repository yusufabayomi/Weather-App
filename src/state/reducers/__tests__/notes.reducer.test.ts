import { NoteState } from '../../../helpers/interfaces';
import { ActionType } from '../../action-types';
import { NoteAction } from '../../actions';
import noteReducer from '../notes.reducer';

const initialState: NoteState = {
  notes: [],
};

describe('notes reducer', () => {
  it('should handle initial state', () => {
    expect(noteReducer(undefined, {} as NoteAction)).toEqual(initialState);
  });

  describe(`handles ${ActionType.ADD_NOTE}`, () => {
    const usedAction: NoteAction = {
      type: ActionType.ADD_NOTE,
      payload: {
        city: 'London, United Kingdom',
        note: {
          id: '4rt5tg8yh9df0op6r',
          content: 'What a stormy day!',
        },
      },
    };
    it('should update note state when notes is empty', () => {
      const actual = noteReducer(initialState, usedAction);
      const expected: NoteState = {
        notes: [
          {
            cityName: 'London, United Kingdom',
            cityNotes: [
              {
                id: '4rt5tg8yh9df0op6r',
                content: 'What a stormy day!',
              },
            ],
          },
        ],
      };
      expect(actual).toEqual(expected);
    });

    it('should update note state when a new note is being added to a new city', () => {
      const initialState: NoteState = {
        notes: [
          {
            cityName: 'London, Canada',
            cityNotes: [],
          },
        ],
      };

      const expected: NoteState = {
        notes: [
          {
            cityName: 'London, Canada',
            cityNotes: [],
          },
          {
            cityName: 'London, United Kingdom',
            cityNotes: [
              {
                id: '4rt5tg8yh9df0op6r',
                content: 'What a stormy day!',
              },
            ],
          },
        ],
      };
      const actual = noteReducer(initialState, usedAction);
      expect(actual).toEqual(expected);
    });

    it('should update note state when a new note is being added to an existing city', () => {
      const initialState: NoteState = {
        notes: [
          {
            cityName: 'London, Canada',
            cityNotes: [],
          },
          {
            cityName: 'London, United Kingdom',
            cityNotes: [
              {
                id: '0r4j9op3q2ew5r6g4d',
                content: 'What a rainy day!',
              },
            ],
          },
        ],
      };

      const expected: NoteState = {
        notes: [
          {
            cityName: 'London, Canada',
            cityNotes: [],
          },
          {
            cityName: 'London, United Kingdom',
            cityNotes: [
              {
                id: '4rt5tg8yh9df0op6r',
                content: 'What a stormy day!',
              },
              {
                id: '0r4j9op3q2ew5r6g4d',
                content: 'What a rainy day!',
              },
            ],
          },
        ],
      };

      const actual = noteReducer(initialState, usedAction);
      expect(actual).toEqual(expected);
    });
  });

  it(`should handle action ${ActionType.EDIT_NOTE}`, () => {
    const initialState: NoteState = {
      notes: [
        {
          cityName: 'London, Canada',
          cityNotes: [],
        },
        {
          cityName: 'London, United Kingdom',
          cityNotes: [
            {
              id: '4rt5tg8yh9df0op6r',
              content: 'What a stormy day!',
            },
            {
              id: '0r4j9op3q2ew5r6g4d',
              content: 'What a rainy day!',
            },
          ],
        },
      ],
    };

    const usedAction: NoteAction = {
      type: ActionType.EDIT_NOTE,
      payload: {
        city: 'London, United Kingdom',
        note: {
          id: '0r4j9op3q2ew5r6g4d',
          content: 'What a rainy day and its quite flooded',
        },
      },
    };

    const expected: NoteState = {
      notes: [
        {
          cityName: 'London, Canada',
          cityNotes: [],
        },
        {
          cityName: 'London, United Kingdom',
          cityNotes: [
            {
              id: '4rt5tg8yh9df0op6r',
              content: 'What a stormy day!',
            },
            {
              id: '0r4j9op3q2ew5r6g4d',
              content: 'What a rainy day and its quite flooded',
            },
          ],
        },
      ],
    };

    const actual = noteReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });

  it(`should handle action ${ActionType.DELETE_NOTE}`, () => {
    const initialState: NoteState = {
      notes: [
        {
          cityName: 'London, Canada',
          cityNotes: [],
        },
        {
          cityName: 'London, United Kingdom',
          cityNotes: [
            {
              id: '4rt5tg8yh9df0op6r',
              content: 'What a stormy day!',
            },
            {
              id: '0r4j9op3q2ew5r6g4d',
              content: 'What a rainy day!',
            },
          ],
        },
      ],
    };

    const usedAction: NoteAction = {
      type: ActionType.DELETE_NOTE,
      payload: {
        city: 'London, United Kingdom',
        id: '0r4j9op3q2ew5r6g4d',
      },
    };

    const expected: NoteState = {
      notes: [
        {
          cityName: 'London, Canada',
          cityNotes: [],
        },
        {
          cityName: 'London, United Kingdom',
          cityNotes: [
            {
              id: '4rt5tg8yh9df0op6r',
              content: 'What a stormy day!',
            },
          ],
        },
      ],
    };

    const actual = noteReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });
});
