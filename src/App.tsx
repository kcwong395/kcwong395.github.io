import React from 'react';
import './App.css';
import Home from './views/Home'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material'
import Copyright from "./views/Copyright";

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
    mode: "dark",
    action: {
      active: "#efc8b1",
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <Copyright />
    </ ThemeProvider>
  );
}

export default App;
