import { FC, useCallback } from 'react';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CitiesSearch from '../CitiesSearch/CitiesSearch';
import UserLocationWeather from '../UserLocationWeather/UserLocationWeather';
import './AppHeader.css';
import history from '../../helpers/history';

const AppHeader: FC = () => {
  const onClickHandler = useCallback(() => {
    history.push('/');
  }, []);
  return (
    <div className='row app-header'>
      <div className='col3' onClick={onClickHandler}>
        <h2 className='text-white logo'>
          <FontAwesomeIcon icon={faSun} className='text-yellow' /> Weather App
        </h2>
      </div>

      <div className='col3'>
        <CitiesSearch />
      </div>

      <div className='col3'>
        <UserLocationWeather />
      </div>
    </div>
  );
};

export default AppHeader;
