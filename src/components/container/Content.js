import React from "react";
import styled from "styled-components";
import theme from "styled-theming";

function Content(props) {

  const textColor = theme('mode', {
    light: 'rgb(192, 192, 192)',
    dark: 'rgb(60, 60, 60)'
  });

  const accentColor = theme('mode', {
    light: 'rgb(220, 220, 220)',
    dark: 'rgb(90, 90, 90)'
  });

  const backgroundColor = theme('mode', {
    light: 'rgb(250, 250, 250)',
    dark: 'rgb(30, 30, 30)'
  })

  const ContentWrapper = styled.div`
    grid-area: 1 / 1 / 5 / 6;
    display: flex;
    flex-direction: column;
    text-align: center;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    border-width: 5px;
    background-color: ${backgroundColor};
    border-color: ${accentColor};
    border-style: solid;
    margin-top: 87px;
    margin-left: 200px;
    margin-right: 4.4%;
    box-shadow: 0rem 0rem 10rem rgba(0, 0, 0, 0.09);
    -webkit-box-shadow: 0rem 0rem 10rem rgba(0, 0, 0, 0.09);
    -moz-box-shadow: 0rem 0rem 10rem rgba(0, 0, 0, 0.09);
    z-index: 5;
    overflow: visible;

  @media (min-width: 830px) and (max-height: 644px) {
    height: 482px;
  }

  @media (min-width: 830px) and (min-height: 644px) {
    margin-bottom: 5%;
  }

  @media (max-width: 830px) {
    margin: auto;
    margin-top: 87px;
    width: 90%;
    margin-bottom: 5%;
  }

  @media (max-width: 830px) and (max-height: 300px) {
    height: 175px;
    font-size: 0.75rem;
  }
`;

  const ContentBox = styled.div`
    justify-content: center;
    align-items: center;
    color: ${textColor};
    width: full;
    height: full;
    background-color: rgba(0, 0, 0, 0);
    margin: auto;
    outline: none;
    overflow: hidden;
    z-index: 5;

    a {
      color: ${textColor};
      cursor: crosshair;
      -webkit-transition: 1s;
      -moz-transition: 1s;
      transition: 1s;
      text-decoration: underline;
    }

    a:hover,
    a:active,
    a:focus {
      color: rgb(240, 240, 240);
    }

  @media (max-width: 350px) {
    width: 90%;
  }
`;

  return (
    <ContentWrapper id="Content">
      <ContentBox id="contentBox" tabIndex="0" autofocus="true">
        {props.displaySwitch()}
      </ContentBox>
    </ContentWrapper>
  );
}

export default Content;
