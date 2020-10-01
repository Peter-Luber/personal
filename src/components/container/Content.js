import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-area: 1 / 1 / 5 / 6;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgba(255, 255, 255, 1);
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  border-width: 5px;
  border-color: rgba(250, 250, 250, 1);
  border-style: solid;
  margin-top: 87px;
  margin-left: 200px;
  margin-right: 4.4%;
  box-shadow: 0rem 0rem 10rem rgba(0, 0, 0, 0.1);
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
  padding: 5%;
  width: 90%;
  height: 90%;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0);
  margin: auto;
  outline: none;
  overflow: hidden;
  z-index: 5;

  @media (max-width: 350px) {
    width: 90%;
  }
`;

class Content extends React.Component {
  render() {
    return (
      <ContentWrapper id="Content">
        <ContentBox id="contentBox" tabIndex="0" autofocus="true">
          {this.props.displaySwitch()}
        </ContentBox>
      </ContentWrapper>
    );
  }
}

export default Content;
