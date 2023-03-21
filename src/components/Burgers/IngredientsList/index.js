// React
import { useState, useEffect } from 'react';

// Components
import List from './List';
import Button from './Button';

// Utils
import checkIsCardOpen, { baseTextClass, hiddenIngredients } from './onCardOpenClose';

// Styles
import './IngredientsList.scss';

// Component
function IngredientsList({ ingredient, isCardOpen, setIsCardOpen }) {

  // States
  const [ btnText, setBtnText ] = useState('Details'); // state of button text (can be only 'Details' or 'Reduce')
  const [ btnTextClass, setBtnTextClass ] = useState(baseTextClass); // state of class names of button text
  const [ ingredientsClass, setIngredientsClass] = useState(hiddenIngredients); // state of class names of ingredients list

  // Collect all state setters to one array
  const setters = [setBtnTextClass, setIngredientsClass, setBtnText];

  useEffect(() => {
    checkIsCardOpen(isCardOpen, setters)
    // eslint-disable-next-line
  }, [isCardOpen])

  return (
    <>
      <List
        ingredientsClass={ingredientsClass}
        ingredient={ingredient}
      />
      <Button
        isCardOpen={isCardOpen}
        setIsCardOpen={setIsCardOpen}
        btnTextClass={btnTextClass}
        btnText={btnText}
      />
    </>
  );
}

export default IngredientsList;