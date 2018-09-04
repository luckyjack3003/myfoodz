import React from 'react'
import {Link,withRouter } from 'react-router-dom'
class NavHead extends React.Component {
    render(){
        return (
        <div className="topnav">
            <Link to="/client">Home</Link>
            <Link to="/client/myRedux">My Redux</Link>
            <a onClick={()=>{
                sessionStorage.clear();
                this.props.history.push("/auth");
            }}>Logout</a>
        </div>
        )
    }
}

export default withRouter(NavHead)