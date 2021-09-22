import { combineReducers } from 'redux';
import citiesReducer from './cities.reducer';
import cityReducer from './city.reducer';
import noteReducer from './notes.reducer';
import searchCitiesReducer from './search-cities.reducer';

const reducers = combineReducers({
  cities: citiesReducer,
  city: cityReducer,
  cityNotes: noteReducer,
  searchCities: searchCitiesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
