import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MediaCard from "./Card";
import axios from "axios";
import useLocalStorage from "use-local-storage";

const Home = ({ theme }) => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const [region, setRegion] = useState("all");
  //   console.log(region);
  const sortOptions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const flagData = async () => {
    return await axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    flagData();
  }, []);

  //   const keys = ["name.common", "population"];
  //   Search Functionality
  const handleSearch = (items) => {
    return items.filter((item) =>
      item.name.common.toLowerCase().includes(search)
    );
  };

  //   const handleSort = (region) => {
  //     return countries.filter((country) => country.region === region);
  //   };

  useEffect(() => {
    if (region) {
      const handleSort = async () => {
        try {
          const res = await axios.get(
            `https://restcountries.com/v3.1/region/${region}`
          );
          setCountries(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      handleSort();
    }
  }, [region]);

  return (
    <HomeWrapper>
      <div className="search-filter">
        <div
          className="search-bar"
          style={{ background: theme ? "hsl(209, 23%, 22%)" : "#fff" }}
        >
          <FontAwesomeIcon icon={faSearch} />
          <input
            style={{ background: theme ? "hsl(209, 23%, 22%)" : "#fff" }}
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <select
            style={{
              background: theme ? "hsl(209, 23%, 22%)" : "#fff",
              color: theme ? "#fff" : "#5b5b5e",
              border: "none",
              fontSize: "16px",
              outline: "none"
            }}
            aria-label="Filter by Region"
            name="filtering"
            className="filter-bar"
            onChange={(e) => setRegion(e.target.value)}
            value={region}
          >
            <option value="all">Filter by Region</option>
            {sortOptions.map((item) => (
              <option value={item.region} key={item.region}>
                {item}
              </option>
            ))}
          </select>
          {/* <p>Filter by Region</p> */}
          {/* <FontAwesomeIcon icon={faAngleDown} /> */}
        </div>
      </div>
      <MediaCard data={handleSearch(countries)} />
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
        width: 100%;
      }
    }

    .filter-bar {
      display: flex;
      align-items: center;
      gap: 40px;
      padding: 15px 15px;
      padding-right: 20px;
      background: #fff;
      border-radius: 5px;
      color: #5b5e5e;

      option {
        font-size: 20px;
      }
    }
  }
`;

//   const handleSearch = async () => {
//     // e.preventDefault();
//     return await axios
//       .get(`https://restcountries.com/v3.1/name/?q${search}`)
//       .then((res) => {
//         setCountries(res.data)
//         setSearch("");
//       })
//       .catch((err) => console.log(err));
//   };
