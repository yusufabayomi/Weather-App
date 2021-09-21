import { CityWeatherReport } from '../../helpers/interfaces';
import { ActionType } from '../action-types';

interface FetchFavoriteCitiesAction {
  type: ActionType.FETCH_FAVORITE_CITIES;
}

interface AddFavoriteCityAction {
  type: ActionType.ADD_FAVORITE_CITY;
  payload: CityWeatherReport;
}

interface RemoveFavoriteCityAction {
  type: ActionType.REMOVE_FAVORITE_CITY;
  payload: string;
}

export type FavoriteCityAction = FetchFavoriteCitiesAction | AddFavoriteCityAction | RemoveFavoriteCityAction;
