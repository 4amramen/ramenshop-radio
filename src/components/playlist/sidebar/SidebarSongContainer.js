import { Component } from "react";
import React, { useContext, useState } from 'react'
import playerContext from '../../../context/playerContext'
import { useMediaQuery } from 'react-responsive'




function SidebarSongContainer(props){
    const { songs,sidebarSongs, SetPolygonMask, ShowPolygon, SetCurrent, ambiencePlaying, toggleAmbienceAudioGlobal, SetCurrentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, svgs} = useContext(playerContext)
    const isMobile = useMediaQuery({ maxWidth: 768 })
    let song = props.song;
    console.log(songs)

    let i =  songs.map((d) => { return d.name; }).indexOf(song.name);
    console.log(i)
    return (
        <div className={'sidebar-song-container ' + (songs[currentSong]['link'] === song['link'] ? 'selected' : '')} key={i} onClick={() => { 
          console.log('clicked');
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
          if(songs[currentSong]['link']!==song['link']){
            SetCurrent(i);
            console.log(i)
          }
          // console.log(i);
          // let polygonMask = svgs[song[4]];
          
          // if(polygonMask != undefined){
          //   SetPolygonMask(polygonMask);
          //   ShowPolygon();
          // }
        }
        }>
                  
          <span className="song" style={{
                }}
            >{song['name']}</span>

                </div>
    )
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default SidebarSongContainer;