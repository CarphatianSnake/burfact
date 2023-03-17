// React
import { useState, useEffect } from 'react';

// Styles
import './BurgerCard.scss';

// Component
function BurgerCard({ burger, setIsOpen, isOpen, index }) {

  const [ isCardOpen, setIsCardOpen ] = useState(false);
  const [ btnText, setBtnText ] = useState('Details');
  const [ btnTextClass, setBtnTextClass ] = useState('burger-card_btn_text');
  const [ ingredientsClass, setIngredientsClass] = useState('burger-card_ingredient display_none transparent');

  const { name, image, ingredient } = burger;

  function handleClick() {
    setIsCardOpen(!isCardOpen);
  }

  useEffect(() => {
    const isOpenArr = [...isOpen];
    isOpenArr[index] = isCardOpen;
    setIsOpen(isOpenArr);

    if (isCardOpen) {
      setBtnTextClass('burger-card_btn_text transparent');
      setIngredientsClass('burger-card_ingredient transparent');
      setTimeout(() => {
        setIngredientsClass('burger-card_ingredient');
      }, 50)
      setTimeout(() => {
        setBtnText('Reduce');
        setBtnTextClass('burger-card_btn_text');
      }, 150)
    } else {
      setBtnTextClass('burger-card_btn_text transparent');
      setIngredientsClass('burger-card_ingredient transparent');
      setTimeout(() => {
        setIngredientsClass('burger-card_ingredient transparent display_none');
      }, 300)
      setTimeout(() => {
        setBtnText('Details');
        setBtnTextClass('burger-card_btn_text');
      }, 150)
    }
    // eslint-disable-next-line
  }, [isCardOpen])

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