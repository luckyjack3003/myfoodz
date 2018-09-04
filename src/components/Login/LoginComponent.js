import React from 'react';
import { connect } from "react-redux";

class LoginComponent extends React.Component {
    render() {
        return (
            <div className="container">

                <div className="col-sm-6 col-sm-offset-3">

                    <h1><span className="fa fa-sign-in"></span> Login</h1>

                    <form action="/login" method="post">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password"/>
                        </div>
                        <button type="submit" className="btn btn-warning btn-lg" onClick={()=>{
                        this.props.dispatch({ type: "LOGGEDIN_REQUEST_SUCCESS"});
                        this.props.history.push('/client');
                        }}>Login</button>
                    </form>



                </div>

            </div>

        );
    }
}


export default connect()(LoginComponent);
