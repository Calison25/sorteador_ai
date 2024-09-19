import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import Sorteador from './components/Sorteador';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Sorteador />
      </div>
    </ThemeProvider>
  );
}

export default App;
