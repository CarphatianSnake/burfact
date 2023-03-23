// React
import { useState, useEffect } from 'react';

// Styles
import './Carousele.scss';

// Component
function Carousele({ children }) {

  const [ carouseleWidth, setCarouseleWidth ] = useState(0); // state of carousele window width
  const [ itemsWidth, setItemsWidth ] = useState(0); // state of carousele items container width
  const [ elementWidth, setElementWidth ] = useState(0); // state of single element width
  const [ offset, setOffset ] = useState(0); // state of offset

  useEffect(() => {

    const carouseleWindow = document.querySelector('.carousele_window'); // get carousele window element
    const itemsContainer = carouseleWindow.querySelector('.carousele_items'); // get carousele items container element
    const itemWidth = itemsContainer.querySelector('.ingredients_item').offsetWidth; // get width of single item inside container

    // get gap and padding values of carousele container
    const containerStyles = getComputedStyle(itemsContainer);
    const gap = +containerStyles.gap.replace('px', '');
    const padding = +containerStyles.padding.replace('px', '');

    setCarouseleWidth(carouseleWindow.offsetWidth + padding * 2); // set to state window width + doubled padding (we add padding to prevent small transitions of slider on edges)
    setItemsWidth(itemsContainer.offsetWidth); // set to state width of items container
    setElementWidth(itemWidth + gap / 2); // set elements width + padding + half of parent container gap

  }, []);

  function onArrowClick(direction) {

    const totalOffset = direction === 'left' ? offset + elementWidth : offset - elementWidth; // calculate total offset on arrow click
    const maxOffset = itemsWidth - carouseleWidth; // calculate maximum offset

    if (totalOffset > 0) {
      setOffset(0); // if calculated total offset > 0, we set offset as 0
    } else if (totalOffset < -maxOffset) {
      setOffset(-maxOffset); // if calculated total offset < minus max offset, we set offset is minus maxOffset;
    } else {
      setOffset(totalOffset); // else, we set current calculated total offset
    }
    
  }

  function makeArrow(direction) {

    const baseClass = 'carousele_arrow';
    const arrowClass = `${baseClass} ${baseClass}__${direction}`;
    const imageClass = `${baseClass}_image ${baseClass}_image__${direction}`

    return (
      <div key={`arrow ${direction}`} className={arrowClass}>
        <div
          className={imageClass}
          onClick={() => onArrowClick(direction)}
        />
      </div>
    );
  }

  const arrows = [ makeArrow('right'), makeArrow('left') ];

  return (
    <div className="carousele">
      <div className="carousele_window">
        <div className="carousele_items" style={{transform: `translateX(${offset}px)`}}>
          {children}
        </div>
        {arrows}
      </div>
    </div>
  )
}

export default Carousele;