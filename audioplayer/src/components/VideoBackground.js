import React, { Component, } from "react"

function VideoBackground() {
    return(
        <video className="video-background" autoPlay muted loop>
            <source src="videos/rain.mp4" type="video/mp4"></source>
        </video>
    )

}

export default VideoBackground;
