import { CssBaseline } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '.';
import {
  Business,
  Login,
  Portfolio,
  ProjectDescription,
  Projects,
} from '../pages';
import useStyles from './style';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolBar}></div>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/business' element={<Business />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDescription />} />
          {/* <Route path='/movies/:id' element={<MovieInformation />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/actors/:id' element={<Actors />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
