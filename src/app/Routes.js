import React, {Suspense, lazy} from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
const Login = lazy(() => import("./pages/Login")) ;
const HomePage = lazy(() => import("./pages/HomePage")) ;
const Register = lazy(() => import("./pages/Register")) ;
const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/userprofile" component={UserProfile} exact />
        {/*<Route path="/home" component={HomePage} exact />*/}
        {/*<Redirect to="/" />*/}
      </Switch>
    </Suspense>
  );
};

export default Routes;
