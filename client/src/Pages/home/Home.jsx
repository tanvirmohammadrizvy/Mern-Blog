import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import SideBar from '../../Components/SideBar/SideBar'
import './Home.css'
import axios from 'axios'

export default function Home() {

    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts");
            setPosts(res.data);
        }
        fetchPosts()
    },[])

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts}/>
                <SideBar />
            </div>
        </>    
    )
}
