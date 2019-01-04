import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Coba from "./pages/coba";
import Dashboard from "./pages/dashboard";
import ErrorPages from "./pages/errorPages";
import Investment from "./pages/investment";
import TeamUp from "./pages/teamup";
import DetailIdea from "./pages/detailidea";
import DetailInvest from "./pages/detailInvest";
import Login from "./pages/login";
import Register from "./pages/register";

import toDoApp from "./reducers";

const store = createStore(toDoApp);

class Routing extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Dashboard} exact />
              <Route path="/new" component={Coba} exact />
              <Route path="/investment" component={Investment} exact />
              <Route path="/teamup" component={TeamUp} exact />
              <Route path="/detailidea" component={DetailIdea} exact />
              <Route path="/detailinvest" component={DetailInvest} exact />
              <Route path="/register" component={Register} exact />
              <Route path="/login" component={Login} exact />
              <Route component={ErrorPages} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default Routing;
