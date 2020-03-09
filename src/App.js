/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./App.css";
import helados1 from "./helados/helados1.wav";
import helados2 from "./helados/helados2.wav";
import helados3 from "./helados/helados3.wav";
import helados4 from "./helados/helados4.wav";

const title = "svengali";
const linkedIn = "https://www.twitter.com/manfuckallyall";
const soundcloud = "https://soundcloud.com/sven-gali";
const hulkshare = "https://www.hulkshare.com/SvengaliLabel";
const github = "https://github.com/sybarita";
const soundCloudEmbed =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1003014&color=%23cccccc&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
const slattPod = "http://157.245.190.160/";

class App extends React.Component {
  render() {
    return (
      <div id="pageContainer">
        <div
          className="AppX"
          autofocus="true"
          tabIndex="1"
          onKeyDown={this.keypressApp}
        >
          <div id="header">
            <span id="headerSpan">{title}</span>
          </div>
          <div id="soundcloud">
            <iframe
              id="frame"
              width="100%"
              height="150%"
              scrolling="yes"
              frameBorder="no"
              src={slattPod}
            ></iframe>
          </div>
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
          <div id="foot">
            <span>℗ svengali 2020</span>
          </div>
        </div>
      </div>
    );
  }

  h1 = new Audio(helados1);
  h2 = new Audio(helados2);
  h3 = new Audio(helados3);
  h4 = new Audio(helados4);

  keypressApp = event => {
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
