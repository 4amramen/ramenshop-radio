import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

function Cloud(props){
const { SetCurrent, random1, random2, random3, SetCurrentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)
  var songPositions = [];
  var songSizes = [13, 14, 17];
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

    //size 5
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

    // size 10
    if(props.cloudSongs.length==10) {
      if(i<4){
          left=i*deg+randomDeg2;
          bottom = 0;
          if(i==0 || i ==3){
              bottom = 10;
          }

      } else if (i<=7){
          left = (i)*deg;
          bottom = deg+randomDeg2;
      } else {
        bottom = 2*deg;
        left=(i)*deg+randomDeg2;

        if(i===7){
          bottom -=randomDeg2;
          left-=randomDeg1;
        }
        if(i===8){
          bottom +=randomDeg2;
        }
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
            if(11<=i && i<=13){
                bottom+= randomDeg1;
                
            }
          
            left=(i)*deg+randomDeg2;
            if (i===13){
              left=-20;
            }
        }
    }

    // left side cloud

    // right side cloud

    // set right
    if(left>85){
        right = randomDeg1;
    }

    //assign positions
    songPositions[i] = [left, bottom, right];

  }
  console.log(songPositions);

  
  return (
            <div className={'cloud' + ' c' +props.cloudSongs.length} style={{
                bottom: props.y + 'vh',
                left: props.x +'vw',
                animation: 'falling ' + props.animationTime + 's ease-in' + (props.intro ? '' : ' infinite'),
                animationDelay: props.delay +'s',
                animationFillMode: props.intro ? 'forwards' : '',
            }} >

            {props.cloudSongs.map((song, i) =>
                
                <div className={'songContainer' + ' fall-' + i + ' ' + (currentSong === props.offset+i ? 'selected' : '')} key={i} style={
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
                  
                  <span className="song" style={{
                animation: 'fadeAndScale' + props.introOrder +' 3s ease-in',
                transformOrigin: 'center bottom',
                }}
            >{song[0]}</span>

                </div>
              )
            }
          </div>)
}

export default Cloud
