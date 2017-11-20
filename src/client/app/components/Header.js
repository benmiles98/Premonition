import React from 'react';
import UserDetails from './UserDetails';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <div id = "titleBar">
                <h1 className = "siteTitle">Premonition</h1>
                <UserDetails />
                </div>
                <nav className = "mainNav">
                    <Link to="/">Home</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/application">Application</Link>
                    <Link to="/progress">Progress</Link>
                </nav>
            </header>
        )
    }
}