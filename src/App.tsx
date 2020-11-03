import 'moment/locale/lt';

import { AppLayout } from 'layouts/AppLayout';
import { NotFound } from 'pages/404';
import Home from 'pages/Home';
import React, { FC, lazy, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import { getLocale } from 'services/localStorage';
import { useDispatch as useLocaleDispatch } from 'store/localeStore/hooks';

import { GlobalStyle } from './globalStyle';

const About = lazy(() => import('pages/About'));
const Blog = lazy(() => import('pages/Blog'));
const Contacts = lazy(() => import('pages/Contacts'));
const Post = lazy(() => import('pages/Post'));
const Service = lazy(() => import('pages/Service'));
const Services = lazy(() => import('pages/Services'));

export const App: FC = () => {
  const localeDispatch = useLocaleDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    const locale = getLocale();
    if (locale !== null) {
      localeDispatch({ type: 'Locale/Set', payload: locale });
      i18n.changeLanguage(locale);
    } else {
      i18n.changeLanguage('lt');
      localeDispatch({ type: 'Locale/Set', payload: 'lt' });
    }
  }, [i18n, localeDispatch]);

  return (
    <AppLayout>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/:id" exact component={Service} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" exact component={Post} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
};
