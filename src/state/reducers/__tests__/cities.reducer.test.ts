import { CitiesState, CityWeatherReport } from '../../../helpers/interfaces';
import { ActionType } from '../../action-types';
import { CitiesAction } from '../../actions';
import citiesReducer from '../cities.reducer';

const initialState: CitiesState = {
  top: null,
  favorite: [],
  loading: false,
  error: false,
};

const cities: CityWeatherReport[] = [
  {
    id: '343QAwrrf43245se3',
    location: {
      name: 'New York',
      country: 'United States of America',
      region: 'New York',
      lat: '40.714',
      lon: '-74.006',
      timezone_id: 'America/New_York',
      localtime: '2019-09-07 08:14',
      localtime_epoch: 1567844040,
      utc_offset: '-4.0',
    },
    current: {
      observation_time: '12:14 PM',
      temperature: 13,
      weather_code: 113,
      weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'],
      weather_descriptions: ['Sunny'],
      wind_speed: 0,
      wind_degree: 349,
      wind_dir: 'N',
      pressure: 1010,
      precip: 0,
      humidity: 90,
      cloudcover: 0,
      feelslike: 13,
      uv_index: 4,
      visibility: 16,
    },
  },
  {
    id: '343QAwrrf432453k0',
    location: {
      name: 'Tokyo',
      country: 'Japan',
      region: 'Tokyo',
      lat: '35.690',
      lon: '139.692',
      timezone_id: 'Asia/Tokyo',
      localtime: '2021-09-21 21:14',
      localtime_epoch: 1632258840,
      utc_offset: '9.0',
    },
    current: {
      observation_time: '12:14 PM',
      temperature: 26,
      weather_code: 116,
      weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'],
      weather_descriptions: ['Partly cloudy'],
      wind_speed: 19,
      wind_degree: 130,
      wind_dir: 'SE',
      pressure: 1015,
      precip: 0,
      humidity: 54,
      cloudcover: 17,
      feelslike: 27,
      uv_index: 1,
      visibility: 10,
      is_day: 'no',
    },
  },
];

describe('cities reducer', () => {
  it('should return the initial state', () => {
    expect(citiesReducer(undefined, {} as CitiesAction)).toEqual(initialState);
  });

  it(`should handle ${ActionType.FETCH_TOP_CITIES_WEATHER_LOADING}`, () => {
    const expected: CitiesState = {
      top: null,
      favorite: [],
      loading: true,
      error: false,
    };
    const usedAction: CitiesAction = { type: ActionType.FETCH_TOP_CITIES_WEATHER_LOADING };
    const actual = citiesReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });

  it(`should handle ${ActionType.FETCH_TOP_CITIES_WEATHER_SUCCESS}`, () => {
    const expected = {
      top: cities,
      favorite: [],
      loading: false,
      error: false,
    };
    const usedAction: CitiesAction = {
      type: ActionType.FETCH_TOP_CITIES_WEATHER_SUCCESS,
      payload: cities,
    };
    const actual = citiesReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });

  it(`should handle ${ActionType.FETCH_TOP_CITIES_WEATHER_FAIL}`, () => {
    const expected: CitiesState = {
      top: null,
      favorite: [],
      loading: false,
      error: true,
    };
    const usedAction: CitiesAction = {
      type: ActionType.FETCH_TOP_CITIES_WEATHER_FAIL,
    };
    const actual = citiesReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });

  it(`should handle ${ActionType.REMOVE_TOP_CITY}`, () => {
    const initialState: CitiesState = {
      top: cities,
      favorite: [],
      loading: false,
      error: false,
    };

    const expected = {
      top: [
        {
          id: '343QAwrrf432453k0',
          location: {
            name: 'Tokyo',
            country: 'Japan',
            region: 'Tokyo',
            lat: '35.690',
            lon: '139.692',
            timezone_id: 'Asia/Tokyo',
            localtime: '2021-09-21 21:14',
            localtime_epoch: 1632258840,
            utc_offset: '9.0',
          },
          current: {
            observation_time: '12:14 PM',
            temperature: 26,
            weather_code: 116,
            weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'],
            weather_descriptions: ['Partly cloudy'],
            wind_speed: 19,
            wind_degree: 130,
            wind_dir: 'SE',
            pressure: 1015,
            precip: 0,
            humidity: 54,
            cloudcover: 17,
            feelslike: 27,
            uv_index: 1,
            visibility: 10,
            is_day: 'no',
          },
        },
      ],
      favorite: [],
      loading: false,
      error: false,
    };

    const usedAction: CitiesAction = {
      type: ActionType.REMOVE_TOP_CITY,
      payload: '343QAwrrf43245se3',
    };
    const actual = citiesReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });

  it(`should handle ${ActionType.ADD_FAVORITE_CITY}`, () => {
    const initialState = {
      top: cities,
      favorite: [],
      loading: false,
      error: false,
    };

    const expected = {
      top: cities,
      favorite: [
        {
          id: '343QAwrrf432453k0',
          location: {
            name: 'Tokyo',
            country: 'Japan',
            region: 'Tokyo',
            lat: '35.690',
            lon: '139.692',
            timezone_id: 'Asia/Tokyo',
            localtime: '2021-09-21 21:14',
            localtime_epoch: 1632258840,
            utc_offset: '9.0',
          },
          current: {
            observation_time: '12:14 PM',
            temperature: 26,
            weather_code: 116,
            weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'],
            weather_descriptions: ['Partly cloudy'],
            wind_speed: 19,
            wind_degree: 130,
            wind_dir: 'SE',
            pressure: 1015,
            precip: 0,
            humidity: 54,
            cloudcover: 17,
            feelslike: 27,
            uv_index: 1,
            visibility: 10,
            is_day: 'no',
          },
        },
      ],
      loading: false,
      error: false,
    };

    const usedAction: CitiesAction = {
      type: ActionType.ADD_FAVORITE_CITY,
      payload: {
        id: '343QAwrrf432453k0',
        location: {
          name: 'Tokyo',
          country: 'Japan',
          region: 'Tokyo',
          lat: '35.690',
          lon: '139.692',
          timezone_id: 'Asia/Tokyo',
          localtime: '2021-09-21 21:14',
          localtime_epoch: 1632258840,
          utc_offset: '9.0',
        },
        current: {
          observation_time: '12:14 PM',
          temperature: 26,
          weather_code: 116,
          weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'],
          weather_descriptions: ['Partly cloudy'],
          wind_speed: 19,
          wind_degree: 130,
          wind_dir: 'SE',
          pressure: 1015,
          precip: 0,
          humidity: 54,
          cloudcover: 17,
          feelslike: 27,
          uv_index: 1,
          visibility: 10,
          is_day: 'no',
        },
      },
    };
    const actual = citiesReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });

  it(`should handle ${ActionType.REMOVE_FAVORITE_CITY}`, () => {
    const initialState = {
      top: cities,
      favorite: cities,
      loading: false,
      error: false,
    };

    const expected = {
      top: cities,
      favorite: [
        {
          id: '343QAwrrf432453k0',
          location: {
            name: 'Tokyo',
            country: 'Japan',
            region: 'Tokyo',
            lat: '35.690',
            lon: '139.692',
            timezone_id: 'Asia/Tokyo',
            localtime: '2021-09-21 21:14',
            localtime_epoch: 1632258840,
            utc_offset: '9.0',
          },
          current: {
            observation_time: '12:14 PM',
            temperature: 26,
            weather_code: 116,
            weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'],
            weather_descriptions: ['Partly cloudy'],
            wind_speed: 19,
            wind_degree: 130,
            wind_dir: 'SE',
            pressure: 1015,
            precip: 0,
            humidity: 54,
            cloudcover: 17,
            feelslike: 27,
            uv_index: 1,
            visibility: 10,
            is_day: 'no',
          },
        },
      ],
      loading: false,
      error: false,
    };

    const usedAction: CitiesAction = {
      type: ActionType.REMOVE_FAVORITE_CITY,
      payload: '343QAwrrf43245se3',
    };
    const actual = citiesReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });
});
