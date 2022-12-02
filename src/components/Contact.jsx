import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, CardMedia, Divider, Grid, Typography,Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { gsap,Power3 } from 'gsap';
import contact from '../assets/contact.png'
import './AboutBackGroud.scss'
import '../index.css'

export const Contact = ()=>{
    const tl = gsap.timeline();

    const location = useLocation();
    
    
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (location.hash == '#contact'){
                tl.from('.imageContact', { opacity: 0, duration:1, x:1000,  scaleX:0, scaleY:0,  stagger:0.3, ease: Power3.easeOut })
                .from('.contentContact', {x:-100, y: '2rem', opacity: 0,duration:1, stagger:0.1, ease: Power3.easeIn }, '-=1.7')
                .from('.iconsContact', {y:800, opacity: 0.5,duration:1, stagger:0.3, ease: Power3.easeIn }, '-=1')
            }else {
                tl.to('.imageContact', { opacity: 0, duration:1, x:100, stagger:0.3, ease: Power3.easeOut })
                .to('.contentContact', { x: '2rem', opacity: 0,duration:1, stagger:0.1, ease: Power3.easeIn }, '-=1.5')
                .to('.iconsContact', { y: 800, opacity: 0,duration:1, stagger:0.1, ease: Power3.easeIn }, '-=1.5');
            }
        }, root); 
    
        return () => ctx.revert();
    }, [location.hash])

    return(
        <>
            <div className="stars"></div>
            <div className="twinkling"></div>
            <Box component='div' sx={{ display:{xs:'none', sm:'flex'}, position:'static',}} >
                <Stack sx={{position:'absolute', zIndex:30, top:'20%', left:'5%', }} >

                    <Typography variant='body1' 
                        className='contentContact'
                        sx={{ color:'#FF4D5A ', letterSpacing:10, fontSize: { xs:'40px', md:'80px'}, fontWeight:500,mb:'5%' }} >
                        GET IN TOUCH
                    </Typography>
                    <Box sx={{width:'50%'}} >
                        <hr className="bookends contentContact" />
                    </Box>
                    <Button sx={{justifyContent:'flex-start', mr:60, mt:'5%'}} href='mailto:christian.aguilar.dev@gmail.com' >
                      <Typography variant='body1' 
                          className='contentContact'
                          sx={{ color:'#fff ',letterSpacing:3, fontSize: { xs:'10px', sm:'25px'}, fontWeight:500}} >
                          christian.aguilar.dev@gmail.com
                      </Typography>
                    </Button>
                    <Stack direction='row' >
                      <IconButton className='iconsContact' href='https://www.linkedin.com/in/christian-aguilar-dev/' target="_blank" >
                        <LinkedInIcon sx={{color:'white', p:0}} fontSize='large' />
                      </IconButton>
                      <IconButton className='iconsContact' href='https://github.com/xchristx' target="_blank" >
                        <GitHubIcon  sx={{color:'white', p:0}} fontSize='large' />
                      </IconButton>
                      <IconButton className='iconsContact' href='https://drive.google.com/file/d/1x7O-2je6B5T2Oi203Husjbtsu342f7Us/view' target="_blank" >
                        <FilePresentIcon  sx={{color:'white', p:0}} fontSize='large' />
                      </IconButton>
                    </Stack>
                </Stack>
                <Box sx={{ width:'50%', height:'60%', top:'20%', position: 'absolute',  zIndex:20, right:{xs:30,md:'5%'},  }} >
                        <CardMedia
                                component='img'
                                className='imageContact'
                                src={contact}
                                sx={{ boxShadow:7, height:'100%',borderRadius:1 }}

                            />
                </Box>
            </Box>
            <Box component='div' sx={{ display:{xs:'flex', sm:'none'}, position:'static',}} >

                <Box sx={{ width:'80%', height:'40%', top:'20%', position: 'absolute',  zIndex:20, left:'50%', transform: 'translateX(-50%)',p:0,m:0 }} >
                    <CardMedia
                            component='img'
                            className='imageContact'
                            src={contact}
                            sx={{ boxShadow:20, height:'100%',  }}

                        />
                </Box>
                <Stack sx={{ width:'80%', position:'absolute', zIndex:30, left:'50%', transform: 'translateX(-50%)', bottom:'17%' }} >
                    <Typography variant='body1' 
                        className='contentContact'
                        sx={{ color:'#FF4D5A ', letterSpacing:4, fontSize: '29px', fontWeight:500, }} >
                        GET IN TOUCH
                    </Typography>
                    <Button sx={{justifyContent:'flex-start',}} href='mailto:christian.aguilar.dev@gmail.com' >
                        <Typography variant='body1' 
                            className='contentContact'
                            sx={{ color:'#fff ',letterSpacing:1, textTransform:'lowercase', fontSize: '17px', fontWeight:500}} 
                        >
                            christian.aguilar.dev@gmail.com
                        </Typography>
                    </Button>
                    <Stack direction='row' >
                      <IconButton href='https://www.linkedin.com/in/christian-aguilar-dev/' target="_blank" >
                        <LinkedInIcon className='iconsContact' sx={{color:'white', p:0}} fontSize='large' />
                      </IconButton>
                      <IconButton href='https://github.com/xchristx' target="_blank" >
                        <GitHubIcon className='iconsContact' sx={{color:'white', p:0}} fontSize='large' />
                      </IconButton>
                      <IconButton  href='https://drive.google.com/file/d/1x7O-2je6B5T2Oi203Husjbtsu342f7Us/view' target="_blank" >
                        <FilePresentIcon className='iconsContact' sx={{color:'white', p:0}} fontSize='large' />
                      </IconButton>
                    </Stack>
                </Stack>
                
            </Box>

        </>
    )

}