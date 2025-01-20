// script.js
// Handle scroll event to change navbar style
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (window.scrollY > 350) { // Adjust threshold as needed
      navbar.classList.add('scrolled');
      navLinks.forEach(navLink => {
        navLink.classList.add('text-dark');
        navLink.classList.remove('text-light');
      });
  } else {
      navbar.classList.remove('scrolled');
      navLinks.forEach(navLink => {
        navLink.classList.remove('text-dark');
        navLink.classList.add('text-light');
      });
  }
});

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);



  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);


  // Countdown Timer Function
function startCountdown(targetDate, elementIds) {
  const target = new Date(targetDate).getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const difference = target - now;

    if (difference >= 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById(elementIds.days).textContent = days.toString().padStart(2, "0");
      document.getElementById(elementIds.hours).textContent = hours.toString().padStart(2, "0");
      document.getElementById(elementIds.minutes).textContent = minutes.toString().padStart(2, "0");
      document.getElementById(elementIds.seconds).textContent = seconds.toString().padStart(2, "0");
    }
  }, 1000);
}

      // Initialize countdowns
      startCountdown('2025-12-19T00:00:00', {
        days: 'days19',
        hours: 'hours19',
        minutes: 'minutes19',
        seconds: 'seconds19',
      });

      startCountdown('2025-12-29T00:00:00', {
        days: 'days29',
        hours: 'hours29',
        minutes: 'minutes29',
        seconds: 'seconds29',
      });



  // Function to initialize the Owl Carousel
  function initializeCarousel() {
      const owl = document.querySelector('.owl-carousel');

      // Initialize the carousel with custom options
      $(owl).owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000, // Auto-scroll after 4 seconds
          autoplayHoverPause: true, // Pause on hover
          dots: true, // Enable dots for navigation
          nav: false // Disable default navigation buttons
      });
  }


  // Initialize everything on window load
  window.addEventListener('load', function() {
      initializeCarousel();
  });