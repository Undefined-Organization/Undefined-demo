import React, { Component, Fragment } from 'react'
import { HashRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom'
import login from '../pages/Login/Login'
import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/Home'
import VipList from '../pages/Vips/List/List'
import VipAdd from '../pages/Vips/Add/add'

class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                {/* <Redirect exact from ='/' to='/login'></Redirect> */}
                <Switch>
                    <Redirect exact from='/' to='/admin/home'></Redirect>
                    <Route path='/login' component={login}></Route>
                    <Route path='/admin' render={() => {
                        return (
                            <Admin>
                                <Switch>
                                    <Redirect exact from='/admin' to='/admin/home'></Redirect>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/vip/list' component={VipList}></Route>
                                    <Route path='/admin/vip/add' component={VipAdd}></Route>
                                </Switch>
                            </Admin>
                        )
                    }} ></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default AppRouter