import './AppCard.scss';

import { Text } from '@eo-locale/react';

import screen1 from '../assets/img/screenshot-1.jpg';
import screen2 from '../assets/img/screenshot-2.jpg';
import screen3 from '../assets/img/screenshot-3.jpg';

import { showAlert } from '../redux/actions/app';

import { ReactComponent as Apple } from '../assets/img/Apple.svg';
import { ReactComponent as Google } from '../assets/img/Google.svg';
import { useDispatch } from 'react-redux';

const LinkToStore = ({ platform }) => {
  if (platform === 'Android') {
    return (
      <>
        <div>
          <Text id="app.openInStore" /> <a href="/">Google Play</a>
        </div>
        <Google />
      </>
    );
  }

  if (platform === 'iOS') {
    return (
      <>
        <div>
          <Text id="app.openInStore" /> <a href="/">Apple Store</a>
        </div>
        <Apple />
      </>
    );
  }
};

const AppRentBar = ({ app }) => {
  const dispatch = useDispatch();

  const handleRentBtn = () => {
    dispatch(showAlert('TBD'));
  };

  if (app.cabinets_over) {
    return <div className="app__cabinets-over">All cabinets are over</div>;
  }

  if (app.in_rent) {
    return (
      <div className="app__in-rent">
        <strong>In rent (personal & team)</strong>
        <span>${app.price} per user</span>
      </div>
    );
  }

  return (
    <button onClick={handleRentBtn} className="app__rent-btn">
      Rent for ${app.price} per user
    </button>
  );
};

export const AppCard = ({ app }) => {
  return (
    <section className="app">
      <div className="app__view-in-store">
        <LinkToStore platform={app.platform} />
      </div>
      <div className="app__header">
        <img src={app.icon} alt="" className="app__icon" />
        <h4 className="app__title">{app.name}</h4>
      </div>
      <div className="app__screenshots">
        <img src={screen1} alt="" className="app__screenshot" />
        <img src={screen2} alt="" className="app__screenshot" />
        <img src={screen3} alt="" className="app__screenshot" />
      </div>
      <AppRentBar app={app} />
    </section>
  );
};
