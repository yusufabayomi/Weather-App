import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CityDetail from '../components/CityDetail/CityDetail';
import { fetchCity } from '../state/action-creators';
import { RootState } from '../state/reducers';
import Notification from '../components/Notification/Notification';
import CityNotes from '../components/CityNotes/CityNotes';

const CityPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state: RootState) => state.city);

  useEffect(() => {
    dispatch(fetchCity(id));
  }, [dispatch, id]);

  return (
    <>
      {loading && <Notification text='loading ...' type='info' />}
      {error && <Notification text='Error fetching weather report' type='error' />}
      <div className='pt30'>
        <div className='row'>
          <CityDetail />
          <CityNotes />
        </div>
      </div>
    </>
  );
};

export default CityPage;
