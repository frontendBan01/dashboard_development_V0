import { Grid } from '@mui/material';
import React, { useState } from 'react';
import {
  Approvals,
  Budget,
  CustomizedAccordions,
  CustomTabs,
  ProjectLiveFeed,
  Quality,
  Safety,
  Schedule,
} from '../../components';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Box } from '@mui/system';
const ProjectDescription = () => {
  const [projectDetailsSections, setProjectDetailsDescriptions] = useState([
    {
      name: 'Schedule',
      active: true,
      icon: <AccessibilityNewIcon />,
      component: <Schedule />,
    },
    {
      name: 'Budget',
      active: false,
      icon: <AccountCircleIcon />,
      component: <Budget />,
    },
    {
      name: 'Approvals',
      active: false,
      icon: <AddAlertIcon />,
      component: <Approvals />,
    },
    {
      name: 'Quality',
      active: false,
      icon: <AddBoxIcon />,
      component: <Quality />,
    },
    {
      name: 'Safety',
      active: false,
      icon: <AddPhotoAlternateIcon />,
      component: <Safety />,
    },
    {
      name: 'Projects',
      active: false,
      icon: <AdminPanelSettingsIcon />,
      component: <ProjectLiveFeed />,
    },
  ]);
  const handleProjectDetails = (index) => {
    setProjectDetailsDescriptions((prev, curr) => {
      prev.forEach((item, i) => {
        item.active = false;
        if (index === i) {
          item.active = true;
        }
      });
      return [...prev];
    });
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomizedAccordions />
        </Grid>
        {projectDetailsSections &&
          projectDetailsSections.map((item, index) => (
            <Grid
              item
              xs={2}
              key={index}
              onClick={() => handleProjectDetails(index)}
            >
              <CustomTabs
                icon={item.icon}
                name={item.name}
                active={item.active}
              />
            </Grid>
          ))}
        {projectDetailsSections &&
          projectDetailsSections.map((item, index) => (
            <>
              {item.active && (
                <Grid item xs={12} key={index}>
                  {item.component}
                </Grid>
              )}
            </>
          ))}
      </Grid>
    </>
  );
};

export default ProjectDescription;
