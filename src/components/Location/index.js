// Components
import Contacts from '../Contacts';

// Styles
import './Location.scss';

// Component
function Location() {

  return (
    <section className="location" id="location">
      <h2>Location</h2>
      <Contacts type='location' />
    </section>
  )
}

export default Location;