import React from "react";
import styled from "styled-components";
import Link from "../display/Link";
import Burger from "../display/Burger";
import Crescent from "../display/Crescent";
import { accentColor, backgroundColor } from "../../theme";

function NavBar(props) {

  const NavBarWrapper = styled.div`
    grid-area: 1 / 1 / 3 / 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${accentColor};
    border-radius: 12px;
    position: relative;
    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.08);
    z-index: 10;

    @media (min-width: 830px) {
      margin-top: 87px;
      margin-left: 36px;
      height: 260px;
      width: 140px;
      z-index: 10;
    }

    @media (max-width: 830px) {
      grid-area: 1 / 3 / 1 / 6;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: auto;
      margin-top: 20px;
      margin-right: 11.5%;
      width: 140px;
      height: 48px;
      height: ${props.height};
      overflow: hidden;
    }
  `;

  const LeftBox = styled.div`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${backgroundColor};
    border-radius: 7px;
    border-width: 5px;
    border-color: ${accentColor};
    z-index: 10;
    width: 130px;
    height: 200px;
    overflow: hidden;
    margin: auto;
    margin-top: 5px;

    @media (max-width: 830px) {
      display: ${props.menuState};
    }
  `;

  return (
    <NavBarWrapper id="NavBar">
      <Burger toggleMenu={props.toggleMenu} />
      <LeftBox id="leftBox" className="page">
        <Link
          changeDisplay={props.changeDisplay}
          linkName="home"
        />
        <Link
          changeDisplay={props.changeDisplay}
          linkName="services"
        />
        <Link
          changeDisplay={props.changeDisplay}
          linkName="portfolio"
        />
        <Link
          changeDisplay={props.changeDisplay}
          linkName="contact"
        />
        <Link
          changeDisplay={props.changeDisplay}
          linkName="extras"
        />
      </LeftBox>
      <Crescent
        moonPress={props.moonPress}
        menuState={props.menuState}
      />
    </NavBarWrapper>
  );
}

export default NavBar;
