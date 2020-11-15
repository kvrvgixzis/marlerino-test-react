import './AppCard.scss';

import screen1 from '../assets/img/screenshot-1.jpg';
import screen2 from '../assets/img/screenshot-2.jpg';
import screen3 from '../assets/img/screenshot-3.jpg';

import { ReactComponent as Apple } from '../assets/img/Apple.svg';
import { ReactComponent as Google } from '../assets/img/Google.svg';

const LinkToStore = ({ platform }) => {
  console.log('platform: ', platform);
  if (platform === 'Google') {
    return (
      <>
        <div>
          Watch at <a href="">Google Play</a>
        </div>
        <Google />
      </>
    );
  }

  if (platform === 'Apple') {
    return (
      <>
        <div>
          Watch at <a href="">Apple Store</a>
        </div>
        <Apple />
      </>
    );
  }
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
      <div className="app__rent">In rent (personal & team) $0.25 per user</div>
    </section>
  );
};
