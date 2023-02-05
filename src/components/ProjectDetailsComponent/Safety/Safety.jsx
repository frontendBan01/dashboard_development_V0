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
import PieChart from '../../PieChart/PieChart';
import CustomAlert from '../../sharedComponents/CustomAlert/CustomAlert';
import ProgressStatus from '../../sharedComponents/ProgressStatus/ProgressStatus';

const Safety = () => {
  return (
    <Grid container spacing={2}>
      {/* Budget Left section */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ProgressStatus />
          </Grid>
          <Grid item xs={3}>
            <PieChart />
          </Grid>
          <Grid xs={6} item>
            <Card>
              <CardContent>
                <Typography>Cost of Poor Quality</Typography>
                <BarChartNoPadding />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <CustomAlert />
            <CustomAlert />
            <CustomAlert />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Safety;
