import React, { useState, useEffect, useRef, useContext } from 'react'
import playerContext from '../context/playerContext'
import NowPlaying from './graphics/NowPlaying'


function AmbienceControls() {

  // Global State
  const {
    currentAmbience,
    ambience,
    ambiencePlaying,
    toggleAmbiencePlaying,
    handleEndOfAmbience,
  } = useContext(playerContext)

  const ambienceAudio = useRef('j');

  // self State
  const [statevolum, setStateVolum] = useState(.5)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }

  const toggleAudio = () => ambienceAudio.current.paused ? ambienceAudio.current.play() : ambienceAudio.current.pause();

  const handleVolume = (q) => {
    setStateVolum(q);
    ambienceAudio.current.volume = q;
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    ambienceAudio.current.currentTime = compute
  }

  useEffect(() => {
    ambienceAudio.current.volume = statevolum;
    if (ambiencePlaying) { toggleAudio() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAmbience])

  return (

    <div className="ambience-controls">
      
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEndOfAmbience}
        ref={ambienceAudio}
        type="audio/mpeg"
        preload='true'
        src={ambience[currentAmbience][1]} 
        />
      
      {
      <div className="vlme">

      <span className="volum"><i className="fas fa-volume-down"></i></span>
      <input value={Math.round(statevolum * 100)} type="range" name="volBar" id="volBar" onChange={(e) => handleVolume(e.target.value / 100)} />

      </div>
      }
      
        <div className="musicControls">
      

          <span className="play" onClick={() => { toggleAmbiencePlaying(); toggleAudio(); }}>
            <span className={!ambiencePlaying ? '' : 'hide'}><i className="fas fa-play"></i></span>
            <span className={!ambiencePlaying ? 'hide' : ''}><i className="fas fa-pause"></i></span>
          </span>

        </div>
            
      <div className="progress">
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range" name="progresBar" id="prgbar" />
        <span className="time">{fmtMSS(currentTime) + " / " + fmtMSS(dur)}</span>
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

export default AmbienceControls
