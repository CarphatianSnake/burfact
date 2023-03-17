// Components
import OrderNow from '../OrderNow';

// Styles
import './Burgers.scss';

// Data
import burgersData from './burgersData';

// Component
function Burgers() {

  const burgers = burgersData.map((burger) => {

    const { name, image, ingredient } = burger;

    const ingredientList = ingredient.map((item, i) => {
      return (
        <li key={`${item}_${i}`} className="burgers_list_item_ingredient_item">{item}</li>
      )
    });

    return (
      <li key={name} className="burgers_list_item">
        <h3 className="burgers_list_item_heading">{name}</h3>
        <img src={image} alt={name} className="burgers_list_item_image" />
        <div className="burgers_list_item_ingredient">
          <h5>Ingredient</h5>
          <ul>
            {ingredientList}
          </ul>
        </div>
        <button className="burgers_list_item_btn">Reduce</button>
      </li>
    );
  });

  return (
    <section className="burgers" id="burgers">
      <h2>Burgers</h2>
      <ul className="burgers_list">
        {burgers}
      </ul>
      <OrderNow />
    </section>
  );
}

export default Burgers;