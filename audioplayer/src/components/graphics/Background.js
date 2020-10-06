import React from 'react'

function Background() {
  let backgrounds = [ 'linear-gradient( 111.1deg,  rgba(0,40,70,1) -4.8%, rgba(255,115,115,1) 82.7%, rgba(255,175,123,1) 97.2% )', 'black',  'linear-gradient( 138deg,  rgba(32,201,255,1) 36.7%, rgba(0,8,187,1) 84.4%, rgba(255,255,255,1) 119.7% )', 'black', 
   'linear-gradient( 109.6deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% )' ]

  
  return (
    <div className="transition-backgrounds">
        <div className="background" id="back1" style={{background: backgrounds[0]}}/>
        <div className="background" id="back2" style={{background: backgrounds[2]}}/>
        {/* <div className="background" id="back3" style={{background: backgrounds[4]}}/> */}
        {/* <div className="background" id="back4" style={{background: backgrounds[3]}}/>
        <div className="background" id="back5" style={{background: backgrounds[4]}}/> */}
    </div>
 
    )
}

export default Background
