import { createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)


sagaMiddleware.run(rootSaga)
export default store