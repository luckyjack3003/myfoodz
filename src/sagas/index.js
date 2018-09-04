import { takeLatest } from 'redux-saga/effects';
import { fetchPhotoWorker } from './fetchPhotoSaga';

// watches for actions dispatched to the store and starts worker saga, takeLatest cancels any previously triggered fetchPhotoWorker still in process
export default function* watcher() {
    yield takeLatest("API_CALL_REQUEST", fetchPhotoWorker);
}