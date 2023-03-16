// Components
import Logo from '../Logo';
import Navigation from '../Navigation';
import OrderNow from '../OrderNow';

// Styles
import './Header.scss';

// Component
function Header() {
  return (
    <header className='header'>
      <Logo />
      <Navigation />
      <OrderNow />
    </header>
  )
}

export default Header;