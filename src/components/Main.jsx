import React from "react";
import Country from "./Country";
import CountrySkeleton from "./CountrySkeleton";

const Main = ({ countries, loading }) => {
  return (
    <div className="container grid gap-[75px] justify-items-center grid-cols-[repeat(auto-fit,minmax(264px,1fr))]  mx-auto mt-12">
      {!loading &&
        countries.map((country, i) => (
          <Country key={country.name.common} {...country}></Country>
        ))}
      {loading && [1, 2, 3, 4, 5].map(key => <CountrySkeleton key={key} />)}
    </div>
  );
};

export default Main;
