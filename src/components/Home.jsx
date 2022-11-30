import React, { useLayoutEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { gsap,Power3 } from 'gsap';
import { HomeBackGround } from './HomeBackGround';
import '/animate.css'

export const Home = ()=>{
    
    const tl = gsap.timeline();

    const location = useLocation()
    
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (location.hash == '#home'){
                tl.from('.titleLeft', { opacity: 0, duration:1, x:-1000, stagger:0.3, ease: Power3.easeOut })
                .from('.titleRight', { opacity: 0, duration:1, x:1000, stagger:0.1, ease: Power3.easeIn }, '-=1.4')
                .from('.content', { y: '2rem', opacity: 0,duration:0.5, stagger:0.3, ease: Power3.easeIn }, '-=1.5');
            }else{
                tl.to('.titleLeft', { opacity: 0, duration:0.7, x:-100, stagger:0.3, ease: Power3.easeOut })
                .to('.titleRight', { opacity: 0, duration:0.7, x:100, stagger:0.3, ease: Power3.easeIn }, '-=1.3')
                .to('.content', { y: '2rem', opacity: 0.3,duration:0.6, stagger:0.3, ease: Power3.easeIn }, '-=1.3');
            }
        }, root); 
    
        return () => ctx.revert();
    }, [location.hash])
    

    return(
        <>
            <HomeBackGround  sx={{position:'absolute'}} />
            <Grid container sx={{ display: 'flex', textAlign:'center',  alignItems:'center', justifyContent:'center'}}  >
               
                <Grid item xs={12} md={6} sx={{zIndex:100 }}  >
                    <Typography 
                     className='titleLeft'
                     sx={{ opacity:1, fontSize: { xs:'25px', md:'80px'}, color:'#FF4D5A',fontWeight:500, position:{xs:'absolute', md:'static'}, top:{xs:20, md:0}, left:{xs:'50%', md:0}, transform: {xs:'translateX(-50%)', md: 'none'}  }} 
                    >
                        PORTFOLIO
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{ height:'100vh', zIndex:100}}  >
                    <Stack>
                        <Typography variant='body1' 
                        className='titleRight'
                        sx={{ textAlign:'start', pl:{xs:3,md:9} ,mt:15, fontWeight:500, fontSize: { xs:'40px', md:'5.1rem'},letterSpacing:{ xs:5, md:19}, }} >
                            CHRISTIAN
                        </Typography>
                        <Typography variant='title' 
                            className='titleRight'
                            sx={{  textAlign:'start',pl:{xs:3,md:9},fontWeight:500, fontSize: { xs:'35px', md:'4.5rem'}, letterSpacing:{ xs:5, md:19},mb:{xs:'15%', sm:'5%'} }} >
                            AGUILAR
                        </Typography>
                        <hr className="bookends content" />
                        <Typography variant='body2' 
                            className='content'
                            sx={{  pl:{xs:3,md:10}, textAlign:'start',fontSize:'1.5rem',letterSpacing:2.5, mt:{xs:'15%', sm:'5%'} }} >
                            Full Stack <br/>
                            Passionate about front-end
                        </Typography>
                    </Stack>

                </Grid>


            </Grid>
        </>
    )
    
}