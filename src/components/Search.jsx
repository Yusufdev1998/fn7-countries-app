import axios from "axios";
import React, { useState } from "react";

const Search = ({ setCountries, getData }) => {
  const [name, setName] = useState("");
  const searchCountry = async name => {
    try {
      const res = await axios({
        url: `https://restcountries.com/v3.1/name/${name}`,
      });

      if (res.status === 200) {
        setCountries(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEnter = e => {
    if (e.key === "Enter" && name !== "") {
      searchCountry(name);
    } else if (e.key === "Enter" && name === "") {
      getData();
    }
  };
  return (
    <div className="bg-white dark:bg-[#2B3844] w-full md:max-w-md rounded-[5px] flex items-center gap-6 py-[18px] px-8 shadow-[0px_2px_9px_rgba(0,0,0,0.0532439)]">
      <img src="./search.svg" alt="search icon" />
      <input
        value={name}
        onKeyDown={handleEnter}
        onChange={e => setName(e.target.value)}
        className="outline-none bg-inherit placeholder-[#848484] text-sm"
        type="text"
        placeholder="Search for a country…"
      />
    </div>
  );
};

export default Search;
