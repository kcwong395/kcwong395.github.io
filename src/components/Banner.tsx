import * as React from 'react';
import {Grow, Stack, Typography} from "@mui/material";

import CustomButton from "./CustomButton";
import Typing from "../components/typing/Typing";

export default function Banner() {

  return (
    <Grow in={true} timeout={2000} style={{ transformOrigin: '0 0 0' }}>
      <Stack direction="column" spacing={{ xs: 2 }} sx={{ minWidth: "700px" }}>
        <Typography variant="h2" component="div">
          Martin WONG
        </Typography>
        <Typography variant="h4" component="div" sx={{ color: (theme) => `${theme.palette.primary.main}` }}>
          I'm a Software Engineer
        </Typography>
        <Typography variant="body1" component="div">
          Aspiring recent graduate seeking for challenges in <strong><i><Typing /></i></strong>
        </Typography>
        <CustomButton text="Read More" href="#about" />
      </Stack>
    </Grow>
  );
}