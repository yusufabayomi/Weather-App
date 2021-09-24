import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { STORE_STATE } from '../helpers/constants';
import reducers from './reducers';

const persistedState = localStorage.getItem(STORE_STATE) ? JSON.parse(localStorage.getItem(STORE_STATE)!) : {};

const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem(STORE_STATE, JSON.stringify(store.getState()));
});

export default store;
