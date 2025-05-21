// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


// Form submission handling
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Here you would typically send the form data to a server
    console.log("Form submitted:", formObject);

    // Show success message
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });
}

// Add animation to elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".skill-card, .project-card");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initial check for elements in view
window.addEventListener("load", animateOnScroll);
// Check for elements in view on scroll
window.addEventListener("scroll", animateOnScroll);

// Typing effect for hero section
const typeWriter = () => {
  const text = "Web Developer & Designer";
  const typingElement = document.querySelector(".lead");
  let i = 0;

  if (typingElement) {
    typingElement.textContent = "";

    const type = () => {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };

    type();
  }
};

// Start typing effect when page loads
window.addEventListener("load", typeWriter);
