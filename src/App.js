/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./App.css";
import helados1 from "./helados/helados1.wav";
import helados2 from "./helados/helados2.wav";
import helados3 from "./helados/helados3.wav";
import helados4 from "./helados/helados4.wav";
import Circle from "./Circle";

const title = "svengali";
const linkedIn = "https://www.linkedin.com/in/peter-luber-0x65d";
const soundcloud = "https://soundcloud.com/sven-gali";
const hulkshare = "https://www.hulkshare.com/SvengaliLabel";
const github = "https://github.com/sybarita";

class App extends React.Component {
  render() {
    return (
      <div
        className="AppX"
        autofocus="true"
        tabIndex="1"
        onKeyDown={this.keypressApp}
      >
        <div className="Circle-wrapper">
          <Circle className="Circle" />
        </div>
        <div id="foot">
          <div id="bioBox">
            <span id="bioSpan">
              <a href={soundcloud}>soundcloud</a>
              <br></br>
              <a href={hulkshare}>hulkshare</a>
              <br></br>
              <a href={linkedIn}>linkedin</a>
              <br></br>
              <a href={github}>github</a>
            </span>
          </div>
          <span>℗ svengali 2020</span>
        </div>
      </div>
    );
  }

  h1 = new Audio(helados1);
  h2 = new Audio(helados2);
  h3 = new Audio(helados3);
  h4 = new Audio(helados4);

  keypressApp = (event) => {
    if (event.key === "s") {
      this.h1.play();
    } else if (event.key === "v") {
      this.h2.play();
    } else if (event.key === "e") {
      this.h3.play();
    } else if (event.key === "n") {
      this.h4.play();
    }
  };
}

export default App;
