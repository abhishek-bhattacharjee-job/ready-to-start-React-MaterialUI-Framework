import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import './AboutPage.css';
import LeftBar from './../common/LeftBar';
import Header from './../common/Header';
import { BASE_API_URL } from '../../apiPaths';

const AboutPage = ({ props }) => {
  return (
    <>
      <Box className="body">
        <Grid className="bodyContainer" container spacing={0}>
          <Grid item xs={2}>
            <LeftBar />
          </Grid>
          <Grid item xs={10}>
            <Header />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '60px', // Increased padding for a grand appearance
                backgroundColor: '#FFFFFF', // Black background color
                color: '#000000', // White text color for contrast
              }}
            >
              <Typography variant="h2" fontWeight="bold" color="#FFFFFF" style={{ textShadow: 'rgb(0 0 0) 2px 2px 4px' }}>
                This is Our About us page
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '30px', textAlign: 'center', fontSize: '20px', lineHeight: '1.6' }}>
                This is a very basic design
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '40px', textAlign: 'center', fontSize: '20px', lineHeight: '1.6' }}>
                My intention is to give you a structure to start coding from
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '40px', textAlign: 'center', fontSize: '20px', lineHeight: '1.6' }}>
                On every page I tried to provide diffrent design
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '40px', textAlign: 'center', fontSize: '20px', lineHeight: '1.6' }}>
                So that a new developer can understand the diffrent ways and leverage from there
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutPage;
