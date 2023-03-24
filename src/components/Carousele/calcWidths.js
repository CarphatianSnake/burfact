// Function to calculate widths of carousele window and item container window
function calcWidths() {
  const carouseleWindow = document.querySelector('.carousele_window'); // get carousele window element
  const itemsContainer = carouseleWindow.querySelector('.carousele_items'); // get carousele items container element
  const carouseleWindowWidth = carouseleWindow.offsetWidth; // width of carousele window
  const itemsContainerWidth = itemsContainer.offsetWidth; // width of items container
  return { carouseleWindowWidth, itemsContainerWidth };
}

export default calcWidths;