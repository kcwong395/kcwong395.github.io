import {Chip, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

export default function SkillItem(props: {
  category: string, skill: string[]
}) {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2 }}>
      <Typography variant="body1" component="div" sx={{minWidth: "175px"}}>
        {props.category}
      </Typography>
      <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "flex" } }} />
      <Stack direction="row" spacing={{ xs: 0.5 }}>
        {
          props.skill.map((item) => {
            return(
              <Chip label={item} variant="outlined" />
            )
          })
        }
      </Stack>
    </Stack>
  );
}