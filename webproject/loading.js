document.addEventListener("DOMContentLoaded", function () {
  // on load of HTML document run the block of code below
  // Simulate loading by delaying the transition to the content
  setTimeout(function () {
    // Hide the loading screen
    document.getElementById("loadingScreen").style.opacity = 0; // set the opacity to zero (fade/disappear)
    document.getElementById("loadingScreen").style.visibility = "hidden"; // set visibility to hidden
  }, 250); // Adjust the delay time as needed

  // Add event listener for the "Learn More" button
  document
    .getElementById("scroll-down-text")
    .addEventListener("click", function () {
      // click event of the element with id = "scroll-down-text"
      // Redirect to the new page
      window.location.href = "life.html"; // on click redirect to life.html
    });
});
