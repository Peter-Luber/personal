import React from "react";
import styled from "styled-components";

function Crescent(props) {
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
    background-color: rgba(210, 210, 210, 1);
    margin: auto;

    &:hover {
      background-color: rgba(240, 240, 240, 1);
    }
  `;

  const Moon = styled.div`
    z-index: 21;
    position: relative;
    background-color: rgba(245, 245, 245, 1);
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
