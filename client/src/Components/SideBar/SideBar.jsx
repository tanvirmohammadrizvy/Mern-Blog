import './SideBar.css'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.6435-9/73004418_109370697140837_590276687137079296_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGjtRJU37FMxP8JHvKenNqodzg8KMzWEkt3ODwozNYSSzS30Vsjkd94yiiUwYf47UxVP9sORonEDfIJ_pQYcRMs&_nc_ohc=yxHodFLGTqsAX9ab451&_nc_ht=scontent.fdac22-1.fna&oh=00_AT_XK0QdONhDk0YFWdvIu0zT-BC-YK0ZatM4EDhEvcA10Q&oe=61F4CB30" alt="" />
                <p>Rizvy is a very good Boy</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i class="sidebarIcon fab fa-facebook-square"></i>
                <i class="sidebarIcon fab fa-twitter-square"></i>
                <i class="sidebarIcon fab fa-pinterest"></i>
                </div>
            </div>
        </div>
    )
}
