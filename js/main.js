document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Header scroll effect
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  // Toggle menu
  function toggleMenu() {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  }
  
  // Close menu on link click
  function closeMenu() {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
  
  // Smooth scroll to section
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const offsetTop = targetSection.offsetTop;
    
    window.scrollTo({
      top: offsetTop - 80,
      behavior: 'smooth'
    });
    
    closeMenu();
  }
  
  // Event listeners
  window.addEventListener('scroll', handleScroll);
  menuToggle.addEventListener('click', toggleMenu);
  navLinks.forEach(link => link.addEventListener('click', smoothScroll));
  
  // Initialize on page load
  handleScroll();
});