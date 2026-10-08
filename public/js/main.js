/**
 * BharatDarshan - Main Application Scripts
 * Vanilla JS enhancements for FAQ accordions, UI widgets, and accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Accessible FAQ Accordion Handler
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Optionally close other accordions in the same group
        const parent = item.closest('.faq-list');
        if (parent) {
          parent.querySelectorAll('.faq-item').forEach(sibling => {
            sibling.classList.remove('active');
            const siblingBtn = sibling.querySelector('.faq-question');
            if (siblingBtn) siblingBtn.setAttribute('aria-expanded', 'false');
          });
        }

        if (!isActive) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        } else {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // Lazy loading image fallback and alt attribute audit verification
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
  } else {
    // Dynamic fallback if needed
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  }
});
