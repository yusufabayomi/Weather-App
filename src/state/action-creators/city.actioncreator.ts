import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { fetchCityWeatherApi, fetchTopCitiesWeatherApi, searchCityApi } from '../../api';
import { TIME_OUT_DURATION } from '../../helpers/constants';
import { CityWeatherReport, Location } from '../../helpers/interfaces';
import { ActionType } from '../action-types';
import { CitiesAction, CityAction, SearchCityAction } from '../actions';

export const fetchTopCities = () => async (dispatch: Dispatch<CitiesAction>) => {
  handleFetchTopCities(dispatch);
  try {
    const response: AxiosResponse<CityWeatherReport[]> = await fetchTopCitiesWeatherApi();
    const topCities: CityWeatherReport[] = response.data.map((city) => {
      return {
        id: `${city.location.name},${city.location.country}`,
        location: city.location,
        current: city.current,
      };
    });
    handleFetchTopCitiesSuccess(dispatch, topCities);
  } catch (e) {
    handleFetchTopCitiesFail(dispatch);
    setTimeout(() => {
      handleDismissTopCitiesError(dispatch);
    }, TIME_OUT_DURATION);
  }
};

export const removeTopCity = (id: string): CitiesAction => {
  return {
    type: ActionType.REMOVE_TOP_CITY,
    payload: id,
  };
};

export const addFavoriteCity = (city: CityWeatherReport): CitiesAction => {
  return {
    type: ActionType.ADD_FAVORITE_CITY,
    payload: city,
  };
};

export const removeFavoriteCity = (id: string): CitiesAction => {
  return {
    type: ActionType.REMOVE_FAVORITE_CITY,
    payload: id,
  };
};

export const fetchCity = (city: string) => async (dispatch: Dispatch<CityAction>) => {
  handleFetchCity(dispatch);
  try {
    const response: AxiosResponse<CityWeatherReport> = await fetchCityWeatherApi(city);
    handleFetchCitySuccess(dispatch, response.data);
  } catch (e) {
    handleFetchCityFail(dispatch);
    setTimeout(() => {
      handleDismissFetchCityError(dispatch);
    }, TIME_OUT_DURATION);
  }
};

export const searchCity = (keyword: string) => async (dispatch: Dispatch<SearchCityAction>) => {
  handleSearchCity(dispatch);
  try {
    const response: AxiosResponse<any> = await searchCityApi(keyword);
    const { results } = response.data;
    if (results) {
      const location: Location[] = results;
      handleSearchCitySuccess(dispatch, location);
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e);
    handleSearchCityFail(dispatch);
  }
};

export const resetSearchCity = (): SearchCityAction => {
  return {
    type: ActionType.RESET_SEARCH_CITY,
  };
};

const handleFetchTopCities = (dispatch: Dispatch<CitiesAction>) => {
  dispatch({ type: ActionType.FETCH_TOP_CITIES_WEATHER_LOADING });
};

const handleFetchTopCitiesFail = (dispatch: Dispatch<CitiesAction>) => {
  dispatch({ type: ActionType.FETCH_TOP_CITIES_WEATHER_FAIL });
};

const handleFetchTopCitiesSuccess = (dispatch: Dispatch<CitiesAction>, response: CityWeatherReport[]) => {
  dispatch({ type: ActionType.FETCH_TOP_CITIES_WEATHER_SUCCESS, payload: response });
};

const handleDismissTopCitiesError = (dispatch: Dispatch<CitiesAction>) => {
  dispatch({
    type: ActionType.DISMISS_FETCH_TOP_CITIES_WEATHER_ERROR,
  });
};

const handleDismissFetchCityError = (dispatch: Dispatch<CityAction>) => {
  dispatch({
    type: ActionType.DISMISS_FETCH_CITY_WEATHER_ERROR,
  });
};

const handleFetchCity = (dispatch: Dispatch<CityAction>) => {
  dispatch({ type: ActionType.FETCH_CITY_WEATHER_LOADING });
};

const handleFetchCityFail = (dispatch: Dispatch<CityAction>) => {
  dispatch({ type: ActionType.FETCH_CITY_WEATHER_FAIL });
};

const handleFetchCitySuccess = (dispatch: Dispatch<CityAction>, response: CityWeatherReport) => {
  dispatch({ type: ActionType.FETCH_CITY_WEATHER_SUCCESS, payload: response });
};

const handleSearchCity = (dispatch: Dispatch<SearchCityAction>) => {
  dispatch({ type: ActionType.SEARCH_CITY_LOADING });
};

const handleSearchCityFail = (dispatch: Dispatch<SearchCityAction>) => {
  dispatch({ type: ActionType.SEARCH_CITY_FAIL });
};

const handleSearchCitySuccess = (dispatch: Dispatch<SearchCityAction>, response: Location[]) => {
  dispatch({ type: ActionType.SEARCH_CITY_SUCCESS, payload: response });
};
