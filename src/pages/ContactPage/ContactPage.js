import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import './ContactPage.css';
import LeftBar from './../common/LeftBar';
import Header from './../common/Header';
import { BASE_API_URL } from '../../apiPaths';

const ContactPage = ({ props }) => {
  // Dummy contact data
  const contactData = {
    address: '123 Main Street, Cityville',
    email: 'contact@example.com',
    phone: '+1 (555) 123-4567',
  };

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
                marginTop: '40px',
                padding: '20px',
                borderRadius: '16px',
                animation: 'fadeIn 1s ease', // Smooth fade-in animation
              }}
            >
              <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
                🌟 Get in Touch! 🌟
              </Typography>
              <Typography variant="body1" color="textSecondary" style={{ maxWidth: '500px' }}>
                We'd love to hear from you. Reach out to us for any inquiries or just to say hello.
              </Typography>
              <Box
                sx={{
                  mt: '40px',
                  textAlign: 'center',
                  padding: '16px',
                  borderRadius: '12px',
                }}
              >
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  🏠 Address:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {contactData.address}
                </Typography>
                <Typography variant="body1" fontWeight="bold" mt={2} gutterBottom>
                  ✉️ Email:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {contactData.email}
                </Typography>
                <Typography variant="body1" fontWeight="bold" mt={2} gutterBottom>
                  📞 Phone:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {contactData.phone}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactPage;
