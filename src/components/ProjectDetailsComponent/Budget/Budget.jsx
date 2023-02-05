import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PieChartWithPaddingAngle from '../../Charts/PieChartWithPaddingAngle/PieChartWithPaddingAngle';
import SimpleBarChart from '../../Charts/SimpleBarChart/SimpleBarChart';
import PieChart from '../../PieChart/PieChart';
import CustomizedCards from '../../sharedComponents/CustomizedCards/CustomizedCards';
import ProjectsTable from '../../sharedComponents/ProjectsTable/ProjectsTable';

const Budget = () => {
  return (
    <Grid container spacing={2}>
      {/* Budget Left section */}
      <Grid item xs={7}>
        <Grid container spacing={2}>
          {/* Showing total Project in charts */}
          <Grid item xs={4}>
            <PieChart />
          </Grid>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          {/* Show date in table */}
          <Grid xs={12} item sx={{ marginTop: '2rem' }}>
            <ProjectsTable />
          </Grid>
        </Grid>
      </Grid>
      {/* Budget Right Section */}
      <Grid item xs={5}>
        <Grid container spacing={1}>
          <Grid xs={12}>
            <CustomizedCards />
          </Grid>
          <Grid xs={12} sx={{ marginTop: '2rem' }}>
            <SimpleBarChart />
          </Grid>
          <Grid xs={12} sx={{ marginTop: '2rem' }}>
            <SimpleBarChart />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Budget;
