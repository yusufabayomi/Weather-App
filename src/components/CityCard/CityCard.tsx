import { FC } from 'react';
import history from '../../helpers/history';
import { CityWeatherReport } from '../../helpers/interfaces';
import './CityCard.css';

type Props = {
  city: CityWeatherReport;
};

const CityCard: FC<Props> = ({ city }) => {
  const onClickCityHandler = () => history.push(`city/${city.id}`);
  return (
    <>
      <div className='card' onClick={onClickCityHandler}>
        <div className='city-card'>
          <div className=''>
            <h5 className='text-white'>{city.location.name},</h5>
            <h5 className='text-white city-country'>{city.location.country}</h5>
            <p className='text-white'>{city.current.temperature} °C</p>
          </div>
          <div className='weather-image'>
            <img src={city.current.weather_icons[0]} alt={city.current.weather_descriptions[0]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CityCard;
