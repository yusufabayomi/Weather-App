import { CityWeatherReport } from '../../helpers/interfaces';
import { ActionType } from '../action-types';

interface FetchCityLoadingAction {
  type: ActionType.FETCH_CITY_WEATHER_LOADING;
}

interface FetchCityFailAction {
  type: ActionType.FETCH_CITY_WEATHER_FAIL;
}

interface FetchCitySuccessAction {
  type: ActionType.FETCH_CITY_WEATHER_SUCCESS;
  payload: CityWeatherReport;
}

interface DismissFetchCityError {
  type: ActionType.DISMISS_FETCH_CITY_WEATHER_ERROR;
}

export type CityAction = FetchCityLoadingAction | FetchCitySuccessAction | FetchCityFailAction | DismissFetchCityError;
