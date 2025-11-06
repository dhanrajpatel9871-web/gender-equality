// Mobile nav toggle
(function(){
  const toggle = document.getElementById('navToggle');
  if(!toggle) return;
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open');
  });
})();

// Simple contact form validation
(function(){
  const form = document.getElementById('contact-form');
  if(!form) return;

  const byId = (id) => document.getElementById(id);
  const nameEl = byId('name');
  const emailEl = byId('email');
  const msgEl = byId('message');

  function setError(el, msg) {
    const node = byId(el.id + '-error');
    if(node) node.textContent = msg || '';
    el.setAttribute('aria-invalid', !!msg);
  }

  function validate() {
    let ok = true;
    if(!nameEl.value || nameEl.value.trim().length < 3) { setError(nameEl, 'Please enter your name (min 3 characters).'); ok = false } else setError(nameEl, '');
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((emailEl.value||'').trim());
    if(!emailValid) { setError(emailEl, 'Please enter a valid email address.'); ok = false } else setError(emailEl, '');
    if(!msgEl.value || msgEl.value.trim().length < 10) { setError(msgEl, 'Message must be at least 10 characters.'); ok = false } else setError(msgEl, '');
    return ok;
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!validate()) return;
    const success = byId('form-success');
    if(success) success.style.display = 'block';
    form.reset();
    setTimeout(()=> { if(success) success.style.display = 'none' }, 3000);
  });
})();