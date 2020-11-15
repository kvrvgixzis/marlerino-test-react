import { TranslationsProvider } from '@eo-locale/react';

import { Header } from '../components/Header';
import { Alert } from '../components/Alert';

import { useSelector } from 'react-redux';
import { locales } from '../locales';

import { Navigation } from '../components/Navigation';

import './MainLayout.scss';

export const MainLayout = ({ children }) => {
  const locale = useSelector((state) => state.app.locale);

  return (
    <TranslationsProvider language={locale} locales={locales}>
      <Alert />
      <div className="container">
        <div className="bg-green-circle-1" />
        <div className="bg-green-circle-2" />
        <Navigation />
        <div className="container__right">
          <Header />
          <main className="main">{children}</main>
        </div>
      </div>
    </TranslationsProvider>
  );
};
