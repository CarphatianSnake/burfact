// Function to set validated offset
function onSetOffset(offset, maxOffset, setOffset) {
  if (offset > 6) {
    setOffset(6); // if calculated total offset > 10, we set offset as 10
  } else if (offset < -maxOffset - 6) {
    setOffset(-maxOffset - 6); // if calculated total offset < minus max offset - 10, we set offset is minus maxOffset - 10;
  } else {
    setOffset(offset); // else, we set current calculated total offset
  }
}

export default onSetOffset;