import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Grid, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MediaCard from "./Card";
import axios from "axios";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


const Home = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  //   const handleSearch = async (e) => {
  // const searchData = await fetch(
  //   `https://restcountries.com/v3.1/name/${name}`
  // );
  // const data = await searchData.json();
  //     setSearch(e.target.value);
  //   };
  //   console.log(search);

    const [searchParams] = useState(["name"]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((data) => {
      setCountries(data?.data);
    });
  }, []);

    const handleSearch = (countries) => {
      return countries.filter((item) => {
        return searchParams.some((newItem) => {
          return item[newItem].toString().toLowerCase();
        });
      });
    };
  return (
    <HomeWrapper>
      <div className="search-filter">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            placeholder="Search for a country..."
            value={search}
            onChange={handleSearch}
            // onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-bar">
          <p>Filter by Region</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      {/* <MediaCard handleSearch={handleSearch} /> */}
      {/* <MediaCard countries={countries}  /> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "50px",
        }}
      >
        {/* .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.toLowerCase(search);
          }) */}
        {handleSearch(countries).map((detail, id) => (
          <Card sx={{ maxWidth: 320, maxHeight: 500, padding: "0 0 10px 0" }}>
            <div key="id">
              <CardMedia
                sx={{ height: 200 }}
                image={detail?.flags.svg}
                // style={{height: "150px"}}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontSize="1rem"
                  fontWeight="700"
                >
                  {detail.name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ color: "#111214" }}>Population: </span>
                  {detail.population}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ color: "#111214" }}>Region: </span>
                  {detail.region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ color: "#111214" }}> Capital: </span>
                  {detail.capital}
                </Typography>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
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
