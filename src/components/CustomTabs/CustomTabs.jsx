import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

import React from 'react';
const CustomTabs = (props) => {
  const { icon, name, active } = props;
  return (
    <Card
      variant='outlined'
      sx={{
        cursor: 'pointer',
        background: '#F4F3FC 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #00000029',
        border: '1px solid #BFBDF2',
        borderRadius: '12px',
      }}
    >
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ background: '#5855DF 0% 0% no-repeat padding-box' }}>
              {icon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                variant='body2'
                style={{
                  font: 'normal normal 600 16px/19px Montserrat',
                  color: '#5855DF',
                  textTransform: 'capitalize',
                }}
              >
                {name}
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
};

export default CustomTabs;
