import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Box, Button, Divider, Grid, IconButton, Link, Menu, MenuItem, Stack} from "@mui/material";
import './Navbar.css';

export default function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
          <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 4 }}>
              <Link underline="none" component="button" onClick={(evt) => handleClick(evt, "#home")} sx={{ typography: "h6", fontSize: 16 }}>HOME</Link>
              <Link underline="none" component="button" onClick={(evt) => handleClick(evt, "#about")} sx={{ typography: "h6", fontSize: 16 }}>ABOUT ME</Link>
              <Link underline="none" component="button" onClick={(evt) => handleClick(evt, "#profile")} sx={{ typography: "h6", fontSize: 16 }}>PROFILE</Link>
              <Link underline="none" component="button" onClick={(evt) => handleClick(evt, "#project")} sx={{ typography: "h6", fontSize: 16 }}>PROJECTS</Link>
            </Stack>
          </Grid>
          <Grid item sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: (theme) => `${theme.palette.primary.main}`}}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link underline="none" component="button" onClick={(evt) => handleClick(evt, "#home")} sx={{ typography: "h6", fontSize: 14 }}>HOME</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link underline="none" component="button" onClick={(evt) => handleClick(evt, "#about")} sx={{ typography: "h6", fontSize: 14 }}>ABOUT ME</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                   <Link underline="none" component="button" onClick={(evt) => handleClick(evt, "#profile")} sx={{ typography: "h6", fontSize: 14 }}>PROFILE</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link underline="none" component="button" onClick={(evt) => handleClick(evt, "#project")} sx={{ typography: "h6", fontSize: 14 }}>PROJECTS</Link>
                </MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}