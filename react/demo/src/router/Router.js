import React, { Component } from 'react';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom'
import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/Home'
import Personnel from '../pages/Personnerl/personnel'
import Addlist from '../pages/Add/Addlist'

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Redirect exact from='/' to='/admin'></Redirect>
          {/* <Route path='/login' component></Route> */}
          <Route path='/admin' render={()=>{
            return (
              <Admin>
                <Switch>
                  <Redirect exact from='/admin' to='/admin/home'></Redirect>
                  <Route path='/admin/home' component={ Home }></Route>
                  <Route path='/admin/staff/Personnel' component={ Personnel }></Route>
                  <Route path='/admin/staff/Addlist' component={ Addlist }></Route>
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