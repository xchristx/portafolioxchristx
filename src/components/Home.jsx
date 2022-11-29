import React, {useEffect} from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import WOW from 'wowjs';
import { HomeBackGround } from './HomeBackGround';
import '/animate.css'

export const Home = ()=>{
    useEffect(() => {
        new WOW.WOW({
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         false        // default
        }).init();
      },[] )

    return(
        <>
            <HomeBackGround sx={{position:'absolute'}} />
            <Grid container sx={{ display: 'flex', textAlign:'center',  alignItems:'center', justifyContent:'center'}}  >
                <Grid item   xs={12} md={6} sx={{zIndex:100 }}  >
                    <Typography  variant='h6' className= 'animate__animated animate__fadeInLeft' sx={{fontSize: { xs:'25px', md:'80px'}, color:'#FF4D5A', fontWeight:900,position:{xs:'absolute', md:'static'}, top:{xs:20, md:0}, left:{xs:'50%', md:0}, transform: {xs:'translateX(-50%)', md: 'none'}  }} >
                        PORTFOLIO
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ height:'100vh', zIndex:100}}  >
                    <Stack>
                        <Typography variant='body1' 
                        className='wow animate__animated animate__fadeInLeft'
                        sx={{ textAlign:'start', pl:{xs:3,md:9} ,mt:15, fontWeight:900, fontSize: { xs:'40px', md:'5rem'},letterSpacing:{ xs:5, md:19}, }} >
                            CHRISTIAN
                        </Typography>
                        <Typography variant='title' sx={{ fontWeight:900, textAlign:'start',pl:{xs:3,md:9}, fontSize: { xs:'40px', md:'5rem'}, letterSpacing:{ xs:5, md:19},mb:{xs:'15%', sm:'5%'} }} >
                            AGUILAR
                        </Typography>
                        <hr className="bookends" />
                        <Typography variant='body2' sx={{fontWeight:900, pl:{xs:3,md:10}, textAlign:'start',fontSize:'1.5rem',letterSpacing:2.5, mt:{xs:'15%', sm:'5%'} }} >
                            Full Stack
                        </Typography>
                        <Typography variant='body2' sx={{fontWeight:900, pl:{xs:3,md:10}, textAlign:'start',fontSize:'1.5rem',letterSpacing:2.5,}} >
                            Passionate about front end
                        </Typography>
                    </Stack>

                </Grid>


            </Grid>
        </>
    )
    
}