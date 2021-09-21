import { CityWeatherReport } from '../../helpers/interfaces';
import { ActionType } from '../action-types';

interface FetchTopCitiesLoadingAction {
  type: ActionType.FETCH_TOP_CITIES_WEATHER_LOADING;
}

interface FetchTopCitiesFailAction {
  type: ActionType.FETCH_TOP_CITIES_WEATHER_FAIL;
}

interface FetchTopCitiesSuccessAction {
  type: ActionType.FETCH_TOP_CITIES_WEATHER_SUCCESS;
  payload: CityWeatherReport[];
}

interface RemoveTopCitiesAction {
  type: ActionType.REMOVE_TOP_CITY;
}

export type TopCitiesAction = FetchTopCitiesLoadingAction | FetchTopCitiesFailAction | FetchTopCitiesSuccessAction | RemoveTopCitiesAction;
