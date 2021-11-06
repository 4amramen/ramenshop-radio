import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import playerContext from '../../../context/playerContext'
import { useContext } from 'react'
import SidebarAccordionItem from './SidebarAccordionItem'
import '../../../styles/accordion.css'

 
export default function SidebarAccordion(props) {
    const {artists, sidebarSongs} = useContext(playerContext)

    return (
        <Accordion allowZeroExpanded>
            {artists.map((artist, index) => {
            let color;
            if(index/2){
                color="black"
            } else {
                color="grey"
            }
            return(
            <SidebarAccordionItem artist={artist} color={color}/>
            )
            }
        )}
        </Accordion>
    );
}