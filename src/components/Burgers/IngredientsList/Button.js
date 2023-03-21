// Styles
import './IngredientsList.scss';

// Component
function Button({ isCardOpen, setIsCardOpen, btnTextClass, btnText }) {

  // Function for toggle open state of card
  function handleClick() {
    setIsCardOpen(!isCardOpen);
  }

  return (
    <button className="burger-card_btn" onClick={handleClick}>
      <span className={btnTextClass}>{btnText}</span>
    </button>
  );
}

export default Button;