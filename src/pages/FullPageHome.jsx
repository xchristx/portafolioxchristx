import React, { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Box, capitalize, Container, Typography } from '@mui/material';

import { Home } from '../components/Home';
import { Works } from '../components/Works';
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';
import { useLocation, useNavigate } from 'react-router-dom';

const anchors = ["home", "proyects", "aboutMe",'contact'];


export const FullPageHome = () => {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      
      if ( !location.hash ){
        navigate('/#home')
      }


    }, [location.hash])
    

   return ( <ReactFullpage
    //fullpage options
    gplv3-license
    scrollingSpeed = {700} /* Options here */
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
          
          <Box sx={{width:'100%',}} className="section">
            <Home />
          </Box>

          <Box className="section" 
                sx={{ zIndex:5, display:'flex', alignItems:'center', justifyContent:'center', width:'100vh' }} 
          >
            <Works />
          </Box>

          <Box className="section" >
            <AboutMe />
          </Box>

          <Box className="section" >
            <Contact />
          </Box>

        </ReactFullpage.Wrapper>
      </>
      );
    }}
  />)
};
