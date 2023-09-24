import React from 'react'
import { Box } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';
import Exercises from './Exercises';


const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: "212px", xs: "70px"},
      ml: { sm: "50px"}
    }} position="relative" p="20px">
      <Typography color="brown"
      fontWeight="600" fontSize="26px"      >
         Anish Fitness Club
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize:{ lg:'44px', xs:'40px'}}}
      mb="23px" mt="30px"
      > 
        Work Hard, Sweat <br />and Grow
      </Typography>
      <Typography fontSize="22px"
      lineHeight="35px" mb={4}>
        Make Sure to check out the most effective Workouts
      </Typography>
      <Button variant='contained' 
      href='#exercises'
      sx={{ backgroundColor:'#ff',padding:'10px'}}>Explore Workouts</Button>
      <Typography
      fontWeight={600}
      color="green"
      sx={{
        opacity:0.12,
        display: {lg:'block', xs:'none'}
      }}
      fontSize={200}
      >
      BELIEVE
      </Typography>
      <img  style={ {height: "850px", width:"500px",  marginTop:"-250px"}} src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner
