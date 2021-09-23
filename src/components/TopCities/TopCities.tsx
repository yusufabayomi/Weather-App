import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortCitiesAscending } from '../../helpers/utils';
import { fetchTopCities } from '../../state/action-creators';
import { RootState } from '../../state/reducers';
import EmptyRecord from '../EmptyRecord/EmptyRecord';
import Notification from '../Notification/Notification';
import TopCityCard from '../TopCityCard/TopCityCard';

const TopCities: FC = () => {
  const { top, loading, error } = useSelector((state: RootState) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopCities());
  }, [dispatch]);

  return (
    <>
      {loading && <Notification text='loading ...' type='info' />}
      {error && <Notification text='Error fetching weather report' type='error' />}
      {top && (
        <div className='pt50'>
          <h1 className='text-white mb-10'>Top Cities</h1>
          {!top.length && (
            <div className='card'>
              <EmptyRecord />
            </div>
          )}
          {top.length && (
            <div className='row'>
              {sortCitiesAscending(top).map((city) => (
                <TopCityCard key={city.id} city={city} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TopCities;
