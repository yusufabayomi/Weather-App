import { FC } from 'react';
import './CityDetailItem.css';

type Props = {
  title: string;
  value: string;
};

const CityDetailItem: FC<Props> = ({ title, value }) => {
  return (
    <div className='flex text-white city-detail-item'>
      <h5 className='title'>{title}</h5>
      <h5>{value}</h5>
    </div>
  );
};

export default CityDetailItem;
