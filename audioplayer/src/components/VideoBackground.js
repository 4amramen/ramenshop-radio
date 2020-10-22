import React, { Component, } from "react"

function VideoBackground(props) {
    return(
        <video className={"video-background"} autoPlay muted loop>
            <source src={'https://ramenshop-radio.s3-us-west-2.amazonaws.com/Backgrounds/COLOR+CHANGING+MOOD+LIGHT+10+hours+rainbow+Multi+Colour+Screen+++YouTube+++Google+Chrome+2020+07+09.mp4'} type="video/mp4"></source>

        </video>
    )

}

export default VideoBackground;
