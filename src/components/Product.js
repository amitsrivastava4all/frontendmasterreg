import React from 'react';
export const Product= (props)=>{
    return (
        <li>
            Id is {props.prod.id}
            NAme is {props.prod.name}
            Price is {props.prod.price}
            <img src={props.prod.url}/>
        </li>
    )
}