const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
const subscribeDialog = document.querySelector('#subscribe-dialog');
const subscribeForm = document.querySelector('#subscribe-form');
const demoPanel = document.querySelector('#demo-panel');
const realPanel = document.querySelector('#real-panel');
const confirmationPanel = document.querySelector('#confirmation-panel');
const modeOptions = [...document.querySelectorAll('.mode-option')];

let selectedPlan = { name: 'Essential', price: 29 };

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  primaryNav.classList.toggle('open', !isOpen);
});

primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  });
});

function resetSubscriptionView() {
  subscribeForm.hidden = false;
  demoPanel.hidden = false;
  realPanel.hidden = true;
  confirmationPanel.hidden = true;
}

function openSubscription(plan, price) {
  selectedPlan = { name: plan, price: Number(price) };
  document.querySelector('#selected-plan-name').textContent = selectedPlan.name;
  document.querySelector('#selected-plan-price').textContent = `${selectedPlan.price} TND`;
  resetSubscriptionView();
  subscribeDialog.showModal();
}

document.querySelectorAll('.choose-plan').forEach((button) => {
  button.addEventListener('click', () => {
    openSubscription(button.dataset.plan, button.dataset.price);
  });
});

function setSubscriptionMode(mode) {
  const isDemo = mode === 'demo';
  demoPanel.hidden = !isDemo;
  realPanel.hidden = isDemo;
  confirmationPanel.hidden = true;
  modeOptions.forEach((option) => {
    const isActive = option.dataset.mode === mode;
    option.classList.toggle('active', isActive);
    option.setAttribute('aria-pressed', String(isActive));
  });
}

modeOptions.forEach((option) => {
  option.addEventListener('click', () => {
    if (option.dataset.mode === 'real') {
      redirectToHostedCheckout();
      return;
    }
    setSubscriptionMode('demo');
  });
});

function redirectToHostedCheckout() {
  const hostedCheckoutUrl = '';
  if (!hostedCheckoutUrl) {
    setSubscriptionMode('real');
    return;
  }
  window.location.assign(hostedCheckoutUrl);
}

document.querySelector('#real-payment-button').addEventListener('click', () => {
  setSubscriptionMode('demo');
});

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!subscribeForm.reportValidity()) return;

  const formData = new FormData(subscribeForm);
  document.querySelector('#confirmation-clinic').textContent = formData.get('clinic').trim();
  document.querySelector('#confirmation-plan').textContent = selectedPlan.name;
  document.querySelector('#confirmation-price').textContent = `${selectedPlan.price} TND / mois`;
  document.querySelector('#confirmation-email').textContent = `Récapitulatif de démonstration pour ${formData.get('email')}.`;
  demoPanel.hidden = true;
  confirmationPanel.hidden = false;
});

document.querySelector('#confirmation-close').addEventListener('click', () => {
  subscribeDialog.close();
});

document.querySelector('.dialog-close').addEventListener('click', () => {
  subscribeDialog.close();
});

subscribeDialog.addEventListener('click', (event) => {
  if (event.target === subscribeDialog) subscribeDialog.close();
});

subscribeDialog.addEventListener('close', () => {
  subscribeForm.reset();
  resetSubscriptionView();
  setSubscriptionMode('demo');
});
