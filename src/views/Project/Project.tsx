import {Container, Stack } from '@mui/material';
import React from 'react';
import ProjectItem from '../../components/ProjectItem';
import SectionHeader from '../../components/SectionHeader';

import projects from '../../data/project.json';

export default function Project() {
  return (
    <Stack id={'projects'} sx={{background: "rgb(255, 255, 255)"}}>
      <Container>
        <Stack direction="column"
               spacing={{ xs: 6 }}
               justifyContent="center"
               sx={{minHeight: "100vh", pt: 10, pb: 10}}
        >
          <Stack direction="column"
                 spacing={{ xs: 1 }}
                 alignItems="center"
          >
            <SectionHeader
              title="My Projects"
              describtion="The man who moves a mountain begins by carrying away small stones."
            />
          </Stack>
          <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent="space-around" alignItems="center" spacing={{xs: 3}}>
            {
              projects.map((project) => {
                return(
                  <ProjectItem title={project.title} info={project.info} stack={project.stack}
                               link={project.link} source={project.source} path={project.path}
                               isAvailable={project.isAvailable}
                  />
                )
              })
            }
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}