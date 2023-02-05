import { Height } from '@mui/icons-material';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PieChartsWithCustomizedLabels from '../Charts/PieChartsWithCustomizedLabels/PieChartsWithCustomizedLabels';

const PieChart = () => {
  return (
    <Card>
      <CardContent sx={{ display: 'flex', flexDirection: 'column'}}>
        <Typography sx={{ fontSize: 16, color:'#000000', fontFamily: 'Montserrat, SemiBold' }} color='text.secondary' gutterBottom>
          Project under phrases
        </Typography>
        <Divider/>
        <Box component='div' sx={{ display: 'flex', justifyContent: 'center' }}>
          <PieChartsWithCustomizedLabels />
        </Box>
      </CardContent>
      <CardContent sx= {{backgroundColor:'#F4F3FC'}}>
        <Box component='div' sx={{ display: 'flex', margin: '0.3rem 0' }}>
          <Box
            sx={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              clear: 'both',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: 'red',
            }}
          ></Box>
          <Typography component='h5' sx={{ marginLeft: '5px' }}>
            Done
          </Typography>
        </Box>
        <Box component='div' sx={{ display: 'flex', margin: '0.3rem 0' }}>
          <Box
            sx={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              clear: 'both',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: 'red',
            }}
          ></Box>
          <Typography component='h5' sx={{ marginLeft: '5px' }}>
            Done
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default PieChart;
