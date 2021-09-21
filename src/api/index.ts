import axios from 'axios';
import { BASE_URL, TOKEN, topCities } from '../helpers/constants';

const apiUrl = (path: string, query: string): string => `${BASE_URL}/${path}?access_key=${TOKEN}&query=${query}`;

export const fetchTopCitiesWeatherApi = () => {
  return axios.get(`${apiUrl('current', topCities.join(';'))}`);
};

export const searchCityApi = (keyword: string) => {
  return axios.get(`${apiUrl('autocomplete', keyword)}`);
};

export const fetchCityWeatherApi = (city: string) => {
  return axios.get(`${apiUrl('current', city)}`);
};
