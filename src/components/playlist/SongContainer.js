import { Component } from "react";
import React, { useContext, useState } from 'react'
import playerContext from '../../context/playerContext'



function SongContainer(props){
    const { SetCurrent, random1, random2, random3, SetCurrentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)
    let songSizes = [13, 14, 17];
    let songOpacities = [.30, .60, 1];
    const [delay, setDelay] = useState(getRandom(0,30));
    const [speed, setSpeed] = useState(getRandom(30,55));
    const [introSpeed, setIntroSpeed] = useState(getRandom(45,60));

    let fullDelay = delay + props.cloudDelay;
  

    let i = props.i;
    let songPosition = props.songPosition;
    let song = props.song;
    
        return (
        <div className={'songContainer' + ' fall-' + props.i + ' ' + (currentSong === props.offset+i ? 'selected' : '')} key={i} style={
                  {
                    fontSize: songSizes[i%3],
                    opacity: songOpacities[i%3],
                    animation: props.intro ? 'falling_words ' + introSpeed + 's ease-in-out' : 'falling_words ' + speed + 's ease-in-out',
                    animationDelay: props.intro ? delay/10 + 's' : fullDelay + 's',
                    left: (songPosition[0]%100)>85 ? '' : songPosition[0]%100 +'vw', 
                    right: songPosition[0]%100>85 ? songPosition[2]+'%': '',
                    bottom: songPosition[1] + '%',
                    animationIterationCount: props.intro ? '1' : 'infinite',
                    animationFillMode: props.intro ? 'forwards' : '',

                  
                }} onClick={() => { 
                  
                  if (!clicked)
                {
                  console.log("first click");
                  toggleAmbiencePlaying();
                  SetCurrentAmbience(1);
                  SetClicked();
                }
                  SetCurrent(props.offset+i);
                }
                }>
                  
                  <span className="song" style={{
                    animation: props.intro ? 'fadeAndScale' + songPosition[3] +' 2s ease-in' : '',
                    animationFillMode: props.intro ? 'forwards' : '',
                    animationDelay: fullDelay + 's',
                    transformOrigin: 'center bottom',

                }}
            >{song[0]}</span>
              
                </div>
    )
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default SongContainer;