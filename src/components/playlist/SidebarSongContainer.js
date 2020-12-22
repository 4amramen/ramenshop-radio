import { Component } from "react";
import React, { useContext, useState } from 'react'
import playerContext from '../../context/playerContext'
import { useMediaQuery } from 'react-responsive'




function SidebarSongContainer(props){
    const { songs, SetPolygonMask, ShowPolygon, SetCurrent, ambiencePlaying, toggleAmbienceAudioGlobal, SetCurrentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, svgs} = useContext(playerContext)
    const isMobile = useMediaQuery({ maxWidth: 768 })

    let i = props.i;
    let song = props.song;
        return (
        <div className={'sidebar-song-container ' + (songs[currentSong][1] === song[1] ? 'selected' : '')} key={i} onClick={() => { 
                  
          if (!clicked)
        {
          SetClicked(1);

          console.log("first click");
          SetCurrentAmbience(3);
          toggleAmbiencePlaying();
          
        }else if (clicked == 1){
          SetClicked(2);
        }
        if (isMobile && clicked){
          if(!ambiencePlaying){
            toggleAmbiencePlaying();
            toggleAmbienceAudioGlobal();
          }
        }
          if(songs[currentSong][1]!=song[1]){
            SetCurrent(i);
          }
          console.log(i);
          let polygonMask = svgs[song[4]];
          
          if(polygonMask != undefined){
            SetPolygonMask(polygonMask);
            ShowPolygon();
          }
        }
        }>
                  
          <span className="song" style={{
                }}
            >{song[0]}</span>

                </div>
    )
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default SidebarSongContainer;