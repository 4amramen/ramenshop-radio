import React from "react"
import "./../styles/sidebar.css"
import {useState} from 'react'
import SidebarSongContainer from './playlist/SidebarSongContainer'
import playerContext from './../context/playerContext'
import { useContext } from 'react'
import DimOverlay from './graphics/DimOverlay'
import ArtistBlock from "./playlist/ArtistBlock"
import SidebarAccordion from "./playlist/SidebarAccordion"



const Sidebar = (props) => {
    const {songs} = useContext(playerContext)

    const [sideBarClass, setSidebarClass]  = useState(props.sidebar)
    const [dimClass, setDimClass]  = useState(props.dim)

    const closeHandler = (e) => {
        e.preventDefault();
        setSidebarClass("sidebar close");
        setDimClass("dim close");
        setTimeout(()=> {
            props.close();
        }, 700)
    }


    return(
        <div className={"sidebarAndDim"}>
        <DimOverlay dim={dimClass}/>
            <div className={sideBarClass}>
                <div className="sidebar-header"> 
                    <span className="sidebar-title">Featured Artists</span>
                    <button className="close-button grow" onClick={closeHandler}>&#10005;</button>
                </div>
                <SidebarAccordion/>
            </div>
        </div>
    )
}

export default Sidebar