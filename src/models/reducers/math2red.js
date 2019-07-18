import {opr} from '../../utils/config';
export const mathReducer2 = (initState={sum:0}, action)=>{
    console.log('Red2 Action is ',action);
    if(action.type=='-'){
        opr.operationName = '-';
        var total = parseInt(action.payload.firstNumber) - parseInt(action.payload.secondNumber);
        return {...initState, sum:total};
    }
    return initState;
}