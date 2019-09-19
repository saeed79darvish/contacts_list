import React, { Fragment, useEffect } from "react";
import NavbarPage from "./components/layout/NavbarPage";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./components/action/authAction";
import PrivateRoute from "./components/routhing/PrivateRoute";
import Background from "../src/components/layout/backgroun_3d.jpg";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavbarPage />

          <div
            style={{
              backgroundImage: `url(${Background}) `,
              height: "100vh",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "fixed",
              display: "flex"
            }}
          >
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
