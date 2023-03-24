// Component
function Arrows({ offset, basicOffset, setOffset, onSetOffset, maxOffset }) {

  // Function to make arrow elements
  function makeArrow(direction) {

    const baseClass = 'carousele_arrow';
    const arrowClass = `${baseClass} ${baseClass}__${direction}`;
    const imageClass = `${baseClass}_image ${baseClass}_image__${direction}`;
    let isArrowDisabled = false;

    // Arrow click handler
    function onArrowClick(direction) {
      const totalOffset = direction === 'left' ? offset + basicOffset : offset - basicOffset; // calculate total offset on arrow click
      onSetOffset(totalOffset, maxOffset, setOffset);
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

  // Prepare arrows to render
  const arrows = [ makeArrow('right'), makeArrow('left') ];

  return (
    <>
      {arrows}
    </>
  );
}

export default Arrows;