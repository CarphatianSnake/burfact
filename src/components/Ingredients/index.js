// Components
import Carousele from '../Carousele';

// Utils
import { capitalize } from '../../utils/capitalize';

// Styles
import './Ingredients.scss';

// Data
import ingredientsData from '../../assets/data/ingredientsData';

// Component
function Ingredients() {

  const ingredientsElements = ingredientsData.map((ingredient) => {

    const { name, image } = ingredient;

    const ingredientName = capitalize(name);

    return (
      <div key={ingredientName} className="ingredients_item">
        <img src={image} alt={ingredientName} className="ingredients_item_image" />
        <h4>{ingredientName}</h4>
      </div>
    )
  })

  return (
    <section className='ingredients' id='ingredient'>
      <h2>Ingredients</h2>
      <h3 className='ingredients_small-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis id arcu vel maximus.</h3>
      <Carousele>
        {ingredientsElements}
      </Carousele>
      <p className='ingredients_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget consequat lorem. Ut nec placerat purus. Fusce vitae faucibus augue, non commodo elit. Integer risus orci, ultricies ac dapibus sed, dignissim interdum quam. Proin quis dignissim diam. Donec id magna placerat, fringilla odio et, efficitur lacus. Vivamus eu ultricies erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo nunc. Nulla mattis interdum nunc, sed semper turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor.</p>
    </section>
  )
}

export default Ingredients;