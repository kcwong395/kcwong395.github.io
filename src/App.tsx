import React from 'react';
import './App.css';
import Home from './views/Home'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif'
    ].join(','),
  },
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Home />
      </React.Fragment>
    </ ThemeProvider>
  );
}

export default App;
