(function (win, doc) {
    'use strict';
	var scrollToTopBtn = document.getElementByClassName(".back-to-top");
var rootElement = document.documentElement;
 
function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.20 ) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

document.addEventListener("scroll", handleScroll);
}(window, document));