import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import theme from "./utils/themes";
import { BrowserRouter } from "react-router-dom";

import "./index.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <ThemeProvider theme={theme}>

      <App />

    </ThemeProvider>
  </BrowserRouter>

)
