import React from 'react';
import {NavLink} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
export const About = (props)=>{
    return (
        <div>
            <h1>I am About Component</h1>
            <NavLink  to="/about/office">Office</NavLink>
            &nbsp;
            <NavLink  to="/about/res">Res</NavLink>
            <hr/>
            <Switch>
            <Route  path="/about/office" render={()=><h1>I am Office</h1>}/>
            <Route  path="/about/res" render={()=><h1>I am Res</h1>}/>
            </Switch>
        </div>
    )
}