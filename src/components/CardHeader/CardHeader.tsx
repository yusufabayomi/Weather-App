import { FC } from 'react';
import './CardHeader.css';

type Props = {
  heading: string;
};

const CardHeader: FC<Props> = ({ heading }) => {
  return (
    <div className='card-header'>
      <h5>{heading}</h5>
    </div>
  );
};

export default CardHeader;
