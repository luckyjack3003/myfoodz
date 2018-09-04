import React from 'react'

function createStore(initialReducer,initialState) {
    let currentReducer=initialReducer;
    let currentState=initialState;
    let listener = () => {};

    return{
        getState(){
            return currentState;
        },
        dispatch(action){
            currentState=currentReducer(currentState,action)
            listener();
            return currentState;
        },
        subscribe(newListener){
            listener = newListener;
        }
    }
}
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}


class OwnReduxComponent extends React.Component {

    render() {
        let store = createStore(counter)

        store.subscribe(() =>
            alert(store.getState())
        )

        return (
           <div>
              <button onClick={()=>{
                  store.dispatch({ type: 'INCREMENT' })
              }}>INCREMENT</button>

           </div>
        )
    }
}


export default OwnReduxComponent
