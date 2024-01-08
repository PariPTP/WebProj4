// submit event of the form with id = "contactForm"
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents the default form submission behavior

  // You can add additional validation logic here before sending the form data

  // Example: Get form data
  const name = document.getElementById("name").value; // get the value of form element with id "name"
  const email = document.getElementById("email").value; // .....
  const message = document.getElementById("message").value; // .....

  // Example: You can send the data using AJAX or fetch API to your backend
  // Replace the following code with your actual submission logic

  // print the message in console window
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Optionally, you can reset the form after submission
  this.reset();
});
