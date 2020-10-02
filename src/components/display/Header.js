import React from "react";
import styled from "styled-components";

import { headerHover } from "../../theme";

const HeaderWrapper = styled.div`
  display: flex;
  position: static;
  z-index: 9;
  margin-left: 50px;
  margin-top: 5px;
  width: 100px;
  height: 80px;
  font-size: 0.9rem;
  font-family: "EurostileBlack";
  background-color: rgba(255, 255, 255, 0);
  line-height: 10px;
  grid-area: 1 / 1 / 2 / 2;

  @media (max-width: 830px) {
    margin-left: 30%;
  }
`;

const HBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  outline: none;
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  z-index: 9;
  overflow: visible;
  padding: 0.2rem;
  color: rgba(195, 195, 195, 0.555);

  &:hover {
    color: ${headerHover};
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper className="App-header">
        <HBox className="hBox" tabIndex="0">
          <h1>peter</h1>
        </HBox>
      </HeaderWrapper>
    );
  }
}

export default Header;
