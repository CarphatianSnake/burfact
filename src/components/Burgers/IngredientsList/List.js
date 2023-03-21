// Styles
import './IngredientsList.scss';

// Component
function List({ingredientsClass, ingredient}) {

  // Prepare ingredients items for render
  const ingredientList = ingredient.map((item, i) => {
    return (
      <li key={`${item}_${i}`} className="burger-card_ingredient_item">{item}</li>
    )
  });

  return (
    <div className={ingredientsClass}>
      <h5>Ingredient</h5>
      <ul>
        {ingredientList}
      </ul>
    </div>
  );
}

export default List;