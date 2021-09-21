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

export type FetchCityAction = FetchCityLoadingAction | FetchCitySuccessAction | FetchCityFailAction;
