import { ReactComponent as HomeIcon } from '../assets/svg/ic_home.svg';
import { ReactComponent as SearchIconBlack } from '../assets/svg/ic_search_black.svg';
import { ReactComponent as TablesIcon } from '../assets/svg/ic_tables.svg';
import { ReactComponent as CalendarIcon } from '../assets/svg/ic_calendars.svg';
import { ReactComponent as MapsIcon } from '../assets/svg/ic_maps.svg';
import { ReactComponent as WidgetsIcon } from '../assets/svg/ic_widgets.svg';
import { ReactComponent as SettingsIcon } from '../assets/svg/ic_settings.svg';
import { ReactComponent as ProfileSettingsIcon } from '../assets/svg/ic_profile-settings.svg';
import { ReactComponent as FinanceIcon } from '../assets/svg/ic_finance-management.svg';
import { ReactComponent as LogoutIcon } from '../assets/svg/ic_logout.svg';

const dashBoardNavTree = [
  {
    path: '/',
    title: 'Главная',
    icon: <HomeIcon />,
    items: [],
  },
  {
    path: '/address',
    title: 'Поиск адресов',
    icon: <SearchIconBlack />,
    items: [],
  },
  {
    path: '/tables',
    title: 'Таблицы',
    icon: <TablesIcon />,
    items: [],
  },
  {
    path: '/calendar',
    title: 'Календарь',
    icon: <CalendarIcon />,
    items: [],
  },
  {
    path: '/maps',
    title: 'Карты',
    icon: <MapsIcon />,
    items: [],
  },
  {
    path: '/widgets',
    title: 'Виджеты',
    icon: <WidgetsIcon />,
    items: [],
  },
  {
    path: '/settings',
    title: 'Настройки',
    icon: <SettingsIcon />,
    items: [
      {
        path: '/settings/profile',
        title: 'Настройки Профиля',
        icon: <ProfileSettingsIcon />,
        items: [],
      },
      {
        path: '/settings/finance',
        title: 'Управление финансами',
        icon: <FinanceIcon />,
        items: [],
      },
    ],
  },
  {
    path: '/logout',
    title: 'Выход',
    icon: <LogoutIcon />,
    items: [],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
