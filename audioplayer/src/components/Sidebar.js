import React from "react"
import "./../sidebar.css"
import {useState} from 'react'
import SidebarSongContainer from './playlist/SidebarSongContainer'
import playerContext from './../context/playerContext'
import { useContext } from 'react'
import DimOverlay from './graphics/DimOverlay'



const Sidebar = (props) => {
    const {songs, random1} = useContext(playerContext)

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
                <span className="sidebar-title">Arist Selection Showcase</span>
                
                <button className="close-button" onClick={closeHandler}>x</button>
            </div>
            <div className="artist-block babyglobin">
                <span className="artist-title">
                    BabyGlobin
                </span>
                <SidebarSongContainer song={songs[0]} i={0} />
                <SidebarSongContainer song={songs[1]} i={1} />
            </div>
            <div className="artist-block noturlover">
                <span className="artist-title">
                    Noturlover
                </span>
                <SidebarSongContainer song={songs[2]} i={2} />
                <SidebarSongContainer song={songs[3]} i={3} />
            </div>
        </div>
        </div>
    )
}

export default Sidebar