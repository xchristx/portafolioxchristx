import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Box, capitalize, Typography } from '@mui/material';

const anchors = ["home", "works", "aboutMe"];
export const FullPageHome = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {400} /* Options here */
    anchors={anchors}
    navigation
    css3
    autoScrolling
    fitToSection
    fitToSectionDelay={300}
    // easing='easeInOutCubic'
    // easingcss3='ease-out'
    // menu='#menu-appbar'
    navigationTooltips={anchors.map(e=>capitalize(e))}
    sectionsColor={["#061F3E","#000","#29a" ]}

    render={({ state, fullpageApi }) => {
      return (
      <>
        <ReactFullpage.Wrapper >
          
          <Box sx={{width:'100%'}} className="section">
            <Typography className='active' sx={{ fontSize:50, fontStyle: 'bold' }}>web designer (welcome to fullpage.js)</Typography>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </Box>
          <Box className="section">
            <p>Section 2</p>
          </Box>
          <Box className="section">
            <p>Section 2</p>
          </Box>
        </ReactFullpage.Wrapper>
      </>
      );
    }}
  />
);
