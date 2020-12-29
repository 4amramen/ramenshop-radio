import React, { useState, useEffect, useRef, useContext } from 'react'
import playerContext from '../context/playerContext'
import NowPlaying from './graphics/NowPlaying'
import { useMediaQuery } from 'react-responsive'

import {Carousel} from '3d-react-carousal';

function Controls() {

  // Global State
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
    lastAmbienceVolume,
    currentAmbience,
    ambience,
    ambiencePlaying,
    toggleAmbiencePlaying,
    toggleAmbienceAudioGlobal,
    ambienceAudioGlobal,
    nextAmbience,
    prevAmbience,
    handleEndOfAmbience,
    clicked,
    SetClicked
  } = useContext(playerContext)

  const audio = useRef('audio_tag');
  const ambienceAudio = useRef('ambience_tag');
  const timeElapsed = document.querySelector(".time-elapsed")
  const volumeLevel = document.querySelector("#visible-volBar")
  const isMobile = useMediaQuery({ maxWidth: 768 })

  //carousel 

  let slides = [
    <img  src="buttons/rain_button.png" alt="1" />,
    <img  src="buttons/fireplace_button.png" alt="2" />  ,
    <img  src="buttons/wave_button.png" alt="3" />  ,
];

  // self State
  const [statevolum, setStateVolum] = useState(1)
  const [stateambiencevolum, setStateAmbienceVolum] = useState(.7)
  const [lastambiencevolum, setlastAmbienceVolum] = useState(1)

  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }

  const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause();
  const toggleAmbienceAudio = () => ambienceAudio.current.paused ? ambienceAudio.current.play() : ambienceAudio.current.pause();


  const handleVolume = (q) => {
    setStateVolum(q);
    audio.current.volume = q;
  }

  
  const handleAmbienceVolume = (q) => {
    setStateAmbienceVolum(q);
    ambienceAudio.current.volume = q;
    volumeLevel.style.width = 'calc(60px * ' + q + ')'; 
  }


  const handleProgress = (e) => {
    
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
    // slider.style.background = 'linear-gradient(90deg, rgb(04, 214, 214) ' + e.target.value + '%, rgb(214, 214, 214) ' + e.target.value + '%)';
    // timeElapsed.style.width =  (dur ? (currentTime * 100) / dur : 0)  + '%';
    timeElapsed.style.width =  'calc((100% - 60px)*' + (dur ? (currentTime) / dur : 0)  + ')';

  }

  const updatePlayerTime = (e) => {
    setCurrentTime(e.target.currentTime);
    var width = (dur ? (currentTime) / dur : 0)
    if(timeElapsed){
      // slider.style.background = 'linear-gradient(90deg, rgb(04, 214, 214) ' + (dur ? (currentTime * 100) / dur : 0) + '%, rgb(214, 214, 214) ' + (dur ? (currentTime * 100) / dur : 0)  + '%)';
        timeElapsed.style.width =  width < .9995 ? 'calc((100% - 60px)*' + width  + ')' : '0%';
    }
  }

  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) { toggleAudio() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong])


  // hook for set ambience
  useEffect(() => {
    console.log("ambience playing? effect 1 " + ambiencePlaying);
    ambienceAudio.current.volume = stateambiencevolum;
    if(ambiencePlaying){
      toggleAmbienceAudio()
    }
  }, [currentAmbience])

  

  // hook for song containers to access ambience audio
  useEffect(() => {
    console.log("ambience audio changed by playlist");
    if(clicked){
      toggleAmbienceAudio()
    }
  }, [ambienceAudioGlobal])

  document.body.onkeyup = function(e){  
    if(e.keyCode == 32){
        console.log("space")

        if (!clicked)
                {
                  console.log("first click");
                  SetClicked(1);
                  toggleAmbiencePlaying();
                  toggleAmbienceAudio();
                  console.log(ambienceAudioGlobal);

                }else if (clicked == 1){
                  SetClicked(2);
                }
                if (isMobile && clicked){
                  toggleAmbiencePlaying();
                  toggleAmbienceAudio();

                }
                // after first click
                togglePlaying(); 
                toggleAudio();
                }
      }
  return (
    
    <div className="controls">
  
      <audio
        onTimeUpdate={(e) => updatePlayerTime(e)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        type="audio/mpeg"
        preload='true'
        src={songs[currentSong][1]} />

      <audio
        onEnded={handleEndOfAmbience}
        ref={ambienceAudio}
        type="audio/mpeg"
        preload='true'
        src={ambience[currentAmbience][1]} 
        />
      
      <div className="top-controls">

        <div className="left-controls">
          <span className="play" onClick={() => {
            // first click
                if (!clicked)
                {
                  console.log("first click");
                  SetClicked(1);
                  toggleAmbiencePlaying();
                  toggleAmbienceAudio();
                  console.log(ambienceAudioGlobal);

                }else if (clicked == 1){
                  SetClicked(2);
                }
                if (isMobile && clicked){
                  toggleAmbiencePlaying();
                  toggleAmbienceAudio();

                }
                // after first click
                togglePlaying(); 
                toggleAudio();
                }}>

              <img className= {!playing ? 'play_button grow' : 'play_button hide'} src="buttons/play_button.png"></img>
              <img className= {playing ?  'pause_button grow' : 'pause_button hide'} src="buttons/pause_button.png"></img>

            </span>

          < NowPlaying />
                  {/* <Carousel slides={slides} autoplay={false}/> */}


        </div>
        
        <span className="time">{fmtMSS(currentTime) + " / " + fmtMSS(dur)}</span>

         
    <div className="amb-controls">
        <div className="vlme" >
          
            <span className="volum" onClick={() => {
              if(stateambiencevolum){
                setlastAmbienceVolum(stateambiencevolum);
                handleAmbienceVolume(0);
              } else {
                handleAmbienceVolume(lastambiencevolum);
              }}}>
              {
              <img className="rain_button" 
              src={currentAmbience%3==0 ? "buttons/rain_button.png" 
                  : currentAmbience%3==1 ? "buttons/fireplace_button.png"
                  : "buttons/wave_button.png"}></img>
                  }
            </span>
              
            <div className="volBars">
              <input value={Math.round(stateambiencevolum * 100)} type="range" name="volBar" id="volBar" 
                onChange={(e) => handleAmbienceVolume(e.target.value / 100)} />
              <span id="visible-volBar"/>  
              <span id="visible-volBar-background"/>  
            </div> 
        </div>

        <div className="prev-ambience"onClick={() => {
              if (!clicked){
                SetClicked(1);
              }
              prevAmbience(true);
            }}>
                <img className="dir prev grow" 
                  src={"buttons/prev.png" }></img>
              </div>  
        <div className="next-ambience"  onClick={() => {
              if (!clicked){
                SetClicked(1);
              }
              nextAmbience(true);
            }}>
                <img className="dir next grow" 
                  src={"buttons/next.png" }></img>
          </div>  

        
        
       </div>
       </div>

      <div className="bottom-controls">
        
        <div className="visible-progress">
              <div className="time-elapsed"/>
              <div className="total-progress"/>
        </div>

        <div className="progress">
          <input
            onChange={handleProgress}
            value={dur ? (currentTime * 100) / dur : 0} 
            type="range" name="progresBar" id="prgbar" />
        </div>
      </div>
     
      
      {/* {
      <div className="plsoptions">

        <span onClick={toggleRandom} className={"random " + (random ? 'active' : '')}>
          <i className="fas fa-random"></i>
        </span>
        <span onClick={toggleRepeat} className={"repeat " + (repeat ? 'active' : '')}>
          <i className="fas fa-redo-alt"></i>
        </span>
      </div>
      } */}
    </div>
  )
}



export default Controls
