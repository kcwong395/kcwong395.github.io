import React from 'react';
import {Container, Grid, Stack} from "@mui/material"

import './Home.css'

import ContactBar from '../../components/contact/ContactBar'
import Banner from '../../components/Banner'

export default function Home() {
  return (
    /*
      TODO: adjust the position of photo
    */
    <Grid className={"Section-Home"}
          container
          direction="column"
          justifyContent="space-between"
          sx={{ minHeight: "100vh" }}>
      <Grid item />
      <Grid item>
        <Container>
          <Grid container justifyContent={{ xs: "center", md: "flex-end" }}>
            <Grid item sx={{ pb: 15 }}>
              <Banner />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item sx={{ pb: 4, pl: { xs: 0, md: 7 } }}>
        <Grid container justifyContent={{ xs: "center", md: "flex-start" }}>
          <Grid item>
            <ContactBar />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
