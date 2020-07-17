import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'


function Playlist() {
  const { SetCurrent, currentSong, songs, clicked, toggleAmbiencePlaying, SetClicked, SetCurrentAmbience} = useContext(playerContext)

  return (
    <div className="playlist">
      <div className="header">
        <i className="fas fa-list-ul"></i>
        <span className="pltext">Play List</span>
      </div>
      <div className="songlist">
        <ul className="loi">
          {
            songs.map((song, i) =>
              <li className={'songContainer ' + (currentSong === i ? 'selected' : '')} key={i} onClick={() => { 
                if (!clicked)
              {
                console.log("first click");
                toggleAmbiencePlaying();
                SetCurrentAmbience(0);
                SetClicked();
              }
                SetCurrent(i);
                 }}>
                <span className="song">{song[0]}</span>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Playlist
