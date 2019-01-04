import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import "./../node_modules/antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";

import Apps from "./App";

ReactDOM.render(<Apps />, document.getElementById("root"));
registerServiceWorker();
