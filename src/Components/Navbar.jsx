import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <nav className="navigation-bar">
        <div>
          <h1 style={{ fontSize: "1.4rem" }}>Where in the world?</h1>
        </div>
        <div className="light-mode">
          <FontAwesomeIcon icon={faMoon} />
          <div>Dark Mode</div>
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


  .navigation-bar {
    display: flex;
    justify-content: space-between;

    .light-mode {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;
