import {Container, Stack, Typography } from '@mui/material';
import React from 'react';
import ProfileItem from '../../components/profileItem/ProfileItem';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import CustomDivider from '../../components/CustomDivider';
import SectionHeader from '../../components/SectionHeader';
import education from '../../data/education.json';
import experience from '../../data/experience.json';
import certification from '../../data/certification.json';

export default function Profile() {
  return (
    <Stack id={'profile'} sx={{background: "rgb(255, 245, 236)"}}>
      <Container>
        <Stack direction="column"
               spacing={{ xs: 6 }}
               sx={{minHeight: "100vh", pt: 10, pb: 10}}
        >
          <Stack direction="column"
                 spacing={{ xs: 1 }}
                 alignItems="center"
          >
            <SectionHeader
              title="My Profile"
              describtion="Go confidently in the direction of your dreams. Live the life you have imagined"
            />
          </Stack>
          <Stack direction="column" spacing={{ xs: 3 }}>
            <Stack direction="column" spacing={{ xs: 0.5 }}>
              <Stack direction="row" spacing={{ xs: 1 }}>
                <Typography variant="h4" component="div">Experience</Typography><WorkOutlineOutlinedIcon fontSize="large" />
              </Stack>
              <CustomDivider />
            </Stack>
            <Stack direction="column" spacing={{xs: 3}}>
              {
                experience.map((item) => {
                  return(
                    <ProfileItem
                      organization={item.organization}
                      period={item.period}
                      location={item.location}
                      header={item.header}
                      stack={item.stack}
                      info={item.info}
                    />
                  )
                })
              }
            </Stack>
          </Stack>

          <Stack direction="column" spacing={{ xs: 2 }}>
            <Stack direction="column" spacing={{ xs: 0.5 }}>
              <Stack direction="row" spacing={{ xs: 1 }}>
                <Typography variant="h4" component="div">Education</Typography><SchoolOutlinedIcon fontSize="large" />
              </Stack>
              <CustomDivider />
            </Stack>
            <Stack direction="column" spacing={{xs: 3}}>
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
          </Stack>
          <Stack direction="column" spacing={{ xs: 3 }}>
            <Stack direction="column" spacing={{ xs: 0.5 }}>
              <Stack direction="row" spacing={{ xs: 1 }}>
                <Typography variant="h4" component="div">Certifications</Typography><MilitaryTechOutlinedIcon fontSize="large" />
              </Stack>
              <CustomDivider />
            </Stack>
            <Stack direction="column" spacing={{xs: 3}}>
              {
                certification.map((item) => {
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
        </Stack>
      </Container>
    </Stack>
  );
}