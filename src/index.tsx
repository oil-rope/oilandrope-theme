import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './scss/entrypoint.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from '@Components/App';

const rootElement =
  document.getElementById('root') || document.createElement('div');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
