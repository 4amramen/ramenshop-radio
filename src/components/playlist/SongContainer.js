import { Component } from "react";
import React, { useContext, useState, useRef } from 'react'
import playerContext from '../../context/playerContext'
import { useMediaQuery } from 'react-responsive'



function SongContainer(props){
    const { svgs, songs, HidePolygon, ShowPolygon, SetPolygonMask, ambiencePlaying, SetCurrent, SetCurrentAmbience, toggleAmbienceAudioGlobal, currentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)
    let songSizes = [14, 17, 15, 17];
    let songOpacities = [.4, 1, .70, 1];
    const [delay, setDelay] = useState(getRandom(0,30));
    const [speed, setSpeed] = useState(getRandom(30,55));
    const [introSpeed, setIntroSpeed] = useState(getRandom(45,60));

    
    let fullDelay = delay + props.cloudDelay;
    if (props.introOrder == 1){
      fullDelay = fullDelay/1.5
    }
    let introDelay = delay;  
    
    const isMobile = useMediaQuery({ maxWidth: 768 })

    let i = props.i;
    let songPosition = props.songPosition;
    let song = props.song;
        return (
        <div className={'songContainer' + ' fall-' + props.i + ' ' + (songs[currentSong]['link'] === song['link'] ? 'selected' : '')} key={i} style={
                  {
                    cursor: "pointer",
                    fontSize: songSizes[i%3],
                    opacity: songOpacities[i%3],
                    animation: props.intro ? 'falling_words ' + introSpeed + 's ease-in-out' : 'falling_words ' + speed + 's ease-in-out',
                    animationDelay: props.intro ? introDelay : fullDelay + 's',
                    left: (songPosition[0]%100)>85 ? '' : songPosition[0]%100 +'vw', 
                    right: songPosition[0]%100>85 ? songPosition[2]+'%': '',
                    bottom: songPosition[1] + '%',
                    animationIterationCount: props.intro ? '1' : 'infinite',
                    animationFillMode: props.intro ? 'forwards' : '',

                  
                }} onClick={() => { 
                  
                  if (!clicked)
                {
                  SetClicked(1);
                  console.log("first click");
                  SetCurrentAmbience(3);
                  toggleAmbiencePlaying();
                  
                } else if (clicked == 1){
                  SetClicked(2);
                }
                if (isMobile && clicked){
                  if(!ambiencePlaying){
                    toggleAmbiencePlaying();
                    toggleAmbienceAudioGlobal();
                  }
                }
                if(songs[currentSong]['link']!=song['link']){
                  SetCurrent(props.offset+i);
                }
                  // let polygonMask = svgs[song[4]];
                  // console.log(props.offset+i);
                  
                  // if(polygonMask != undefined){
                  //   SetPolygonMask(polygonMask);
                  //   ShowPolygon();
                  // }else{
                  //   HidePolygon();
                  // }
                }
                }>
                  
                  <span className="song" style={{
                    animation: props.intro ? 'fadeAndScale' + songPosition[3] +' 2s ease-in' : '',
                    animationFillMode: props.intro ? 'forwards' : '',
                    animationDelay: songPosition[4] + 's',
                    opacity: props.intro ? 0 : 1,

                    transformOrigin: 'center bottom',

                      }}
                  >{song['name']}</span>
              
                </div>
    )
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setPolygonMask(svg){
  
}

export default SongContainer;