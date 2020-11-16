import { useState } from 'react';

import { FaQuestionCircle, FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { createOffer } from '../redux/actions/offers';

import { showAlert } from '../redux/actions/app';

export const OfferForm = () => {
  const [offer, setOffer] = useState({});
  const networks = useSelector((state) => state.offers.networks);
  const dispatch = useDispatch();

  const inputChangeHandler = ({ target }) => {
    const { value, name } = target;
    setOffer((prev) => ({ ...prev, [name]: value }));
  };

  const addOfferHandler = (e) => {
    e.preventDefault();

    const newOffer = {
      ...offer,
      id: Date.now().toString(),
      date: Date.now(),
    };

    if (!newOffer.name) {
      dispatch(showAlert('Enter offer name'));
      return;
    }

    if (newOffer.name.length > 16) {
      dispatch(showAlert('Offer name too long'));
      return;
    }

    if (!newOffer.url) {
      dispatch(showAlert('Enter offer url'));
      return;
    }

    if (!newOffer.network) {
      dispatch(showAlert('Select offer network'));
      return;
    }

    dispatch(createOffer(newOffer));
  };

  return (
    <div>
      <form className="form" onSubmit={addOfferHandler}>
        <div className="form__row">
          <div className="form__input-holder">
            <div className="form__input-title">Offer name</div>
            <div className="form__input">
              <input
                onChange={inputChangeHandler}
                name="name"
                type="text"
                placeholder="Up to 16 symbols"
              />
            </div>
          </div>
          <div className="form__input-holder">
            <div className="form__input-title">Offer URL</div>
            <div className="form__input">
              <input
                onChange={inputChangeHandler}
                type="text"
                name="url"
                placeholder="URL"
              />
              <FaQuestionCircle />
            </div>
          </div>
          <div className="form__input-holder">
            <div className="form__input-title">Network</div>
            <select onChange={inputChangeHandler} name="network">
              {networks.map((n) => (
                <option key={n.id} value={n.name + n.id}>
                  {n.name + n.id}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form__row form__row--msg">
          <div className="form__msg">
            <FaArrowLeft />
            <span>
              Free installs with offers from <a href="/">LordOfApps Network</a>
            </span>
          </div>
          <button className="form__submit" type="submit">
            Add a new outside offer
          </button>
        </div>
      </form>
    </div>
  );
};
