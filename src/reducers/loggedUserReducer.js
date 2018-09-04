const initialState = {
    logged: false,
}

const loggedUserReducer = (state = initialState, action) => {
    if (action.type === 'LOGGEDIN_REQUEST_SUCCESS') {
        sessionStorage.setItem("logged", true);
        window.location.href = `http://localhost:3000/client`;
        return {...state,  logged: true}
    }
    return state
}

export default loggedUserReducer