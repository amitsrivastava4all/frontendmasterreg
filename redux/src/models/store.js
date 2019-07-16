import {createStore} from 'redux';
import {mathReducer} from './reducers/mathreducer';
export const store  = createStore(mathReducer);
store.subscribe(()=>{
    console.log("Subscribe.....", store.getState());
});