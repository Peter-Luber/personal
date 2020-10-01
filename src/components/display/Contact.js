import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div id="Contact" className="page">
        <a href="mailto:prluber@gmail.com">prluber@gmail.com</a>
        <span role="img" aria-label="envelope">✉️</span>
      </div>
    );
  }
}

export default Contact;
