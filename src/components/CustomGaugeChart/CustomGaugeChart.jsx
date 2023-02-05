import { Card, CardContent, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import GaugeChart from '../Charts/GaugeChart/GaugeChart';

const CustomGaugeChart = () => {
  return (
    <Card sx={{ minHeight: '60vh' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Project under phrases
        </Typography>
        <Divider />
        <Box component='div' sx={{ display: 'flex', justifyContent: 'center' }}>
          <GaugeChart />
        </Box>
        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2rem',
          }}
        >
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomGaugeChart;
