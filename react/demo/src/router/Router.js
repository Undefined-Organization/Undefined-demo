import React ,{Component,Fragment} from 'react'
import {HashRouter,NavLink,Route,Redirect,Switch}  from 'react-router-dom'
import login from '../pages/Login/Login'
import Admin from '../pages/Admin'

class AppRouter extends Component{
    render(){
        return(
            <HashRouter>
            <Redirect exact from ='/' to='/login'></Redirect>
                <Switch>
                    <Route path='/login' component={login}></Route>
                    <Route path='/admin' render={()=>{
                        return(
                            <Admin>
                                22
                            </Admin>
                        )
                    }} ></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default AppRouter