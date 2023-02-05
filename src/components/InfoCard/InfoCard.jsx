import { Box } from '@mui/system';
import React from 'react';

const InfoCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        border: 'none',
        height: '3rem',
        borderRadius: '0.5rem',
        boxShadow: '0px 0px 24px #0000001A',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        marginBottom: '1rem',
      }}
    >
      <Box
        sx={{
          width: '1.5rem',
          height: '3rem',
          background: 'red',
          borderTopLeftRadius: '0.5rem',
          borderBottomLeftRadius: '0.5rem',
        }}
      ></Box>
      <Box
        component='span'
        sx={{ marginLeft: '0.3rem', position: 'relative', top: '25%' }}
      >
        Hello
      </Box>
    </Box>
  );
};

export default InfoCard;
