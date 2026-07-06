// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Quote form -> builds a mailto (works with zero backend).
  // Swap this out for Formspree / Netlify Forms / a real endpoint when ready.
  var form = document.querySelector('#quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = data.get('name') || '';
      var phone = data.get('phone') || '';
      var suburb = data.get('suburb') || '';
      var service = data.get('service') || '';
      var message = data.get('message') || '';

      var body = [
        'Name: ' + name,
        'Phone: ' + phone,
        'Suburb: ' + suburb,
        'Service needed: ' + service,
        '',
        message
      ].join('\n');

      var mailto = 'mailto:scottymatthews@live.com.au'
        + '?subject=' + encodeURIComponent('Quote request — ' + name)
        + '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
});
