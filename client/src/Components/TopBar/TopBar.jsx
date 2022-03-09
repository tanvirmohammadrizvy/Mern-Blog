import React from "react";
import { Link } from "react-router-dom";
import './TopBar.css';

export default function TopBar() {
    const user = false;
    return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/" >Home</Link> 
                </li>
                <li className="topListItem">
                    <Link className="link" to="/about" >About</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/contact">Contact</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/write">Write</Link>
                </li>
                <li className="topListItem">{ user && "Logout" }</li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img className="topImage" src="https://scontent.fdac15-1.fna.fbcdn.net/v/t1.6435-1/p160x160/73004418_109370697140837_590276687137079296_n.jpg" alt="" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">Register</Link>
                        </li>
                    </ul>
                )
            }
            <i className="topSearchIcon fas fa-search"></i>
        </div>

    </div>

    )
}
