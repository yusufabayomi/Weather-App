import { useState } from 'react';
import { TIME_OUT_DURATION } from '../helpers/constants';
import history from '../helpers/history';

const useGeolocation = (): [string | null, () => Promise<void>] => {
  const [locationError, setError] = useState<string | null>(null);

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

  const getLocationHandler = async () => {
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

  return [locationError, getLocationHandler];
};

export default useGeolocation;
