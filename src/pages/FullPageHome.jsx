import React, { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Box, capitalize, Container, Typography } from '@mui/material';

import WOW from 'wowjs';
import { Home } from '../components/Home';
import { Works } from '../components/Works';
import FondoWorks from '../assets/works.jpg'
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';

const anchors = ["home", "proyects", "aboutMe",'contact'];


export const FullPageHome = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

   return ( <ReactFullpage
    //fullpage options
    scrollingSpeed = {900} /* Options here */
    anchors={anchors}
    navigation
    css3
    autoScrolling
    fitToSection
    fitToSectionDelay={300}
    easing='easeInOutCubic'
    easingcss3='ease-out'
    menu='#menu-appbar'
    navigationTooltips={anchors.map(e=>capitalize(e))}

    render={({ state, fullpageApi }) => {
      return (
      <>
        <ReactFullpage.Wrapper >
          
          <Box sx={{width:'100%'}} className="section">
            <Home />
          </Box>

          <Box className="section" 
                // sx={{ backgroundImage:`url(${FondoWorks})`, backgroundSize:'cover', zIndex:5 }} 
                sx={{ zIndex:5 }} 
          >
            <Works />
          </Box>

          <Box className="section" >
            <AboutMe />
          </Box>

          <Box className="section" sx={{ bgcolor:'#0A0E18', zIndex:5 }}>
            <Contact />
          </Box>

        </ReactFullpage.Wrapper>
      </>
      );
    }}
  />)
};
