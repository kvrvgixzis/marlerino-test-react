import { FaPen } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import adsImage from '../assets/img/ads.jpg';

import './Offers.scss';

import { OfferForm } from '../components/OfferForm';
import { NetworkForm } from '../components/NetworkForm';

export const Offers = () => {
  const networks = useSelector((state) => state.offers.networks);
  const offers = useSelector((state) => state.offers.offers);

  return (
    <div className="offers">
      <div className="offers__left">
        <div className="offers__ads">
          <img src={adsImage} alt="ads" />
        </div>
        <NetworkForm />
        <div className="table">
          <div className="table__row table__row--header">
            <div>Name / ID</div>
            <div>Postback URL</div>
            <div>Offer URL template</div>
            <div>Date</div>
            <div></div>
          </div>
          {networks?.length
            ? networks.map((n) => {
                return (
                  <div key={n.id} className="table__row">
                    <div>{n.name + n.id}</div>
                    <div>{n.postback_url}</div>
                    <div>{n.offer_url_template}</div>
                    <div>{n.date}</div>
                    <div>
                      <FaPen />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className="offers__right">
        <OfferForm />
        <div className="table">
          <div className="table__row table__row--header">
            <div>Name / ID</div>
            <div>Offer URL</div>
            <div>Network</div>
            <div>Date</div>
            <div></div>
          </div>
          {offers?.length
            ? offers.map((n) => {
                return (
                  <div key={n.id} className="table__row">
                    <div>{n.name + n.id}</div>
                    <div>{n.url}</div>
                    <div>{n.network}</div>
                    <div>{n.date}</div>
                    <div>
                      <FaPen />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
