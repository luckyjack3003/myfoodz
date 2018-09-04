
import {  call, put } from "redux-saga/effects";


// function that makes the api request and returns a Promise for response
function fetchPhoto() {
    return {
        photo: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
}

// worker saga: makes the api call when watcher saga sees the action
export function* fetchPhotoWorker() {
    console.info('hello');
    try {
        const response = yield call(fetchPhoto);
        const photo = response.photo;

        yield put({ type: "API_CALL_SUCCESS", photo });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "API_CALL_FAILURE", error });
    }
}