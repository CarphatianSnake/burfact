// Utils
import { capitalize } from '../../utils/capitalize';
import onModalClose from '../Modal/onModalClose';

// Styles
import './Navigation.scss';

// Component
function Navigation({ setIsModalOpen }) {

  const navSectionsNames = ['ingredient', 'story', 'burgers', 'location'];

  const navSections = navSectionsNames.map((section) => {

    // handler for scroll screen to elements position
    function scrollTo() {
      const targetScrollTo = document.getElementById(section);
      setIsModalOpen && onModalClose(setIsModalOpen); // if setIsModalOpen comes with props we close modal, if not - ignore this line
      targetScrollTo && targetScrollTo.scrollIntoView({ behavior: 'smooth' }); // if target exists we scroll into it position using ID of section
    }

    return (
      <li
        key={section}
        className='navigation_list_item'
        onClick={scrollTo}
      >
        <span
          className='navigation_list_item_link'
          title={capitalize(section)}
        >
          {section.toUpperCase()}
        </span>
      </li>
    )
    
  })

  return (
    <nav className="navigation">
      <ul className="navigation_list">
        {navSections}
      </ul>
    </nav>
  )
}

export default Navigation;