import React from 'react';
import { Box, CardMedia, Divider, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import hsImg from '../assets/fondo.png'

export const Works = ()=>{
    return(
        <>
            <Grid container sx={{ height:'90%', display: 'flex', textAlign:'center',  alignItems:'center', justifyContent:'center'}}  >
                <Grid item xs={12} md={6} sx={{zIndex:100,  }}  >
                    <Typography sx={{fontSize: { xs:'25px', md:'50px'}, color:'#E1DED9 ', fontWeight:900,position:{xs:'absolute', md:'static'}, top:{xs:20, md:0}, left:{xs:'50%', md:0}, transform: {xs:'translateX(-50%)', md: 'none'}  }} >
                        Healthy Shop E-commerce
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{  zIndex:100,}}  >
                <CardMedia 
                        component='img'
                        src={hsImg}
                        sx={{ height:'224px', width:'448px', mb:2 }}
                    
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{zIndex:100 }}  >
                    <Typography sx={{fontSize: { xs:'25px', md:'50px'}, color:'#E1DED9', fontWeight:900,position:{xs:'absolute', md:'static'}, top:{xs:20, md:0}, left:{xs:'50%', md:0}, transform: {xs:'translateX(-50%)', md: 'none'}  }} >
                        Poke Info
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{  zIndex:100,  }}  >
                <CardMedia 
                        component='img'
                        src={hsImg}
                        sx={{ height:'224px', width:'448px', }}

                    />
                </Grid>

            </Grid>
        </>
    )
    
}