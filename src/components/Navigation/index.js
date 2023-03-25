// Utils
import { capitalize } from '../../utils/capitalize';
import onModalClose from '../Modal/onModalClose';
import scrollTo from '../../utils/scrollTo';

// Styles
import './Navigation.scss';

// Component
function Navigation({ setIsModalOpen }) {

  const navSectionsNames = ['ingredient', 'story', 'burgers', 'location'];

  const navSections = navSectionsNames.map((section) => {

    function onHandleClick(targetId) {
      scrollTo(targetId);
      setIsModalOpen && onModalClose(setIsModalOpen); // if setIsModalOpen comes with props we close modal, if not - ignore this line
    }

    return (
      <li
        key={section}
        className='navigation_list_item'
        onClick={() => onHandleClick(section)}
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