import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import "../index.css";

const Navbar = ({ theme, toggleMode }) => {
  return (
    <NavbarWrapper
      style={{
        background: theme ? "hsl(209, 23%, 22%)" : "#fff",
        color: theme ? "#fff" : "#000",
      }}
    >
      <nav className="navigation-bar">
        <div className="heading">
          <h1>Where in the world?</h1>
        </div>
        <div className="light-mode">
          <FontAwesomeIcon icon={faMoon} onClick={toggleMode} />
          <div>{theme ? "Dark Mode" : "Light Mode"}</div>
        </div>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.nav`
  background: #fff;
  color: #000;
  padding: 0px 65px;
  z-index: 15px;
  @media (max-width: 475px) {
    padding: 10px 15px;
  }

  .navigation-bar {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.4rem;
    }

    @media (max-width: 475px) {
      padding: 0;
      h1 {
        font-size: 1rem;
      }
    }

    .light-mode {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size:14px;
    }
  }
`;

//   const handleSearch = async (e) => {
//   e.preventDefault();
//   return await axios
//     .get(`https://restcountries.com/v3.1?q=${value}`)
//     .then((res) => {
//       setCountries(res.data);
//       setSearch("");
//     })
//     .catch((err) => console.log(err));
// };

// const [search, setSearch] = useState("");
// const [countries, setCountries] = useState([]);
// //   using all here so we can search for or display countries if region is not specified.
// const [sortRegion, setSortRegion] = useState("");

// const sortOptions = ["Africa", "America", "Asia", "Europe", "Ocenia"];

//   const filteredCountry = countries.filter((country) => {
//     if (filterParams === "Asia") {
//       console.log("true");
//     } else {
//       console.log("false");
//     }

// if(country.region == filterParams){
//     return (country)
// } else {
//     (console.log('nothing'))
// }
//   });

//   filteredCountry;

// const flagData = async () => {
//   return await axios
//     .get("https://restcountries.com/v3.1/all")
//     .then((res) => setCountries(res?.data))
//     .catch((err) => console.log(err));
// };

// useEffect(() => {
//   flagData();
// }, []);

// //   console.log(countries[100]?.region)

// //   const keys = ["name.common", "population"];
// const handleSearch = (items) => {
//   return items.filter((item) =>
//     item.name.common.toLowerCase().includes(search)
//   );
// };

// const handleSort = async () => {
//   try {
//     const res = await axios.get(
//       `https://restcountries.com/v3.1/region${sortRegion}`
//     );
//     setCountries(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

//   <HomeWrapper>
//   <div className="search-filter">
//     <div className="search-bar">
//       <FontAwesomeIcon icon={faSearch} />
//       <input
//         placeholder="Search for a country..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//     </div>
//     <div>
//       <select
//         aria-label="Filter by Region"
//         name="filtering"
//         className="filter-bar"
//         onChange={(e) => setSortRegion(e.target.value)}
//         value={sortRegion}
//       >
//         <option>Filter by Region</option>
//         {sortOptions.map((item, index) => (
//           <option value={item} key={index}>
//             {item}
//           </option>
//         ))}
//       </select>
//     </div>
//   </div>
//   <MediaCard data={handleSearch(countries).slice(0, 10)} />
// </HomeWrapper>
