// Prevent the default blocking behavior (for copy, cut, paste, and right-click events)
document.addEventListener("copy", preventDefault);
document.addEventListener("cut", preventDefault);
document.addEventListener("paste", preventDefault);
document.oncontextmenu = (event) => event.preventDefault();

// Function to prevent the default action (i.e., blocking copy-paste)
function preventDefault(event) {
  event.preventDefault();
  event.stopPropagation();
}
