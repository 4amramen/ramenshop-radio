import React from "react"
import "./../../styles/sidebar.css"
import {useState} from 'react'
import SidebarSongContainer from './../playlist/SidebarSongContainer'
import playerContext from './../../context/playerContext'
import { useContext } from 'react'


const ArtistBlock = (props) => {
    const {songs} = useContext(playerContext)

    return(
        <div>
             <hr className="line top-line"/>

             <div className="artist-songs">

                {props.songIndexes.map((index, i) =>
                 <SidebarSongContainer song={songs[index]} i={index} />
                )}
             </div>
             <hr className="line bottom-line"/>

        </div>
    )
}

export default ArtistBlock