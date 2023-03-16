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
      <div className="header_wrapper">
        <Logo />
        <Navigation />
        <OrderNow />
      </div>
    </header>
  )
}

export default Header;