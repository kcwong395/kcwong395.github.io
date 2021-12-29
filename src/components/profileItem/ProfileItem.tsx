import React from 'react';
import {Grid, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function ProfileItem(props: {
  organization: string, period: string, location: string, header: string, info: string[]
}) {
  return (
    <Grid container>
      <Grid item lg={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" component="div">{props.organization}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" component="div">{props.period}</Typography>
          </Grid>
          <Grid item xs={6} justifyContent="center">
          <LocationOnOutlinedIcon />{props.location}
        </Grid>
        </Grid>
      </Grid>
      <Grid item lg={8}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" component="div">{props.header}</Typography>
          </Grid>
          <Grid item xs={12}>
            <ul>
              {
                props.info.map((item) => {
                  return(
                    <li>{item}</li>
                  )
                })
              }
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}