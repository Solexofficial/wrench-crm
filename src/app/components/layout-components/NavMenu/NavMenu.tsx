import { nanoid } from 'nanoid';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ChevronIcon } from '../../../assets/svg/ic_arrow-up.svg';

type MenuItemType = {
  title: string;
  icon: React.ReactNode;
  path: string;
  items: MenuItemType[];
};

const MenuItem: React.FC<MenuItemType> = ({ title, icon, path, items }) => {
  const [hasSubmenuOpen, setSubmenuOpen] = useState(false);
  const history = useHistory();

  const handleClickOnSubMenuLink = (event: React.MouseEvent) => {
    event.preventDefault();
    const hasSubmenu = !!items.length;
    if (hasSubmenu) {
      setSubmenuOpen(prevState => !prevState);
    } else {
      history.push(path);
    }
  };

  const subItems = !!items.length && createMenuItems(items);
  const hasSubItems = !!subItems;

  return (
    <li className={`menu__item ${hasSubItems ? 'has-subitems' : ''} ${hasSubmenuOpen ? 'has-menu-open' : ''}`}>
      <NavLink exact to={path} className='menu__item__link' onClick={e => handleClickOnSubMenuLink(e)}>
        <>
          {icon && <>{icon}</>}
          <span className='menu__item__title'>{title}</span>
          {hasSubItems && (
            <span className='menu__item__submenu-icon'>
              <ChevronIcon />
            </span>
          )}
        </>
      </NavLink>
      {hasSubItems && (
        <CSSTransition
          in={hasSubmenuOpen}
          timeout={{
            enter: 200,
            exit: 200,
          }}
          classNames='menu__submenu'
          unmountOnExit
        >
          <ul className='menu__submenu'>{subItems}</ul>
        </CSSTransition>
      )}
    </li>
  );
};

const createMenuItems = (items: MenuItemType[]) => {
  return items.map(item => {
    const { title, icon, path, items } = item;

    const key = nanoid();

    return <MenuItem title={title} icon={icon} path={path} items={items} key={key}></MenuItem>;
  });
};

type MenuProps = {
  items: MenuItemType[];
  title: string;
};

const Menu: React.FC<MenuProps> = ({ items, title }) => {
  const menuItems = createMenuItems(items);

  return (
    <nav className='menu'>
      <div className='menu__header'>
        <div className='menu__header__title'>{title}</div>
      </div>
      <ul className='menu__list'>{menuItems}</ul>
    </nav>
  );
};

export default Menu;
