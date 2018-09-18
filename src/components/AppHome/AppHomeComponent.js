import React, { Component } from "react";
import { connect } from "react-redux";

class AppHomeComponent extends Component {

    render() {
        const { photo, error } = this.props;

        return (
            <div className="App">


                {photo ? <img src={photo} alt=""/>:<h4>Click button to request a photo</h4>}
                {!photo &&   <button onClick={()=>{
                        this.props.dispatch({ type: "API_CALL_REQUEST" })
                    }}>Request a photo</button>}

                {error && <p style={{ color: "red" }}>something went wrong!</p>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        photo: state.fetchPhotoState.photo,
        error: state.fetchPhotoState.error
    };
};



export default connect(mapStateToProps)(AppHomeComponent);