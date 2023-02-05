import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import BarChartNoPadding from '../../Charts/BarChartNoPadding/BarChartNoPadding';
import PieChartWithPaddingAngle from '../../Charts/PieChartWithPaddingAngle/PieChartWithPaddingAngle';
import PieChart from '../../PieChart/PieChart';

const Quality = () => {
  return (
    <Grid container spacing={2}>
      {/* Budget Left section */}
      <Grid item xs={7}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <PieChart />
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color='text.secondary'
                  gutterBottom
                >
                  Project under phrases
                </Typography>
                <Divider />
                <Box
                  component='div'
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <PieChartWithPaddingAngle />
                </Box>
                <Box
                  component='div'
                  sx={{ display: 'flex', margin: '0.3rem 0' }}
                >
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
                <Box
                  component='div'
                  sx={{ display: 'flex', margin: '0.3rem 0' }}
                >
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
          </Grid>
        </Grid>
      </Grid>
      {/* Budget Right Section */}
      <Grid item xs={5}>
        <Grid container spacing={1}>
          <Grid xs={12} item>
            <Card>
              <CardContent>
                <Typography>Cost of Poor Quality</Typography>
                <BarChartNoPadding />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Quality;
