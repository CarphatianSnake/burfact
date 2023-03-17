// Components
import Contacts from '../Contacts';

// Styles
import './Location.scss';

// Component
function Location() {

  const locationScr = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.2827220401314!2d6.633136657874004!3d46.5240131126524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e31ad9a7581%3A0x6910a4219da53f6!2zUGwuIGRlIGxhIFJpcG9ubmUgMTAsIDEwMDUgTGF1c2FubmUsINCo0LLQtdC50YbQsNGA0ZbRjw!5e1!3m2!1suk!2sua!4v1679073223858!5m2!1suk!2sua';

  return (
    <section className="location" id="location">
      <h2>Location</h2>
      <Contacts type='location' />
      <iframe
        className="location_map"
        src={locationScr}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Burger Factory Location"
      />
    </section>
  )
}

export default Location;