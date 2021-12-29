import {Box, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import ProfileItem from '../../components/profileItem/ProfileItem';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

import education from '../../data/education.json';
import experience from '../../data/experience.json';

export default function Profile() {
  return (
    <Box id={'profile'} sx={{background: "rgb(255, 245, 236)"}}>
      <Container>
        <Stack direction="column"
               spacing={{ xs: 6 }}
               justifyContent="center"
               sx={{minHeight: "100vh", pt: 10, pb: 10}}
        >
          <Stack direction="column"
                 spacing={{ xs: 2 }}
                 alignItems="center"
          >
            <Typography variant="h3" component="div">My Profile</Typography>
            <Typography variant="body1" component="div"><i>Go confidently in the direction of your dreams. Live the life you have imagined.</i></Typography>
          </Stack>
          <Stack direction="column" spacing={{ xs: 2 }}>
            <Stack direction="row" spacing={{ xs: 1 }}>
              <SchoolOutlinedIcon fontSize="large" /><Typography variant="h4" component="div">Education</Typography>
            </Stack>
            <Divider />
            {
              education.map((item) => {
                return(
                  <ProfileItem
                    organization={item.organization}
                    period={item.period}
                    location={item.location}
                    header={item.header}
                    info={item.info}
                  />
                )
              })
            }
          </Stack>
          <Stack direction="column" spacing={{ xs: 2 }}>
            <Stack direction="row" spacing={{ xs: 1 }}>
              <WorkOutlineOutlinedIcon fontSize="large" /><Typography variant="h4" component="div">Experience</Typography>
            </Stack>
            <Divider />
            {
              experience.map((item) => {
                return(
                  <ProfileItem
                    organization={item.organization}
                    period={item.period}
                    location={item.location}
                    header={item.header}
                    info={item.info}
                  />
                )
              })
            }
          </Stack>
        </Stack>
      </Container>

    </Box>
  );
}