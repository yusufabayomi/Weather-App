import { FC } from 'react';
import BoxImage from '../../assets/images/inbox.png';
import './EmptyRecord.css';

const EmptyRecord: FC = () => {
  return (
    <div className='empty'>
      <img src={BoxImage} alt='empty record' />
      <h3 className='text-white'>No Top City Record</h3>
    </div>
  );
};

export default EmptyRecord;
