import React from "react"
import "./../../styles/sidebar.css"
import {useState} from 'react'
import SidebarSongContainer from './../playlist/SidebarSongContainer'
import playerContext from './../../context/playerContext'
import { useContext } from 'react'


const ArtistBlock = (props) => {
    const {songs, sidebarSongs} = useContext(playerContext)
    let artistSongs = sidebarSongs.filter((song) => song.artist = props.artist)

    return(
        <div>
             <hr className="line top-line"/>

             <div className="artist-songs">
                {artistSongs.map((artistSong) =>
                      <SidebarSongContainer song={artistSong}/>
                )}
             </div>
             <hr className="line bottom-line"/>

        </div>
    )
}

export default ArtistBlock