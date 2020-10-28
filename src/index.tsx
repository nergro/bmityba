import 'services/http';
import './i18n';

import { ScrollToTop } from 'Molecules/ScrollToTop';
import { ErrorPage } from 'pages/Error';
import React from 'react';
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Modal from 'react-modal';
import { BrowserRouter as Router } from 'react-router-dom';
import { lightTheme } from 'services/theme/lightTheme';
import { ContactsStoreProvider } from 'store/contactsStore/provider';
import { LocaleStoreProvider } from 'store/localeStore/provider';
import { MobileMenuStoreProvider } from 'store/mobileMenuStore/provider';
import { PostCategoryStoreProvider } from 'store/postCategories/provider';
import { PostsStoreProvider } from 'store/postsStore/provider';
import { QuestionsStoreProvider } from 'store/questionsStore/provider';
import { ServicesStoreProvider } from 'store/servicesStore/provider';
import { ThemeProvider } from 'styled-components/macro';
import { ToastContainer } from 'ToastContainer';

import { App } from './App';
import { ErrorBoundary } from './errorBoundary';
import { ProvidersInjector } from './ProvidersInjector';

Modal.setAppElement('#root');

const storeProviders = [
  MobileMenuStoreProvider,
  LocaleStoreProvider,
  ServicesStoreProvider,
  QuestionsStoreProvider,
  ContactsStoreProvider,
  PostsStoreProvider,
  PostCategoryStoreProvider,
];

ReactDOM.render(
  <ErrorBoundary error={<ErrorPage />}>
    <Router>
      <ProvidersInjector providers={storeProviders}>
        <ScrollToTop />
        <ThemeProvider theme={lightTheme}>
          <MessengerCustomerChat
            pageId="101922294933828"
            appId="1293900634284248"
            htmlRef="https://www.facebook.com/bmityba"
          />
          <App />
          <ToastContainer />
        </ThemeProvider>
      </ProvidersInjector>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);
