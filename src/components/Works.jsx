import React from 'react';
import { Box, Button, CardMedia, Divider, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import hsImg from '../assets/banner.png'
import './AboutBackGroud.scss'
import '../index.css'

export const Works = ()=>{
    return(
        <>
            <div className="stars"></div>
            <div className="twinkling"></div>
            {/* <div className="clouds"></div> */}
            {/* <Grid container sx={{  display: 'flex', textAlign:'center',  alignItems:'center', justifyContent:'center',m:'0 auto' }}  >
                <Grid item xs={12} md={5} sx={{zIndex:100, border:'1px solid white', }}  >
                    <Typography sx={{fontSize: { xs:'25px', md:'80px'}, color:'#fff ', fontWeight:900, zIndex:110 }} >
                         Healthy Shop E-commerce
                    </Typography>
                </Grid>
                <Grid item xs={12} md={7} sx={{  zIndex:100, display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid white'}}  >
                    <Box sx={{width:{xs:'73%',md: '60%'},  }} >
                        <CardMedia
                                component='img'
                                src={hsImg}
                                sx={{objectFit:'cover'}}

                            />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{zIndex:100, display:'flex', alignItems:'center', justifyContent:'center',  }} >
                    <Typography sx={{fontSize: { xs:'25px', md:'50px'}, color:'#E1DED9', fontWeight:900,}} >
                        Poke Info
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{  zIndex:100, display:'flex', alignItems:'center', justifyContent:'center',   }}  >
                    <Box sx={{ maxWidth:{xs:'73%',md: '60%'}, border:'1px solid white'}} >
                        <CardMedia
                                component='img'
                                src={hsImg}
                                sx={{objectFit:'cover'}}

                            />
                    </Box>
                </Grid>

            </Grid> */}
            <Box component='div' sx={{ display:{xs:'none', sm:'flex'}, position:'static',}} >
                <Stack sx={{position:'absolute', zIndex:30, top:'20%', left:'5%', }} >
                    <Typography variant='body1' sx={{ color:'#fff ',letterSpacing:15,  fontSize: { xs:'30px', md:'60px'}, fontWeight:900}} >
                        E-COMMERCE
                    </Typography>
                    <Typography variant='body1' sx={{ color:'#FF4D5A ', letterSpacing:10, fontSize: { xs:'40px', md:'80px'}, fontWeight:900,mb:'5%' }} >
                        HEALTHY SHOP
                    </Typography>
                    <hr className="bookends" />
                    <Button sx={{mt:'5%'}} >
                        Show me more
                    </Button>
                </Stack>
                <Box sx={{ width:'50%', height:'60%', top:'20%', position: 'absolute',  zIndex:20, right:{xs:30,md:'5%'},  }} >
                        <CardMedia
                                component='img'
                                src={hsImg}
                                sx={{ boxShadow:20, height:'100%', }}

                            />
                </Box>
            </Box>
            <Box component='div' sx={{ display:{xs:'flex', sm:'none'}, position:'static',}} >

                <Box sx={{ width:'80%', height:'40%', top:'20%', position: 'absolute',  zIndex:20, left:'50%', transform: 'translateX(-50%)' }} >
                    <CardMedia
                            component='img'
                            src={hsImg}
                            sx={{ boxShadow:20, height:'100%', }}

                        />
                </Box>
                <Stack sx={{ width:'80%', position:'absolute', zIndex:30, left:'50%', transform: 'translateX(-50%)', bottom:'10%' }} >
                    <Typography variant='body1' sx={{ color:'#fff ',letterSpacing:10,  fontSize: '17px', fontWeight:900}} >
                        E-COMMERCE
                    </Typography>
                    <Typography variant='body1' sx={{ color:'#FF4D5A ', letterSpacing:6, fontSize: '29px', fontWeight:900, }} >
                        HEALTHY SHOP
                    </Typography>
                    <hr className="bookends" />
                    <Button  >
                        Show me more
                    </Button>
                </Stack>
                
            </Box>

        </>
    )

}