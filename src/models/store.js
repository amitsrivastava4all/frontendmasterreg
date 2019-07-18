import {createStore, combineReducers,applyMiddleware} from 'redux';
import {mathReducer} from './reducers/mathreducer';
import {mathReducer2} from './reducers/math2red';
import thunk from 'redux-thunk';
//export const store  = createStore(mathReducer);
export const store  = createStore(combineReducers({math1:mathReducer,math2:mathReducer2}),applyMiddleware(thunk));
store.subscribe(()=>{
    console.log("Subscribe.....", store.getState());
});