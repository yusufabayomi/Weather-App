import { Location, SearchCitiesState } from '../../../helpers/interfaces';
import { ActionType } from '../../action-types';
import { SearchCityAction } from '../../actions';
import searchCitiesReducer from '../search-cities.reducer';

const initialState: SearchCitiesState = {
  cities: [],
  loading: false,
  error: false,
};

const searchedCities: Location[] = [
  {
    name: 'London',
    country: 'United Kingdom',
    region: 'City of London, Greater London',
    lat: '51.517',
    lon: '-0.106',
    timezone_id: 'Europe/London',
    utc_offset: '1.0',
  },
  {
    name: 'London',
    country: 'Canada',
    region: 'Ontario',
    lat: '42.983',
    lon: '-81.250',
    timezone_id: 'America/Toronto',
    utc_offset: '-4.0',
  },
];

describe('search cities reducer', () => {
  it('should return the intial state', () => {
    expect(searchCitiesReducer(undefined, {} as SearchCityAction)).toEqual(initialState);
  });

  it(`should handle ${ActionType.SEARCH_CITY_LOADING}`, () => {
    const expected: SearchCitiesState = {
      cities: [],
      loading: true,
      error: false,
    };

    const usedAction: SearchCityAction = {
      type: ActionType.SEARCH_CITY_LOADING,
    };

    const actual = searchCitiesReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });

  it(`should handle ${ActionType.SEARCH_CITY_SUCCESS}`, () => {
    const expected = {
      cities: searchedCities,
      loading: false,
      error: false,
    };

    const usedAction: SearchCityAction = {
      type: ActionType.SEARCH_CITY_SUCCESS,
      payload: searchedCities,
    };

    const actual = searchCitiesReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });

  it(`should handle ${ActionType.SEARCH_CITY_FAIL}`, () => {
    const expected = {
      cities: [],
      loading: false,
      error: true,
    };

    const usedAction: SearchCityAction = {
      type: ActionType.SEARCH_CITY_FAIL,
    };

    const actual = searchCitiesReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });

  it(`should handle ${ActionType.RESET_SEARCH_CITY}`, () => {
    const usedAction: SearchCityAction = {
      type: ActionType.RESET_SEARCH_CITY,
    };
    const actual = searchCitiesReducer(initialState, usedAction);
    expect(actual).toEqual(initialState);
  });
});
