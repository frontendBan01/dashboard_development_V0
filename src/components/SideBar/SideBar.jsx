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
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyle from './style.js';
import BusinessIcon from '@mui/icons-material/Business';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import logo from '../../assets/img/logo.png';
const SideBar = () => {
  const theme = useTheme();
  const classes = useStyle();
  const [categories,setCategories] = useState([
    { label: 'Business', value: 'business', icon: <BusinessIcon /> , active: true},
    { label: 'Portfolio', value: 'portfolio', icon: <CreateNewFolderIcon /> , active: false},
    { label: 'Project', value: 'projects', icon: <AccountTreeIcon /> , active: false},
  ])

  const handleSideBarOptionStyle = (index) => {
    setCategories((prev, curr) => {
      prev.forEach((item, i) => {
        item.active = false;
        if (index === i) {
          item.active = true;
        }
      });
      return [...prev];
    });
  };
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
        {categories.map(({ label, value, icon, active }, index ) => (
          <Link key={value} className={classes.links} to={value}>
            <ListItem onClick={() => handleSideBarOptionStyle(index)}  
            sx={{ backgroundColor: active  ? "#5855DF" : undefined, width: '80%',
            margingBottom: '10px' , borderRadius: '5px', margin: '1rem'}} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: active  ? "#FFFFFF" : "#3C3838", paddingLeft: '10px'}} >{icon}</ListItemIcon>
                <ListItemText sx={{ color: active  ? "#FFFFFF" : "#3C3838",}} primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default SideBar;
