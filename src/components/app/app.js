import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ShoppingList from '../shopping-list';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556080',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#D8625E',
      contrastText: '#ffffff',
    },
  },
});

export default function app() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ShoppingList />
    </ThemeProvider>
  );
}
