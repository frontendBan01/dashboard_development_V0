import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CustomizedCards = () => {
  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        textAlign: 'center',
        height: '5rem',
      }}
    >
      <Typography
        sx={{
          padding: '1rem 0',
          background: '#FCE398',
          width: '100%',
          marginRight: '1rem',
          borderRadius: '1rem',
        }}
      >
        Current Progress: 75%
      </Typography>
      <Typography
        sx={{
          padding: '1rem 0',
          background: '#C3DBB4',
          width: '100%',
          marginRight: '1rem',
          borderRadius: '1rem',
        }}
      >
        Updated EAC: INR 356 Crores
      </Typography>
      <Typography
        sx={{
          padding: '1rem 0',
          background: '#F5C8AB',
          width: '100%',
          borderRadius: '1rem',
        }}
      >
        Projected Finish: 31-Aug-2022
      </Typography>
    </Box>
  );
};

export default CustomizedCards;
