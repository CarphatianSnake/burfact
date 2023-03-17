// React
import { useState, useEffect } from 'react';

// Styles
import './BurgerCard.scss';

// Component
function BurgerCard({ burger, setIsOpen, isOpen, index }) {

  const [ isCardOpen, setIsCardOpen ] = useState(false); // state for card open/close status
  const [ btnText, setBtnText ] = useState('Details'); // state of button text
  const [ btnTextClass, setBtnTextClass ] = useState('burger-card_btn_text'); // state of class names of button text
  const [ ingredientsClass, setIngredientsClass] = useState('burger-card_ingredient display_none transparent'); // state of class names of ingredients list

  const { name, image, ingredient } = burger;

  // Function for toggle open state of card
  function handleClick() {
    setIsCardOpen(!isCardOpen);
  }

  useEffect(() => {
    const isOpenArr = [...isOpen]; // clone open status array, that comes from props
    isOpenArr[index] = isCardOpen; // set open status for card by index at cloned status array
    setIsOpen(isOpenArr); // change state, that comes from props, for cloned status array

    if (isCardOpen) {
      setBtnTextClass('burger-card_btn_text transparent'); // make button text transparent on start of transition
      setIngredientsClass('burger-card_ingredient transparent'); // make ingredients list transparent on start of transition by removing display: block property
      setTimeout(() => {
        setIngredientsClass('burger-card_ingredient'); // remove transparency on ingredients list for smooth transition
      }, 50)
      setTimeout(() => {
        setBtnText('Reduce'); // Change button text on click
        setBtnTextClass('burger-card_btn_text'); // remove transparency on button for smooth transition
      }, 250)
    }else {
      setBtnTextClass('burger-card_btn_text transparent'); // make button text transparent on start of transition
      setIngredientsClass('burger-card_ingredient transparent'); // make ingredients list transparent on start of transition
      setTimeout(() => {
        setIngredientsClass('burger-card_ingredient transparent display_none'); // hide ingredients list after transition
      }, 300)
      setTimeout(() => {
        setBtnText('Details'); // Change button text on click
        setBtnTextClass('burger-card_btn_text'); // remove transparency on button for smooth transition
      }, 250)
    }
    // eslint-disable-next-line
  }, [isCardOpen])

  // Prepare ingredients items for render
  const ingredientList = ingredient.map((item, i) => {
    return (
      <li key={`${item}_${i}`} className="burger-card_ingredient_item">{item}</li>
    )
  });

  return (
    <li className={`burger-card max-height__${isCardOpen ? 'open' : 'close'}`}>
      <h3 className="burger-card_heading">{name}</h3>
      <img src={image} alt={name} className="burger-card_image" />
      <div className={ingredientsClass}>
        <h5>Ingredient</h5>
        <ul>
          {ingredientList}
        </ul>
      </div>
      <button className="burger-card_btn" onClick={handleClick}>
        <span className={btnTextClass}>{btnText}</span>
      </button>
    </li>
  );
  
}

export default BurgerCard;