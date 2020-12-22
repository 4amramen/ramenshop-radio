import React from 'react';

import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import SidebarSongContainer from './SidebarSongContainer'
    import playerContext from './../../context/playerContext'
    import { useContext } from 'react'
    import ArtistBlock from './ArtistBlock'
    import SidebarLinks from './SidebarLinks'
 
// Demo styles, see 'Styles' section below for some notes on use.
 
export default function SidebarAccordian(props) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
            <AccordionItem className={props.color}>
                <AccordionItemHeading>
                  
                        <SidebarLinks artist={props.artist}/>

                </AccordionItemHeading>
                <AccordionItemPanel>
                         <ArtistBlock songIndexes={props.songIndexes}/>
                </AccordionItemPanel>
            </AccordionItem>
    );
}