// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Vine divider scroll-reveal
  const vines = document.querySelectorAll('.vine-divider');
  if ('IntersectionObserver' in window && vines.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    vines.forEach((v) => observer.observe(v));
  } else {
    vines.forEach((v) => v.classList.add('in-view'));
  }

  // Contact form — dev-mode: logs to console, shows confirmation
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());

      if (!data.name || !data.email || !data.message) {
        showStatus(form, 'error', 'Please fill in your name, email, and message before sending.');
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(data.email)) {
        showStatus(form, 'error', 'That email address doesn\u2019t look right \u2014 please double-check it.');
        return;
      }

      // In production this would POST to a serverless function or form service (e.g. Formspree).
      console.log('[Verdora contact form submission]', data);

      showStatus(form, 'success', `Thank you, ${data.name.split(' ')[0]} \u2014 your message has reached us. We reply within two business days.`);
      form.reset();
    });
  }
});

function showStatus(form, type, message) {
  let status = form.querySelector('.form-status');
  if (!status) {
    status = document.createElement('div');
    status.className = 'form-status';
    form.appendChild(status);
  }
  status.className = `form-status ${type}`;
  status.textContent = message;
  status.setAttribute('role', 'status');
}
