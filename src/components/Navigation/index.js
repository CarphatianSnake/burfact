// Styles
import './Navigation.scss';

// Component
function Navigation() {

  const navSectionsNames = ['ingredient', 'story', 'burgers', 'location'];

  const navSections = navSectionsNames.map((section) => {

    const capitalize = section[0].toUpperCase() + section.slice(1);

    return (
      <li key={section} className='navigation_list_item'>
        <a href={`#${section}`} className='navigation_list_item_link' title={capitalize}>
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