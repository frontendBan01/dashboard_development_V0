import { useTheme } from '@emotion/react';
import { AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Button,
  ClickAwayListener,
  Drawer,
  Grow,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import SideBar from '../SideBar/SideBar';
import useStyles from './style';

const Navbar = () => {
  const isAuthenticated = true;
  const user = {
    id: 1,
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  // const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  return (
    <>
      <AppBar
        position='fixed'
        sx={{ background: 'white', zIndex: '1', boxShadow: 'none' }}
      >
        <Toolbar className={classes.toolBar}>
          {isMobile && (
            <IconButton
              color='inherit'
              edge='start'
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <Button>Business &nbsp;</Button>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color='inherit'>Login &nbsp;</Button>
            ) : (
              <>
                <Button
                  ref={anchorRef}
                  id='composition-button'
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup='true'
                  onClick={handleToggle}
                >
                  <Avatar
                    style={{ width: 30, height: 30 }}
                    src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                    alt='profile'
                  />
                  {!isMobile && <>&nbsp; &nbsp; John Doe &nbsp;</>}
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement='bottom-start'
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom-start'
                            ? 'left top'
                            : 'left bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id='composition-menu'
                            aria-labelledby='composition-button'
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                              My account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant='temporary'
              anchor='right'
              open={mobileOpen}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant='permanent'
              open
            >
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
