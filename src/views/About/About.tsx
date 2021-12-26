import React from 'react';

import './About.css';
import {Box, Container, Divider, Grid, ImageListItem, Stack, Typography, Chip} from "@mui/material";
import icon from '../../static/recent_pic.jpg';
import CustomButton from '../../components/CustomButton';

export default function About() {
  return (
    <Box className={"Section-About"} id={'about'}
          sx={{
            minHeight: "100vh",
            background: (theme) =>
              `linear-gradient(to right, 
              ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 40%, 
              ${theme.palette.background.paper} 40%, ${theme.palette.background.paper} 100%)`
          }}>
      <Stack
        direction={{xs: "column", lg: "row"}}
        spacing={12}
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
        <Stack direction="column" spacing={{ xs: 2 }} sx={{maxWidth: "65vh"}}>
          <Typography variant="h4" component="div">
            Martin WONG
          </Typography>
          <Typography variant="h6" component="div">
            A Recent Graduate Software Engineer
          </Typography>
          <Typography variant="body1" component="div">
            Recent Graduate with strong academic background, exposure in banking industry and large MNC.
            I am comfortable with coding in Java, Python, Go.
            Currently open to any coding-oriented opportunities and
            to work with teams having excellent practises such as TDD, Agile Methodology and high code review standard.
          </Typography>
          <Typography variant="body1" component="div">
            Web Technology | <Chip label="React.js" variant="outlined" /> <Chip label="Vue.js" variant="outlined" /> <Chip label="Ajax" variant="outlined" />
          </Typography>
          <Typography variant="body1" component="div">
            Backend Development | <Chip label="Java" variant="outlined" /> <Chip label="SpringBoot" variant="outlined" /> <Chip label="Python" variant="outlined" /> <Chip label="Flask" variant="outlined" />
          </Typography>
          <Typography variant="body1" component="div">
            Database Management | <Chip label="Postgresql" variant="outlined" /> <Chip label="MSsql" variant="outlined" /> <Chip label="Mongodb" variant="outlined" /> <Chip label="Redis" variant="outlined" />
          </Typography>
          <Typography variant="body1" component="div">
            Infrastructure & CI/CD | <Chip label="Terraform" variant="outlined" /> <Chip label="Docker" variant="outlined" /> <Chip label="AWS" variant="outlined" /> <Chip label="Azure" variant="outlined" />
          </Typography>
          <Typography variant="body1" component="div">
            Software Testing | <Chip label="Junit" variant="outlined" /> <Chip label="Postman" variant="outlined" />
          </Typography>
          <Typography variant="body1" component="div">
            Language | <Chip label="Cantonese (Native)" variant="outlined" /> <Chip label="English (IELTS: 7.5)" variant="outlined" /> <Chip label="Mandarin (Fluent)" variant="outlined" />
          </Typography>
        <CustomButton text="Download CV" />
        </Stack>
      </Stack>
    </Box>
  );
}