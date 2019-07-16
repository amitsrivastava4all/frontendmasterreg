import React from 'react';
import {connect} from 'react-redux';
const Output = (props)=>{
    return (
        <div>
           <h1>Result is {props.result}</h1>
        </div>
    )
}
const mapStateToProps = (state)=>{
    console.log("Rec Central State Object ",state);
    return {
        result:state.sum
    };
}
const fn = connect(mapStateToProps);
export default fn(Output);