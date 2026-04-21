const whatsappNumber = '918830190619';
const mobileCta = document.getElementById('mobileCta');
const leadForm = document.getElementById('leadForm');

const openWhatsApp = (message) => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

mobileCta?.addEventListener('click', () => {
  openWhatsApp('Hi Stamp Stories, I want to enquire about visa services.');
});

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(leadForm);
  const name = (formData.get('name') || '').toString().trim();
  const phone = (formData.get('phone') || '').toString().trim();
  const visaType = (formData.get('visaType') || '').toString().trim();

  const message = `Hi Stamp Stories, my name is ${name}. Phone: ${phone}. I want help with ${visaType}.`;
  openWhatsApp(message);
  leadForm.reset();
});

document.querySelectorAll('img.remote-image').forEach((image) => {
  image.addEventListener('error', () => {
    const fallback = image.getAttribute('data-fallback');
    if (fallback && image.src !== fallback) {
      image.src = fallback;
    }
  });
});
