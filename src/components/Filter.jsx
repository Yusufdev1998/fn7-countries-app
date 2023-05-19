import axios from "axios";
import React from "react";
import Select from "react-select";
const Filter = ({ setCountries, getData }) => {
  const filterByRegion = async region => {
    try {
      const res = await axios({
        url: `https://restcountries.com/v3.1/region/${region}`,
      });
      if (res.status === 200) {
        setCountries(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  const handleSelect = e => {
    if (e) {
      filterByRegion(e.value);
    } else {
      getData();
    }
  };

  return (
    <div className="w-56">
      <Select
        onChange={handleSelect}
        isClearable
        placeholder="Filter by Region"
        isLoading={false}
        options={options}
      ></Select>
    </div>
  );
};

export default Filter;
