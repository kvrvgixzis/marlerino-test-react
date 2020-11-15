import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@eo-locale/react';
import { FaSearch } from 'react-icons/fa';

import { AppCard } from '../components/AppCard';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Applications.scss';

const ButtonGroup = ({ object, change }) => {
  const handleClick = (i) => {
    change(i);
  };

  return (
    <div className="input__btns-group">
      {object.items.map((item, i) => {
        const style = i === object.active ? 'btn btn--active' : 'btn';
        return (
          <button onClick={() => handleClick(i)} className={style} key={item}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export const Applications = () => {
  const [platforms, setPlatforms] = useState({
    items: ['All', 'Android', 'iOS'],
    active: 0,
  });

  const [types, setTypes] = useState({
    items: ['All', 'Google only', 'Deeplink'],
    active: 0,
  });

  const [filteredApps, setFilteredApps] = useState(undefined);

  const searchInput = useRef();

  const apps = useSelector((state) => state.applications.applications);

  const platformsHandler = (i) => {
    clearFilters();

    setPlatforms((prev) => ({ ...prev, active: i }));
    setFilteredApps(apps);
    if (i === 0) return;

    const filtered = apps.filter(
      ({ platform }) => platform === platforms.items[i]
    );
    setFilteredApps(filtered);
  };

  const typesHandler = (i) => {
    clearFilters();

    setTypes((prev) => ({ ...prev, active: i }));
    setFilteredApps(apps);
    if (i === 0) return;

    const filtered = apps.filter(({ type }) => type === types.items[i]);
    setFilteredApps(filtered);
  };

  const searchHandler = ({ target }) => {
    const query = target.value;
    const filtered = apps.filter(({ name }) => name.includes(query));
    console.log('filtered: ', filtered);
    setFilteredApps(filtered);
  };

  const priceHandler = (value) => {
    clearFilters();

    const [minPrice, maxPrice] = value;
    const filtered = apps.filter(
      ({ price }) => price >= minPrice && price <= maxPrice
    );
    setFilteredApps(filtered);
  };

  const clearFilters = () => {
    setPlatforms((prev) => ({ ...prev, active: 0 }));
    setTypes((prev) => ({ ...prev, active: 0 }));
    setFilteredApps(apps);
    searchInput.current.value = '';
  };

  useEffect(() => {
    if (!filteredApps && apps.length) {
      setFilteredApps(apps);
    }
  }, [apps, filteredApps]);

  return (
    <div className="apps">
      <div className="apps__filter">
        <div className="apps__search">
          <div className="input">
            <FaSearch />
            <input
              ref={searchInput}
              onChange={searchHandler}
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="apps__platform">
          <div className="input">
            <ButtonGroup change={platformsHandler} object={platforms} />
          </div>
        </div>
        <div className="apps__type">
          <div className="input">
            <ButtonGroup change={typesHandler} object={types} />
          </div>
        </div>
        <div className="apps__price">
          <div className="input input--slim">
            <Range
              min={0}
              max={25}
              className="input__slider"
              defaultValue={[0, 25]}
              tipFormatter={(value) => `${value}%`}
              onChange={priceHandler}
            />
          </div>
          <div className="range">
            <div>$0</div>
            <div>$25</div>
          </div>
        </div>
        <div className="apps__sort"></div>
      </div>
      <div className="apps__grid">
        {filteredApps?.length ? (
          filteredApps.map((app) => <AppCard key={app.id} app={app} />)
        ) : (
          <div className="apps__placeholder">
            <Text id="apps.placeholder" />
          </div>
        )}
      </div>
    </div>
  );
};
