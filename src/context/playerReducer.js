import {
  SET_CURRENT_SONG,
  SET_POLYGONMASK,
  SHOW_POLYGON,
  HIDE_POLYGON,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_CURRENT_AMBIENCE,
  SET_AMBIENCE_CHANGED,
  TOGGLE_AMBIENCE_PLAYING,
  SET_CLICKED,
  TOGGLE_AMBIENCE_AUDIO_GLOBAL,
  SET_SONG_LOADING,
  SET_DISPLAY_SPINNER,
  SET_SONG_CHANGED
} from './types'

export default (state, action) => {

  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data,
        songChanged: true,
        playing: false,
      }
    case SET_CURRENT_AMBIENCE:
      return {
        ...state,
        currentAmbience: action.data,
        ambienceChanged: true
      }
    case SET_POLYGONMASK:
      return {
        ...state,
        polygonMask: action.data,
      }
    case SET_SONG_LOADING:
      return {
        ...state,
        songLoading: action.data,
      }
    case SET_SONG_CHANGED:
      return {
        ...state,
        songChanged: action.data,
      }
      case SET_AMBIENCE_CHANGED:
      return {
        ...state,
        ambienceChanged: action.data,
      }

    case SET_DISPLAY_SPINNER:
      return {
        ...state,
        displaySpinner: action.data,
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