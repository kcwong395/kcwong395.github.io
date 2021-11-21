import React from 'react';
import {Grid} from "@mui/material"

import './Home.css'

import Navbar from '../components/Navbar'
import ContactBar from '../components/contact/ContactBar'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <Grid container direction="column" justifyContent="space-between" id={'Section-Home'}>
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item>
        <Grid container justifyContent="flex-end" alignItems="center">
          <Grid item sx={{ pr: 40, pb: 20 }}>
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
