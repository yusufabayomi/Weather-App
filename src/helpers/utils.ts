import { CityWeatherReport } from './interfaces';

export const generateId = (): string => Math.random().toString(36).substr(2, 9);

export const sortCitiesAscending = (cities: CityWeatherReport[]) => cities.sort((a, b) => a.location.name.localeCompare(b.location.name));
