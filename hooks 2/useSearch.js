import { useState } from 'react';
import { Search } from '@/components/Search';

export const useSearch = ({ data, filterBy, searchBarPlaceholder }) => {
  const [searchValue, setSearchValue] = useState('');

  const searchBar = (
    <Search
      searchBarPlaceholder={searchBarPlaceholder}
      setSearchValue={setSearchValue}
    />
  );

  const filteredData = data?.filter(record =>
    record?.[filterBy].toLowerCase().includes(searchValue),
  );

  return { filteredData, searchBar };
};
