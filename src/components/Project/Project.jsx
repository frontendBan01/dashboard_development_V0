import { Box } from '@mui/system';
import React from 'react';

const Project = ({onClick}) => {
  return (
    <>
      <Box onClick = {onClick} sx={{ display: 'flex', border: '1px solid black' , width:'5rem' , margin:'5px', borderRadius: '3px'}}>
        <Box
          sx={{
            width: '1.5rem',
            height: '1.5rem',
            background: '#79B62F',
          }}
        ></Box>
        <Box component='span' sx={{ marginLeft: '0.3rem'}}>
          Hello
        </Box>
      </Box>
    </>
  );
};

export default Project;
