document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".HideToShow");
  const elements1 = document.querySelectorAll(".FooterLink");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.15
  });

  
  elements.forEach(el => observer.observe(el));
  elements1.forEach(el => observer.observe(el));
});



document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('SubmitPhone');
  const inputContainer = document.getElementById('PhoneRequest');

  btn.addEventListener('click', () => {
    const phone = document.getElementById('PhoneNumber').value;

    fetch('code.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: 'phone=' + encodeURIComponent(phone)
    })
    .then(response => response.text())
    .then(data => {
      inputContainer.innerHTML = data;
    });
  });
});



// Reveal on scroll
const faders = document.querySelectorAll('.fade-in');

function reveal() {
    for (let el of faders) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);