import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./services/Authentication/components/ForgotPassword";
import LoginEmail from "./services/Authentication/components/Login/LoginEmail";
import SignUp from "./services/Authentication/components/SignUp";
import RootComponent from "./services/Dashboard/components/RootComponent";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/Login" component={LoginEmail} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/SignUp" component={SignUp} />
            <Route exact path="/" component={RootComponent} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
