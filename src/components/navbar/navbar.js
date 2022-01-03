import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  height: 65px;
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  background-color: #022851;
  .logo {
    padding: 8px 0px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <a href="/"><img src="images/WhiteHyperloopLogo.svg" /></a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;