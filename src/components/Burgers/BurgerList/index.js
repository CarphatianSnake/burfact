import { useState, useEffect } from 'react';

// Components
import BurgerCard from '../BurgerCard';

// Styles
import './BurgerList.scss';

// Data
import burgersData from '../burgersData';

// Component
function BurgerList() {

  const [ isOpen, setIsOpen ] = useState(burgersData.map(() => false));

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen])

  const burgers = burgersData.map((burger, index) => {
    return <BurgerCard key={burger.name} burger={burger} setIsOpen={setIsOpen} isOpen={isOpen} index={index} />
  });

  return (
    <ul className={`burgers_list ${isOpen.find(item => item) ? 'open' : 'close'}`}>
      {burgers}
    </ul>
  );

}

export default BurgerList;