import { FC } from 'react';
import FavoriteCities from '../components/FavoriteCities/FavoriteCities';
import TopCities from '../components/TopCities/TopCities';

const HomePage: FC = () => {
  return (
    <>
      <FavoriteCities />
      <TopCities />
    </>
  );
};

export default HomePage;
