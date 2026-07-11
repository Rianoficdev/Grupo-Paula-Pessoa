/*
TemplateMo 622 Clearwave
https://templatemo.com/tm-622-clearwave
Free for personal and commercial use
Adapted for Grupo Paula Pessoa.
*/

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');

    if (href === '#') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  if (!hamburger || !mobileMenu) return;
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    hamburger.classList.toggle('open', !isOpen);
    mobileMenu.classList.toggle('open', !isOpen);
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMobileMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

const laboratoryUnits = [
  { name: 'Aldeota', image: 'aldeota.png', address: 'Av. Bar\u00e3o de Studart, 1182 - Aldeota, Fortaleza - CE' },
  { name: 'Benfica', image: 'benfica.png', address: 'Av. Carapinima, 2415 - Benfica, Fortaleza - CE' },
  { name: 'Cidade 2000', image: 'cidade-2000.png', address: 'Alameda Nadja, 46 A - Quadra 8, Fortaleza - CE' },
  { name: 'Cidade dos Funcion\u00e1rios', image: 'cidade-dos-funcionarios.png', address: 'Av. Oliveira Paiva, 1292 - Cidade dos Funcion\u00e1rios, Fortaleza - CE' },
  { name: 'Messejana - Giga Mall', image: 'giga-mall.png', address: 'R. Jos\u00e9 Hip\u00f3lito, 264 - Messejana, Fortaleza - CE' },
  { name: 'Iand\u00ea', image: 'iande.png', address: 'Av. Edson da Mota Correia, 620 - Centro, Caucaia - CE, ao lado da Smart Fit' },
  { name: 'North Shopping', image: 'north-shopping.png', address: 'Av. Bezerra de Menezes, 2450 - Presidente Kennedy, Fortaleza - CE - Piso L3, ao lado do Detran' },
  { name: 'Parquel\u00e2ndia', image: 'parquelandia.png', address: 'Rua Gustavo Sampaio, 1273 - Parquel\u00e2ndia, Fortaleza - CE' },
  { name: 'Rio Mar Fortaleza', image: 'rio-mar-fortaleza.png', address: 'Av. Desembargador Lauro Nogueira - RioMar Fortaleza, Fortaleza - CE' },
  { name: 'Rio Mar Kennedy', image: 'rio-mar-kennedy.png', address: 'Av. Sargento Herm\u00ednio Sampaio, 3100 - Presidente Kennedy, Fortaleza - CE' }
];

const laboratoryGrid = document.getElementById('unitsGrid');
const laboratoryTemplate = laboratoryGrid ? laboratoryGrid.querySelector('.unit-card[data-unit="laboratorio"]') : null;

if (laboratoryGrid && laboratoryTemplate) {
  laboratoryGrid.querySelectorAll('.unit-card[data-unit="laboratorio"]').forEach(card => card.remove());

  laboratoryUnits.forEach(unit => {
    const card = laboratoryTemplate.cloneNode(true);
    const image = card.querySelector('.unit-image');
    const title = card.querySelector('.unit-title-row h3');
    const description = card.querySelector('.unit-description');
    const demoLabel = card.querySelector('.unit-demo-label');
    const services = card.querySelector('.unit-services');

    card.className = 'unit-card reveal';
    if (demoLabel) demoLabel.remove();

    if (image) {
      image.className = 'unit-image unit-image-laboratory-location';
      image.style.backgroundImage = `url("assets/laboratorio-locations/${unit.image}")`;
      image.setAttribute('aria-label', `Fachada do Laboratorio Carlos Ribeiro ${unit.name}`);
    }

    if (title) {
      title.textContent = 'Laboratorio Carlos Ribeiro';
      const locationName = document.createElement('span');
      locationName.className = 'unit-location-name unit-location-name-lab';
      locationName.textContent = unit.name;
      title.appendChild(locationName);
    }

    if (description) {
      description.className = 'unit-address';
      description.textContent = unit.address;

      const contacts = document.createElement('div');
      contacts.className = 'unit-contact-links';
      contacts.innerHTML = '<a href="https://www.instagram.com/laboratoriocarlosribeiro" target="_blank" rel="noopener">@laboratoriocarlosribeiro</a><a href="https://wa.me/5585999617358" target="_blank" rel="noopener">(85) 99961-7358</a><a href="tel:08007777358">0800 777 7358</a>';
      description.insertAdjacentElement('afterend', contacts);
    }

    if (services) {
      services.innerHTML = '<li>Coleta laboratorial</li><li>Analises clinicas</li><li>Exames laboratoriais</li>';
    }

    laboratoryGrid.appendChild(card);
  });
}

const exampleUnitsGrid = document.getElementById('unitsGrid');
const exampleUnitNames = {
  transito: 'Fortran Clinica do Transito',
  toxicologia: 'Regis Juca'
};

if (exampleUnitsGrid) {
  Object.entries(exampleUnitNames).forEach(([unitType, unitName]) => {
    const demoLabel = exampleUnitsGrid.querySelector(`.unit-card[data-unit="${unitType}"] .unit-demo-label`);
    const demoCard = demoLabel ? demoLabel.closest('.unit-card') : null;
    if (!demoCard) return;

    [3, 4].forEach(unitNumber => {
      const card = demoCard.cloneNode(true);
      const title = card.querySelector('.unit-title-row h3');
      const image = card.querySelector('.unit-image');

      card.dataset.generatedExample = String(unitNumber);
      if (title) {
        title.textContent = unitName;
        const locationName = document.createElement('span');
        locationName.className = 'unit-location-name';
        locationName.textContent = `Unidade 0${unitNumber}`;
        title.appendChild(locationName);
      }
      if (image) image.setAttribute('aria-label', `Exemplo da unidade 0${unitNumber} de ${unitName}`);
      exampleUnitsGrid.appendChild(card);
    });
  });
}

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('visible'));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const decimal = el.dataset.decimal;
  const duration = 1600;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const value = eased * target;

    el.textContent = decimal ? value.toFixed(1) : Math.floor(value);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = decimal ? target.toFixed(1) : target;
    }
  }

  requestAnimationFrame(step);
}

const statsGrids = document.querySelectorAll('.stats-grid');
if ('IntersectionObserver' in window) {
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statsGrids.forEach(el => statObserver.observe(el));
} else {
  document.querySelectorAll('.stat-num').forEach(el => {
    el.textContent = el.dataset.target;
  });
}

const faqItems = document.querySelectorAll('.faq-item');
let allOpen = false;

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  if (!question) return;

  const toggleFaq = () => {
    const isOpen = item.classList.contains('open');
    item.classList.toggle('open', !isOpen);
    question.setAttribute('aria-expanded', String(!isOpen));
  };

  question.addEventListener('click', toggleFaq);
  question.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFaq();
    }
  });
});

const faqToggleAllBtn = document.getElementById('faqToggleAll');
const faqToggleIcon = document.getElementById('faqToggleIcon');

if (faqToggleAllBtn) {
  faqToggleAllBtn.addEventListener('click', () => {
    allOpen = !allOpen;

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      item.classList.toggle('open', allOpen);
      if (question) question.setAttribute('aria-expanded', String(allOpen));
    });

    if (faqToggleIcon) faqToggleIcon.textContent = allOpen ? '-' : '+';
    faqToggleAllBtn.lastChild.textContent = allOpen ? ' Recolher tudo' : ' Expandir tudo';
  });
}

const unitsGrid = document.getElementById('unitsGrid');
const unitFilterButtons = document.querySelectorAll('.unit-filter-btn');
const unitsPrev = document.getElementById('unitsPrev');
const unitsNext = document.getElementById('unitsNext');

function updateUnitsCarouselButtons() {
  if (!unitsGrid || !unitsPrev || !unitsNext) return;
  const maxScroll = Math.max(0, unitsGrid.scrollWidth - unitsGrid.clientWidth);
  unitsPrev.disabled = unitsGrid.scrollLeft <= 2;
  unitsNext.disabled = unitsGrid.scrollLeft >= maxScroll - 2;
}

function getUnitsCarouselStep() {
  if (!unitsGrid) return 0;
  const visibleCard = unitsGrid.querySelector('.unit-card:not([hidden])');
  const gap = parseFloat(getComputedStyle(unitsGrid).columnGap) || 0;
  return visibleCard ? visibleCard.getBoundingClientRect().width + gap : unitsGrid.clientWidth;
}

if (unitsGrid && unitsPrev && unitsNext) {
  unitsPrev.addEventListener('click', () => {
    unitsGrid.scrollBy({ left: -getUnitsCarouselStep(), behavior: 'smooth' });
  });

  unitsNext.addEventListener('click', () => {
    unitsGrid.scrollBy({ left: getUnitsCarouselStep(), behavior: 'smooth' });
  });

  unitsGrid.addEventListener('scroll', updateUnitsCarouselButtons, { passive: true });
  window.addEventListener('resize', updateUnitsCarouselButtons, { passive: true });
  requestAnimationFrame(updateUnitsCarouselButtons);
}

if (unitsGrid && unitFilterButtons.length) {
  unitFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const clearFilter = button.classList.contains('active');
      const selectedUnit = clearFilter ? 'all' : button.dataset.unitFilter;
      let visibleCardIndex = 0;

      unitsGrid.querySelectorAll('.unit-card').forEach(card => {
        const shouldShow = selectedUnit === 'all' || card.dataset.unit === selectedUnit;
        card.hidden = !shouldShow;

        if (shouldShow) {
          card.classList.remove('unit-card-enter');
          card.style.setProperty('--unit-enter-delay', `${visibleCardIndex * 110}ms`);
          void card.offsetWidth;
          card.classList.add('unit-card-enter');
          card.addEventListener('animationend', () => {
            card.classList.remove('unit-card-enter');
          }, { once: true });
          visibleCardIndex += 1;
        }
      });

      unitFilterButtons.forEach(filterButton => {
        const active = !clearFilter && filterButton === button;
        filterButton.classList.toggle('active', active);
        filterButton.setAttribute('aria-pressed', String(active));
      });

      unitsGrid.scrollTo({ left: 0, behavior: 'smooth' });
      requestAnimationFrame(updateUnitsCarouselButtons);
      setTimeout(updateUnitsCarouselButtons, 450);
    });
  });
}
