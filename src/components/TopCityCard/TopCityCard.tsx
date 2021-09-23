import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CityWeatherReport } from '../../helpers/interfaces';
import CityCard from '../CityCard/CityCard';
import './TopCityCard.css';
import { RootState } from '../../state/reducers';
import { addFavoriteCity, removeFavoriteCity, removeTopCity } from '../../state/action-creators';

type Props = {
  city: CityWeatherReport;
};

const TopCityCard: FC<Props> = ({ city }) => {
  const isFavoriteCity = useSelector((state: RootState) => !!state.cities.favorite.find((favoriteCity) => favoriteCity.id === city.id));

  const dispatch = useDispatch();

  const onFavoriteHandler = useCallback(() => {
    isFavoriteCity ? dispatch(removeFavoriteCity(city.id!)) : dispatch(addFavoriteCity(city));
  }, [city, isFavoriteCity, dispatch]);

  const onDeleteHandler = useCallback(() => {
    dispatch(removeTopCity(city.id!));
    if (isFavoriteCity) {
      dispatch(removeFavoriteCity(city.id!));
    }
  }, [city, dispatch, isFavoriteCity]);

  return (
    <div className='col5'>
      <CityCard city={city} />
      <div className='city-card-actions'>
        <FontAwesomeIcon icon={faStar} onClick={onFavoriteHandler} className={`${isFavoriteCity ? 'text-yellow' : 'text-white'}`} />
        <FontAwesomeIcon icon={faTrash} onClick={onDeleteHandler} className='text-white' />
      </div>
    </div>
  );
};

export default TopCityCard;
