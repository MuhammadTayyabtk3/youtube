import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import YouTubeIcon from '@mui/icons-material/YouTube';



function ResponsiveAppBar() {

  return (
    <AppBar position="sticky" sx={{bgcolor:'#f5f5f5'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
          </Box>
          <YouTubeIcon sx={{color:'red',fontSize:'50px'}}/>
          <Typography
            variant="h5"
            // noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 0,
              
              flexGrow: 10,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            YOUTUBE
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

