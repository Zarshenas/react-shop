import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Search({ query: { query, setQuery } }) {
  const [searchString, setSearchStirng] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("search")) {
      setQuery({ ...query, search: searchParams.get("search") });
      setSearchStirng(searchParams.get("search"));
    }
  },[]);

  const searchDataHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchStirng(inputValue);
  };
  const searchHandler = () => {
    if (searchString === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
      setQuery({...query, search:''})
      return;
    }
    setQuery({ ...query, search: searchString });
    setSearchParams({ ...query , search: searchString });
  };
  return (
    <>
      <div className="relative my-6">
        <div className="absolute z-2 cursor-pointer inset-y-0 start-0 flex items-center ps-3">
          <CiSearch
            onClick={searchHandler}
            className="bg-purpleshade-400 p-1 w-7 h-7 text-white rounded-lg "
          />
        </div>
        <input
          onChange={searchDataHandler}
          value={searchString}
          className="block z-1 lg:w-1/3 md:w-2/4 w-full p-4 ps-12 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purpleshade-400 focus:border-purpleshade-400 dark:bg-grayshade-500 dark:border-grayshade-300 dark:placeholde-grayshade-50 dark:text-white dark:focus:ring-purpleshade-400 dark:focus:border-purpleshade-400"
          placeholder="Search ..."
        />
      </div>
    </>
  );
}

export default Search;
