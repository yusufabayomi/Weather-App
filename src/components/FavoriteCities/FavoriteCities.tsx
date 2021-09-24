import { FC } from 'react';
import { useSelector } from 'react-redux';
import { sortCitiesAscending } from '../../helpers/utils';
import { RootState } from '../../state/reducers';
import CityCard from '../CityCard/CityCard';

const FavoriteCities: FC = () => {
  const { favorite } = useSelector((state: RootState) => state.cities);

  return (
    <>
      {favorite.length ? (
        <div className='pt30'>
          <h1 className='text-white mb-10'>Favorite Cities</h1>
          <div className='row'>
            {sortCitiesAscending(favorite).map((city) => (
              <div className='col5 mb-10' key={city.id}>
                <CityCard city={city} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FavoriteCities;
