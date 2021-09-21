import { CityState } from '../../helpers/interfaces';
import { ActionType } from '../action-types';
import { CityAction } from '../actions';

const initialState: CityState = {
  city: null,
  loading: false,
  error: false,
};
const cityReducer = (state = initialState, action: CityAction): CityState => {
  switch (action.type) {
    case ActionType.FETCH_CITY_WEATHER_LOADING:
      return { ...state, loading: true, error: false };
    case ActionType.FETCH_CITY_WEATHER_SUCCESS:
      return { ...state, loading: false, city: action.payload };
    case ActionType.FETCH_CITY_WEATHER_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default cityReducer;
