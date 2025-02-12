
document.getElementById('callButton').addEventListener('click', function() {
window.location.href = 'tel:+919011913681';
});
    
// For Typing Effect
const phrases = ["AI/ML Engineer", "Data Scientist"]; 
let currentPhraseIndex = 0; 
let currentLetterIndex = 0; 
let isDeleting = false; 
const typingSpeed = 200; 
const pauseDuration = 1000; 

const animatedTextElement = document.getElementById("animated-text");

function typeAndDelete() {
  const currentPhrase = phrases[currentPhraseIndex]; 

  if (!isDeleting) {
    // Typing one letter at a time
    if (currentLetterIndex < currentPhrase.length) {
      animatedTextElement.textContent += currentPhrase.charAt(currentLetterIndex);
      currentLetterIndex++;
      setTimeout(typeAndDelete, typingSpeed);
    } else {
      // Start deleting immediately after typing the full phrase
      isDeleting = true;
      setTimeout(typeAndDelete, pauseDuration);
    }
  } else {
    // Deleting one letter at a time
    if (currentLetterIndex > 0) {
      animatedTextElement.textContent = currentPhrase.substring(0, currentLetterIndex - 1);
      currentLetterIndex--;
      setTimeout(typeAndDelete, typingSpeed);
    } else {
      // Move to the next phrase and start typing immediately
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      typeAndDelete(); // Immediately start typing the next phrase
    }
  }
}
typeAndDelete();


// Animtion to CV button 
  const downloadButton = document.getElementById('download-cv');

  downloadButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link action
    const btn = e.currentTarget;

    // Create a container for the splash particles
    const splashContainer = document.createElement('div');
    splashContainer.classList.add('splash-container');
    btn.appendChild(splashContainer);

    // Create splash particles
    for (let i = 0; i < 15; i++) {
      const splash = document.createElement('div');
      splash.classList.add('splash');
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 50 + 10; // Splash particles travel 10-60px
      splash.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
      splash.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
      splashContainer.appendChild(splash);

      // Remove the splash particle after animation ends
      splash.addEventListener('animationend', () => {
        splash.remove();
      });
    }

    // Remove the splash container after all animations
    setTimeout(() => {
      splashContainer.remove();
      // Trigger file download after animation
      window.location.href = btn.getAttribute('href');
    }, 800); // Delay download to match animation duration
  });


// Function to highlight the current section in the navbar
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); // Select all sections
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link'); // Select navbar links


    function setActiveLink() {
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Adjust for navbar height
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
          currentSection = section.getAttribute('id');
        }
      });

      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to the link of the current section
      const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${currentSection}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }

    // Listen for scroll event to trigger the active link update
    window.addEventListener('scroll', setActiveLink);
    
    // Call the function initially in case the page is loaded at a certain section
    setActiveLink();
  });

//  Intro Section (Hero) Animation
  const particleContainer = document.querySelector('.intro-section');
  for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particleContainer.appendChild(particle);
  }

// ANIMATION GROUP
// Animation Group - For data-animate attribute
const animatedElementsGroup = document.querySelectorAll('[data-animate]');

// Function to get the correct threshold based on the screen size
function getThreshold() {
  // If the screen width is less than or equal to 768px (mobile or smaller devices), set threshold to 0.15
  return window.innerWidth <= 768 ? 0.15 : 0.35;
}

// Create an Intersection Observer for the new elements
const observerGroup = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;

      // Add the 'animate' class to trigger the animation
      element.classList.add('animate');

      // Stop observing this element (animation happens only once)
      observer.unobserve(element);
    }
  });
}, {
  threshold: getThreshold() // Use the dynamic threshold
});

// Observe each animated element in the group
animatedElementsGroup.forEach(element => observerGroup.observe(element));

// Optionally, you can listen for window resizing to dynamically update the threshold if the screen size changes
window.addEventListener('resize', () => {
  // Re-initialize the observer with the new threshold value when the window is resized
  observerGroup.disconnect(); // Disconnect the current observer
  const newThreshold = getThreshold(); // Get the new threshold
  const newObserverGroup = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.classList.add('animate');
        observer.unobserve(element);
      }
    });
  }, {
    threshold: newThreshold
  });

  // Re-observe the elements with the new observer
  animatedElementsGroup.forEach(element => newObserverGroup.observe(element));
});
