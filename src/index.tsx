import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './img/OARTheme.png';
import './scss/entrypoint.scss';

import '@Icons/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from '@Components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement,
);
