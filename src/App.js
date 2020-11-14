import { MainLayout } from './layouts/MainLayout';
import { Switch, Route } from 'react-router-dom';
import { Applications } from './pages/Applications';
import { Offers } from './pages/Offers';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/offers">
          <Offers />
        </Route>
        <Route path={['/', '/applications']}>
          <Applications />
        </Route>
      </Switch>
    </MainLayout>
  );
};

export default App;
