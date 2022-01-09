import * as React from 'react';
import {Box, Container, Grid, Grow, Stack, Typography} from "@mui/material";

import CustomButton from "./CustomButton";
import Typing from "../components/typing/Typing";

export default function Banner() {

  return (
    <Grow in={true} timeout={2000} style={{ transformOrigin: '0 0 0' }}>
      <Stack direction="column" spacing={{ xs: 2 }} sx={{ minWidth: { md: "560px", xs: "200px" } }}>
        <Typography component="div" sx={{ typography: { md: 'h2', xs: 'h3' } }}>
          Martin WONG
        </Typography>
        <Typography
          component="div"
          sx={{
            color: (theme) => `${theme.palette.primary.main}`,
            typography: { md: 'h4', xs: 'h5' }
          }}
        >
          I'm a Software Engineer
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 0.5 }}>
          <Typography variant="body1" component="div">
            Recent graduate seeking for challenges in
          </Typography>
          <Typography variant="body1" component="div" sx={{ color: (theme) => `${theme.palette.primary.main}` }}>
            <strong><i><Typing /></i></strong>
          </Typography>
        </Stack>
        <CustomButton text="Read More" href="#about" />
      </Stack>
    </Grow>
  );
}