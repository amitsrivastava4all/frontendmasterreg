import React from 'react';
import {opr} from '../utils/config';
import {connect} from 'react-redux';
import {actionNames} from '../models/actiontypes';
const Output = (props)=>{
    return (
        <div>
           <h1>Result is {props.result}</h1>
        </div>
    )
}
const mapStateToProps = (state)=>{
    console.log("Rec Central State Object ",state);
    var total = 0;
    if(opr.operationName==actionNames.ADD){
        total = state.math1.sum;
    }
    else
    if(opr.operationName==actionNames.SUBTRACT){
        total = state.math2.sum;
    }
    return {
        result:total
    };
}
const fn = connect(mapStateToProps);
export default fn(Output);