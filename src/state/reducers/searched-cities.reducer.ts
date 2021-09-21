import { SearchCitiesState } from '../../helpers/interfaces';
import { ActionType } from '../action-types';
import { SearchCityAction } from '../actions';

const initialState: SearchCitiesState = {
  cities: [],
  loading: false,
  error: false,
};

const searchCitiesReducer = (state = initialState, action: SearchCityAction): SearchCitiesState => {
  switch (action.type) {
    case ActionType.SEARCH_CITY_LOADING:
      return { ...state, loading: true, error: false };
    case ActionType.SEARCH_CITY_SUCCESS:
      return { ...state, loading: false, cities: action.payload };
    case ActionType.SEARCH_CITY_FAIL:
      return { ...state, loading: false, error: true };
    case ActionType.RESET_SEARCH_CITY:
      return initialState;
    default:
      return state;
  }
};

export default searchCitiesReducer;
