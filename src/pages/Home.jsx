import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Main from "../components/Main";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios({
        url: "https://restcountries.com/v3.1/all",
      });
      if (res.status === 200) {
        setCountries(res.data);
      }
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };
  return (
    <>
      <SearchBar getData={getData} setCountries={setCountries}></SearchBar>
      <Main loading={loading} countries={countries}></Main>
    </>
  );
};

export default Home;
