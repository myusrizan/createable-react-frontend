import React, { Component } from "react";
import Navbar from "./components/navigationBar";
import Routing from "./routing";
import Footer from "./components/footer";
import { BackTop } from "antd";

import "./customCss/global.css";
import "./customCss/dashboard.css";
import "./customCss/invest.css";
import "./customCss/ideas.css";
import "./customCss/ideasDetail.css";
import "./customCss/usableFonts.css";
import "./customCss/navbar.css";
import "./customCss/footer.css";
import "./customCss/investDetail.css";
import "./customCss/login.css";
import "./customCss/regist.css";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <BackTop />
        <Navbar />
        <Routing />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
