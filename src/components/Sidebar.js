import React from "react"
import "./../styles/sidebar.css"
import {useState} from 'react'
import SidebarSongContainer from './playlist/SidebarSongContainer'
import playerContext from './../context/playerContext'
import { useContext } from 'react'
import DimOverlay from './graphics/DimOverlay'
import ArtistBlock from "./playlist/ArtistBlock"
import SidebarAccordian from "./playlist/SidebarAccordian"



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
                <button className="close-button" onClick={closeHandler}>x</button>
            </div>
            <SidebarAccordian/>

            {/* <ArtistBlock artistName="Abscond" songIndexes={[0,1,2,3]} color="grey"/>
            <ArtistBlock artistName="BabyGlobin" songIndexes={[4,5,6]}color="black"/>
            <ArtistBlock artistName="Chai Sully" songIndexes={[7]}color="grey"/>
            <ArtistBlock artistName="JnJKharia" songIndexes={[8,9,10,11]}color="black"/>
            <ArtistBlock artistName="Matt Brade" songIndexes={[12]}color="grey"/>
            <ArtistBlock artistName="Noturlover" songIndexes={[13, 14]}color="black"/>
            <ArtistBlock artistName="R.O.D Lowkey" songIndexes={[15, 16]}color="grey"/>
            <ArtistBlock artistName="Selah" songIndexes={[17, 18]}color="black"/> */}
        </div>
        </div>
    )
}

export default Sidebar