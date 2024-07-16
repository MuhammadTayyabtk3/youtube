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
    <AppBar
      position="sticky"
      sx={{
        bgcolor: '#f5f5f5',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'black',
              textDecoration: 'none',
              flexGrow: 1,
              '@media (max-width:600px)': {
                fontSize: '18px',
                justifyContent: 'center',
              },
              '@media (min-width:1200px)': {
                justifyContent: 'flex-start',
                fontSize: '24px',
              },
            }}
          >
            <YouTubeIcon sx={{ color: 'red',fontSize:'45px','@media (max-width:600px)':{fontSize:"30px"}}} />
            YOUTUBE
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              {/* Add your settings button or menu here */}
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
