import {
  Box,
  Button,
  Grid,
  Link,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import useStyles from './styles';

function FormContent(props) {
  const { value } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setUserName = (event) => {
    setUsername(event.target.value.trim());
  };
  const setPwd = (event) => {
    setPassword(event.target.value.trim());
  };
  console.log('value', value);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id='outlined-basic'
            label='Username'
            variant='outlined'
            onChange={(e) => setUserName(e)}
            name='userName'
            value={username}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='outlined-basic'
            label='Password'
            variant='outlined'
            name='password'
            value={password}
            onChange={(e) => setPwd(e)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Link
            component='button'
            variant='body2'
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Forgot Password?
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const LoginForm = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  function a11yProps(index, value) {
    let bgColor;
    if (value === index) {
      bgColor = classes.tab;
    } else {
      bgColor = classes.tabInactive;
    }
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
      className: bgColor,
    };
  }
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: '20px',
        background: '#FFFFFF',
        boxShadow: '0px 0px 6px #00000029',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='secondary'
        textColor='inherit'
        variant='fullWidth'
        aria-label='full width tabs example'
      >
        <Tab
          label='Login as Project Team'
          sx={{ borderTopLeftRadius: '20px' }}
          {...a11yProps(0, value)}
        />
        <Tab
          label='Login as Management'
          sx={{ borderTopRightRadius: '20px' }}
          {...a11yProps(1, value)}
        />
      </Tabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <FormContent value={value}></FormContent>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <FormContent value={value}></FormContent>
      </TabPanel>
    </Box>
  );
};

export default LoginForm;
