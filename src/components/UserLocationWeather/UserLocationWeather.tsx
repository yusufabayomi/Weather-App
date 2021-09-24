import { FC, useState } from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TIME_OUT_DURATION } from '../../helpers/constants';
import Notification from '../Notification/Notification';
import history from '../../helpers/history';
import './UserLocationWeather.css';

const UserLocationWeather: FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleGeolocationError = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError(null);
    }, TIME_OUT_DURATION);
  };

  const geolocationSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    const google_maps_geocoder = new google.maps.Geocoder();
    google_maps_geocoder.geocode(
      {
        location: {
          lat: latitude,
          lng: longitude,
        },
      },
      function (results, status) {
        if (status === 'OK' && results[0]) {
          // get the city and country of the users current location
          const currentCity = results[0].formatted_address.split(', ').slice(-2).join(',');
          history.push(`/city/${currentCity}`);
        } else {
          handleGeolocationError('Can not get your current address');
        }
      }
    );
  };

  const geolocationError = () => handleGeolocationError('Geolocation failed');

  const onClickHandler = async () => {
    if (navigator.geolocation) {
      const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });
      if (permissionStatus.state === 'granted') {
        navigator.geolocation.getCurrentPosition(geolocationSuccess);
      } else if (permissionStatus.state === 'prompt') {
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
      } else if (permissionStatus.state === 'denied') {
        handleGeolocationError('You denied permission to get your location');
      }
    } else {
      handleGeolocationError('Sorry, your browser does not support the geolocation feature');
    }
  };

  return (
    <>
      {error && <Notification text={error} type='error' />}
      <div className='user-location'>
        <button onClick={onClickHandler} className='button'>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Get Weather Report For Your Location
        </button>
      </div>
    </>
  );
};

export default UserLocationWeather;
