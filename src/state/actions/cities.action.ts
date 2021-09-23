import { CityWeatherReport } from '../../helpers/interfaces';
import { ActionType } from '../action-types';

export interface FetchTopCitiesLoadingAction {
  type: ActionType.FETCH_TOP_CITIES_WEATHER_LOADING;
}

export interface FetchTopCitiesFailAction {
  type: ActionType.FETCH_TOP_CITIES_WEATHER_FAIL;
}

export interface DismissFetchTopCitiesErrorAction {
  type: ActionType.DISMISS_FETCH_TOP_CITIES_WEATHER_ERROR;
}

export interface FetchTopCitiesSuccessAction {
  type: ActionType.FETCH_TOP_CITIES_WEATHER_SUCCESS;
  payload: CityWeatherReport[];
}

export interface RemoveTopCitiesAction {
  type: ActionType.REMOVE_TOP_CITY;
  payload: string;
}

export interface AddFavoriteCityAction {
  type: ActionType.ADD_FAVORITE_CITY;
  payload: CityWeatherReport;
}

export interface RemoveFavoriteCityAction {
  type: ActionType.REMOVE_FAVORITE_CITY;
  payload: string;
}

export type CitiesAction = FetchTopCitiesLoadingAction | FetchTopCitiesFailAction | FetchTopCitiesSuccessAction | RemoveTopCitiesAction | AddFavoriteCityAction | RemoveFavoriteCityAction | DismissFetchTopCitiesErrorAction;
