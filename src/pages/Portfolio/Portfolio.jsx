import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import {
  BasicTable,
  Dropdown,
  GaugeChart,
  PieChart,
  ProjectDetails,
} from '../../components';
import CustomGaugeChart from '../../components/CustomGaugeChart/CustomGaugeChart';

const Portfolio = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={2.4}>
          <Typography sx={{ fontSize: 14 , marginLeft: '10px' }} >Project Topology</Typography>
          <Dropdown fullwidth />
        </Grid>
        <Grid item xs={2.4}>
          <Typography sx={{ fontSize: 14 , marginLeft: '10px'}} >Zone</Typography>
          <Dropdown fullwidth />
        </Grid>
        <Grid item xs={2.4}>
          <Typography sx={{ fontSize: 14 , marginLeft: '10px'}} >City</Typography>
          <Dropdown />
        </Grid>
        <Grid item xs={2.4}>
          <Typography sx={{ fontSize: 14 , marginLeft: '10px'}} >Project Stage</Typography>
          <Dropdown />
        </Grid>
        <Grid item xs={2.4}>
        <Typography sx={{ fontSize: 14 , marginLeft: '10px'}} >Project Cost</Typography>
          <Dropdown />
        </Grid>
      </Grid>
      {/* Show Table */}
      <Box component='div' sx={{ marginTop: '2rem' }}>
        <BasicTable />
      </Box>
      <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
        <Grid item xs={3}>
          <PieChart />
        </Grid>
        <Grid item xs={3}>
          <PieChart />
        </Grid>
        <Grid item xs={3}>
          <CustomGaugeChart/>
        </Grid>
        <Grid item xs={3}>
          <CustomGaugeChart/>
        </Grid>
      </Grid>
      {/* Project Details */}
      <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
        <Grid item xs={12}>
          <Typography component='h2'>List of Projects</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <ProjectDetails />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
