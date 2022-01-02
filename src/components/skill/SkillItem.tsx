import {Chip, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

export default function SkillItem(props: {
  category: string, skill: string[]
}) {
  return (
    <Stack direction="row" spacing={{ xs: 2 }}>
      <Typography variant="body1" component="div" sx={{minWidth: "175px"}}>
        {props.category}
      </Typography>
      <Divider orientation="vertical" flexItem />
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