import React from 'react';

// Demo styles, see 'Styles' section below for some notes on use.
 
import {
 
    AccordionItemButton,
} from 'react-accessible-accordion';

export default function SidebarLinks(props) {
    let name = props.artist[0];
    let spotify = props.artist[1];
    let soundcloud = props.artist[2];



    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    if(spotify!="" && soundcloud!=""){
        return (
            <AccordionItemButton className={"accordion-button " + props.color}>
                {name}
                <a onClick={() => {openInNewTab(spotify)}} >
                    <img className="sidebar-link1 grow-more" src="buttons/spotify-link.png" /> 
                </a> 
                <a onClick={() => {openInNewTab(soundcloud)}}>
                    <img className="sidebar-link2 grow-more" src="buttons/soundcloud-link.png" /> 
                </a> 
            </AccordionItemButton>
        );
    } else if (spotify!=""){
        return (
            <AccordionItemButton className={"accordion-button " + props.color}>
                {name}
                <a onClick={() => {openInNewTab(spotify)}} >
                    <img className="sidebar-link2 grow-more" src="buttons/spotify-link.png" /> 
                </a> 
            </AccordionItemButton>
        );
    } else if (soundcloud != ""){
        return(
        <AccordionItemButton className={"accordion-button " + props.color}>
                {name}
                <a onClick={() => {openInNewTab(soundcloud)}} >
                    <img className="sidebar-link2 grow-more" src="buttons/soundcloud-link.png" /> 
                </a> 
            </AccordionItemButton>
        )
    } else return null;
}