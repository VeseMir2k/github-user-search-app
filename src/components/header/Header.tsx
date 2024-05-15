import Logo from './Logo';
import SwitchTheme from './SwitchTheme';

const Header: React.FC = () => (
  <header className='flex items-center justify-between'>
    <Logo />
    <SwitchTheme />
  </header>
);

export default Header;
