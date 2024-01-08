const canvas = document.getElementById("particleCanvas"); // get element with id = "particleCanvas"
const ctx = canvas.getContext("2d"); // Get the 2D rendering context of the canvas

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle class
class Particle {
  // constructor of the class to intialize the properties
  constructor() {
    this.radius = Math.random() * 5 + 1;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.colors = ["#00000008"]; // array of colors, Add your desired colors

    // Set the color of the particle to a random color from the above array
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)]; // Set random color

    this.opacity = 0.2;

    // initial velocity of the particle with random x, y
    this.velocity = {
      x: (Math.random() - 0.5) * 1,
      y: (Math.random() - 0.5) * 1,
    };
  }

  // a method to draw the particle on the canvas
  draw() {
    ctx.beginPath(); // begin draw
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color; // Set the fill style to the above random color
    ctx.fill(); // Fill the shap
    ctx.beginPath(); // Repeat the drawing process
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // a method to update the particle
  update() {
    this.draw(); // call the draw() method

    // Update the particle's position
    this.x += this.velocity.x; //
    this.y += this.velocity.y; //

    // Reset particle position if it goes off-screen
    if (
      this.x > canvas.width + this.radius ||
      this.x < -this.radius ||
      this.y > canvas.height + this.radius ||
      this.y < -this.radius
    ) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }

    // Adjust alpha over time or based on other criteria
    this.alpha -= 0.002;
    if (this.alpha <= 0) {
      this.alpha = 1;
    }

    // Mouse interaction
    const distance = Math.hypot(this.x - mouse.x, this.y - mouse.y);
    if (distance < 100) {
      // Particle is within range of the mouse
      const angle = Math.atan2(this.y - mouse.y, this.x - mouse.x);
      this.velocity.x = Math.cos(angle) * 0.5;
      this.velocity.y = Math.sin(angle) * 0.5;
    }
  }
}

// Mouse object
const mouse = {
  x: undefined,
  y: undefined,
};

// Event listener for mouse movement
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x; // mouse x coordinate
  mouse.y = e.y; // mouser y cooridinate
});

// Create particles
const particles = [];
for (let i = 0; i < 150; i++) {
  particles.push(new Particle()); // the loop will run 150 time and 150 Particles object added in the particles array
}

// Animation function
function animate() {
  requestAnimationFrame(animate); // request next frame
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas

  // loop through each particle in particles array
  particles.forEach((particle) => {
    particle.update(); // update each particle
  });
}

// Resize canvas when the window is resized
window.addEventListener("resize", () => {
  // event fire on resize

  // Update the canvas as per window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles.forEach((particle) => {
    // loop through each particle in particles array
    // Reset particle position when canvas size changes
    particle.x = Math.random() * canvas.width;
    particle.y = Math.random() * canvas.height;
  });
});

// Start animation
animate();
