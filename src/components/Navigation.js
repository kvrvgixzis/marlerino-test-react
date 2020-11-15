import { Text } from '@eo-locale/react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../assets/colors';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { ReactComponent as LogoDark } from '../assets/img/logoDark.svg';
import './Navigation.scss';

const OffersIcon = ({ isActive }) => {
  const theme = useSelector((state) => state.app.theme);
  const fillColor = isActive
    ? colors[theme].navIcon.active
    : colors[theme].navIcon.inactive;
  return (
    <svg width="16" height="16" viewBox="0 0 19 19" fill="none">
      <path
        d="M0.0681463 8.97997C0.023367 9.5621 0.235197 10.1347 0.648041 10.5476L8.48288 18.3824C9.26393 19.1635 10.5303 19.1635 11.3113 18.3824L18.3824 11.3113C19.1634 10.5303 19.1634 9.26396 18.3824 8.48291L10.5475 0.64808C10.1347 0.235235 9.56206 0.0234053 8.97993 0.0681844L2.41394 0.573261C1.43038 0.648919 0.648881 1.43042 0.573223 2.41398L0.0681463 8.97997ZM7.06866 7.0687C7.84971 6.28765 7.84971 5.02132 7.06866 4.24027C6.28761 3.45923 5.02129 3.45923 4.24024 4.24027C3.45919 5.02132 3.45919 6.28765 4.24024 7.0687C5.02129 7.84975 6.28761 7.84975 7.06866 7.0687Z"
        fill={fillColor}
      />
    </svg>
  );
};

const AppsIcon = ({ isActive }) => {
  const theme = useSelector((state) => state.app.theme);
  const fillColor = isActive
    ? colors[theme].navIcon.active
    : colors[theme].navIcon.inactive;
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M0 3.5C0 3.77614 0.223858 4 0.5 4H3.5C3.77614 4 4 3.77614 4 3.5V0.5C4 0.223858 3.77614 0 3.5 0H0.5C0.223858 0 0 0.223858 0 0.5V3.5Z"
        fill={fillColor}
      />
      <path
        d="M6 15.5C6 15.7761 6.22386 16 6.5 16H9.5C9.77614 16 10 15.7761 10 15.5V12.5C10 12.2239 9.77614 12 9.5 12H6.5C6.22386 12 6 12.2239 6 12.5V15.5Z"
        fill={fillColor}
      />
      <path
        d="M4 15.5C4 15.7761 3.77614 16 3.5 16H0.5C0.223858 16 0 15.7761 0 15.5V12.5C0 12.2239 0.223858 12 0.5 12H3.5C3.77614 12 4 12.2239 4 12.5V15.5Z"
        fill={fillColor}
      />
      <path
        d="M0 9.5C0 9.77614 0.223858 10 0.5 10H3.5C3.77614 10 4 9.77614 4 9.5V6.5C4 6.22386 3.77614 6 3.5 6H0.5C0.223858 6 0 6.22386 0 6.5V9.5Z"
        fill={fillColor}
      />
      <path
        d="M10 9.5C10 9.77614 9.77614 10 9.5 10H6.5C6.22386 10 6 9.77614 6 9.5V6.5C6 6.22386 6.22386 6 6.5 6H9.5C9.77614 6 10 6.22386 10 6.5V9.5Z"
        fill={fillColor}
      />
      <path
        d="M12.5 0C12.2239 0 12 0.223858 12 0.5V3.5C12 3.77614 12.2239 4 12.5 4H15.5C15.7761 4 16 3.77614 16 3.5V0.5C16 0.223858 15.7761 0 15.5 0H12.5Z"
        fill={fillColor}
      />
      <path
        d="M10 3.5C10 3.77614 9.77614 4 9.5 4H6.5C6.22386 4 6 3.77614 6 3.5V0.5C6 0.223858 6.22386 0 6.5 0H9.5C9.77614 0 10 0.223858 10 0.5V3.5Z"
        fill={fillColor}
      />
      <path
        d="M12 9.5C12 9.77614 12.2239 10 12.5 10H15.5C15.7761 10 16 9.77614 16 9.5V6.5C16 6.22386 15.7761 6 15.5 6H12.5C12.2239 6 12 6.22386 12 6.5V9.5Z"
        fill={fillColor}
      />
      <path
        d="M16 15.5C16 15.7761 15.7761 16 15.5 16H12.5C12.2239 16 12 15.7761 12 15.5V12.5C12 12.2239 12.2239 12 12.5 12H15.5C15.7761 12 16 12.2239 16 12.5V15.5Z"
        fill={fillColor}
      />
    </svg>
  );
};

const NavLink = ({ path, paths, textId, Icon }) => {
  const location = useLocation();
  const isActive = paths.includes(location.pathname);
  const navStyle = `nav__link ${isActive ? 'nav__link--active' : ''}`;

  return (
    <Link className={navStyle} to={path}>
      <Icon isActive={isActive} />
      <Text id={textId} />
    </Link>
  );
};

export const Navigation = () => {
  const theme = useSelector((state) => state.app.theme);

  const links = [
    {
      path: '/applications',
      paths: ['/applications', '/', '/marlerino-test-react/'],
      Icon: AppsIcon,
      textId: 'nav.apps',
    },
    {
      path: '/offers',
      paths: ['/offers'],
      Icon: OffersIcon,
      textId: 'nav.offers',
    },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          {theme === 'light' ? <Logo /> : <LogoDark />}
        </div>
        {links.map((props) => (
          <NavLink key={props.path} {...props} />
        ))}
      </nav>
    </>
  );
};
