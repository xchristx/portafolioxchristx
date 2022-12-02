import { Box,  } from '@mui/material';
import React from 'react';
import './HomeBackGround.scss'
export const HomeBackGround = ()=>{
    let hwMobile = 100;
    let hwDesktop = 300;
    let leftMobile = -50;
    let leftDesktop = -150;
    let topMobile = 280;
    let topDesktop = 200; 
    return (
        <Box id="container" position='absolute'>
            <Box id="container-inside">
                <Box id="circle-small" 
                    sx={{ width: {xs:hwMobile, md:hwDesktop}, height: {xs:hwMobile, md:hwDesktop},top:{xs:topMobile, md:topDesktop}, left:{xs:leftMobile, md:leftDesktop}, }} 
                >
                </Box>
                <Box id="circle-medium"
                    sx={{ width: {xs:hwMobile *2, md:hwDesktop*2}, height: {xs:hwMobile*2, md:hwDesktop*2},top:{xs:topMobile-49, md:topDesktop-150}, left:{xs:leftMobile*2, md:leftDesktop*2}, }} >
                </Box>

                <Box id="circle-large"
                    sx={{ width: {xs:hwMobile *3, md:hwDesktop*3}, height: {xs:hwMobile*3, md:hwDesktop*3},top:{xs:topMobile-49*2, md:topDesktop-300}, left:{xs:leftMobile*3, md:leftDesktop*3}, }} >
                </Box>

                <Box id="circle-xlarge"
                    sx={{ width: {xs:hwMobile *4, md:hwDesktop*4}, height: {xs:hwMobile*4, md:hwDesktop*4},top:{xs:topMobile-49*3, md:topDesktop-450}, left:{xs:leftMobile*4, md:leftDesktop*4}, }} ></Box>

                <Box id="circle-xxlarge"
                    sx={{ width: {xs:hwMobile *5, md:hwDesktop*5}, height: {xs:hwMobile*5, md:hwDesktop*5},top:{xs:topMobile-49*4, md:topDesktop-600}, left:{xs:leftMobile*5, md:leftDesktop*5}, }} ></Box>

            </Box>
        </Box>
    )
}