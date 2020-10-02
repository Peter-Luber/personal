import React from "react";
import "./App.css";
import a01 from "./128k/01.wav";
import a02 from "./128k/02.wav";
import a03 from "./128k/03.wav";
import a04 from "./128k/04.wav";
import a05 from "./128k/05.wav";

import NavBar from "./components/container/NavBar";
import Content from "./components/container/Content";
import Header from "./components/display/Header";
import Home from "./components/display/Home";
import Contact from "./components/display/Contact";
import Portfolio from "./components/display/Portfolio";
import Services from "./components/display/Services";
import Extras from "./components/display/Extras";

import styled, { ThemeProvider } from "styled-components";
import { textColor, backgroundColor } from "./theme";

const AppWrapper = styled.div`
  display: grid;
  text-align: center;
  font-family: "Eurostile";
  font-size: 0.75rem;
  color: ${textColor};
  background-color: ${backgroundColor};
  cursor: crosshair;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 35% 35% 10%;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0px;
  z-index: 0;

  &:focus {
    outline: none;
  }
`;

class App extends React.Component {
  state = {
    h1: new Audio(a01),
    h2: new Audio(a02),
    h3: new Audio(a03),
    h4: new Audio(a04),
    h5: new Audio(a05),
    page: "home",
    menu: "none",
    height: "48px",
    mode: "light"
  };

  keypressApp = event => {
    if (event.key === "p") {
      this.state.h1.play();
    } else if (event.key === "e") {
      this.state.h2.play();
    } else if (event.key === "t") {
      this.state.h3.play();
    } else if (event.key === "e") {
      this.state.h4.play();
    } else if (event.key === "r") {
      this.state.h5.play();
    }
  };

  displaySwitch = () => {
    switch (this.state.page) {
      case "home":
        return <Home changeDisplay={this.changeDisplay} />;
      case "contact":
        return <Contact changeDisplay={this.changeDisplay} />;
      case "portfolio":
        return <Portfolio changeDisplay={this.changeDisplay} />;
      case "services":
        return <Services changeDisplay={this.changeDisplay} />;
      case "extras":
        return <Extras changeDisplay={this.changeDisplay} />;
      default:
        console.log("oops state is broken!!");
    }
  };

  changeDisplay = newDisplay => {
    console.log(`Changing page state value to ${newDisplay}`);
    this.setState({
      page: newDisplay,
      menu: "none",
      height: "48px"
    });
  };

  toggleMenu = () => {
    switch (this.state.menu) {
      case "none":
        console.log("opening menu");
        this.setState({
          menu: "flex",
          height: "300px"
        });
        return "flex";
      case "flex":
        console.log("closing menu");
        this.setState({
          menu: "none",
          height: "48px"
        });
        return "none";
      default:
        console.log("state is broken!");
    }
  };

   modeToggle = () => {
    switch (this.state.mode) {
      case 'light':
        console.log("going dark");
        this.setState({
          mode: 'dark'
        });
        return 'dark';
      case 'dark':
        console.log("lights on");
        this.setState({
          mode: 'light'
        });
        return 'dark';
      default:
        console.log("state is broken!");
    };
  }; 

  moonPress = () => {
    this.modeToggle();
    console.log("toggling mode");
    return "";
  };

  render() {
    return (
      <ThemeProvider theme={{ mode: this.state.mode}}>
        <AppWrapper className="AppX" onKeyDown={this.keypressApp} tabIndex="0">
          <Header />
          <NavBar
            changeDisplay={this.changeDisplay}
            toggleMenu={this.toggleMenu}
            menuState={this.state.menu}
            height={this.state.height}
            moonPress={this.moonPress}
          />
          <Content
            displaySwitch={this.displaySwitch}
          />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
