import React, { Component } from 'react';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom'

import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/Home'
import In from '../pages/In/In'
import Checkin from '../pages/Checkin/Checkin';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Redirect exact from='/' to='/admin'></Redirect>
          <Route path='/login' component></Route>
          <Route path='/admin' render={()=>{
            return (
              <Admin>
                <Switch>
                  <Redirect exact from='/admin' to='/admin/home'></Redirect>
                  <Route path='/admin/home' component={ Home }></Route>
                  <Route path='/admin/in' component={ In }></Route>
                  <Route path='/admin/checkin' component={ Checkin }></Route>
                </Switch> 
              </Admin>  
            )
          }}></Route>
        </Switch> 
      </HashRouter>
    );
  }
}

export default Router;