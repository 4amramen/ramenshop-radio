import { Component } from "react";
import React, { useContext, useState } from 'react'
import playerContext from '../../context/playerContext'



function SidebarSongContainer(props){
    const { SetCurrent, random1, random2, random3, SetCurrentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)
    let songSizes = [13, 14, 17];
    let songOpacities = [.30, .60, 1];
    const [delay, setDelay] = useState(getRandom(0,15));
    const [speed, setSpeed] = useState(getRandom(30,55));
    let fullDelay = delay + props.cloudDelay;

    let i = props.i;
    let songPosition = props.songPosition;
    let song = props.song;
    // console.log("sb song: " + props.song);
    
    // console.log(fullDelay);
        return (
        <div className={'sidebar-song-container ' + (currentSong === props.i ? 'selected' : '')} key={i} onClick={() => { 
                  if (!clicked)
                {
                  console.log("first click");
                  toggleAmbiencePlaying();
                  SetCurrentAmbience(1);
                  SetClicked();
                }
                    SetCurrent(i);
                }
                }>
                  
                  <span className="song" style={{
                }}
            >{props.song[0]}</span>

                </div>
    )
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default SidebarSongContainer;