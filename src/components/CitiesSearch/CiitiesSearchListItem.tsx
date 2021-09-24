import { FC, useCallback } from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Location } from '../../helpers/interfaces';
import history from '../../helpers/history';
type Props = {
  city: Location;
  hideSuggestion: () => void;
};
const CitiesSearchListItem: FC<Props> = ({ city, hideSuggestion }) => {
  const onClickHandler = useCallback(() => {
    history.push(`/city/${city.name},${city.country}`);
    hideSuggestion();
  }, [city, hideSuggestion]);

  return (
    <div className='location' onClick={onClickHandler}>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> {city.name}, {city.country}
      </p>
    </div>
  );
};

export default CitiesSearchListItem;
