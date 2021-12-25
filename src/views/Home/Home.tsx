import React from 'react';
import {Grid} from "@mui/material"

import './Home.css'

import ContactBar from '../../components/contact/ContactBar'
import Banner from '../../components/Banner'

export default function Home() {
  return (
    <Grid container direction="column" justifyContent="space-between" id={'Section-Home'} sx={{minHeight: "100vh"}}>
      <Grid item></Grid>
      <Grid item>
        <Grid container>
          <Grid item xs={6} />
          <Grid item xs={6} sx={{ pl: 10 }}>
            <Banner />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ pl: 7, pb: 4 }}>
        <ContactBar />
      </Grid>
    </Grid>
  );
}
