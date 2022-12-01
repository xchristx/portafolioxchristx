import React, { useLayoutEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Box, Typography, CardMedia } from '@mui/material'
import { gsap,Power3 } from 'gsap';
import Chris from '../assets/christian.png'
import './AboutBackGroud.scss'

export const AboutMe = () => {

  const tl = gsap.timeline();

  const location = useLocation()
  
  useLayoutEffect(() => {
      let ctx = gsap.context(() => {
          if (location.hash == '#aboutMe'){
              tl.from('.imageAB', { y: '2rem', opacity: 0,duration:1, stagger:0.1, ease: Power3.easeIn })
              .from('.contentAB', { x:-100, y: '2rem', opacity: 0,duration:1, stagger:0.1, ease: Power3.easeIn }, '-=1.5');
          }else {
              tl.to('.imageAB', { opacity: 0, duration:0.7, y:-100, stagger:0.3, ease: Power3.easeOut })
              .to('.contentAB', { x: '2rem', opacity: 0,duration:0.6, stagger:0.1, ease: Power3.easeIn }, '-=1.5');
          }
      }, root); 
  
      return () => ctx.revert();
  }, [location.hash])


  return (
    <>
    <Box  >
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <Grid container >
          <Grid item xs={12} md={6} sx={{ zIndex:20, pl:{xs:2, md:15}}} >
            <Typography variant='body2' 
              className='contentAB'
              sx={{ letterSpacing: 10,fontSize: { xs:'30px', md:'60px'}, textAlign:'center',color:'#FF4D5A', fontWeigth:600   }} >
              ABOUT ME
            </Typography>
            <Typography variant='body2' 
              className='contentAB'
              sx={{fontSize:{xs:'0.8rem',md: '1rem'}, pr:{xs:5, md:0.5},pb:3,  }} >
            Hi! I'm Christian, a Front-end developer on constant formation with passion for technology and investigation.<br/>
            My objectives are:<br/>
            - Create friendly apps with great impact on the users<br/>
            - Be part of a team that alllows me to continue learning and growing professionally<br/><br/>

            What's the added value I offer?<br/><br/>

            With me you'll get a programmer with great problem solving capacity, able to work in a team, proactive, that brings his ideas and will to surpass himself day after day.
            </Typography>

          </Grid>
          <Grid item xs={12} md={6} sx={{ zIndex:200,display:'flex', justifyContent:'center', alignItems:'center', }} >
            <Box  sx={{maxWidth:'50%',  }} >
              <CardMedia
                className='imageAB'
                component='img'
                image={Chris}
                sx={{objectFit:'cover', boxShadow: '0px 1px 8px 3px #0A95CF', }} 
              />
            </Box>
          </Grid>
      </Grid>
    </Box>
    </>
  )
}
