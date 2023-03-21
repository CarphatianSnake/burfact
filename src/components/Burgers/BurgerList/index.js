// Components
import BurgerCard from '../BurgerCard';

// Styles
import './BurgerList.scss';

// Data
import burgersData from '../../../assets/data/burgersData';

// Component
function BurgerList() {

  const burgers = burgersData.map((burger) => {
    return (
      <BurgerCard
        key={burger.name}
        burger={burger}
      />
    )
  });

  return (
    <ul className="burgers_list">
      {burgers}
    </ul>
  );

}

export default BurgerList;