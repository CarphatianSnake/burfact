// Function to set validated offset
function onSetOffset(offset, maxOffset, setOffset) {

  const initialOffset = 6;

  if (offset > initialOffset) {
    setOffset(initialOffset); // if calculated total offset > initialOffset, we set offset as initialOffset
  } else if (offset < -maxOffset - initialOffset) {
    setOffset(-maxOffset - initialOffset); // if calculated total offset < minus max offset - initialOffset, we set offset is minus maxOffset - initialOffset;
  } else {
    setOffset(offset); // else, we set current calculated total offset
  }
}

export default onSetOffset;