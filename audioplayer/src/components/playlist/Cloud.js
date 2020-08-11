import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

function Cloud(props){
const { SetCurrent, random1, random2, random3, SetCurrentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)
  var songPositions = [];
  var songSizes = [13, 14, 18];
  var songOpacities = [.30, .60, 1];

  var left = 0;
  var bottom = 0;
  console.log("CLOUDSONGS LENGTH" + props.cloudSongs.length);

  for(let i = 0; i<props.cloudSongs.length; i++){
    
    var deg = 30;
    var randomDeg1 = random1*deg;
    var randomDeg2 = random2*deg/3;

    var right = 0;  
    var b = 0;
    // align words into cloud cases

    if(props.cloudSongs.length==5){
        if(i==0){
            left=deg;
            bottom = 0 + randomDeg1;
        } else if (i==1 || i==2 || i==3){
            bottom = deg+randomDeg2;
            left = (i-1)*deg+randomDeg2;
        } else {
            bottom = 2*deg+randomDeg2;
            left =deg+randomDeg1;
        }
    }
    
    // size 15
    if(props.cloudSongs.length==15) {
        if(i<5){
            left=i*deg+randomDeg1;
            bottom = 0;
            if(i==0 || i ==4){
                bottom = 10;
            }

        } else if (i<11){
            console.log("bottom: " +bottom);
            bottom = deg+randomDeg2;
            left = (i)*deg+randomDeg2;
        } else {
            bottom = 2*deg;
            if(12<=i && i<=14){
                bottom+= randomDeg1;
            }
            left=(i)*deg+randomDeg2;
        }
    }

    // // set right
    // if(left>85){
    //     right = (100-left)/3;
    // }

    //assign positions
    songPositions[i] = [left, bottom, right];

  }
  console.log(songPositions);

  
  return (
            <div className={'cloud' + ' c' +props.cloudSongs.length + (props.intro ? ' intro' : ' infinite')} style={{
                bottom: props.y + 'vh',
                left: props.x +'vw',
                animationDelay: props.delay +'s',
            }} >

            {props.cloudSongs.map((song, i) =>
                
                <div className={'songContainer' + ' fall-' + 0 + ' ' + (currentSong === i ? 'selected' : '')} key={i} style={
                  {
                    fontSize: songSizes[i%3],
                    opacity: songOpacities[i%3],

                    left: (songPositions[i][0]%100)>85 ? '' : songPositions[i][0]%100 +'%', 
                    right: songPositions[i][0]%100>85 ? songPositions[i][2]+'%': '',
                    bottom: songPositions[i][1] + '%',
                  
                }} onClick={() => { 
                  
                  if (!clicked)
                {
                  console.log("first click");
                  toggleAmbiencePlaying();
                  SetCurrentAmbience(1);
                  SetClicked();
                }
                  if(song && currentSong != i){
                    SetCurrent(props.offset+i);
                  }
                }
                }>
                  
                  <span className="song">{song[0]}</span>

                </div>
              )
            }
          </div>)
}

export default Cloud
