import { Box, Divider, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { HomeBackGround } from './HomeBackGround';


export const Home = ()=>{

    return(
        <>
            <HomeBackGround sx={{position:'absolute'}} />
            <Grid container sx={{ display: 'flex', textAlign:'center',  alignItems:'center', justifyContent:'center'}}  >
                <Grid item xs={12} md={6} sx={{zIndex:100 }}  >
                    <Typography sx={{fontSize: { xs:'25px', md:'80px'}, color:'#FF4D5A', fontWeight:900,position:{xs:'absolute', md:'static'}, top:{xs:20, md:0}, left:{xs:'50%', md:0}, transform: {xs:'translateX(-50%)', md: 'none'}  }} >
                        PORTFOLIO
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ height:'100vh', zIndex:100}}  >
                    <Stack>
                        <Typography variant='body1' 
                        sx={{ textAlign:'start', pl:{xs:3,md:9} ,mt:15, fontWeight:900, fontSize: { xs:'40px', md:'5rem'},letterSpacing:{ xs:5, md:19}, }} >
                            CHRISTIAN
                        </Typography>
                        <Typography variant='title' sx={{ fontWeight:900, textAlign:'start',pl:{xs:3,md:9}, fontSize: { xs:'40px', md:'5rem'}, letterSpacing:{ xs:5, md:19}, }} >
                            AGUILAR
                        </Typography>
                        <hr className="bookends" />
                        <Typography variant='body2' sx={{fontWeight:900, pl:{xs:3,md:10}, textAlign:'start',fontSize:'1.5rem',letterSpacing:2.5,}} >
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