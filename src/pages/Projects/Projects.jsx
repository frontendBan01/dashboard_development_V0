import styled from '@emotion/styled';
import {
  alpha,
  Card,
  CardContent,
  Grid,
  InputBase,
  Typography,
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { ProjectDetails, ProjectList } from '../../components';

const Projects = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.text.primary, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.text.secondary, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  return (
    <>
      <Grid container spacing={2}>
        {/* Project Search */}
        <Grid item xs={6}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Grid>
      </Grid>
      {/* Project List */}
      <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <ProjectList />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <ProjectList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
