import React from 'react';
export const Input = (props)=>{
    return (
        <div>
            <input onChange={props.takeinput} type='text' id='first' placeholder='Type First Number'/>
            <input onChange={props.takeinput} type='text' id='second' placeholder='Type Second Number'/>
            <button onClick={props.add}>Add</button>
            <button onClick={props.sub}>Subtract</button>
        </div>
    )
}