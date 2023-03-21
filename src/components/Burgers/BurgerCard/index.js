// React
import { useState } from 'react';

// Components
import IngredientsList from '../IngredientsList';

// Styles
import './BurgerCard.scss';

// Component
function BurgerCard({ burger }) {

  const [ isCardOpen, setIsCardOpen ] = useState(false); // state for card open/close status

  const { name, image, ingredient } = burger;

  return (
    <li className={`burger-card max-height__${isCardOpen ? 'open' : 'close'}`}>
      <h3 className="burger-card_heading">{name}</h3>
      <img src={image} alt={name} className="burger-card_image" />
      <IngredientsList
        ingredient={ingredient}
        isCardOpen={isCardOpen}
        setIsCardOpen={setIsCardOpen}
      />
    </li>
  );
  
}

export default BurgerCard;