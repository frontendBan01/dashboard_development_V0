import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  return (
    <Box component='div' sx={{ display: 'flex', flexGrow: '1' }}>
      {/* Image section */}
      <Box component='div'>
        <Link to='/business' className=''>
          <img
            src='data:image/jpeg;base64,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'
            alt='Project Image'
            style={{ borderRadius: '20px' }}
          />
        </Link>
      </Box>
      <Box component='div' sx={{ marginLeft: '2rem' }}>
        <Typography component='h3'>Hii</Typography>
        <Typography component='h4'>Project ID</Typography>
        <Typography component='h4'>Project ID</Typography>
        <Typography component='h4'>Project ID</Typography>
        <Typography component='h4'>Project ID</Typography>
      </Box>
    </Box>
  );
};

export default ProjectList;
