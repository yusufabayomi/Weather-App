import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CityDetail from './pages/CityDetailPage';
import Home from './pages/HomePage';

function App() {
  return (
    <div className='container-full app h100'>
      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/city' exact component={CityDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
