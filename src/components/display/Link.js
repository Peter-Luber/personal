import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  text-indent: 0;
  font-family: "Eurostile";
  font-size: 0.8rem;
  color: rgba(209, 209, 209, 0.808);
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
    color: rgb(234, 234, 234);
  }
`;

class Link extends React.Component {
  render() {
    return (
      <div className="Link" id={`${this.props.linkName}`}>
        <CustomButton
          onClick={() => this.props.changeDisplay(`${this.props.linkName}`)}
        >
          {this.props.linkName}
        </CustomButton>
      </div>
    );
  }
}

export default Link;
