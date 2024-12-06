const hamburger = document.getElementById("toogle_button");
const hamburger1 = document.getElementById("toogle_button1");
const navLinks = document.querySelector(".nav-links");

// Toggle the 'active' class when the hamburger is clicked
hamburger.addEventListener("click", (event) => {
  navLinks.classList.toggle("active");
  // Prevent the click event from propagating to the document
  event.stopPropagation();

  hamburger.style.display = "none";

  hamburger1.style.display = "flex";
});
hamburger1.addEventListener("click", (event) => {
  navLinks.classList.toggle("active");
  // Prevent the click event from propagating to the document
  event.stopPropagation();

  hamburger1.style.display = "none";

  hamburger.style.display = "flex";
});

// Close the navbar when clicking anywhere outside the navbar
document.addEventListener("click", (event) => {
    // If the clicked target is outside the navLinks and hamburger, close the menu
    if (!navLinks.contains(event.target) && event.target !== hamburger) {
      navLinks.classList.remove("active");
  
      // Check if the screen width is between 320px and 1200px
      if (window.innerWidth >= 320 && window.innerWidth <= 1200) {
        hamburger.style.display = "flex"; // Show hamburger on small screens
        hamburger1.style.display = "none"; // Hide the close button
      }
    }
  });
// continuos sliding
  document.addEventListener("DOMContentLoaded", () => {
    const slideContainer = document.querySelector(".slide_card");
  
    // Duplicate the cards for infinite sliding
    const cards = Array.from(slideContainer.children);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      slideContainer.appendChild(clone);
    });
  
    // Set the sliding animation
    let scrollAmount = 0;
    const slideSpeed = 1; // Adjust this value to control the speed
  
    const slide = () => {
      scrollAmount -= slideSpeed;
  
      if (Math.abs(scrollAmount) >= slideContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset scroll position for infinite effect
      }
  
      slideContainer.style.transform = `translateX(${scrollAmount}px)`;
      requestAnimationFrame(slide);
    };
  
    slide(); // Start the sliding animation
  });
  







  

