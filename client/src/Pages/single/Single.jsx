import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import SinglePost from '../../Components/singlePost/SinglePost'
import './Single.css'

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    )
}
