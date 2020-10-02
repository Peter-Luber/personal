import React from "react";
import styled from "styled-components";
import theme from "styled-theming";

function Link(props) {

  const textColor = theme('mode', {
    light: 'rgb(150, 150, 150)',
    dark: 'rgb(90, 90, 90)'
  });

  const hoverColor = theme('mode', {
    light: 'rgba(240, 240, 240, 1)',
    dark: 'rgba(150, 150, 150, 1)'
  });

  const CustomButton = styled.button`
    text-indent: 0;
    font-family: "Eurostile";
    font-size: 0.8rem;
    color: ${textColor};
    background-color: rgba(239, 246, 255, 0);
    border-style: none;
    width: 100%;
    outline: none;
    cursor: crosshair;
    overflow: visible;
    position: relative;
    z-index: 10;

    &:hover,
    &:active,
    &:focus {
      color: ${hoverColor};
    }
  `;

    return (
      <div className="Link" id={`${props.linkName}`}>
        <CustomButton
          onClick={() => props.changeDisplay(`${props.linkName}`)}
        >
          {props.linkName}
        </CustomButton>
      </div>
    );
  }

export default Link;
