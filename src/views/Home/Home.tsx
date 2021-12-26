import React from 'react';
import {Grid} from "@mui/material"

import './Home.css'

import ContactBar from '../../components/contact/ContactBar'
import Banner from '../../components/Banner'

export default function Home() {
  return (
    <Grid className={"Section-Home"} container
          direction="column"
          justifyContent="space-between"
          sx={{ minHeight: "100vh" }}>
      <Grid item />
      <Grid item>
        <Grid container>
          <Grid item xs={6} />
          <Grid item xs={6} sx={{ pl: 5, pb: 15 }}>
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
