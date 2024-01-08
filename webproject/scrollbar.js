// Optional: Add JavaScript for additional functionalities
// For example, you can add smooth scrolling behavior

// Example: Smooth scrolling to anchor links

// Select all <a> elements with href attribute of "#" and loop through each anchor element
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // click event of each anchor
    e.preventDefault(); // prevent / restrict the default behavior of the anchor element (i.e. naviage to the assoicated link)

    // scroll smoothly to the associated element
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
