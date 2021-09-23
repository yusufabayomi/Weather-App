import { FC } from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../helpers/utils';
import { RootState } from '../../state/reducers';
import CardHeader from '../CardHeader/CardHeader';
import CityDetailItem from '../CityDetailItem/CityDetailItem';

const CityDetail: FC = () => {
  const { city } = useSelector((state: RootState) => state.city);
  return (
    <div className='col2'>
      <CardHeader heading='Weather Report' />
      <div className='card'>
        {city && (
          <>
            <div className='flex align-center mb-20'>
              <div>
                <h4 className='text-white'>{city.location.name},</h4>
                <h4 className='text-white'>{city.location.country}</h4>
              </div>
              <div className='text-center'>
                <h4 className='text-white'>{city.current.temperature}°C</h4>
                <h5 className='text-white'>{city.current.weather_descriptions[0]}</h5>
              </div>
              <div>
                <div className='weather-image'>
                  <img src={city.current.weather_icons[0]} alt={city.current.weather_descriptions[0]} />
                </div>
              </div>
            </div>

            <div>
              <CityDetailItem title='Region' value={city.location.region} />
              <CityDetailItem title='Longitude' value={city.location.lon} />
              <CityDetailItem title='Latitude' value={city.location.lat} />
              <CityDetailItem title='Timezone' value={city.location.timezone_id} />
              <CityDetailItem title='Local Time' value={formatDate(city.location.localtime)} />
              <CityDetailItem title='Observation Time' value={city.current.observation_time} />
              <CityDetailItem title='Wind Speed' value={`${city.current.wind_speed} kmph`} />
              <CityDetailItem title='Wind Degree' value={`${city.current.wind_degree} °`} />
              <CityDetailItem title='Wind Direction' value={city.current.wind_dir} />
              <CityDetailItem title='Precipitation' value={`${city.current.precip} mm`} />
              <CityDetailItem title='Pressure' value={`${city.current.pressure} mb`} />
              <CityDetailItem title='Humidity' value={`${city.current.humidity}`} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CityDetail;
