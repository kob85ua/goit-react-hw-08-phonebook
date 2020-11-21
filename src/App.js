import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import { authOperations } from "./redux/auth";

import routes from "./routes";

import LoaderBlock from "./components/Loader/Loader";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Layout from "./components/Layout/Layout";

class App extends Component {
  componentDidMount() {

    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Layout>
        <Suspense fallback={<LoaderBlock />}>
          <Switch>
            {routes.map((route) => {
              return route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              );
            })}
            
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
