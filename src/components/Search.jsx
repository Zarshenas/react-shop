import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Search({ searchState: { search, setSearch } }) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("search")) {
      setSearch(searchParams.get("search"));
    }
  }, [searchParams, setSearch]);

  const searchHandler = (e) => {
    const searchedString = e.target.value.toLowerCase();
    setSearch(searchedString);
    setSearchParams({ search: searchedString });
    if (searchedString === "") setSearchParams("");
  };

  return (
    <> 
    <div className="relative my-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={searchHandler} value={search} type="search" id="default-search" className="block w-1/3 p-4 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purpleshade-400 focus:border-purpleshade-400 dark:bg-grayshade-500 dark:border-grayshade-300 dark:placeholde-grayshade-50 dark:text-white dark:focus:ring-purpleshade-400 dark:focus:border-purpleshade-400" placeholder="Search ..."/>
    </div>
    </>
  );
}

export default Search;
