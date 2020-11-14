import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './redux/store';

import './index.css';
import { fetchNetworks, fetchOffers } from './redux/actions/offers';
import { fetchApplications } from './redux/actions/applications';

// pre-fetch data
store.dispatch(fetchOffers());
store.dispatch(fetchNetworks());
store.dispatch(fetchApplications());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
