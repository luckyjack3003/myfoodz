import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import  AuthorizedRoute  from './layout/AuthorizedRoute'
import  UnauthorizedComponent  from './layout/UnauthorizedComponent'
import  MainComponent from './layout/MainComponent'
import {Provider} from 'react-redux'
import store from '../src/store/store'

const App = props => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/auth" component={UnauthorizedComponent} />
                    <AuthorizedRoute path="/client" component={MainComponent} />
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
)

export default App;
