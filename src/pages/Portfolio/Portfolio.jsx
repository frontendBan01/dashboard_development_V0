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
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Dropdown fullwidth />
        </Grid>
        <Grid item xs={3}>
          <Dropdown />
        </Grid>
        <Grid item xs={3}>
          <Dropdown />
        </Grid>
        <Grid item xs={3}>
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
          <CustomGaugeChart />
        </Grid>
        <Grid item xs={3}>
          <CustomGaugeChart />
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
