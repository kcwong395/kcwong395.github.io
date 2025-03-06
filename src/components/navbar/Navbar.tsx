import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Divider, Grid, Link, Stack} from "@mui/material";
import Menu from './Menu'
import './Navbar.css';

export default function Navbar() {

  const handleClick = (event: React.MouseEvent<HTMLElement>, dest: string) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(dest);

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

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
        <Grid container alignItems="center" justifyContent="space-evenly">
          <Grid item>
            <Grid container justifyContent="space-evenly">
              <Typography variant="h5" component="div">
                <Link underline="none" component="button" onClick={(evt) => handleClick(evt, "#home")} sx={{ typography: "h5" }}>Martin Wong</Link>
              </Typography>
            </Grid>
          </Grid>
          {/* navbar shows only in large screen */}
          <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 4 }}>
              {
                ['HOME', 'ABOUT ME', 'PROFILE', 'PROJECTS'].map((item) => {
                  return(
                      <Link underline="none" component="button" onClick={(evt) => handleClick(evt, "#".concat(item.replaceAll(" ", "").toLowerCase()))} sx={{ typography: "h6", fontSize: 16 }}>{item}</Link>
                  )
                })
              }
            </Stack>
          </Grid>
          {/* menu shows only in small screen */}
          <Grid item sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Menu />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}