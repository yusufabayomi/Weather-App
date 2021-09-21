import { Location } from '../../helpers/interfaces';
import { ActionType } from '../action-types';

interface SearchCityLoadingAction {
  type: ActionType.SEARCH_CITY_LOADING;
}

interface SearchCityFailAction {
  type: ActionType.SEARCH_CITY_FAIL;
}

interface SearchCitySuccessAction {
  type: ActionType.SEARCH_CITY_SUCCESS;
  payload: Location[];
}

export type SearchCityAction = SearchCityLoadingAction | SearchCityFailAction | SearchCitySuccessAction;
