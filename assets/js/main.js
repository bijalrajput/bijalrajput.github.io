// Main JavaScript for Dr. Bijal Rajput's Website

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Publication Search Functionality
  const searchInput = document.getElementById('pub-search');
  const pubCards = document.querySelectorAll('.publication-card');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();

      pubCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (query === '' || text.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Active section navbar highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blue-600', 'font-semibold');
      link.classList.add('text-slate-600');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-blue-600', 'font-semibold');
        link.classList.remove('text-slate-600');
      }
    });
  });
});
