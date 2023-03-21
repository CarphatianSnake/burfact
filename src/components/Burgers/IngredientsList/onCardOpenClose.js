export const baseTextClass = 'burger-card_btn_text'; // base class for text at button Details/Reduce
const transparentBtnText = `${baseTextClass} transparent`; // transparent class for text at button Details/Reduce for smooth transition
const ingredientClass = 'burger-card_ingredient'; // base class for ingredients list
const transparentIngredients = `${ingredientClass} transparent`; // transparent class for ingredients list for smooth transition
export const hiddenIngredients = `${transparentIngredients} display_none`; // class that hides ingredients list

export function onCardOpen([setBtnTextClass, setIngredientsClass, setBtnText]) {

  setBtnTextClass(transparentBtnText); // make button text transparent on start of transition

  setIngredientsClass(transparentIngredients); // make ingredients list transparent on start of transition by removing display: block property

  setTimeout(() => {
    setIngredientsClass(ingredientClass); // remove transparency on ingredients list for smooth transition
  }, 50)
  
  setTimeout(() => {
    setBtnText('Reduce'); // Change button text on click
    setBtnTextClass(baseTextClass); // remove transparency on button for smooth transition
  }, 250)
  
}

export function onCardClose([setBtnTextClass, setIngredientsClass, setBtnText]) {

  setBtnTextClass(transparentBtnText); // make button text transparent on start of transition
  setIngredientsClass(transparentIngredients); // make ingredients list transparent on start of transition

  setTimeout(() => {
    setIngredientsClass(hiddenIngredients); // hide ingredients list after transition
  }, 300)

  setTimeout(() => {
    setBtnText('Details'); // Change button text on click
    setBtnTextClass(baseTextClass); // remove transparency on button for smooth transition
  }, 250)

}

function checkIsCardOpen(isCardOpen, setters) {
  return isCardOpen ? onCardOpen(setters) : onCardClose(setters);
}

export default checkIsCardOpen;