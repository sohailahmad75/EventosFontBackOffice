import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import Spinner from "./components/Spinner";
const Login = lazy(() => import("./pages/Login"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Register = lazy(() => import("./pages/Register"));
const Eventos = lazy(() => import("./pages/Eventos"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/userprofile" component={UserProfile} exact />
        <Route path="/eventos" component={Eventos} exact />
        <Route path="/sobre" component={Sobre} exact />
        {/*<Route path="/home" component={HomePage} exact />*/}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
