import { useCallback } from 'react';

export function Search({ searchBarPlaceholder, setSearchValue }) {
  const onChange = useCallback(
    event => setSearchValue(event.target.value.toLowerCase()),
    [setSearchValue],
  );

  return (
    <div className="mt-6 w-full max-w-md">
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img
            src="/assets/search.svg"
            alt="search icon"
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          onChange={onChange}
          className="block p-4 pl-10 w-full text-center text-black text-lg font-semibold border-gray-300 rounded-md outline-none sm:text-sm md:text-left"
          placeholder={searchBarPlaceholder}
        />
      </div>
    </div>
  );
}
