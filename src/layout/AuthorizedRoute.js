import React from 'react'
import { Route, Redirect } from 'react-router-dom'

class AuthorizedRoute extends React.Component {
    render() {
        const { component: Component,...rest } = this.props

        return (
            <Route {...rest} render={props => {
                return sessionStorage.getItem('logged')
                    ? <Component {...props} />
                    : <Redirect to="/auth/login" />
            }} />
        )
    }
}


export default AuthorizedRoute
