import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MediaCard from "./Card";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((data) => {
      setCountries(data?.data);
    });
  }, []);

  //   const keys = ["name.common", "population"];
  const handleSearch = (items) => {
    return items.filter((item) =>
      //   keys.some((key) => item[key].toLowerCase().includes(search))
      item.name.common.toLowerCase().includes(search)
    );
  };
  return (
    <HomeWrapper>
      <div className="search-filter">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-bar">
          <p>Filter by Region</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      <MediaCard data={handleSearch(countries).slice(0, 10)} />
      {/* <MediaCard countries={countries}  /> */}
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  padding: 0px 60px;
  .search-filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 50px;
    p {
      font-size: 14px;
      font-weight: 700;
    }

    .search-bar {
      width: 30%;

      display: flex;
      align-items: center;

      border-radius: 5px;
      background: #fff;
      color: #bababa;
      padding: 0 25px;

      input {
        padding: 15px 25px 15px 40px;
        border: none;
        outline: none;
        background: #fff;
        color: #000;
        padding-left: 20px;
        font-size: 16px;
      }
    }

    .filter-bar {
      display: flex;
      align-items: center;
      gap: 50px;
      padding: 0 20px;
      background: #fff;
      border-radius: 5px;
      color: #5b5e5e;
    }
  }
`;
