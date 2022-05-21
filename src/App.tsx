import React from 'react';
import logo from './logo.svg';
import './App.css';
import { theme } from './themes/main';
import {ThemeProvider} from '@mui/material/styles'
import Button from '@mui/material/Button'
import PrimarySearchAppBar from './components/appbar/appbar';
import { Layout } from './components/layout/Layout';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
