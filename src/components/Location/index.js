// Components
import Contacts from '../Contacts';
import Map from '../Map';

// Styles
import './Location.scss';

// Component
function Location() {
  return (
    <section className="location" id="location">
      <h2>Location</h2>
      <Contacts type='location' />
      <Map />
    </section>
  )
}

export default Location;