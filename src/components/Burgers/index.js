// Components
import OrderNow from '../OrderNow';
import BurgerList from './BurgerList';

// Styles
import './Burgers.scss';

// Component
function Burgers() {
  return (
    <section className="burgers" id="burgers">
      <h2>Burgers</h2>
      <BurgerList />
      <OrderNow />
    </section>
  );
}

export default Burgers;