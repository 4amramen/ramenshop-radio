import React from 'react';
import ReactGA from 'react-ga';


export default function NowPlayingLinks(props) {
    if(props.song == undefined){
        return null;
    }

    let spotify = props.song['spotify'];
    let soundcloud = props.song['soundcloud'];

   


    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
        handleGAEvent(url);
    }

    const handleGAEvent = (url) => {
        // ReactGA.event({
        //     category: "Link Click: " + name,
        //     action: "User went to: " + url,
        //   });
    }

    if((spotify != undefined && spotify!= '' ) && (soundcloud!= undefined && soundcloud !='')){
        return (
            <div className="nowplaying-links">
                <a onClick={() => {openInNewTab(spotify)}}>
                    <img className="nowplaying-link1 grow-link" src="https://buttons.s3-us-west-2.amazonaws.com/spotify-link.png" /> 
                </a> 
                <a onClick={() => {openInNewTab(soundcloud)}}>
                    <img className="nowplaying-link2 grow-link" src="https://buttons.s3-us-west-2.amazonaws.com/soundcloud-link.png" /> 
                </a> 
            </div>
        );
    } else if (spotify!="" && spotify != undefined){
        return (
            <div className="nowplaying-links">
                <a onClick={() => {openInNewTab(spotify)}}>
                    <img className="nowplaying-link2 grow-link" src="https://buttons.s3-us-west-2.amazonaws.com/spotify-link.png" /> 
                </a> 
            </div>
        );
    } else if (soundcloud != "" && soundcloud != undefined){
        return(
            <div className="nowplaying-links">
                <a onClick={() => {openInNewTab(soundcloud)}} >
                    <img className="nowplaying-link2 grow-link" src="https://buttons.s3-us-west-2.amazonaws.com/soundcloud-link.png" /> 
                </a> 
            </div>
        )
    } else return null;
}

