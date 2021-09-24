import { FC, useCallback, useState, FormEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounceSearch from '../../hooks/useDebounceSearch';
import useExternalClick from '../../hooks/useClickOutside';
import { resetSearchCity, searchCity } from '../../state/action-creators';
import { RootState } from '../../state/reducers';
import CitiesSearchListItem from './CiitiesSearchListItem';
import './CitiesSearch.css';

const CitiesSearch: FC = () => {
  const dispatch = useDispatch();
  const divRef = useRef<HTMLDivElement>(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const { cities, error, loading } = useSelector((state: RootState) => state.searchCities);

  const handleDebounceSearch = useCallback(
    (search: string) => {
      dispatch(searchCity(search));
    },
    [dispatch]
  );

  const [searchKeyword, setSearchKeyword] = useDebounceSearch(handleDebounceSearch);

  const onSearchHandler = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      setSearchKeyword(e.currentTarget.value);
    },
    [setSearchKeyword]
  );

  useEffect(() => {
    if (searchKeyword.length) {
      setShowSuggestion(true);
    } else {
      setShowSuggestion(false);
      dispatch(resetSearchCity());
    }
  }, [searchKeyword.length, dispatch]);

  const hideSuggestion = useCallback(() => {
    setShowSuggestion(false);
  }, []);

  useExternalClick(divRef, hideSuggestion);

  const onClickHandler = useCallback(() => {
    if (cities.length && searchKeyword.length) {
      setShowSuggestion(true);
    }
  }, [cities.length, searchKeyword.length]);

  const renderSearchResult = useCallback(() => {
    if (loading) {
      return <div className='p10'>please wait</div>;
    } else if (error) {
      return <div className='p10'>No result found</div>;
    } else {
      return cities.map((city) => <CitiesSearchListItem key={`${city.name},${city.country}`} city={city} hideSuggestion={hideSuggestion} />);
    }
  }, [cities, error, loading, hideSuggestion]);

  return (
    <div className='cities-search' ref={divRef}>
      <input type='text' value={searchKeyword} onChange={onSearchHandler} onClick={onClickHandler} placeholder='Enter a city to search' />
      {showSuggestion && <div className='auto-suggest scroll-div'>{renderSearchResult()}</div>}
    </div>
  );
};

export default CitiesSearch;
