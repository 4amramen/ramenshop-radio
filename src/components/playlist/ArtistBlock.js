import React from "react"
import "./../../styles/sidebar.css"
import {useState} from 'react'
import SidebarSongContainer from './../playlist/SidebarSongContainer'
import playerContext from './../../context/playerContext'
import { useContext } from 'react'


const ArtistBlock = (props) => {
    const {songs, sidebarSongsMap} = useContext(playerContext)
    console.log(props.artist[0]);
    console.log(sidebarSongsMap);
    console.log(sidebarSongsMap[props.artist[0]]);
    return(
        <div>
             <hr className="line top-line"/>

             <div className="artist-songs">
                {sidebarSongsMap[props.artist[0]].map((artistSong, i) =>
                      <SidebarSongContainer song={artistSong} i={1} />
                )}
                {/* {props.songIndexes.map((index, i) =>
                 <SidebarSongContainer song={songs[index]} i={index} />
                )} */}
             </div>
             <hr className="line bottom-line"/>

        </div>
    )
}

export default ArtistBlock