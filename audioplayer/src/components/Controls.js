import React, { useState, useEffect, useRef, useContext } from 'react'
import playerContext from '../context/playerContext'
import NowPlaying from './graphics/NowPlaying'
import RainSound from './RainSound';
import AmbienceControls from './AmbienceControls';


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
    handleEndOfAmbience,
    clicked,
    SetClicked
  } = useContext(playerContext)

  const audio = useRef('audio_tag');
  const ambienceAudio = useRef('audio_tag');


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
  }
  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute
  }

  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) { toggleAudio() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong])


  // hook for ambience
  useEffect(() => {
    ambienceAudio.current.volume = stateambiencevolum;
    if (ambiencePlaying) { toggleAmbienceAudio() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAmbience])

  return (
    
    <div className="controls">
  
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
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
                if (!clicked)
                {
                  console.log("first click");
                  toggleAmbiencePlaying();
                  toggleAmbienceAudio();
                  SetClicked();
                }
                togglePlaying(); toggleAudio();}}>
              <img className= {!playing ? 'play_button' : 'play_button hide'} src="buttons/play_button.png"></img>
              <img className= {!playing ? 'pause_button hide' : 'pause_button'} src="buttons/pause_button.png"></img>
{/* 
              <span className={!playing ? '' : 'hide'}><i className="fas fa-play"></i></span>
              <span className={!playing ? 'hide' : ''}><i className="fas fa-pause"></i></span> */}
            </span>

          < NowPlaying />
        </div>
        
        <span className="time">{fmtMSS(currentTime) + " / " + fmtMSS(dur)}</span>


        <div className="vlme">
            <span className="volum" onClick={() => {
              if(stateambiencevolum){
                setlastAmbienceVolum(stateambiencevolum);
                handleAmbienceVolume(0);
              } else {
                handleAmbienceVolume(lastambiencevolum);
              }
            }}>
              <img className="rain_button" src="buttons/rain_button.png"></img>
            </span>
            <input value={Math.round(stateambiencevolum * 100)} type="range" name="volBar" id="volBar" onChange={(e) => handleAmbienceVolume(e.target.value / 100)} />
        </div>
          {/* <span className="prev" onClick={prevSong}><i className="fas fa-step-backward"></i></span>
                  <span className="next" onClick={nextSong}><i className="fas fa-step-forward"></i></span>

          */}
          {/* <span className="play" onClick={() => { 
              if (!clicked) {
              console.log("first click");
              SetClicked();
              }
            toggleAmbiencePlaying(); toggleAmbienceAudio(); }}>
            <span className={!ambiencePlaying ? '' : 'hide'}><i className="fas fa-play"></i></span>
            <span className={!ambiencePlaying ? 'hide' : ''}><i className="fas fa-pause"></i></span>
          </span> */}
       </div>
      
      <div className="bottom-controls">
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
