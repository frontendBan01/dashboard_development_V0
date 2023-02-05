import { useTheme } from '@emotion/react';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from './style.js';
import BusinessIcon from '@mui/icons-material/Business';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import logo from '../../assets/img/logo.png';
const SideBar = () => {
  const theme = useTheme();
  const classes = useStyle();
  const categories = [
    { label: 'Business', value: 'business', icon: <BusinessIcon /> },
    { label: 'Portfolio', value: 'portfolio', icon: <CreateNewFolderIcon /> },
    { label: 'Project', value: 'project', icon: <AccountTreeIcon /> },
  ];
  const redLogo =
    'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

  const blueLogo =
    'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
  return (
    <>
      <Link to='/business' className=''>
        <img
          src={theme.palette.mode === 'light' ? logo : logo}
          alt='Netflix Logo'
          className={classes.image}
        />
      </Link>
      <List>
        {categories.map(({ label, value, icon }) => (
          <Link key={value} className={classes.links} to='/'>
            <ListItem onClick={() => console.log('clicked')} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default SideBar;
