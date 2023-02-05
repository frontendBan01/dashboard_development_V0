import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ProgressStatus = () => {
  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          padding: '2rem 0',
          background: '#FCE398',
          width: '100%',
          borderTopLeftRadius: '1rem',
          borderBottomLeftRadius: '1rem',
          font: 'normal normal 600 16px/27px Montserrat',
          color: '#3C3838',
        }}
      >
        Current Progress: 75%
      </Typography>
      <Typography
        sx={{
          padding: '2rem 0',
          background: '#C3DBB4',
          width: '100%',
          font: 'normal normal 600 16px/27px Montserrat',
          color: '#3C3838',
        }}
      >
        Updated EAC: INR 356 Crores
      </Typography>
      <Typography
        sx={{
          padding: '2rem 0',
          background: '#F5C8AB',
          width: '100%',
          font: 'normal normal 600 16px/27px Montserrat',
          color: '#3C3838',
        }}
      >
        Projected Finish: 31-Aug-2022
      </Typography>
      <Typography
        sx={{
          padding: '2rem 0',
          background: '#FC9698',
          width: '100%',
          borderTopRightRadius: '1rem',
          borderBottomRightRadius: '1rem',
          font: 'normal normal 600 16px/27px Montserrat',
          color: '#3C3838',
        }}
      >
        Delay - 125days
      </Typography>
    </Box>
  );
};

export default ProgressStatus;
