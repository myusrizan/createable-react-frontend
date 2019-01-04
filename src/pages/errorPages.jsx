import React, { Component } from "react";
class ErrorPages extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="center">
          <h1 className="lg ">Page Not Available !!</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default ErrorPages;
