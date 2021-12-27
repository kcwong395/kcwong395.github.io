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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Profile />
      <Copyright />
      <ScrollTop />
    </ThemeProvider>
  );
}

export default App;
