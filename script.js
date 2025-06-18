const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

function setLanguage(lang) {
  fetch(`translations/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) {
          // Aplica la traducción a todos los elementos con el mismo data-key
          el.innerText = data[key];
        }
      });
    });
}

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  setLanguage(currentLang);
  langToggle.textContent = currentLang === 'en' ? 'ES' : 'EN';
});

// Cargar idioma por defecto
setLanguage(currentLang);