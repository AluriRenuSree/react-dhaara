import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import Logo from '../assets/images/Logo.svg'; 
import Image1 from '../assets/images/Notification.svg'; 
import Image2 from '../assets/images/User.svg'; 
import Image3 from '../assets/images/Profile.svg'; 
import './Header.css';

const Header = () => {
  return (
    <AppBar  className="appBar">
      <Toolbar className="toolbar">
        <Box className="logoContainer">
          <img src={Logo} alt="Company Logo" className="logo" />
          <Typography variant="h6" className="companyName">
            Kritsnam
          </Typography>
        </Box>
        <Box>
          <IconButton className="iconButton">
            <img src={Image1} alt="Image 1" className="image" />
          </IconButton>
          <IconButton className="iconButton">
            <img src={Image2} alt="Image 2" className="image" />
          </IconButton>
          <IconButton className="iconButton">
            <img src={Image3} alt="Image 3" className="image" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
