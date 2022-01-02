import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Divider, Grid, Link, Stack} from "@mui/material";
import './Navbar.css';

export default function Navbar() {
  return (
    <AppBar
      className="navbar"
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: "rgba(0, 0, 0, 0)",
        fontWeight: 700
      }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={5}>
            <Grid container justifyContent="space-evenly">
              <Typography variant="h5" component="div">
                <Link href="#" underline="none" sx={{ my: 3 }}>Martin Wong</Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={5}>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 4 }}>
              <Link href="#" underline="none">HOME</Link>
              <Link href="#about" underline="none">ABOUT ME</Link>
              <Link href="#profile" underline="none">PROFILE</Link>
              <Link href="#project" underline="none">PROJECTS</Link>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}