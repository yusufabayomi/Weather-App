export interface Location {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  utc_offset: string;
  localtime: string;
  localtime_epoch?: number;
}

interface WeatherDetail {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
  is_day?: string;
}

export interface CityWeatherReport {
  id?: string;
  location: Location;
  current: WeatherDetail;
}

export interface Note {
  id: string;
  content: string;
}

export interface CityNote {
  cityName: string;
  cityNotes: Note[];
}

export interface CitiesState {
  top: CityWeatherReport[] | null;
  favorite: CityWeatherReport[];
  loading: boolean;
  error: boolean;
}

export interface CityState {
  city: CityWeatherReport | null;
  loading: boolean;
  error: boolean;
}

export interface SearchCitiesState {
  cities: Location[];
  loading: boolean;
  error: boolean;
}

export interface NoteState {
  notes: CityNote[];
}
