import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <nav className="navigation-bar">
        <div>Navbar</div>
        <div>
          {/* <FontAwesomeIcon icon="fa-regular fa-moon" /> */}
          <div>Navbar</div>
        </div>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.nav`
  background: #fff;
  color: #000;

  width: 100%;
  padding: 15px 60px;
  margin: 0;

  .navigation-bar{
    display: flex;
    justify-content: space-between;
  }
`;
