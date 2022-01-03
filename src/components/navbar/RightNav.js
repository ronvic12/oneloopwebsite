import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  z-index: 18;
	margin-top: 0px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 30px;
    color: #fff;
    font-size: 16px;

  }
  li a {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }
  li a:hover{
    text-decoration: underline;
    text-decoration-color: #fff;
  }

  #dropdown-button:hover{
    display: flex;
    flex-direction: column;
  }

  #dropdown-menu{
    list-style-type: none;
    margin: 0;
    margin-left: -70px;
    padding: 0;
    background-color: #022851;
    display: none;
  }

  #dropdown-button:hover{
    margin-right: -101px;
    margin-top: -5px;
  }

  #dropdown-button:hover #dropdown-menu{
    display: flex;
    flex-direction: column;
  }


  #dropdown-menu:hover{
    display: flex;
    flex-direction: column;
  }

  #dropdown-menu li{
    border-bottom: 1px solid #FFFFFF;
    padding-left: -5vw;
    padding-right: -5vw;
    margin-left: 1vw;
    margin-right: 1vw;
  }

  #firstitem{
    padding-top: 20px;
  }

  #lastitem{
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 887px) {
    flex-flow: column nowrap;
    background-color: #022851;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 43vw; 
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      font-size: 12px;
      margin-right: 5vw;
      padding: 18px 0px;
      color: #fff;
      border-bottom: 1px solid #FFFFFF;
    }

    li a {
      font-size: 12px;
    }

    #dropdown-button:hover{
      margin-right: 5vw;
    }
    #dropdown-menu{
      margin: auto;
      margin-right: -5vw;
    }

    #dropdown-menu li{
      margin-left: 4vw;
    }

    #dropdown-menu li>a{
      margin-left: 3vw;
      margin-right: 5vw;
    }


    #firstitem{
      padding-top: 15px;
    }

    #lastitem{
      padding-bottom: 15px;
    }


  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li id="dropdown-button"><a href="/teamintro">Team</a>
        <ul id="dropdown-menu">
          <li id="firstitem"><a href="/teamintro">Team Intro</a></li>
          <li><a href="/team2018">Team 2018-2019</a></li>
          <li><a href="/team2019">Team 2019-2020</a></li>
          <li><a href="/team2020">Team 2020-2021</a></li>
          <li id="lastitem"><a href="/team2021">Team 2021-2022</a></li>		  
        </ul>
      </li>
      <li><a href="/sponsors">Sponsors</a></li>
      <li><a href="/poddetails">Pod</a></li>
      <li><a href="/joinus">Join</a></li>
    </Ul>
  )
}

export default RightNav;
