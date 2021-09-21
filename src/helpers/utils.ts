import { CityWeatherReport } from './interfaces';

export const generateId = (): string => new Date().getTime().toString(36);

export const sortCitiesAscending = (cities: CityWeatherReport[]) => cities.sort((a, b) => a.location.name.localeCompare(b.location.name));
