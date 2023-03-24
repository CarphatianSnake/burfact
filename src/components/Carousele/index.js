// React
import { useState, useEffect } from 'react';

// Components
import Arrows from './Arrows';

// Utils
import calcWidths from './calcWidths';
import onSetOffset from './onSetOffset';

// Styles
import './Carousele.scss';

// Component
function Carousele({ children }) {

  const [ offset, setOffset ] = useState(6); // state of offset, initial state is 6% offset
  const [ basicOffset, setBasicOffset ] = useState(0); // basic offset for move items inside carousele (adding % in styles of element)
  const [ maxOffset, setMaxOffset ] = useState(0); // state for max offset
  const [ touchStart, setTouchStart ] = useState(0); // touch event start position
  const [ touchEnd, setTouchEnd ] = useState(0); // touch event end position
  const [ itemsClassList, setItemsClassList ] = useState('carousele_items'); // state of items container classlist to add or remove no-transition class on touch events

  useEffect(() => {

    const itemsCount = document.querySelectorAll('.ingredients_item').length; // number of items inside carousele
    const { carouseleWindowWidth, itemsContainerWidth } = calcWidths(); // get widths of carousele and window contaner

    // Resize listenet that recalculates window and contaner width and to set max offset
    function resizeListener() {
      const { carouseleWindowWidth, itemsContainerWidth } = calcWidths();
      setMaxOffset(100 - ((carouseleWindowWidth / itemsContainerWidth) * 100)); // calculating max offset as a percentage and settin it to state
    }

    // Subcsribe to resize listener
    window.addEventListener('resize', resizeListener);

    setBasicOffset(100 / itemsCount); // for basic offset we use %, so we divide 100 on items count to take correct offset
    setMaxOffset(100 - ((carouseleWindowWidth / itemsContainerWidth) * 100)); // calculating max offset as a percentage and settin it to state

    // Unsubscribe from listener on unmount component
    return () => window.removeEventListener('resize', resizeListener);

  }, []);

  // When max offset changes we refreshing current offset
  useEffect(() => {
    onSetOffset(offset, maxOffset, setOffset);
    // eslint-disable-next-line
  }, [maxOffset])

  // On Touch Start handler to init start position of touch event and removing transition on items container
  function onTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX); // set touch start point
    setItemsClassList('carousele_items no-transition'); // add no-transition class on start of touch event
  }

  // On Touch Move handler to calculate and set offset on touch move event
  function onTouchMove(e) {
    const { carouseleWindowWidth } = calcWidths(); // calculate items width
    const currentPosition = e.targetTouches[0].clientX; // getting current position of touch event
    setTouchEnd(currentPosition); // set end of touch event
    const positionDifference = touchStart - currentPosition; // calculate difference between start and current positions
    const currentOffset = (positionDifference / carouseleWindowWidth) * 2; // calculating current offset to use it as %
    const totalOffset = offset - currentOffset; // calculate total offset
    onSetOffset(totalOffset, maxOffset, setOffset); // set offset
  }

  // on touch end and cancel events removing no-transition class from items container class list
  function onTouchEnd() {

    setItemsClassList('carousele_items'); // remove no-transotion class on end of touch

    const { carouseleWindowWidth } = calcWidths();
    const difference = (touchStart - touchEnd) / carouseleWindowWidth * 100; // calculate differece between start and end point of touch event. we nee to use negative value because swipe must be inversed for better user expirience

    if (difference < basicOffset) {
      onSetOffset(offset + basicOffset, maxOffset, setOffset); // if difference > 10 we add basic offset to offset
    } else if (difference > -basicOffset) {
      onSetOffset(offset - basicOffset, maxOffset, setOffset); // if difference < 10 we decrease offset on basic offset
    }

  }

  // Render component
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
        <Arrows
          offset={offset}
          basicOffset={basicOffset}
          setOffset={setOffset}
          onSetOffset={onSetOffset}
          maxOffset={maxOffset}
        />
      </div>
    </div>
  )
}

export default Carousele;