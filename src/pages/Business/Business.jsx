import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import LayersIcon from '@mui/icons-material/Layers';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box } from '@mui/system';
import {
  BarChartNoPadding,
  CustomContentTreeMap,
  PieChart,
  PieChartsWithCustomizedLabels,
  PieChartWithPaddingAngle,
  Project,
} from '../../components';
const Business = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ zIndex: '-1' }}>
        {/* Business Page Left Section */}
        <Grid item xs={8}>
          <Grid container spacing={2}>
            {/* Showing total project value */}
            <Grid item xs={4}>
              <Card>
                <CardContent
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography
                    sx={{ fontSize: 16, color:'#3C3838' ,fontFamily: 'Montserrat, SemiBold' }}
                    color='text.secondary'
                    gutterBottom
                  >
                    Project Across India
                  </Typography>
                  <Typography variant='h5' component='div'>
                    <DonutSmallIcon />
                  </Typography>
                </CardContent>
                <Divider />
                <Typography
                  variant='h5'
                  component='div'
                  sx={{ padding: '1em' }}
                >
                  1000
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography
                    sx={{ fontSize: 16 ,color:'#3C3838' ,fontFamily: 'Montserrat, SemiBold'}}
                    color='text.secondary'
                    gutterBottom
                  >
                    Total Square Footage
                  </Typography>
                  <Typography variant='h5' component='div'>
                    <LayersIcon />
                  </Typography>
                </CardContent>
                <Divider />
                <Typography
                  variant='h5'
                  component='div'
                  sx={{ padding: '1em' }}
                >
                  1000
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography
                    sx={{ fontSize: 16, color:'#3C3838' ,fontFamily: 'Montserrat, SemiBold' }}
                    color='text.secondary'
                    gutterBottom
                  >
                    Total Project Cost
                  </Typography>
                  <Typography variant='h5' component='div'>
                    <MonetizationOnIcon />
                  </Typography>
                </CardContent>
                <Divider />
                <Typography
                  variant='h5'
                  component='div'
                  sx={{ padding: '1em' }}
                >
                  1000
                </Typography>
              </Card>
            </Grid>

            {/* Showing total Project in charts */}
            <Grid item xs={4}>
              <PieChart />
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                    sx={{ fontSize: 14, color:'#000000' , fontFamily: 'Montserrat, Medium' }}
                  >
                    Zone Wise Project Distribution
                  </Typography>
                  <Divider />
                  <Box
                    component='div'
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <PieChartWithPaddingAngle />
                  </Box>
                  </CardContent>
                <CardContent sx = {{backgroundColor:'#F4F3FC'}}>
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
                    sx={{ fontSize: 14, color:'#000000' , fontFamily: 'Montserrat, Medium' }}
                    gutterBottom
                  >
                    Typology Wise Project Distribution
                  </Typography>
                  <Divider />
                  <Box
                    component='div'
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <PieChartWithPaddingAngle />
                  </Box>
                </CardContent>
                <CardContent sx = {{backgroundColor:'#F4F3FC'}}>
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
            {/* Showing Project typology status */}
            <Grid item xs={12}>
              <Card>
                <CardContent sx={{backgroundColor : '#F4F3FC'}}>
                  <Grid container spacing={2}>
                    <Grid xs={12}>
                      <Typography component='h3' sx={{ margin: '0 1rem', fontSize: '20px', color: '#7C828A',fontFamily: 'Montserrat, SemiBold' , }}>
                        Project Typology Status
                      </Typography>
                    </Grid>
                    {/* Show title with color tag */}
                    <Grid item xs={3} sx={{ marginTop: '2rem' }}>
                      <Box sx={{ display: 'flex', border: '1px solid black' }}>
                        <Box
                          sx={{
                            width: '1.5rem',
                            height: '1.5rem',
                            background: 'red',
                          }}
                        ></Box>
                        <Box component='span' sx={{ marginLeft: '0.3rem' }}>
                          Hello
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ marginTop: '2rem' }}>
                      <Box sx={{ display: 'flex', border: '1px solid black' }}>
                        <Box
                          sx={{
                            width: '1.5rem',
                            height: '1.5rem',
                            background: 'red',
                          }}
                        ></Box>
                        <Box component='span' sx={{ marginLeft: '0.3rem' }}>
                          Hello
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ marginTop: '2rem' }}>
                      <Box sx={{ display: 'flex', border: '1px solid black' }}>
                        <Box
                          sx={{
                            width: '1.5rem',
                            height: '1.5rem',
                            background: 'red',
                          }}
                        ></Box>
                        <Box component='span' sx={{ marginLeft: '0.3rem' }}>
                          Hello
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ marginTop: '2rem' }}>
                      <Box sx={{ display: 'flex', border: '1px solid black' }}>
                        <Box
                          sx={{
                            width: '1.5rem',
                            height: '1.5rem',
                            background: 'red',
                          }}
                        ></Box>
                        <Box component='span' sx={{ marginLeft: '0.3rem' }}>
                          Hello
                        </Box>
                      </Box>
                    </Grid>
                    {/* Showing treeMap chart and bar chart */}
                    <Grid item xs={6} sx={{ marginTop: '2rem' }}>
                      <Card>
                        <Typography component='h3' sx={{padding: '1rem', fontSize: '16px', textAlign:'center', color: '#3C3838',fontFamily: 'Montserrat, SemiBold' ,backgroundColor : '#F4F3FC'}}>
                          Typology Square Footage
                        </Typography>
                        <Box component='div' sx={{ maxHeight: '100vh' }}>
                          <CustomContentTreeMap />
                        </Box>
                      </Card>
                    </Grid>
                    <Grid item xs={6} sx={{ marginTop: '2rem' }}>
                      <Card>
                        <Typography component='h3' sx={{padding: '1rem', fontSize: '16px', textAlign:'center', color: '#3C3838',fontFamily: 'Montserrat, SemiBold' ,backgroundColor : '#F4F3FC'}}>
                          Cost
                        </Typography>
                        <Box component='div' sx={{ maxHeight: '100vh' ,backgroundColor : '#F4F3FC'}}>
                          <BarChartNoPadding />
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {/* Business Page Right section */}
        <Grid item xs={4}>
          <Grid item xs={12}>
            <Card>
              <CardContent sx={{backgroundColor: '#F4F3FC'}}>
                <Grid container spacing={2}>
                  <Grid xs={12}>
                    <Typography component='h3' sx={{ margin: '0 1rem' , fontSize: '20px', color: '#7C828A' ,fontFamily: 'Montserrat, SemiBold' }}>
                      Zone Wise Project Status
                    </Typography>
                  </Grid>
                  {/* Show title with color tag */}
                  <Grid item xs={3} sx={{ marginTop: '.5rem' }}>
                    <Project />
                  </Grid>
                  <Grid item xs={3} sx={{ marginTop: '.5rem' }}>
                    <Project />
                  </Grid>
                  <Grid item xs={3} sx={{ marginTop: '.5rem' }}>
                    <Project />
                  </Grid>
                  <Grid item xs={3} sx={{ marginTop: '.5rem' }}>
                    <Project />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Showing treeMap chart and bar chart */}
            <Grid item xs={12} sx={{ marginTop: '2rem' }}>
              <Card>
                <Box component='div' sx={{ maxHeight: '100vh' }}>
                  <CustomContentTreeMap />
                </Box>
                <Typography component='h3' sx={{padding: '1rem', fontSize: '16px', textAlign:'center', color: '#3C3838',fontFamily: 'Montserrat, SemiBold' ,backgroundColor : '#F4F3FC'}}>
                  Zonal Square Footage
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '2rem' }}>
              <Card>
                <Box component='div' sx={{ maxHeight: '100vh',backgroundColor : '#F4F3FC' }}>
                  <BarChartNoPadding />
                </Box>
                <Typography component='h3' sx={{padding: '1rem', fontSize: '16px', textAlign:'center', color: '#3C3838',fontFamily: 'Montserrat, SemiBold' ,backgroundColor : '#F4F3FC'}}>
                  Cost
              </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Business;
