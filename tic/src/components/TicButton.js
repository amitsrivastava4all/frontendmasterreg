import React from 'react';
import './tic.css';
export const TicButton = (props)=>{
    return (
        //   /* <button onClick={props.tap}>{props.msg}</button> */
        <>
        <td>
        <button onClick={()=>{
            console.log('Tap Call ',props.row, props.col);
            props.tap(props.row,props.col);
        }}>{props.msg}</button>
        </td>
       </>
    );
}