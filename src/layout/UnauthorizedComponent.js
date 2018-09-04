import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import  OwnReduxComponent from '../components/OwnReduxComponent/OwnReduxComponent'
import  LoginComponent from '../components/Login/LoginComponent'

const UnauthorizedComponent = () => (
    <div>
        {/*

    this could be a general layout for all unauthorised components:
    like login, SelfReduxComponent

    */}
        <Switch>
            <Route path="/auth/myRedux" component={OwnReduxComponent} />
            <Route path="/auth/login" component={LoginComponent} />
            <Redirect to="/auth/login" />
        </Switch>
    </div>
)

export default UnauthorizedComponent