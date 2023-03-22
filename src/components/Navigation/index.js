// Utils
import { capitalize } from '../../utils/capitalize';
import { onModalClose } from '../Modal';

// Styles
import './Navigation.scss';

// Component
function Navigation({ setIsModalOpen }) {

  const navSectionsNames = ['ingredient', 'story', 'burgers', 'location'];

  const navSections = navSectionsNames.map((section) => {

    return (
      <li
        key={section}
        className='navigation_list_item'
        onClick={() => onModalClose(setIsModalOpen)}
      >
        <a
          href={`#${section}`}
          className='navigation_list_item_link'
          title={capitalize(section)}
        >
          {section.toUpperCase()}
        </a>
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