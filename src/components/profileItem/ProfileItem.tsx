import React from 'react';
import {Grid, Stack, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

export default function ProfileItem(props: {
  organization: string, period: string, location: string, header: string, info: string[]
}) {
  return (
    <Grid container>
      <Grid item lg={4} xs={12} sx={{ pb: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" component="div">{props.organization}</Typography>
          </Grid>
          <Grid item xs={6} sm={5} md={3} lg={6}>
            <Stack direction="row" spacing={0.5}>
              <TimelineIcon />
              <Typography variant="body1" component="div">{props.period}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={5} md={3} lg={6}>
            <Stack direction="row" spacing={0.5}>
              <LocationOnOutlinedIcon />
              <Typography variant="body1" component="div">{props.location}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={8} xs={12} sx={{ pb: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" component="div">{props.header}</Typography>
          </Grid>
          <Grid item xs={12}>
            {
              props.info.map((item) => {
                return(
                  <Stack direction="row" spacing={{ xs: 0.5 }}>
                    <DoneOutlinedIcon />
                    <Typography variant="body1" component="div">
                      {item}
                    </Typography>
                  </Stack>

                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}