import React from 'react';

import {Box, Divider, ImageListItem, Stack, Typography, Chip} from "@mui/material";
import icon from '../../static/recent_pic.jpg';

import CustomButton from '../../components/CustomButton';
import SkillItem from '../../components/skill/SkillItem';

// @ts-ignore
import resume from '../../static/MartinWong_Resume.pdf';
import skill from '../../data/skill.json';

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
          {
            skill.map((item) => {
              return(
                <SkillItem category={item.category} skill={item.skill} />
              )
            })
          }
        <CustomButton text="Download CV" href={resume} />
        </Stack>
      </Stack>
    </Box>
  );
}