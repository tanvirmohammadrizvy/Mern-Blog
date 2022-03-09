import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

export default function SideBar() {
    const [cats,setCats] = useState([]);
    useEffect(()=>{
        const getCats = async ()=> {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats()
    },[]);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="http://rizvy.me/assets/images/about/about-8.jpg" alt="" />
                <p>Rizvy is a very good Boy</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c=>(
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}&nbsp;</li>
                        </Link>

                    ))}

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest"></i>
                </div>
            </div>
        </div>
    )
}
