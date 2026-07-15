/*
TemplateMo 622 Clearwave
https://templatemo.com/tm-622-clearwave
Uso livre para projetos pessoais e comerciais.
Adaptado para o Grupo Paula Pessoa.
*/

// Navegacao suave entre as secoes da pagina.
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

const navegacao = document.getElementById('mainNav');
if (navegacao) {
  window.addEventListener('scroll', () => {
    navegacao.classList.toggle('rolada', window.scrollY > 40);
  }, { passive: true });
}

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Fecha o menu mobile e devolve a rolagem para a pagina.
function closeMobileMenu() {
  if (!hamburger || !mobileMenu) return;
  hamburger.classList.remove('aberto');
  mobileMenu.classList.remove('aberto');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('aberto');
    hamburger.classList.toggle('aberto', !isOpen);
    mobileMenu.classList.toggle('aberto', !isOpen);
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

// Dados das unidades reais do Laboratorio Carlos Ribeiro.
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
const laboratoryTemplate = laboratoryGrid ? laboratoryGrid.querySelector('.cartao-unidade[data-unit="laboratorio"]') : null;

// Monta os cartoes do laboratorio a partir de um unico modelo do HTML.
if (laboratoryGrid && laboratoryTemplate) {
  laboratoryGrid.querySelectorAll('.cartao-unidade[data-unit="laboratorio"]').forEach(card => card.remove());

  laboratoryUnits.forEach(unit => {
    const card = laboratoryTemplate.cloneNode(true);
    const image = card.querySelector('.imagem-unidade');
    const title = card.querySelector('.linha-titulo-unidade h3');
    const description = card.querySelector('.descricao-unidade');
    const demoLabel = card.querySelector('.rotulo-unidade-demonstrativa');
    const services = card.querySelector('.servicos-unidade');

    card.className = 'cartao-unidade revelar';
    if (demoLabel) demoLabel.remove();

    if (image) {
      image.className = 'imagem-unidade imagem-local-laboratorio';
      image.style.backgroundImage = `url("assets/unidades/laboratorio-carlos-ribeiro/${unit.image}")`;
      image.setAttribute('aria-label', `Fachada do Laboratorio Carlos Ribeiro ${unit.name}`);
    }

    if (title) {
      title.textContent = 'Laboratorio Carlos Ribeiro';
      const locationName = document.createElement('span');
      locationName.className = 'nome-local-unidade nome-local-laboratorio';
      locationName.textContent = unit.name;
      title.appendChild(locationName);
    }

    if (description) {
      description.className = 'endereco-unidade';
      description.textContent = unit.address;

      const contacts = document.createElement('div');
      contacts.className = 'contatos-unidade';
      contacts.innerHTML = '<a href="https://www.instagram.com/laboratoriocarlosribeiro" target="_blank" rel="noopener">@laboratoriocarlosribeiro</a><a href="https://wa.me/5585999617358" target="_blank" rel="noopener">(85) 99961-7358</a><a href="tel:08007777358">0800 777 7358</a>';
      description.insertAdjacentElement('afterend', contacts);
    }

    if (services) {
      services.innerHTML = '<li>Coleta laboratorial</li><li>Analises clinicas</li><li>Exames laboratoriais</li>';
    }

    laboratoryGrid.appendChild(card);
  });
}

// Dados das unidades reais da Fortran e Nortetran.
const transitUnits = [
  { brand: 'Fortran', name: 'North Shopping Bezerra', image: 'north-shopping-bezerra.jpg', address: 'Av. Bezerra de Menezes, 2450 - Presidente Kennedy, Fortaleza - CE, 60325-002 (Piso 3)' },
  { brand: 'Fortran', name: 'Maraponga', image: 'maraponga.jpg', address: 'Av. Godofredo Maciel, 2947 - Jardim Cearense, Fortaleza - CE, 60711-495' },
  { brand: 'Fortran', name: 'Centro', image: 'centro.jpg', address: 'R. Gen. Sampaio, 835 - Centro, Fortaleza - CE, 60020-030 (Dentro do Vapt Vupt)' },
  { brand: 'Fortran', name: 'RioMar Papicu', image: 'rio-mar-papicu.jpg', address: 'R. Des. Lauro Nogueira, 1500 - Papicu, Fortaleza - CE, 60175-055 (Piso 2)' },
  { brand: 'Fortran', name: 'RioMar Kennedy', image: 'rio-mar-kennedy.jpg', address: 'Av. Srg. Hermínio Sampaio, 3100 - Presidente Kennedy, Fortaleza - CE, 60355-512 (Piso 1)' },
  { brand: 'Fortran', name: 'Maracanaú', image: 'maracanau.jpg', address: 'Av. Carlos Jereissati, 100 - Jereissati - Setor D, Maracanaú - CE, 61901-060 (Piso 1)' },
  { brand: 'Fortran', name: 'Quixadá', image: 'quixada.jpg', address: 'R. José Enéas Monteiro Lessa, 955 - Planalto Universitário, Quixadá - CE, 63900-000' },
  { brand: 'Fortran', name: 'Juazeiro do Norte', image: 'juazeiro-do-norte.jpg', address: 'R. Interventor Francisco Erivano Cruz, 120 - Centro, Juazeiro do Norte - CE, 63010-015' },
  { brand: 'Fortran', name: 'Crato', image: 'crato.jpg', address: 'R. Dom Melo, 13 - Pinto Madeira, Crato - CE, 63100-500' },
  { brand: 'Fortran', name: 'Shopping Benfica', image: 'shopping-benfica.jpg', address: 'Av. Carapinima, 2200 - Benfica, Fortaleza - CE, 60015-290 (Piso 1)' },
  { brand: 'Fortran', name: 'Quixeramobim', image: 'quixeramobim.jpg', address: 'Av. Geraldo Bizarria de Carvalho, 478 - Vila Betania, Quixeramobim - CE, 63800-000' },
  { brand: 'Nortetran', name: 'Canindé', image: 'caninde.jpg', address: 'Av. Luciano Magalhães, 2693 - Bela Vista, Canindé - CE, 62700-000' },
  { brand: 'Nortetran', name: 'Crateús', image: 'crateus.jpg', address: 'Av. Dr. Edilberto Frota, 3213 - Campo Velho, Crateús - CE, 63701-250' },
  { brand: 'Nortetran', name: 'Itapipoca', image: 'itapipoca.jpg', address: 'Av. Anastácio Braga, 911 - Centro, Itapipoca - CE, 62500-040 (Dentro do Mercado Central)' },
  { brand: 'Nortetran', name: 'Tianguá', image: 'tiangua.jpg', address: 'R. do Campo de Aviação, 78 - Santo Expedito, Tianguá - CE, 62320-000' },
  { brand: 'Nortetran', name: 'Sobral', image: 'sobral.jpg', address: 'R. Cel. José Silvestre, 1037 - Centro, Sobral - CE, 62011-120' }
];

const transitGrid = document.getElementById('unitsGrid');
const transitTemplate = transitGrid ? transitGrid.querySelector('.cartao-unidade[data-unit="transito"]') : null;

if (transitGrid && transitTemplate) {
  transitGrid.querySelectorAll('.cartao-unidade[data-unit="transito"]').forEach(card => card.remove());

  transitUnits.forEach(unit => {
    const card = transitTemplate.cloneNode(true);
    const image = card.querySelector('.imagem-unidade');
    const title = card.querySelector('.linha-titulo-unidade h3');
    const description = card.querySelector('.descricao-unidade');
    const demoLabel = card.querySelector('.rotulo-unidade-demonstrativa');

    card.className = 'cartao-unidade revelar';
    card.dataset.brand = unit.brand.toLowerCase();
    if (demoLabel) demoLabel.remove();

    if (image) {
      image.className = 'imagem-unidade imagem-local-transito';
      if (unit.image) {
        const fallback = unit.brand === 'Nortetran'
          ? 'assets/logos/empresas/nortetran.png'
          : 'assets/modelos/modelo-unidades.png';
        image.style.backgroundImage = `url("assets/unidades/transito/${unit.image}"), url("${fallback}")`;
        if (unit.brand === 'Nortetran') {
          image.style.backgroundSize = 'cover, 58% auto';
          image.style.backgroundPosition = 'center, center';
          image.style.backgroundColor = '#e9f9fb';
        }
      }
      image.setAttribute('aria-label', `Unidade ${unit.brand} ${unit.name}`);
    }

    if (title) {
      title.textContent = unit.brand === 'Fortran' ? 'Fortran Clínica Médica do Trânsito' : 'Nortetran Clínica Médica do Trânsito';
      const locationName = document.createElement('span');
      locationName.className = 'nome-local-unidade';
      locationName.textContent = unit.name;
      title.appendChild(locationName);
    }

    if (description) {
      description.className = 'endereco-unidade';
      description.textContent = unit.address;
    }

    transitGrid.appendChild(card);
  });
}

// Completa os exemplos das empresas que ainda nao possuem dados definitivos.
const exampleUnitsGrid = document.getElementById('unitsGrid');
const exampleUnitNames = {
  toxicologia: 'Regis Juca'
};

if (exampleUnitsGrid) {
  Object.entries(exampleUnitNames).forEach(([unitType, unitName]) => {
    const demoLabel = exampleUnitsGrid.querySelector(`.cartao-unidade[data-unit="${unitType}"] .rotulo-unidade-demonstrativa`);
    const demoCard = demoLabel ? demoLabel.closest('.cartao-unidade') : null;
    if (!demoCard) return;

    [3, 4].forEach(unitNumber => {
      const card = demoCard.cloneNode(true);
      const title = card.querySelector('.linha-titulo-unidade h3');
      const image = card.querySelector('.imagem-unidade');

      card.dataset.generatedExample = String(unitNumber);
      if (title) {
        title.textContent = unitName;
        const locationName = document.createElement('span');
        locationName.className = 'nome-local-unidade';
        locationName.textContent = `Unidade 0${unitNumber}`;
        title.appendChild(locationName);
      }
      if (image) image.setAttribute('aria-label', `Exemplo da unidade 0${unitNumber} de ${unitName}`);
      exampleUnitsGrid.appendChild(card);
    });
  });
}

// Revela os elementos conforme eles entram na area visivel da tela.
const revealEls = document.querySelectorAll('.revelar');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('visivel'));
}

// Anima os numeros institucionais sem saltos bruscos.
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

const statsGrids = document.querySelectorAll('.grade-numeros');
if ('IntersectionObserver' in window) {
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.numero-animado').forEach(animateCounter);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statsGrids.forEach(el => statObserver.observe(el));
} else {
  document.querySelectorAll('.numero-animado').forEach(el => {
    el.textContent = el.dataset.target;
  });
}

// Controla a abertura individual e coletiva das duvidas frequentes.
const faqItems = document.querySelectorAll('.item-duvida');
let allOpen = false;

faqItems.forEach(item => {
  const question = item.querySelector('.pergunta-duvida');
  if (!question) return;

  const toggleFaq = () => {
    const isOpen = item.classList.contains('aberto');
    item.classList.toggle('aberto', !isOpen);
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
      const question = item.querySelector('.pergunta-duvida');
      item.classList.toggle('aberto', allOpen);
      if (question) question.setAttribute('aria-expanded', String(allOpen));
    });

    if (faqToggleIcon) faqToggleIcon.textContent = allOpen ? '-' : '+';
    faqToggleAllBtn.lastChild.textContent = allOpen ? ' Recolher tudo' : ' Expandir tudo';
  });
}

// Controla navegacao, filtros e animacoes do carrossel de unidades.
const unitsGrid = document.getElementById('unitsGrid');
const unitFilterButtons = document.querySelectorAll('.botao-filtro-unidade');
const unitsPrev = document.getElementById('unitsPrev');
const unitsNext = document.getElementById('unitsNext');
const unitSearch = document.getElementById('unitSearch');
const unitSearchClear = document.getElementById('unitSearchClear');
const unitSearchStatus = document.getElementById('unitSearchStatus');
let activeUnitFilter = 'all';

// Deixa a pesquisa independente de acentos e letras maiusculas.
function normalizeUnitSearchText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function updateUnitsCarouselButtons() {
  if (!unitsGrid || !unitsPrev || !unitsNext) return;
  const maxScroll = Math.max(0, unitsGrid.scrollWidth - unitsGrid.clientWidth);
  unitsPrev.disabled = unitsGrid.scrollLeft <= 2;
  unitsNext.disabled = unitsGrid.scrollLeft >= maxScroll - 2;
}

function getUnitsCarouselStep() {
  if (!unitsGrid) return 0;
  const visibleCard = unitsGrid.querySelector('.cartao-unidade:not([hidden])');
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

function applyUnitFilters(animateCards = false) {
  if (!unitsGrid) return;

  const searchTerm = normalizeUnitSearchText(unitSearch ? unitSearch.value : '');
  let visibleCardIndex = 0;

  unitsGrid.querySelectorAll('.cartao-unidade').forEach(card => {
    const companyMatches = activeUnitFilter === 'all' || card.dataset.unit === activeUnitFilter;
    const imageLabel = card.querySelector('[role="img"]')?.getAttribute('aria-label') || '';
    const cardContent = normalizeUnitSearchText(`${card.textContent} ${imageLabel}`);
    const searchMatches = !searchTerm || cardContent.includes(searchTerm);
    const shouldShow = companyMatches && searchMatches;

    card.hidden = !shouldShow;

    if (shouldShow && animateCards) {
      card.classList.remove('entrada-cartao-unidade');
      card.style.setProperty('--unit-enter-delay', `${visibleCardIndex * 80}ms`);
      void card.offsetWidth;
      card.classList.add('entrada-cartao-unidade');
      card.addEventListener('animationend', () => {
        card.classList.remove('entrada-cartao-unidade');
      }, { once: true });
    }

    if (shouldShow) visibleCardIndex += 1;
  });

  if (unitSearchClear) unitSearchClear.hidden = !unitSearch?.value;

  if (unitSearchStatus) {
    const filtering = activeUnitFilter !== 'all' || Boolean(searchTerm);
    unitSearchStatus.textContent = filtering
      ? visibleCardIndex === 0
        ? 'Nenhuma unidade encontrada para esta pesquisa.'
        : `${visibleCardIndex} ${visibleCardIndex === 1 ? 'unidade encontrada' : 'unidades encontradas'}`
      : '';
    unitSearchStatus.classList.toggle('sem-resultados', filtering && visibleCardIndex === 0);
  }

  unitsGrid.scrollTo({ left: 0, behavior: animateCards ? 'smooth' : 'auto' });
  requestAnimationFrame(updateUnitsCarouselButtons);
  setTimeout(updateUnitsCarouselButtons, 450);
}

if (unitsGrid && unitFilterButtons.length) {
  unitFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const clearFilter = button.classList.contains('ativo');
      activeUnitFilter = clearFilter ? 'all' : button.dataset.unitFilter;

      unitFilterButtons.forEach(filterButton => {
        const ativo = !clearFilter && filterButton === button;
        filterButton.classList.toggle('ativo', ativo);
        filterButton.setAttribute('aria-pressed', String(ativo));
      });

      applyUnitFilters(true);
    });
  });
}

if (unitSearch) {
  unitSearch.addEventListener('input', () => applyUnitFilters(true));
}

if (unitSearch && unitSearchClear) {
  unitSearchClear.addEventListener('click', () => {
    unitSearch.value = '';
    unitSearch.focus();
    applyUnitFilters(true);
  });
}

if (window.lucide) {
  window.lucide.createIcons();
}
