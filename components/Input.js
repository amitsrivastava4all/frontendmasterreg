import React from 'react';
export const Input = (props)=>{
    return (
        <div>
            <input id='name' onChange={props.in} type='text'/>
            <input id='age' onChange={props.in} type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
        </div>
    )
}