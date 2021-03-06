import {
  SET_CURRENT_SONG,
  SET_POLYGONMASK,
  SHOW_POLYGON,
  HIDE_POLYGON,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_CURRENT_AMBIENCE,
  TOGGLE_AMBIENCE_PLAYING,
  SET_CLICKED,
  TOGGLE_AMBIENCE_AUDIO_GLOBAL
} from './types'
import React, { useState, useEffect, useRef, useContext } from 'react'




export default (state, action) => {

  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data,
        playing: true
      }
    case SET_CURRENT_AMBIENCE:
      return {
        ...state,
        currentAmbience: action.data,
        ambiencePlaying: true
      }
    case SET_POLYGONMASK:
      return {
        ...state,
        polygonMask: action.data,
      }
    case TOGGLE_AMBIENCE_AUDIO_GLOBAL:
      return {
        ...state,
        ambienceAudioGlobal: action.data,
      }
    case SHOW_POLYGON:
        return {
          ...state,
          show: action.data,
        }
    case HIDE_POLYGON:
    return {
      ...state,
      show: action.data,
    }
    case TOGGLE_RANDOM:
      return {
        ...state,
        random: action.data
      }
    case TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.data
      }
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.data
      }
    case TOGGLE_AMBIENCE_PLAYING:
      return {
          ...state,
          ambiencePlaying: action.data
        }
    case SET_CLICKED:
      return {
          ...state,
          clicked: action.data
        }
      
    default:
      return state
  }

}