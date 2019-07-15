import React from 'react';
import {NavLink} from 'react-router-dom';
export const Header = (props)=>{
    return (
        <div>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            &nbsp;&nbsp;
            <NavLink  activeClassName="active"   to="/about">About</NavLink>
            &nbsp;&nbsp;
            <NavLink exact   activeClassName="active"  to="/contact">Contact</NavLink>
            &nbsp;&nbsp;
            <NavLink exact activeClassName="active"   to="/news/Delhi/Rohini">News</NavLink>
        </div>
    )
}