import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, CardMedia, Divider, Grid, Typography,Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { gsap,Power3 } from 'gsap';
import contact from '../assets/contact.png'
import './AboutBackGroud.scss'
import '../index.css'

export const Contact = ()=>{
    const tl = gsap.timeline();

    const location = useLocation();
    
    
    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //         if (location.hash == '#proyects'){
    //             tl.from('.image', { opacity: 0, duration:1, x:1000,  scaleX:0, scaleY:0,  stagger:0.3, ease: Power3.easeOut })
    //             .from('.contentWorks', {x:-100, y: '2rem', opacity: 0,duration:1, stagger:0.1, ease: Power3.easeIn }, '-=1.7');
    //         }else {
    //             tl.to('.image', { opacity: 0, duration:0.7, x:100, stagger:0.3, ease: Power3.easeOut })
    //             .to('.contentWorks', { x: '2rem', opacity: 0,duration:0.6, stagger:0.1, ease: Power3.easeIn }, '-=1.5');
    //         }
    //     }, root); 
    
    //     return () => ctx.revert();
    // }, [location.hash])

    return(
        <>
            <div className="stars"></div>
            <div className="twinkling"></div>
            <Box component='div' sx={{ display:{xs:'none', sm:'flex'}, position:'static',}} >
                <Stack sx={{position:'absolute', zIndex:30, top:'20%', left:'5%', }} >

                    <Typography variant='body1' 
                        className='contentWorkss'
                        sx={{ color:'#FF4D5A ', letterSpacing:10, fontSize: { xs:'40px', md:'80px'}, fontWeight:500,mb:'5%' }} >
                        GET IN TOUCH
                    </Typography>
                    <hr className="bookends contentWorkss" />
                    <Typography variant='body1' 
                        className='contentWorkss'
                        sx={{ color:'#fff ',letterSpacing:3, fontSize: { xs:'10px', md:'25px'}, fontWeight:500}} >
                        christian.aguilar.dev@gmail.com
                    </Typography>
                    <Stack direction='row' >
                      <IconButton href='https://www.linkedin.com/in/christian-aguilar-dev/' target="_blank" >
                        <LinkedInIcon sx={{color:'white', p:0}} fontSize='large' />
                      </IconButton>
                      <IconButton href='https://github.com/xchristx' target="_blank" >
                        <GitHubIcon sx={{color:'white', p:0}} fontSize='large' />
                      </IconButton>
                    </Stack>
                </Stack>
                <Box sx={{ width:'50%', height:'60%', top:'20%', position: 'absolute',  zIndex:20, right:{xs:30,md:'5%'},  }} >
                        <CardMedia
                                component='img'
                                className='images'
                                src={contact}
                                sx={{ boxShadow:20, height:'100%',borderRadius:1 }}

                            />
                </Box>
            </Box>
            <Box component='div' sx={{ display:{xs:'flex', sm:'none'}, position:'static',}} >

                <Box sx={{ width:'80%', height:'40%', top:'20%', position: 'absolute',  zIndex:20, left:'50%', transform: 'translateX(-50%)', }} >
                    <CardMedia
                            component='img'
                            className='images'
                            src={contact}
                            sx={{ boxShadow:20, height:'100%',  }}

                        />
                </Box>
                <Stack sx={{ width:'80%', position:'absolute', zIndex:30, left:'50%', transform: 'translateX(-50%)', bottom:'10%' }} >
                    <Typography variant='body1' 
                        className='contentWorkss'
                        sx={{ color:'#fff ',letterSpacing:10,  fontSize: '17px', fontWeight:500}} >
                        e-commerce
                    </Typography>
                    <Typography variant='body1' 
                        className='contentWorkss'
                        sx={{ color:'#FF4D5A ', letterSpacing:6, fontSize: '29px', fontWeight:500, }} >
                        HEALTHY SHOP
                    </Typography>
                    <hr className="bookends contentWorks " />
                    <Button className='contentWorkss' >
                        Show me more
                    </Button>
                </Stack>
                
            </Box>

        </>
    )

}