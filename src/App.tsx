import { AppLayout } from 'layouts/AppLayout';
import { NotFound } from 'pages/404';
import { Home } from 'pages/Home';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import { getLocale, setLocale } from 'services/localStorage';

import { GlobalStyle } from './globalStyle';

export const App: FC = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const locale = getLocale();
    if (locale !== null) {
      i18n.changeLanguage(locale.value);
    } else {
      i18n.changeLanguage('lt');
      setLocale({ value: 'lt', label: 'LT' });
    }
  }, [i18n]);

  return (
    <AppLayout>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
};

// Caveat and Open sans serif fonts
