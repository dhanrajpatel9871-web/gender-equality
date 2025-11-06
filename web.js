// Navigation Active Link Highlight (Runs on each page load)
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});

// Home Page: Gender Equality Facts Toggle
const toggle = document.getElementById('facts-toggle');
const factBox = document.getElementById('fact-box');

const facts = [
  "Gender equality benefits everyone, not just women.",
  "Women make up nearly half the global workforce but hold far fewer leadership roles.",
  "Education is a key driver for closing the gender gap.",
  "Gender equality promotes economic growth and sustainable development.",
  "Combatting gender stereotypes benefits social well-being."
];

if (toggle) {
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      factBox.textContent = randomFact;
    } else {
      factBox.textContent = '';
    }
  });
}

// Contact form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    let valid = true;

    // Clear previous errors
    contactForm.querySelectorAll('.error').forEach(el => el.textContent = '');

    if (name.length < 3) {
      showError('name-error', 'Name must be at least 3 characters.');
      valid = false;
    }
    if (!validateEmail(email)) {
      showError('email-error', 'Please enter a valid email.');
      valid = false;
    }
    if (message.length < 10) {
      showError('message-error', 'Message must be at least 10 characters.');
      valid = false;
    }

    if (valid) {
      alert('Thank you for contacting us! We will get back to you shortly.');
      contactForm.reset();
      factBox.textContent = '';
    }
  });
}

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function validateEmail(email) {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email.toLowerCase());
}
