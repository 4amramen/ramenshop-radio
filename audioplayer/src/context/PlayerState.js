import React, { useReducer } from 'react';
import playerContext from './playerContext';
import playerReducer from './playerReducer';
import { songsArr } from './songs';
import { ambienceArr } from './ambience';

import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_CURRENT_AMBIENCE,
  TOGGLE_AMBIENCE_PLAYING,
  SET_CLICKED
} from './types'

const songs =  songsArr.sort(() => Math.random() - 0.5);
console.log(songs);
const random1 = Math.random();
const random2 = Math.random();
const random3 = Math.random();

const PlayerState = props => {
  const initialState = {
    currentSong: Math.floor(Math.random() * songsArr.length),
    currentAmbience: 0,

    random1: random1,
    random2: random2, 
    random3: random3,

    songs: songs,
    ambience: ambienceArr,

    repeat: false,
    random: true,

    playing: false,
    ambiencePlaying: false,

    audio: null,
    ambienceAudio: null,

    clicked: false
  }
  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Set playing state
  const togglePlaying = () => dispatch({ type: TOGGLE_PLAYING, data: state.playing ? false : true })

  // SET AMBIENCE PLAYING STATE
  const toggleAmbiencePlaying = () => dispatch({ type: TOGGLE_AMBIENCE_PLAYING, data: state.ambiencePlaying ? false : true })

  // Set current song
  const SetCurrent = id => dispatch({ type: SET_CURRENT_SONG, data: id })

   // SET CURRENT AMBIENCE
  const SetCurrentAmbience = id => dispatch({ type: SET_CURRENT_AMBIENCE, data: id });

  // Clicked

  const SetClicked = () => dispatch({ type: SET_CLICKED, data: true })


  // Prev song
  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrent(state.songs.length - 1)
    } else {
      SetCurrent(state.currentSong - 1)
    }
  }
  // Next song
  const nextSong = () => {
    if (state.currentSong === state.songs.length - 1) {
      SetCurrent(0)
    } else {
      SetCurrent(state.currentSong + 1)
    }
  }

   // Next AMBIENCE
   const nextAmbience = () => {
    if (state.currentAmbience === state.ambience.length - 1) {
      SetCurrentAmbience(0)
    } else {
      SetCurrentAmbience(state.currentAmbience + 1)
    }
  }
  
  // Repeat and Random
  const toggleRepeat = (id) => dispatch({ type: TOGGLE_REPEAT, data: state.repeat ? false : true })
  const toggleRandom = (id) => dispatch({ type: TOGGLE_RANDOM, data: state.random ? false : true })


  // End of Song
  const handleEnd = () => {
    // Check for random and repeat options
    if (state.random) {
      return dispatch({ type: SET_CURRENT_SONG, data: ~~(Math.random() * state.songs.length) })
    } else {
      if (state.repeat) {
        nextSong()
      } else if ((state.currentSong === state.songs.length - 1)) {
        return
      } else {
        nextSong();
      }
    }
  }


   // END OF AMBIENCE
   const handleEndOfAmbience = () => {
    //repeat
    nextAmbience();
  }


  return <playerContext.Provider
    value={{
      currentSong: state.currentSong,
      currentAmbience: state.currentAmbience,

      random1: state.random1,
      random2: state.random2,
      random3: state.random3,


      songs: state.songs,
      ambience: state.ambience,

      repeat: state.repeat,
      random: state.random,

      playing: state.playing,
      ambiencePlaying: state.ambiencePlaying,

      audio: state.audio,
      ambienceAudio: state.ambienceAudio,

      clicked: state.clicked,

      nextSong,
      nextAmbience,

      prevSong,

      SetCurrent,
      SetCurrentAmbience,

      toggleRandom,
      toggleRepeat,

      togglePlaying,
      toggleAmbiencePlaying,
      
      handleEnd,
      handleEndOfAmbience,
      SetClicked

    }}>

    {props.children}

  </playerContext.Provider>
}

export default PlayerState;

