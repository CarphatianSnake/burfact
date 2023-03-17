// Components
import Logo from '../Logo';
import Contacts from '../Contacts';

// Styles
import './Footer.scss';

// Component
function Footer() {
  return  (
    <footer className="footer">
      <div className="footer_wrapper">
        <Logo />
        <Contacts type='footer' />
      </div>
    </footer>
  );
}

export default Footer;