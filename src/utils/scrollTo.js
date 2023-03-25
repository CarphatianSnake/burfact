// handler for scroll screen to elements position
function scrollTo(targetId) {
  const targetScrollTo = document.getElementById(targetId);
  targetScrollTo && targetScrollTo.scrollIntoView({ behavior: 'smooth' }); // if target exists we scroll into it position using ID of section
}

export default scrollTo;