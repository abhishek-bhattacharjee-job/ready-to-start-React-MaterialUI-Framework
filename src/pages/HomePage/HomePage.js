import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

import LeftBar from './../common/LeftBar';
import Header from './../common/Header';

const HomePage = () => {
  return (
    <>
      <Box className="body"
        sx={{
          backgroundColor: "#101F33"
        }}>
        <Grid className="bodyContainer" container spacing={0}>
          <Grid item xs={2}>
            <LeftBar />
          </Grid>
          <Grid item xs={10}>
            <Header />

            <Box
              sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff'
              }}
            >
              <Typography variant="h2" component="h1" sx={{fontWeight:"bold"}}>

              This UI is created using<br/>
              Material UI - integrated into React
              </Typography>
            </Box>

            <Box
              sx={{
                mt: '40px',
                p: '20px',
                borderRadius: '16px',
                backgroundColor: '#f4f6f86e',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                animation: 'fadeIn 1s ease',
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={1} textTransform="uppercase">
                🌟 Our Services:
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: "#000", fontSize: "25px" }}>
                This is a very basic design.
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: "#000", fontSize: "25px" }}>
                My intention is to give you a structure to start coding from.
              </Typography>
            </Box>

            <Box
              sx={{
                mt: '40px',
                p: '20px',
                borderRadius: '16px',
                backgroundColor: '#f4f6f86e',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                animation: 'fadeIn 1s ease',
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={1} textTransform="uppercase">
                🌎 Our Mission:
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: "#000", fontSize: "25px" }}>
                On every page, I tried to provide different designs.
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: "#000", fontSize: "25px" }}>
                So that a new developer can understand the different ways and leverage from there.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
