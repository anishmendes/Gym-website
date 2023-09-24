import React from 'react'
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Box } from '@material-ui/core';
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
    <Stack gap="40px" alignItems="center"  px="40px" pt="24px"> 
     <img src={Logo} alt="logo" width="200px" height="40px"/>
     <Typography variant='h5' pb="40px" mt="20px">
      Made with ❤️ by Anish Mainali
     </Typography>
     <Typography variant='h6' >
      anishmainali31@gmail.com
     </Typography>
    </Stack>
    </Box>
  )
}

export default Footer
