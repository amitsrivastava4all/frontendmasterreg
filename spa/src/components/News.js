import React from 'react';
export const News = (props)=>{
    return (
        <div>
            <h1>I am News Component {props.match.params.city} {props.match.params.area}</h1>
        </div>
    )
}