import 'services/http';
import './i18n';

import { ErrorPage } from 'pages/Error';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { BrowserRouter as Router } from 'react-router-dom';
import { lightTheme } from 'services/theme/lightTheme';
import { ThemeProvider } from 'styled-components/macro';
import { ToastContainer } from 'ToastContainer';

import { App } from './App';
import { ErrorBoundary } from './errorBoundary';
import { GlobalStyle } from './globalStyle';
import { ProvidersInjector } from './ProvidersInjector';
Modal.setAppElement('#root');

ReactDOM.render(
  <ErrorBoundary error={<ErrorPage />}>
    <Router>
      <ProvidersInjector providers={[]}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </ThemeProvider>
      </ProvidersInjector>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);
