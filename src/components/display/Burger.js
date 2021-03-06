import React from "react";
import styled from "styled-components";
import { textColor } from "../../theme";

const BurgerBox = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40px;
  height: 48px;
  background-color: rgba(0, 0, 0, 0);

  @media (max-width: 830px) {
    display: flex;
    margin: auto;
  }
`;

const BurgerImg = styled.div`
  outline: none;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
`;

const BurgerHam = styled.div`
  height: 3px;
  width: 33px;
  background-color: ${textColor};
  border-radius: 1.5px;
`;

class Burger extends React.Component {
  render() {
    return (
      <BurgerBox>
        <BurgerImg
          alt="burger"
          tabIndex="0"
          onFocus={() => this.props.toggleMenu()}
        >
          <BurgerHam />
          <BurgerHam />
          <BurgerHam />
        </BurgerImg>
      </BurgerBox>
    );
  }
}

export default Burger;
