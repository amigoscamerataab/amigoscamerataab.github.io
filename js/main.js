document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const lightboxClose = document.querySelector('.lightbox-close');
  const clickableImages = document.querySelectorAll('.presentation-image, .section-image, .poster-image');
  
  // Header scroll effect
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  // Toggle mobile menu
  function toggleMenu() {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  }
  
  // Close mobile menu
  function closeMenu() {
    menuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
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

  // Lightbox functionality
  function openLightbox(e) {
    const imgSrc = e.target.src;
    const imgAlt = e.target.alt;
    lightboxImage.src = imgSrc;
    lightboxImage.alt = imgAlt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      lightboxImage.src = '';
      lightboxImage.alt = '';
    }, 300);
  }
  
  // Event listeners
  window.addEventListener('scroll', handleScroll);
  menuToggle.addEventListener('click', toggleMenu);
  navLinks.forEach(link => link.addEventListener('click', smoothScroll));
  clickableImages.forEach(img => img.addEventListener('click', openLightbox));
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
  
  // Initialize on page load
  handleScroll();
});