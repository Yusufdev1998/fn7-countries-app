import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const SearchBar = ({ setCountries, getData }) => {
  return (
    <div className="container px-4 flex flex-col md:justify-between gap-10 md:flex-row md:items-center  mx-auto mt-12">
      <Search getData={getData} setCountries={setCountries}></Search>
      <Filter getData={getData} setCountries={setCountries}></Filter>
    </div>
  );
};

export default SearchBar;
