import React from "react";
import styled from "styled-components";
import theme from "styled-theming";

function Crescent(props) {

  const textColor = theme('mode', {
    light: 'rgb(192, 192, 192)',
    dark: 'rgb(60, 60, 60)'
  });

  const accentColor = theme('mode', {
    light: 'rgb(220, 220, 220)',
    dark: 'rgb(90, 90, 90)'
  });

  const moonHover = theme('mode', {
    light: 'rgba(255, 255, 255, 1)',
    dark: 'rgba(150, 150, 150, 1)'
  });

  const MoonOuter = styled.div`
    display: flex;
    position: relative;
    z-index: 20;
    justify-content: center;
    align-items: center;
    background-color: rgba(250, 250, 250, 0);
    width: 38px;
    height: 38px;
    border-radius: 12px;
    margin: auto;

    @media (max-width: 830px) {
      padding-top: 10px;
      padding-bottom: 6px;
      display: none;
      display: ${props.menuState};
    }
  `;

  const MoonWrapper = styled.div`
    z-index: 20;
    position: relative;
    width: 60%;
    height: 60%;
    border-radius: 100%;
    background-color: ${textColor};
    margin: auto;

    &:hover {
      background-color: ${moonHover};
    }
  `;

  const Moon = styled.div`
    z-index: 21;
    position: relative;
    background-color: ${accentColor};
    width: 85%;
    height: 85%;
    border-radius: 100%;
    margin: auto;
    transform: translate(15%);
  `;

  return (
    <MoonOuter>
      <MoonWrapper onClick={() => props.moonPress()}>
        <Moon />
      </MoonWrapper>
    </MoonOuter>
  );
}

export default Crescent;
