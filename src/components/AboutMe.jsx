import React, { useLayoutEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Box, Typography, CardMedia } from '@mui/material'
import { gsap,Power3 } from 'gsap';
import Chris from '../assets/christian.png'
import './AboutBackGroud.scss'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const AboutMe = () => {

  const tl = gsap.timeline();

  const location = useLocation()
  
  useLayoutEffect(() => {
      let ctx = gsap.context(() => {
          if (location.hash == '#aboutMe'){
              tl.from('.imageAB', {  opacity: 0,duration:1, stagger:0.1, ease: Power3.easeIn })
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
      <Grid container  >
          <Grid item xs={12} sm={6} sx={{ zIndex:20, pl:{xs:4, sm:10, md:15,}}} >
            <Typography variant='body2' 
              className='contentAB'
              sx={{ letterSpacing: 10,fontSize: { xs:'30px',sm:'30px', md:'60px'}, mt:2, textAlign:'center',color:'#FF4D5A', fontWeigth:600   }} >
              ABOUT ME
            </Typography>
            <Typography variant='body2' 
              
              className='contentAB'
              sx={{fontSize:{xs:'0.8rem',md: '1rem'}, pr:{xs:5, md:0.5},pb:3,  }} 
            >
            Hi! I'm Christian, a Front-end developer on constant formation with passion for technology and investigation.<br/><br/>
            My objectives are:<br/>
            <CheckCircleOutlineIcon sx={{pt:1, color:'#FF4D5A'}} /> Create friendly apps with great impact on the users.<br/>
            <CheckCircleOutlineIcon sx={{pt:1, color:'#FF4D5A'}} /> Be member of a team that allows me to continue learning and growing professionally.<br/><br/>

            What's the added value I offer? 🙌<br/><br/>

            With me you'll get a software developer with great problem solving capacity, with great teamwork ability, proactive, that brings his ideas and will to surpass himself day after day.
            </Typography>

          </Grid>
          <Grid item xs={12} sm={6} sx={{ zIndex:200,display:'flex', justifyContent:'center', alignItems:'center', }} >
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
