/*
TemplateMo 622 Clearwave
https://templatemo.com/tm-622-clearwave
Uso livre para projetos pessoais e comerciais.
Adaptado para o Grupo Paula Pessoa.
*/

// Navegação suave entre as seções da página.
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

// Fecha o menu mobile e devolve a rolagem para a página.
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

// Dados das unidades reais do Laboratório Carlos Ribeiro.
const laboratoryUnits = [
  { name: 'Benfica', image: 'benfica.png', address: 'Av. Carapinima, 2415 A - Benfica, Fortaleza - CE, 60020-290' },
  { name: 'Cidade 2000', image: 'cidade-2000.png', address: 'Alameda Nadja, 46 A - Quadra 8 - Cidade 2000, Fortaleza - CE, 60190-230' },
  { name: 'Cidade dos Funcionários', image: 'cidade-dos-funcionarios.png', address: 'Av. Oliveira Paiva, 1291 - Cidade dos Funcionários, Fortaleza - CE, 60822-131' },
  { name: 'Rio Mar Fortaleza', image: 'rio-mar-fortaleza.png', address: 'R. Des. Lauro Nogueira, 1355 - Papicu, Fortaleza - CE, 60175-055' },
  { name: 'Parquelândia', image: 'parquelandia.png', address: 'R. Gustavo Sampaio, 1273 - Parquelândia, Fortaleza - CE, 60455-011' },
  { name: 'North Shopping Bezerra', image: 'north-shopping.png', address: 'Av. Bezerra de Menezes, 2450 - Presidente Kennedy, Fortaleza - CE, 60325-002 (Piso 3)' },
  { name: 'Aldeota', image: 'aldeota.png', address: 'Av. Barão de Studart, 1182 - Aldeota, Fortaleza - CE, 60120-024' },
  { name: 'Giga Mall', image: 'giga-mall.png', address: 'R. José Hipólito, 264 - Messejana, Fortaleza - CE, 60871-170 (Térreo)' },
  { name: 'Rio Mar Kennedy', image: 'rio-mar-kennedy.png', address: 'Av. Srg. Hermínio Sampaio, 3100 - Presidente Kennedy, Fortaleza - CE, 60355-512 (Piso 1)' },
  { name: 'Shopping Iandê', image: 'iande.png', address: 'Av. Edson da Mota Correia, 620 - Centro, Caucaia - CE, 61600-040 (Subsolo)' },
  { name: 'Clínica do Coração', image: 'clinica-do-coracao.jpg', address: 'R. Sen. Pompeu, 474 - Centro, Fortaleza - CE, 60025-000' },
  { name: 'Fisio Clin', image: 'fisio-clin.jpg', address: 'R. Angélica Gurgel, 226 - Messejana, Fortaleza - CE, 60871-030' },
  { name: 'ABI', image: 'abi.jpg', address: 'Av. Dom Manuel, 114 - Centro, Fortaleza - CE' }
];

const laboratoryGrid = document.getElementById('unitsGrid');
const laboratoryTemplate = laboratoryGrid ? laboratoryGrid.querySelector('.cartao-unidade[data-unit="laboratorio"]') : null;

// Monta os cartões do laboratório a partir de um único modelo do HTML.
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
      image.className = unit.image
        ? 'imagem-unidade imagem-local-laboratorio'
        : 'imagem-unidade imagem-unidade-laboratorio';
      if (unit.image) {
        image.style.backgroundImage = `url("assets/unidades/laboratorio-carlos-ribeiro/${unit.image}?v=20260723-03")`;
      } else {
        image.style.removeProperty('background-image');
      }
      image.setAttribute('aria-label', `Fachada do Laboratório Carlos Ribeiro ${unit.name}`);
    }

    if (title) {
      title.textContent = 'Laboratório Carlos Ribeiro';
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
      services.innerHTML = '<li>Coleta laboratorial</li><li>Análises clínicas</li><li>Exames laboratoriais</li>';
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
    const accessLink = card.querySelector('.acesso-unidade');

    card.className = 'cartao-unidade revelar';
    card.dataset.brand = unit.brand.toLowerCase();
    if (demoLabel) demoLabel.remove();

    if (image) {
      image.className = 'imagem-unidade imagem-local-transito';
      if (unit.image) {
        const fallback = unit.brand === 'Nortetran'
          ? 'assets/logos/empresas/nortetran.png'
          : 'assets/modelos/modelo-unidades.png';
        image.style.backgroundImage = `url("assets/unidades/transito/${unit.image}?v=20260723-01"), url("${fallback}")`;
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

      const contacts = document.createElement('div');
      contacts.className = 'contatos-unidade contatos-unidade-callcenter';
      contacts.innerHTML = '<a href="https://www.instagram.com/grupopaulapessoa/" target="_blank" rel="noopener">@grupopaulapessoa</a><a href="https://wa.me/558589133175" target="_blank" rel="noopener">(85) 8913-3175</a><a href="tel:+558589133175">(85) 8913-3175</a>';
      description.insertAdjacentElement('afterend', contacts);
    }

    if (accessLink) {
      accessLink.href = 'https://wa.me/558589133175';
      accessLink.target = '_blank';
      accessLink.rel = 'noopener';
      accessLink.firstChild.textContent = 'Agendar pelo WhatsApp ';
      accessLink.setAttribute('aria-label', `Agendar atendimento na ${unit.brand} ${unit.name} pelo WhatsApp`);
    }

    transitGrid.appendChild(card);
  });
}

// Dados das unidades reais do Laboratório Clínico Régis Jucá.
const regisUnits = [
  { name: 'Parquelândia', address: 'R. Gustavo Sampaio, 1293 - Parquelândia, Fortaleza - CE, 60455-001' },
  { name: 'Maraponga', address: 'Av. Godofredo Maciel, 2947 - Maraponga, Fortaleza - CE, 60711-495' },
  { name: 'Vapt Vupt Messejana', address: 'Av. Frei Cirilo, 4597 - Messejana, Fortaleza - CE, 60840-280 (Dentro do Vapt Vupt)' },
  { name: 'Vapt Vupt Sobral', address: 'R. Cel. José Silvestre, 201 - Centro, Sobral - CE, 62011-120 (Dentro do Vapt Vupt)' },
  { name: 'Vapt Vupt Juazeiro do Norte', address: 'R. Interventor Francisco Erivano Cruz, 120 - Centro, Juazeiro do Norte - CE, 63010-015 (Dentro do Vapt Vupt)' },
  { name: 'Itapipoca', address: 'Av. Anastácio Braga, 911 - Centro, Itapipoca - CE, 62500-040 (Dentro do Mercado Central)' },
  { name: 'São Luís', address: 'R. do Cema, 04 - Vila Palmeira, São Luís - MA, 65047-400' },
  { name: 'Teresina', address: 'Av. Industrial Gil Martins, 1835 - Tabuleta, Teresina - PI, 64017-870' }
];

// Catálogo único consumido pela interface. Esta é a camada que poderá ser
// substituída futuramente por uma resposta JSON da API.
const clinicUnits = [
  { name: 'Aldeota', address: 'Av. Barão de Studart, 1182 - Aldeota, Fortaleza - CE' },
  { name: 'North Shopping', address: 'Av. Bezerra de Menezes, 2450 - Presidente Kennedy, Fortaleza - CE' },
  { name: 'Giga Mall', address: 'R. José Hipólito, 264 - Messejana, Fortaleza - CE' },
  { name: 'RioMar Kennedy', address: 'Av. Sargento Hermínio Sampaio, 3100 - Presidente Kennedy, Fortaleza - CE' }
];

const unitCatalog = [
  ...laboratoryUnits.map(unit => ({
    ...unit,
    brand: 'laboratorio',
    brandName: 'Laboratório Carlos Ribeiro',
    mapQuery: unit.address
  })),
  ...transitUnits.map(unit => ({
    ...unit,
    brand: unit.brand.toLowerCase(),
    brandName: unit.brand,
    mapQuery: unit.address
  })),
  ...clinicUnits.map(unit => ({
    ...unit,
    brand: 'clinica',
    brandName: 'Clínica Carlos Ribeiro',
    mapQuery: unit.address
  })),
  ...regisUnits.map(unit => ({
    ...unit,
    brand: 'regis',
    brandName: 'Régis Jucá',
    mapQuery: unit.address
  }))
];

function getUnitsByBrand(brand = 'all') {
  if (brand === 'all') return [...unitCatalog];
  return unitCatalog.filter(unit => unit.brand === brand);
}

const regisGrid = document.getElementById('unitsGrid');
const regisTemplate = regisGrid ? regisGrid.querySelector('.cartao-unidade[data-unit="toxicologia"]') : null;

if (regisGrid && regisTemplate) {
  regisGrid.querySelectorAll('.cartao-unidade[data-unit="toxicologia"]').forEach(card => card.remove());

  regisUnits.forEach(unit => {
    const card = regisTemplate.cloneNode(true);
    const image = card.querySelector('.imagem-unidade');
    const title = card.querySelector('.linha-titulo-unidade h3');
    const description = card.querySelector('.descricao-unidade');
    const demoLabel = card.querySelector('.rotulo-unidade-demonstrativa');
    const services = card.querySelector('.servicos-unidade');
    const accessLink = card.querySelector('.acesso-unidade');

    card.className = 'cartao-unidade revelar';
    if (demoLabel) demoLabel.remove();

    if (image) image.setAttribute('aria-label', `Laboratório Clínico Régis Jucá ${unit.name}`);
    if (title) {
      title.textContent = 'Régis Jucá';
      const locationName = document.createElement('span');
      locationName.className = 'nome-local-unidade';
      locationName.textContent = unit.name;
      title.appendChild(locationName);
    }
    if (description) {
      description.className = 'endereco-unidade';
      description.textContent = unit.address;

      const contacts = document.createElement('div');
      contacts.className = 'contatos-unidade contatos-unidade-callcenter';
      contacts.innerHTML = '<a href="https://www.instagram.com/grupopaulapessoa/" target="_blank" rel="noopener">@grupopaulapessoa</a><a href="https://wa.me/558589133175" target="_blank" rel="noopener">(85) 8913-3175</a><a href="tel:+558589133175">(85) 8913-3175</a>';
      description.insertAdjacentElement('afterend', contacts);
    }
    if (services) {
      services.innerHTML = '<li>Coleta toxicológica</li><li>Exames para condutores</li><li>Orientação documental</li>';
    }
    if (accessLink) {
      accessLink.href = 'https://wa.me/558589133175';
      accessLink.target = '_blank';
      accessLink.rel = 'noopener';
      accessLink.firstChild.textContent = 'Agendar pelo WhatsApp ';
      accessLink.setAttribute('aria-label', `Agendar atendimento na Régis Jucá ${unit.name} pelo WhatsApp`);
    }

    regisGrid.appendChild(card);
  });
}

// Revela os elementos conforme eles entram na área visível da tela.
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

// Anima os números institucionais sem saltos bruscos.
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

// Controla a abertura individual e coletiva das dúvidas frequentes.
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

// Controla navegação, filtros e animações do carrossel de unidades.
const unitsGrid = document.getElementById('unitsGrid');
const unitFilterButtons = document.querySelectorAll('.botao-filtro-unidade');
const unitsPrev = document.getElementById('unitsPrev');
const unitsNext = document.getElementById('unitsNext');
const unitSearch = document.getElementById('unitSearch');
const unitSearchClear = document.getElementById('unitSearchClear');
const unitSearchStatus = document.getElementById('unitSearchStatus');
let activeUnitFilter = 'all';

// Deixa a pesquisa independente de acentos e letras maiúsculas.
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
    const isTransitBrandFilter = activeUnitFilter === 'fortran' || activeUnitFilter === 'nortetran';
    const companyMatches = activeUnitFilter === 'all'
      || (isTransitBrandFilter ? card.dataset.brand === activeUnitFilter : card.dataset.unit === activeUnitFilter);
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

// Localizador interativo exibido antes do rodapé.

const locatorBrandButtons = document.querySelectorAll('[data-locator-brand]');
const locatorUnitList = document.getElementById('locatorUnitList');
const locatorCard = document.querySelector('.cartao-localizador');
const locatorBrand = document.getElementById('locatorBrand');
const locatorBrandLogo = document.getElementById('locatorBrandLogo');
const locatorName = document.getElementById('locatorName');
const locatorDescription = document.getElementById('locatorDescription');
const locatorAddress = document.getElementById('locatorAddress');
const locatorPhone = document.getElementById('locatorPhone');
const locatorEmail = document.getElementById('locatorEmail');
const locatorRoute = document.getElementById('locatorRoute');
const locatorMapOpen = document.getElementById('locatorMapOpen');
const locatorMap = document.getElementById('locatorMap');
const locatorPrev = document.getElementById('locatorPrev');
const locatorNext = document.getElementById('locatorNext');

function updateLocatorControls() {
  if (!locatorUnitList) return;
  const maxScroll = Math.max(0, locatorUnitList.scrollWidth - locatorUnitList.clientWidth);
  if (locatorPrev) locatorPrev.disabled = locatorUnitList.scrollLeft <= 2;
  if (locatorNext) locatorNext.disabled = locatorUnitList.scrollLeft >= maxScroll - 2;
}

function scrollLocator(direction) {
  if (!locatorUnitList) return;
  locatorUnitList.scrollBy({ left: direction * Math.max(280, locatorUnitList.clientWidth * 0.8), behavior: 'smooth' });
}

locatorPrev?.addEventListener('click', () => scrollLocator(-1));
locatorNext?.addEventListener('click', () => scrollLocator(1));
locatorUnitList?.addEventListener('scroll', updateLocatorControls, { passive: true });
window.addEventListener('resize', updateLocatorControls);

if (locatorUnitList) {
  let dragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  locatorUnitList.addEventListener('pointerdown', event => {
    if (event.target.closest('.botao-unidade-localizador')) return;
    dragging = true;
    dragStartX = event.clientX;
    dragStartScroll = locatorUnitList.scrollLeft;
    locatorUnitList.classList.add('arrastando');
    locatorUnitList.setPointerCapture(event.pointerId);
  });
  locatorUnitList.addEventListener('pointermove', event => {
    if (dragging) locatorUnitList.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
  });
  const endDrag = () => {
    dragging = false;
    locatorUnitList.classList.remove('arrastando');
  };
  locatorUnitList.addEventListener('pointerup', endDrag);
  locatorUnitList.addEventListener('pointercancel', endDrag);
}

function selectLocatorUnit(unit, selectedButton) {
  if (!unit) return;
  locatorUnitList?.querySelectorAll('.botao-unidade-localizador').forEach(button => {
    const isSelected = button === selectedButton;
    button.classList.toggle('ativo', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });

  if (locatorBrand) locatorBrand.textContent = unit.brandName;
  if (locatorCard) locatorCard.dataset.brand = unit.brand;
  const brandLogos = {
    laboratorio: 'assets/icones/empresas/laboratorio-carlos-ribeiro.png',
    fortran: 'assets/icones/empresas/fortran.png',
    nortetran: 'assets/icones/empresas/nortetran-nova.png?v=20260723-01',
    clinica: 'assets/icones/empresas/clinica-carlos-ribeiro.png',
    regis: 'assets/icones/empresas/regis-juca.png'
  };
  if (locatorBrandLogo) {
    locatorBrandLogo.src = brandLogos[unit.brand] || brandLogos.laboratorio;
    locatorBrandLogo.alt = `Logo ${unit.brandName}`;
  }
  if (locatorName) locatorName.textContent = unit.name;
  if (locatorDescription) locatorDescription.textContent = `Unidade ${unit.brandName} com atendimento especializado, tecnologia e cuidado em cada etapa.`;
  if (locatorAddress) locatorAddress.textContent = unit.address;
  if (locatorPhone) {
    const usesCallCenter = unit.brand === 'fortran' || unit.brand === 'nortetran' || unit.brand === 'regis';
    locatorPhone.textContent = usesCallCenter ? '+55 85 8913-3175' : '0800 777 7358';
    locatorPhone.href = usesCallCenter ? 'https://wa.me/558589133175' : 'tel:08007777358';
    locatorPhone.target = usesCallCenter ? '_blank' : '';
    locatorPhone.rel = usesCallCenter ? 'noopener' : '';
  }
  if (locatorEmail) {
    const brandEmails = {
      laboratorio: 'contato@laboratoriocarlosribeiro.com.br',
      regis: 'contato@laboratorioregisjuca.com.br'
    };
    const email = brandEmails[unit.brand] || 'contato@grupopaulapessoa.com.br';
    locatorEmail.textContent = email;
    locatorEmail.href = `mailto:${email}`;
  }
  const encodedQuery = encodeURIComponent(unit.mapQuery);
  if (locatorRoute) locatorRoute.href = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  if (locatorMapOpen) locatorMapOpen.href = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  if (locatorMap) locatorMap.src = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
}

function renderLocatorUnits(brand = 'all') {
  if (!locatorUnitList) return;
  locatorUnitList.classList.toggle('empresa-unica', brand !== 'all');
  const brandOrder = ['laboratorio', 'fortran', 'nortetran', 'clinica', 'regis'];
  const filteredUnits = getUnitsByBrand(brand)
    .sort((a, b) => brandOrder.indexOf(a.brand) - brandOrder.indexOf(b.brand));
  locatorUnitList.innerHTML = '';

  filteredUnits.forEach((unit, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `botao-unidade-localizador${index === 0 ? ' ativo' : ''}`;
    button.dataset.brand = unit.brand;
    button.dataset.unitName = unit.name;
    button.setAttribute('aria-pressed', String(index === 0));
    button.innerHTML = `<i data-lucide="map-pin" aria-hidden="true"></i><span>${unit.name}</span>`;
    button.addEventListener('click', () => selectLocatorUnit(unit, button));
    locatorUnitList.appendChild(button);
  });

  selectLocatorUnit(filteredUnits[0], locatorUnitList.querySelector('.botao-unidade-localizador'));
  if (window.lucide) window.lucide.createIcons();
  requestAnimationFrame(() => {
    locatorUnitList.scrollLeft = 0;
    updateLocatorControls();
  });
}

locatorBrandButtons.forEach(button => {
  button.addEventListener('click', () => {
    locatorBrandButtons.forEach(filterButton => {
      const isActive = filterButton === button;
      filterButton.classList.toggle('ativo', isActive);
      filterButton.setAttribute('aria-pressed', String(isActive));
    });
    renderLocatorUnits(button.dataset.locatorBrand);
  });
});

renderLocatorUnits('all');

// Conecta os cartões ao localizador e abre diretamente a unidade escolhida.
document.querySelectorAll('.acesso-unidade').forEach(accessLink => {
  accessLink.href = '#contato';
  accessLink.removeAttribute('target');
  accessLink.removeAttribute('rel');
  if (accessLink.firstChild) accessLink.firstChild.textContent = 'Acessar unidade ';

  accessLink.addEventListener('click', event => {
    const card = accessLink.closest('.cartao-unidade');
    const locationName = card?.querySelector('.nome-local-unidade')?.textContent.trim();
    if (!card || !locationName) return;

    const brandByUnitType = {
      saude: 'clinica',
      laboratorio: 'laboratorio',
      toxicologia: 'regis'
    };
    const brand = card.dataset.brand || brandByUnitType[card.dataset.unit];
    const selectedUnit = unitCatalog.find(unit =>
      unit.brand === brand
      && normalizeUnitSearchText(unit.name) === normalizeUnitSearchText(locationName)
    );
    if (!selectedUnit) return;

    event.preventDefault();
    locatorBrandButtons.forEach(filterButton => {
      const isActive = filterButton.dataset.locatorBrand === brand;
      filterButton.classList.toggle('ativo', isActive);
      filterButton.setAttribute('aria-pressed', String(isActive));
    });

    renderLocatorUnits(brand);
    const selectedButton = [...locatorUnitList.querySelectorAll('.botao-unidade-localizador')]
      .find(button => normalizeUnitSearchText(button.dataset.unitName) === normalizeUnitSearchText(selectedUnit.name));
    selectLocatorUnit(selectedUnit, selectedButton);
    document.querySelector('.corpo-localizador')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Abre o localizador já filtrado pela especialidade escolhida.
document.querySelectorAll('.cartao-area a[data-locator-brand]').forEach(areaLink => {
  areaLink.addEventListener('click', event => {
    event.preventDefault();
    const brand = areaLink.dataset.locatorBrand;

    locatorBrandButtons.forEach(filterButton => {
      const isActive = filterButton.dataset.locatorBrand === brand;
      filterButton.classList.toggle('ativo', isActive);
      filterButton.setAttribute('aria-pressed', String(isActive));
    });

    renderLocatorUnits(brand);
    document.querySelector('.corpo-localizador')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

if (window.lucide) {
  window.lucide.createIcons();
}
