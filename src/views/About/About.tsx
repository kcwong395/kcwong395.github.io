import React from 'react';

import {Box, Divider, ImageListItem, Stack, Typography, Chip} from "@mui/material";
import icon from '../../static/recent_pic.jpg';

// @ts-ignore
import resume from '../../static/MartinWong_Resume.pdf';
import CustomButton from '../../components/CustomButton';

export default function About() {
  return (
    <Box id={'about'}
          sx={{
            background: (theme) =>
              `linear-gradient(to right, 
              ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main} 40%, 
              ${theme.palette.background.paper} 40%, ${theme.palette.background.paper} 100%)`
          }}>
      <Stack
        direction={{xs: "column", lg: "row"}}
        spacing={10}
        sx={{minHeight: "100vh", minWidth: "100vh"}}
        alignItems="center"
        justifyContent="center"
      >
        <ImageListItem
          sx={{
            maxWidth: "55vh",
            outline: (theme) => `10px solid ${theme.palette.background.paper}`
          }}>
          <img
            src={icon}
            alt="Martin's icon"
            loading="lazy"
          />
        </ImageListItem>
        <Stack direction="column" spacing={{ xs: 2 }} sx={{maxWidth: "60vh"}}>
          <Typography variant="h4" component="div">
            Martin WONG
          </Typography>
          <Typography variant="h6" component="div">
            A Recent Graduate Software Engineer
          </Typography>
          <Typography variant="body1" component="div">
            Recent Graduate with strong academic background, exposure in banking industry and large MNC.
            Currently open to any coding-oriented opportunities and
            to work with teams having excellent practises such as TDD, Agile Methodology and high code review standard.
          </Typography>
          <Stack direction="row" spacing={{ xs: 2 }}>
            <Typography variant="body1" component="div" sx={{minWidth: "175px"}}>
              Frontend Design
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" component="div">
              <Chip label="React.js" variant="outlined" /> <Chip label="Vue.js" variant="outlined" /> <Chip label="Restful APIs" variant="outlined" /> <Chip label="Postman" variant="outlined" />
            </Typography>
          </Stack>
          <Stack direction="row" spacing={{ xs: 2 }}>
            <Typography variant="body1" component="div" sx={{minWidth: "175px"}}>
              Backend Development
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" component="div">
              <Chip label="Java" variant="outlined" /> <Chip label="SpringBoot" variant="outlined" /> <Chip label="JUnit" variant="outlined" /> <Chip label="Python" variant="outlined" /> <Chip label="Flask" variant="outlined" />
            </Typography>
          </Stack>
          <Stack direction="row" spacing={{ xs: 2 }}>
            <Typography variant="body1" component="div" sx={{minWidth: "175px"}}>
              Database Management
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" component="div">
              <Chip label="Postgresql" variant="outlined" /> <Chip label="MSsql" variant="outlined" /> <Chip label="Mongodb" variant="outlined" /> <Chip label="Redis" variant="outlined" />
            </Typography>
          </Stack>
          <Stack direction="row" spacing={{ xs: 2 }}>
            <Typography variant="body1" component="div" sx={{minWidth: "175px"}}>
              Infrastructure & CI/CD
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" component="div">
              <Chip label="Terraform" variant="outlined" /> <Chip label="Docker" variant="outlined" /> <Chip label="AWS" variant="outlined" /> <Chip label="Azure" variant="outlined" />
            </Typography>
          </Stack>
          <Stack direction="row" spacing={{ xs: 2 }}>
            <Typography variant="body1" component="div" sx={{minWidth: "175px"}}>
              Language
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" component="div">
              <Chip label="Cantonese" variant="outlined" /> <Chip label="English (IELTS: 7.5)" variant="outlined" /> <Chip label="Mandarin" variant="outlined" />
            </Typography>
          </Stack>
        <CustomButton text="Download CV" href={resume} />
        </Stack>
      </Stack>
    </Box>
  );
}