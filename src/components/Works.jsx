import React from 'react';
import { Box, CardMedia, Divider, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import hsImg from '../assets/fondo.png'
import './AboutBackGroud.scss'

export const Works = ()=>{
    return(
        <>
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
            <Grid container sx={{  display: 'flex', textAlign:'center',  alignItems:'center', justifyContent:'center', border:'1px solid white'}}  >
                <Grid item xs={12} md={6} sx={{zIndex:100,  }}  >
                    <Typography sx={{fontSize: { xs:'25px', md:'50px'}, color:'#E1DED9 ', fontWeight:900, }} >
                        Healthy Shop E-commerce
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{  zIndex:100, display:'flex', alignItems:'center', justifyContent:'center', }}  >
                    <Box sx={{maxWidth:{xs:'73%',md: '60%'},  border:'1px solid white'}} >
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

            </Grid>
        </>
    )
    
}