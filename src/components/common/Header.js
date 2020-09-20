import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { colorr: "#F15b2A" };

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/about" activestyle = {activeStyle}>About</NavLink>{" | "}
            <NavLink to="/todo" activestyle = {activeStyle}>Todo</NavLink>{" | "}
            <NavLink to="/gitprofile" activestyle = {activeStyle}>Git Cards</NavLink>{" | "}
            <NavLink to="/courses" activestyle = {activeStyle}>Courses</NavLink>{" | "}
            <NavLink to="/tictac" activestyle = {activeStyle}>TicTacToe</NavLink>
        </nav>
    )
}

export default Header;