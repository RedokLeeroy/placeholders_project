(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu-mob]');
  const tabletMenuRef = document.querySelector('[data-menu-tab]');
  const body = document.querySelector('body');
  const logo = document.querySelector('[data-logo]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    tabletMenuRef.classList.toggle('is-open');

    body.classList.toggle('mob-menu__fixed');
    logo.classList.toggle('logo-light');
    logo.classList.toggle('logo-lendscape');
  });
})();
