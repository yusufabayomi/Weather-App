import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import CityDetail from './pages/CityPage';
import Home from './pages/HomePage';
import history from './helpers/history';
import AppHeader from './components/AppHeader/AppHeader';

function App() {
  return (
    <div className='container-full app h100'>
      <div className='container'>
        <AppHeader />
        <Router history={history}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/city/:id' exact component={CityDetail} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
