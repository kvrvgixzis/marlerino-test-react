import { useDispatch, useSelector } from 'react-redux';
import { changeLocale, toggleTheme } from '../redux/actions/app';
import { ReactComponent as LightTheme } from '../assets/img/lightTheme.svg';
import { ReactComponent as DarkTheme } from '../assets/img/darkTheme.svg';
import './Header.scss';

export const Header = () => {
  const locale = useSelector((state) => state.app.locale);
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    dispatch(changeLocale(newLocale));
  };

  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  const ThemeToggler = () => {
    if (theme === 'light') return <LightTheme />;
    if (theme === 'dark') return <DarkTheme />;
  };

  return (
    <>
      <header className="header">
        <button onClick={changeTheme} className="header__btn">
          <ThemeToggler />
        </button>
        <button onClick={toggleLocale} className="header__btn">
          {locale}
        </button>
      </header>
    </>
  );
};
