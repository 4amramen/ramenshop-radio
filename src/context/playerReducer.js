import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_CURRENT_AMBIENCE,
  TOGGLE_AMBIENCE_PLAYING,
  SET_CLICKED
} from './types'

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
          clicked: true
        }
      
    default:
      return state
  }

}