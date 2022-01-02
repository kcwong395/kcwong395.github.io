import {Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import ProjectItem from '../../components/ProjectItem';

import projects from '../../data/project.json';
import icon0 from '../../static/project/0.jpg';
import icon1 from '../../static/project/1.jpg';
import icon2 from '../../static/project/2.jpg';

export default function Project() {
  return (
    <Stack id={'project'} sx={{background: "rgb(255, 255, 255)"}}>
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
            <Typography variant="h3" component="div">My Projects</Typography>
            <Divider
              sx={{
                color: (theme) => `${theme.palette.secondary.main}`,
                backgroundColor: (theme) => `${theme.palette.secondary.main}`,
                height: 6,
                width: 60,
              }}
            />
            <Typography variant="body1" component="div"><i>The man who moves a mountain begins by carrying away small stones.</i></Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-around" spacing={{xs: 3}}>
            <ProjectItem title={projects[0].title} info={projects[0].info} stack={projects[0].stack}
                         link={projects[0].link} source={projects[0].source} path={icon0}
            />
            <ProjectItem title={projects[1].title} info={projects[1].info} stack={projects[1].stack}
                         link={projects[1].link} source={projects[1].source} path={icon1}
            />
            <ProjectItem title={projects[2].title} info={projects[2].info} stack={projects[2].stack}
                         link={projects[2].link} source={projects[2].source} path={icon2}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}