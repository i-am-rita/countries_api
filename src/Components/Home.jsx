import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MediaCard from "./Card";


const Home = () => {
  return (
    <HomeWrapper>
      <div className="search-filter">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <p>Search for a country...</p>
        </div>
        <div className="filter-bar">
          <p>Filter by Region</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          // spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item md={4}>
            {" "} */}
            {/* Map through the data here */}
            <MediaCard
              country="fvf"
              population="jhbhjfv"
              region="Region: Europe"
              capital="Berlin"
            />
          {/* </Grid>
        </Grid>
      </Box> */}
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
      padding: 0px 25px 0px 40px;
      gap: 20px;
      border-radius: 5px;
      background: #fff;
      color: #bababa;
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
