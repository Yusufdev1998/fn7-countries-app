import React from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";

const Country = ({ name, cca3, flags, population, region, capital }) => {
  const formatedPopulation = numeral(population).format("0,0");
  return (
    <Link to={`country/${cca3}`}>
      <div className="max-w-xs overflow-hidden bg-white dark:bg-[#2B3844] shadow-[0px_0px_7px_2px_rgba(0,_0,_0,_0.0294384)] rounded-[5px]">
        <img src={flags.png} alt={flags.alt} />
        <div className="p-6">
          <h2 className="font-extrabold mb-4 text-lg">{name.common}</h2>
          <div className="text-sm font-bold mb-2">
            Population:{" "}
            <span className="font-normal">{formatedPopulation}</span>
          </div>
          <div className="text-sm font-bold mb-2">
            Region: <span className="font-normal">{region}</span>
          </div>
          <div className="text-sm font-bold mb-2">
            Capital:{" "}
            <span className="font-normal">{capital && capital[0]}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Country;
