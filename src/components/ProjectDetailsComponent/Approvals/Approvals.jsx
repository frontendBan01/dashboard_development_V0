import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import SimpleBarChart from '../../Charts/SimpleBarChart/SimpleBarChart';
import VerticalComposedChart from '../../Charts/VerticalComposedChart/VerticalComposedChart';
import InfoCard from '../../InfoCard/InfoCard';
import CustomizedCards from '../../sharedComponents/CustomizedCards/CustomizedCards';

const Approvals = () => {
  return (
    <Grid container spacing={2}>
      {/* Budget Left section */}
      <Grid item xs={7}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomizedCards />
          </Grid>
          {/* comment section left */}
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <Card>
                  <CardContent>
                    <VerticalComposedChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} item>
                <Card>
                  <CardContent>
                    <VerticalComposedChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          {/* Alert section right */}
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InfoCard />
                <InfoCard />
                <InfoCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Budget Right Section */}
      <Grid item xs={5}>
        <Grid container spacing={1}>
          <Grid xs={12} item>
            <Card>
              <CardContent>
                <SimpleBarChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} item sx={{ marginTop: '2rem' }}>
            <Card>
              <CardContent>
                <SimpleBarChart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Approvals;
