import { useState, useEffect } from 'react';

const useDebounceSearch = (handleDebounceSearch: (search: string) => void): [string, (search: string) => void] => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [debounceSearch, setDebouncedSearch] = useState(searchKeyword);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebouncedSearch(searchKeyword);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [searchKeyword]);

  useEffect(() => {
    const search = async () => {
      handleDebounceSearch(debounceSearch);
    };
    if (debounceSearch) {
      search();
    }
  }, [debounceSearch, handleDebounceSearch]);

  return [searchKeyword, setSearchKeyword];
};

export default useDebounceSearch;
