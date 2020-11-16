import { useState } from 'react';

import { FaQuestionCircle, FaInfoCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { createNetwork } from '../redux/actions/offers';

import { showAlert } from '../redux/actions/app';

export const NetworkForm = () => {
  const [network, setNetwork] = useState({
    offer_url_template: '{offer_url}?clickid={clickid}',
  });

  const dispatch = useDispatch();

  const inputChangeHandler = ({ target }) => {
    const { value, name } = target;
    setNetwork((prev) => ({ ...prev, [name]: value }));
  };

  const addNetworkHandler = (e) => {
    e.preventDefault();

    const newNetwork = {
      ...network,
      id: Date.now().toString(),
      date: Date.now(),
    };

    if (!newNetwork.name) {
      dispatch(showAlert('Enter network name'));
      return;
    }

    if (newNetwork.name.length > 16) {
      dispatch(showAlert('Network name too long'));
      return;
    }

    if (!newNetwork.postback_url) {
      dispatch(showAlert('Enter network postback url'));
      return;
    }

    dispatch(createNetwork(newNetwork));
  };

  return (
    <div>
      <form className="form" onSubmit={addNetworkHandler}>
        <div className="form__row">
          <div className="form__input-holder">
            <div className="form__input-title">Network name</div>
            <div className="form__input">
              <input
                name="name"
                onChange={inputChangeHandler}
                type="text"
                placeholder="Up to 16 symbols"
              />
            </div>
          </div>
          <div className="form__input-holder">
            <div className="form__input-title">Postback URL</div>
            <div className="form__input">
              <input
                type="text"
                name="postback_url"
                onChange={inputChangeHandler}
                placeholder="Postback URL from your affiliate program"
              />
              <FaQuestionCircle />
            </div>
          </div>
        </div>
        <div className="form__row form__row--msg">
          <div className="form__msg">
            <FaInfoCircle />
            <span>
              You need a network to create a campaign with outside offer,{' '}
              <a href="/">learn more</a>
            </span>
          </div>
          <button className="form__submit" type="submit">
            Make a new network
          </button>
        </div>
      </form>
    </div>
  );
};
