import { useDispatch, useSelector } from 'react-redux';
import { changeLocale } from '../redux/actions/app';
import './Header.scss';

export const Header = () => {
  const locale = useSelector((state) => state.app.locale);
  const dispatch = useDispatch();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    dispatch(changeLocale(newLocale));
  };

  return (
    <>
      <header className="header">
        <button onClick={toggleLocale} className="change-locale-btn">
          {locale}
        </button>
      </header>
    </>
  );
};
