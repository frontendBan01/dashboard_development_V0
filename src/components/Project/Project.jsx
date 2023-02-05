import { Box } from '@mui/system';
import React from 'react';

const Project = () => {
  return (
    <>
      <Box sx={{ display: 'flex', border: '1px solid black' }}>
        <Box
          sx={{
            width: '1.5rem',
            height: '1.5rem',
            background: 'red',
          }}
        ></Box>
        <Box component='span' sx={{ marginLeft: '0.3rem' }}>
          Hello
        </Box>
      </Box>
    </>
  );
};

export default Project;
