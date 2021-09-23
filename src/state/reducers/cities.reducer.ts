import { CitiesState } from '../../helpers/interfaces';
import { ActionType } from '../action-types';
import { CitiesAction } from '../actions';

const initialState: CitiesState = {
  top: null,
  favorite: [],
  loading: false,
  error: false,
};
const citiesReducer = (state = initialState, action: CitiesAction): CitiesState => {
  switch (action.type) {
    case ActionType.FETCH_TOP_CITIES_WEATHER_LOADING:
      return { ...state, loading: true, error: false };
    case ActionType.FETCH_TOP_CITIES_WEATHER_SUCCESS:
      return { ...state, loading: false, top: action.payload };
    case ActionType.FETCH_TOP_CITIES_WEATHER_FAIL:
      return { ...state, loading: false, error: true };
    case ActionType.REMOVE_TOP_CITY:
      return { ...state, top: state.top!.filter((city) => city.id !== action.payload) };
    case ActionType.ADD_FAVORITE_CITY:
      return { ...state, favorite: [action.payload, ...state.favorite] };
    case ActionType.REMOVE_FAVORITE_CITY:
      return { ...state, favorite: state.favorite.filter((city) => city.id !== action.payload) };
    case ActionType.DISMISS_FETCH_TOP_CITIES_WEATHER_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default citiesReducer;
