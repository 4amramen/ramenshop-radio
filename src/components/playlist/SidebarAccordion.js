import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import playerContext from './../../context/playerContext'
import { useContext } from 'react'
import SidebarAccordionItem from './SidebarAccordionItem'
import '../../styles/accordion.css'

 
export default function SidebarAccordion(props) {
    const {songs} = useContext(playerContext)

    return (
        <Accordion>
            <SidebarAccordionItem artistName="Abscond" songIndexes={[0,1,2,3]}/>
            <SidebarAccordionItem artistName="BabyGlobin" songIndexes={[4,5,6]}/>
            <SidebarAccordionItem artistName="Bloodroot" songIndexes={[19,20]}/>
            <SidebarAccordionItem artistName="Chai Sully" songIndexes={[7]}/>
            <SidebarAccordionItem artistName="JnJKharia" songIndexes={[8,9,10,11]}/>
            <SidebarAccordionItem artistName="Noturlover" songIndexes={[13, 14]}/>
            <SidebarAccordionItem artistName="Purple Corp." songIndexes={[23, 24]}/>
            <SidebarAccordionItem artistName="R.O.D. Lowkey" songIndexes={[15, 16]}/>
            <SidebarAccordionItem artistName="raleighrain" songIndexes={[21, 22, 12]}/>
            <SidebarAccordionItem artistName="Selah" songIndexes={[17, 18]}/>
            
        </Accordion>
    );
}