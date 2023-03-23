// React
import { useState, useEffect } from 'react';

// Styles
import './Carousele.scss';

// Component
function Carousele({ children }) {
  const [ offset, setOffset ] = useState(6); // state of offset
  const [ basicOffset, setBasicOffset ] = useState(0); // basic offset for move items inside carousele (adding % in styles of element)
  const [ maxOffset, setMaxOffset ] = useState(); // state for max offset

  useEffect(() => {

    const carouseleWindow = document.querySelector('.carousele_window'); // get carousele window element
    const carouseleWindowWidth = carouseleWindow.offsetWidth; // width of carousele window
    const itemsContainer = carouseleWindow.querySelector('.carousele_items'); // get carousele items container element
    const itemsContainerWidth = itemsContainer.offsetWidth; // width of items container
    const itemsCount = itemsContainer.querySelectorAll('.ingredients_item').length; // number of items inside carousele

    setBasicOffset(100 / itemsCount); // for basic offset we use %, so we divide 100 on items count to take correct offset
    setMaxOffset(100 - ((carouseleWindowWidth / itemsContainerWidth) * 100)); // calculating max offset as a percentage and settin it to state

  }, []);

  function onArrowClick(direction) {
    
    const totalOffset = direction === 'left' ? offset + basicOffset : offset - basicOffset; // calculate total offset on arrow click
    
    if (totalOffset > 6) {
      setOffset(6); // if calculated total offset > 10, we set offset as 10
    } else if (totalOffset < -maxOffset - 6) {
      setOffset(-maxOffset - 6); // if calculated total offset < minus max offset - 10, we set offset is minus maxOffset - 10;
    } else {
      setOffset(totalOffset); // else, we set current calculated total offset
    }

  }

  function makeArrow(direction) {

    const baseClass = 'carousele_arrow';
    const arrowClass = `${baseClass} ${baseClass}__${direction}`;
    const imageClass = `${baseClass}_image ${baseClass}_image__${direction}`;
    let isArrowDisabled = false;

    if (direction === 'left' && offset > 0) {
      isArrowDisabled = true;
    }

    if (direction === 'right' && offset < -maxOffset) {
      isArrowDisabled = true;
    }

    return (
      <div key={`arrow ${direction}`} className={arrowClass}>
        <button
          className={imageClass} disabled={isArrowDisabled}
          onClick={() => onArrowClick(direction)}
        />
      </div>
    );
  }

  const arrows = [ makeArrow('right'), makeArrow('left') ];

  return (
    <div className="carousele">
      <div className="carousele_window">
        <div className="carousele_items" style={{transform: `translateX(${offset}%)`}}>
          {children}
        </div>
        {arrows}
      </div>
    </div>
  )
}

export default Carousele;