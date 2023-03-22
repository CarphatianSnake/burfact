// React
import { useState, useEffect } from 'react';

// Components
import Logo from '../Logo';
import Navigation from '../Navigation';
import OrderNow from '../OrderNow';
import ModalButton from '../ModalButton';

// Styles
import './Header.scss';

// Component
function Header() {

  // Set init value of media width
  const mediaChecker = window.matchMedia("(min-width: 1152px)");
  const [isDesktop, setIsDesktop] = useState(mediaChecker.matches);

  // Watch for updates of media width
  useEffect(() => {
    setIsDesktop(mediaChecker.matches);

    function updateIsDesktop(e) {
      setIsDesktop(e.matches);
    }

    mediaChecker.addEventListener('change', updateIsDesktop);

    return () => {
      mediaChecker.removeEventListener('change', updateIsDesktop);
    }
    
  }, [mediaChecker])

  return (
    <header className='header'>
      <div className="header_wrapper">
        <Logo />
        {isDesktop && 
          <>
            <Navigation />
            <OrderNow />
          </>
        }
        {!isDesktop && <ModalButton />}
      </div>
    </header>
  )
}

export default Header;