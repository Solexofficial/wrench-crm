import navigationConfig from '../../../configs/NavigationConfig';
import Menu from '../NavMenu/NavMenu';

type SidebarProps = {
  show?: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ show }) => {
  return (
    <aside className={`sidebar ${show ? 'active' : ''}`}>
      <Menu items={navigationConfig} title='Меню' />
    </aside>
  );
};

export default Sidebar;
