import React from "react";
import { Link } from "react-router-dom";
import './TopBar.css'

export default function TopBar() {
    const user = false;
    return (
    <div className="top">
        <div className="topLeft">
            <i class="topIcon fab fa-facebook-square"></i>
            <i class="topIcon fab fa-twitter-square"></i>
            <i class="topIcon fab fa-pinterest"></i>
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
                    <img className="topImage" src="https://scontent.fdac15-1.fna.fbcdn.net/v/t1.6435-1/p160x160/73004418_109370697140837_590276687137079296_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=nZ9QONu1OTAAX93kkhg&_nc_ht=scontent.fdac15-1.fna&tp=6&oh=52aff571f3a56eec6bd150edcf7b7248&oe=60CF3053" alt="" />
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
            <i class="topSearchIcon fas fa-search"></i>
        </div>

    </div>

    )
}
