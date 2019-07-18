import {opr} from '../../utils/config';
import {actionNames} from '../actiontypes';
export const mathReducer = (initState={sum:0}, action)=>{
    console.log('Action is ',action);
    if(action.type==actionNames.ADD){
        opr.operationName = actionNames.ADD;
        var total = parseInt(action.payload.firstNumber) + parseInt(action.payload.secondNumber);
        return {...initState, sum:total};
    }
    return initState;
}