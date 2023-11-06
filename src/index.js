import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
