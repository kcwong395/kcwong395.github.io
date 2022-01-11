import React from 'react';
import {Container, Grid} from "@mui/material"

import ContactBar from '../../components/contact/ContactBar'
import Banner from '../../components/Banner'

import icon from '../../static/background.jpg'

export default function Home() {
  return (
    <Grid
      id={'home'}
      container
      direction="column"
      justifyContent="space-between"
      sx={{
        minHeight: "100vh",
        color: "white",
        background: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${icon})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: { xs:"30%", md: "center" }
      }}
    >
      <Grid item />
      <Grid item>
        <Container>
          <Grid container justifyContent={{ xs: "center", md: "flex-end" }}>
            <Grid item sx={{ pb: { xs: 0, md: 15 } }}>
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
