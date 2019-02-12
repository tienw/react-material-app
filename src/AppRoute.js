import React from "react";
import { Switch, Route } from 'react-router-dom';
import User from './component/User';
import UserDetail from './component/UserDetail';
import UserAdd from './component/UserAdd';

const AppRoute = () => (
  <Switch>
    <Route exact path='/' component={User}></Route>
    <Route exact path='/user' component={User}></Route>
    <Route exact path='/user/add' component={UserAdd}></Route>
    <Route exact path='/user/:id' component={UserDetail}></Route>
  </Switch>
);

export default AppRoute;