import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CustomAlert = () => {
  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1rem',
      }}
    >
      <Box
        component='div'
        sx={{
          borderRadius: '12px 12px 0px 0px',
          background: '#FBBD00 0% 0% no-repeat padding-box',
          padding: '1rem 2rem',
        }}
      >
        <Typography
          sx={{
            color: '#3C3838',
            font: 'normal normal 600 14px/18px Montserrat',
          }}
        >
          Due within 45 days
        </Typography>
      </Box>
      <Box
        component='div'
        sx={{
          padding: '1rem 2rem',
          border: '1px dashed #FBBD00',
          borderRadius: '0px 0px 12px 12px',
        }}
      >
        <Typography
          sx={{
            color: '#3C3838',
            letterSpacing: '0',
            font: 'normal normal medium 14px/18px Montserrat',
          }}
        >
          Approvals Due for Renewal
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomAlert;
