import React from 'react';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline, Fab} from '@mui/material'

// import views
import Navbar from "./components/Navbar";
import Home from './views/Home/Home'
import About from "./views/About/About";
import Profile from './views/Profile/Profile';
import Copyright from "./views/Copyright/Copyright";

import './App.css';
import ScrollTop from './components/ScrollTop';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const theme = createTheme({
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700
    },
    h2: {
      fontWeight: 700
    },
    h3: {
      fontWeight: 700
    },
    h4: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 700
    },
    h6: {
      fontWeight: 700
    }
  },
  palette: {
    primary: {
      main: "#efc8b1"
    },
    secondary: {
      main: "#514644"
    },
    mode: "light",
    action: {
      active: "#efc8b1",
    }
  }
});

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function App(props: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Profile />
      <Copyright />
      <ScrollTop {...props}>
        <a href="#">
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </a>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default App;
