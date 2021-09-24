import { FC } from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notification from '../Notification/Notification';
import './UserLocationWeather.css';
import useGeolocation from '../../hooks/useGeolocation';

const UserLocationWeather: FC = () => {
  const [locationError, getLocationHandler] = useGeolocation();

  return (
    <>
      {locationError && <Notification text={locationError} type='error' />}
      <div className='user-location'>
        <button onClick={getLocationHandler} className='button'>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Get Weather Report For Your Location
        </button>
      </div>
    </>
  );
};

export default UserLocationWeather;
