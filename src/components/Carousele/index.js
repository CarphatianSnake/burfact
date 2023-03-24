// React
import { useState, useEffect } from 'react';

// Styles
import './Carousele.scss';

// Component
function Carousele({ children }) {
  const [ offset, setOffset ] = useState(6); // state of offset
  const [ basicOffset, setBasicOffset ] = useState(0); // basic offset for move items inside carousele (adding % in styles of element)
  const [ maxOffset, setMaxOffset ] = useState(); // state for max offset
  const [ itemsWidth, setItemsWidth ] = useState(0); // state of items container width
  const [ touchStart, setTouchStart ] = useState(0); // touch event start position
  const [ itemsClassList, setItemsClassList ] = useState('carousele_items'); // state of items container classlist to add or remove no-transition class on touch events

  useEffect(() => {

    const carouseleWindow = document.querySelector('.carousele_window'); // get carousele window element
    const carouseleWindowWidth = carouseleWindow.offsetWidth; // width of carousele window
    const itemsContainer = carouseleWindow.querySelector('.carousele_items'); // get carousele items container element
    const itemsContainerWidth = itemsContainer.offsetWidth; // width of items container
    const itemsCount = itemsContainer.querySelectorAll('.ingredients_item').length; // number of items inside carousele

    setBasicOffset(100 / itemsCount); // for basic offset we use %, so we divide 100 on items count to take correct offset
    setMaxOffset(100 - ((carouseleWindowWidth / itemsContainerWidth) * 100)); // calculating max offset as a percentage and settin it to state

    setItemsWidth(itemsContainerWidth)

  }, []);

  // Function to set validated offset
  function onSetOffset(offset) {
    if (offset > 6) {
      setOffset(6); // if calculated total offset > 10, we set offset as 10
    } else if (offset < -maxOffset - 6) {
      setOffset(-maxOffset - 6); // if calculated total offset < minus max offset - 10, we set offset is minus maxOffset - 10;
    } else {
      setOffset(offset); // else, we set current calculated total offset
    }
  }

  // Function to make arrow elements
  function makeArrow(direction) {

    const baseClass = 'carousele_arrow';
    const arrowClass = `${baseClass} ${baseClass}__${direction}`;
    const imageClass = `${baseClass}_image ${baseClass}_image__${direction}`;
    let isArrowDisabled = false;

    // Arrow click handler
    function onArrowClick(direction) {
      const totalOffset = direction === 'left' ? offset + basicOffset : offset - basicOffset; // calculate total offset on arrow click
      onSetOffset(totalOffset);
    }

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

  // Make array with arrows for render
  const arrows = [ makeArrow('right'), makeArrow('left') ];

  // On Touch Start handler to init start position of touch event and removing transition on items container
  function onTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
    setItemsClassList('carousele_items no-transition');
  }

  // On Touch Move handler to calculate and set offset on touch move event
  function onTouchMove(e) {
    const currentPosition = e.targetTouches[0].clientX;
    const positionDifference = touchStart - currentPosition;
    const currentOffset = (positionDifference / itemsWidth) * 10;
    const totalOffset = offset - currentOffset;
    onSetOffset(totalOffset);
  }

  // on touch end and cancel events removing no-transition class from items container class list
  function onTouchEnd() {
    setItemsClassList('carousele_items');
  }

  return (
    <div className="carousele">
      <div
        className="carousele_window"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
          <div className={itemsClassList} style={{transform: `translateX(${offset}%)`}}>
            {children}
          </div>
          {arrows}
      </div>
    </div>
  )
}

export default Carousele;