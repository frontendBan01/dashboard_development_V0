import { Grid } from '@mui/material';
import React from 'react';
import { LoginForm } from '../../components';

const Login = () => {
  return (
    <React.Fragment>
      <Grid container style={{ background: '#5855DF80' }}>
        <Grid item xs={12}>
          Logo
        </Grid>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={3}>
            <LoginForm />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
