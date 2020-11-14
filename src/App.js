import { Alert } from './components/Alert/Alert';
import { Text, TranslationsProvider } from '@eo-locale/react';
import { useSelector } from 'react-redux';
import { locales } from './locales';

const App = () => {
  const locale = useSelector((state) => state.app.locale);

  return (
    <TranslationsProvider language={locale} locales={locales}>
      <Alert />
      <h1>
        <Text id="app.hello" name="React" />
      </h1>
    </TranslationsProvider>
  );
};

export default App;
