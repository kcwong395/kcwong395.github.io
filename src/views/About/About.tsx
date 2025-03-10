import React from 'react';

import {ImageListItem, Stack, Typography, Container} from "@mui/material";
import icon from '../../static/recent_pic.jpg';

import CustomButton from '../../components/CustomButton';
import SkillItem from '../../components/skill/SkillItem';

import skill from '../../data/skill.json';

export default function About() {
  /*
  background: (theme) => `linear-gradient(to right,
                ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main} 40%,
                ${theme.palette.background.paper} 40%, ${theme.palette.background.paper} 100%)`
   */
  return (
    /*
      TODO: color should not hard code here
     */
    <Stack
      id={'aboutme'}
      direction={{xs: "column", lg: "row"}}
      spacing={10}
      sx={{
        minHeight: "100vh",
        background: {
          xs: "white",
          lg: `linear-gradient(to right, #514644 0%, #514644 40%, white 40%, white 100%)`
        },
        pt: 10,
        pb: 10
      }}
      alignItems="center"
      justifyContent="center"
    >
      <ImageListItem
        sx={{
          maxWidth: { xs: "40vh", md: "55vh" },
          outline: (theme) => `10px solid white`
        }}>
        <img
          src={icon}
          alt="Martin's icon"
          loading="lazy"
        />
      </ImageListItem>
      <Container maxWidth="sm">
        <Stack direction="column" spacing={{ xs: 2 }}>
          <Typography variant="h4" component="div">
            Martin WONG
          </Typography>
          <Typography variant="body1" component="div">
            Martin is a Software Engineer with 3+ years of experience in developing scalable, high-performance backend APIs.
            He is legally entitled to work in Canada, and no work permit sponsorship is required.
          </Typography>
          {
            skill.map((item) => {
              return(
                <SkillItem category={item.category} skill={item.skill} />
              )
            })
          }
          <CustomButton text="Download CV" href="./MartinWong_Resume.pdf" />
        </Stack>
      </Container>
    </Stack>
  );
}