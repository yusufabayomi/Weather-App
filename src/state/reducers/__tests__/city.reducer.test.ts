import { CityState, CityWeatherReport, Location } from '../../../helpers/interfaces';
import { ActionType } from '../../action-types';
import { CityAction } from '../../actions';
import cityReducer from '../city.reducer';

const initialState: CityState = {
  city: null,
  loading: false,
  error: false,
};

describe('city reducer', () => {
  it('should handle initial state', () => {
    expect(cityReducer(undefined, {} as CityAction)).toEqual(initialState);
  });

  it(`should handle action ${ActionType.FETCH_CITY_WEATHER_LOADING}`, () => {
    const usedAction: CityAction = {
      type: ActionType.FETCH_CITY_WEATHER_LOADING,
    };

    const actual = cityReducer(initialState, usedAction);

    const expected: CityState = {
      city: null,
      loading: true,
      error: false,
    };

    expect(actual).toEqual(expected);
  });

  it(`should handle action ${ActionType.FETCH_CITY_WEATHER_SUCCESS}`, () => {
    const city: CityWeatherReport = {
      location: {
        name: 'London',
        country: 'United Kingdom',
        region: 'City of London, Greater London',
        lat: '51.517',
        lon: '-0.106',
        timezone_id: 'Europe/London',
        localtime: '2021-09-22 08:44',
        localtime_epoch: 1632300240,
        utc_offset: '1.0',
      },
      current: {
        observation_time: '07:44 AM',
        temperature: 14,
        weather_code: 113,
        weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'],
        weather_descriptions: ['Sunny'],
        wind_speed: 0,
        wind_degree: 222,
        wind_dir: 'SW',
        pressure: 1029,
        precip: 0,
        humidity: 88,
        cloudcover: 0,
        feelslike: 14,
        uv_index: 1,
        visibility: 10,
        is_day: 'yes',
      },
    };

    const usedAction: CityAction = {
      type: ActionType.FETCH_CITY_WEATHER_SUCCESS,
      payload: city,
    };

    const actual = cityReducer(initialState, usedAction);

    const expected: CityState = {
      city,
      loading: false,
      error: false,
    };

    expect(actual).toEqual(expected);
  });

  it(`should handle action ${ActionType.FETCH_CITY_WEATHER_FAIL}`, () => {
    const usedAction: CityAction = {
      type: ActionType.FETCH_CITY_WEATHER_FAIL,
    };

    const actual = cityReducer(initialState, usedAction);

    const expected: CityState = {
      city: null,
      loading: false,
      error: true,
    };

    expect(actual).toEqual(expected);
  });
});
