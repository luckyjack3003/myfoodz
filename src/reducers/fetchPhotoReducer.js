const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
    photo: null,
    error: null
};

export default function fetchPhotoReducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_SUCCESS:
            return { ...state, fetching: false, photo: action.photo };
        case API_CALL_FAILURE:
            return { ...state, fetching: false, photo: null, error: action.error };
        default:
            return state;
    }
}