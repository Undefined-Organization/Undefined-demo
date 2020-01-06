import React, { Component } from 'react';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom'

import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/Home'

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