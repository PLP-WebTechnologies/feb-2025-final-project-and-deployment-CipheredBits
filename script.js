document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        if (!name || !email || !message) {
          formMsg.textContent = 'Please fill out all fields.';
          formMsg.style.color = 'red';
        } else {
          formMsg.textContent = 'Thank you for reaching out! 🌸';
          formMsg.style.color = 'green';
          contactForm.reset();
        }
      });
    }
  
    // Collapsible Navigation (for small screens)
    const toggleBtn = document.getElementById('navToggle');
    const navMenu = document.querySelector('nav');
  
    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
  
    // Lightbox effect for blog images
    const blogImages = document.querySelectorAll('.blog-preview img');
    blogImages.forEach((img) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = 1000;
  
        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        fullImg.alt = img.alt;
        fullImg.style.maxWidth = '90%';
        fullImg.style.maxHeight = '90%';
        fullImg.style.border = '5px solid white';
        fullImg.style.borderRadius = '10px';
  
        overlay.appendChild(fullImg);
        document.body.appendChild(overlay);
  
        overlay.addEventListener('click', () => {
          overlay.remove();
        });
      });
    });
  });
  