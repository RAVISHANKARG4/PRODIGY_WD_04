document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    let currentSection = ''; 
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      if (pageYOffset >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  }); 
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');
    let valid = true;
    if (name.value.trim() === '') {
      alert('Please enter your name.');
      valid = false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      alert('Please enter a valid email address.');
      valid = false;
    }
    if (message.value.trim() === '') {
      alert('Please enter your message.');
      valid = false;
    }
    if (valid) {
      alert('Message sent successfully!');
    }
  });
  