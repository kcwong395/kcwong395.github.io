import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Divider, Grid, Link, Stack} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: 'relative',
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
                <Link href="#" color="inherit" underline="none" sx={{ my: 3 }}>Martin Wong</Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={5}>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 4 }}>
              <Link href="#" color="inherit" underline="none">HOME</Link>
              <Link href="#about" color="inherit" underline="none">ABOUT ME</Link>
              <Link href="#profile" color="inherit" underline="none">PROFILE</Link>
              <Link href="#project" color="inherit" underline="none">PROJECTS</Link>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}