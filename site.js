(function(){
  var INDEX = [{"u": "life.html", "en": ["Life insurance", "Money for your family if you pass away, so they can keep the home, pay the bills and plan for the future."], "es": ["Seguro de vida", "Dinero para su familia si usted fallece, para que puedan conservar el hogar, pagar las cuentas y planificar el futuro."], "k": "term whole universal beneficiary death family mortgage children vida termino entera beneficiario Term life Vida a término Whole life Vida entera Universal life Vida universal How much life insurance do I need? ¿Cuánto seguro de vida necesito? Do I need a medical exam? ¿Necesito examen médico?"}, {"u": "disability.html", "en": ["Disability insurance", "Part of your paycheck keeps coming if an illness or injury stops you from working."], "es": ["Seguro por incapacidad", "Usted sigue recibiendo parte de su salario si una enfermedad o lesión le impide trabajar."], "k": "income paycheck injury sick surgery pregnancy self-employed salario ingreso lesion enfermedad cirugia Short-term disability Incapacidad a corto plazo Long-term disability Incapacidad a largo plazo Is this the same as workers’ compensation? ¿Es lo mismo que la compensación del trabajador? I’m self-employed. Can I get it? Trabajo por cuenta propia. ¿Puedo obtenerlo?"}, {"u": "health.html", "en": ["Health insurance", "Coverage for doctor visits, hospital stays and prescriptions for you and your family."], "es": ["Seguro de salud", "Cobertura para visitas al médico, hospitalizaciones y medicamentos para usted y su familia."], "k": "obamacare aca marketplace mercado doctor hospital deductible deducible prescription medicamentos family familia small business Individual and family plans Planes individuales y familiares Plans for small businesses Planes para pequeños negocios Comparing plans the right way Comparar planes correctamente When can I sign up? ¿Cuándo me puedo inscribir? Will my doctor be covered? ¿Mi médico estará cubierto?"}, {"u": "medicare.html", "en": ["Medicare", "Help choosing the right Medicare plan when you turn 65, and every year after."], "es": ["Medicare", "Ayuda para escoger el plan de Medicare correcto al cumplir 65 años, y cada año después."], "k": "medicare advantage supplement medigap part d parte c 65 senior retiree jubilado annual enrollment inscripcion anual Medicare Advantage (Part C) Medicare Advantage (Parte C) Medicare Supplement (Medigap) Suplemento de Medicare (Medigap) Prescription drug plans (Part D) Planes de medicamentos (Parte D) When can I change my Medicare plan? ¿Cuándo puedo cambiar mi plan de Medicare? I’m turning 65. When should I call? Voy a cumplir 65. ¿Cuándo debo llamar?"}, {"u": "supplemental.html", "en": ["Supplemental insurance", "Plans that pay cash directly to you when you get sick or hurt, on top of your health insurance."], "es": ["Seguros suplementarios", "Planes que le pagan en efectivo directamente a usted si se enferma o se lastima, además de su seguro médico."], "k": "accident hospital cancer critical illness dental vision cash aflac colonial accidente hospitalizacion cancer efectivo Accident Accidentes Hospital indemnity Indemnización hospitalaria Cancer and critical illness Cáncer y enfermedades graves Dental and vision Dental y visión Who gets the money? ¿Quién recibe el dinero? Can I have it if I already have health insurance? ¿Puedo tenerlo si ya tengo seguro médico?"}, {"u": "home-auto.html", "en": ["Home, auto & property", "Property and casualty coverage for your house, your car and the things you worked hard for."], "es": ["Hogar, auto y propiedad", "Seguros de propiedad y contingencia para su casa, su auto y todo lo que le ha costado trabajo."], "k": "home house homeowners condo renters flood hurricane auto car property casualty umbrella casa hogar inundacion huracan carro propiedad contingencia Homeowners and condo Hogar y condominio Flood Inundación Auto Auto Renters and umbrella Inquilinos y protección adicional Does my home insurance cover hurricanes? ¿Mi seguro de hogar cubre huracanes? Can I save by bundling home and auto? ¿Puedo ahorrar combinando hogar y auto?"}, {"u": "final-expense.html", "en": ["Final expense", "A smaller life policy that covers funeral and burial costs, so loved ones are not left with the bill."], "es": ["Gastos finales", "Una póliza de vida pequeña que cubre los gastos del funeral, para que sus seres queridos no carguen con la cuenta."], "k": "funeral burial cremation final expense seniors funeral entierro cremacion gastos finales How it works Cómo funciona What it pays for Qué cubre Will my payment go up as I get older? ¿Mi pago subirá con la edad? How fast does my family get paid? ¿Qué tan rápido recibe el dinero mi familia?"}, {"u": "retirement.html", "en": ["Retirement & financial planning", "Plan for retirement and for care you may need later, and get clear answers to your money questions."], "es": ["Retiro y planificación financiera", "Planifique su retiro y el cuidado que pueda necesitar, y aclare sus dudas sobre finanzas."], "k": "retirement annuity annuities long-term care nursing home savings financial planning retiro anualidad cuidado largo plazo ahorros planificacion financiera Annuities Anualidades Long-term care Cuidado a largo plazo Financial planning conversations Planificación financiera Is my first conversation free? ¿La primera consulta es gratis? Does Medicare pay for a nursing home? ¿Medicare paga un hogar de ancianos?"}, {"u": "team.html", "en": ["Our team", "Nelson Colón, Norma A. Lappot and Joan C. Colón"], "es": ["Nuestro equipo", "Nelson Colón, Norma A. Lappot y Joan C. Colón"], "k": "team equipo agents agentes nelson norma joan lappot colon founder fundador"}, {"u": "contact.html", "en": ["Contact us", "Phone, email and office"], "es": ["Contáctenos", "Teléfono, email y oficina"], "k": "contact contacto phone telefono email correo address direccion office oficina hours horario quote cotizacion"}, {"u": "choose.html", "en": ["Help me choose", "Find the right insurance for you"], "es": ["Ayúdame a elegir", "Encuentre el seguro correcto"], "k": "help choose ayuda elegir not sure which"}, {"u": "about.html", "en": ["About us", "Our story and how it works"], "es": ["Quiénes somos", "Nuestra historia y cómo funciona"], "k": "about story historia puerto rico kissimmee how it works como funciona"}, {"u": "insurance.html", "en": ["All insurance", "Every type of coverage we offer"], "es": ["Todos los seguros", "Todos los tipos de cobertura"], "k": "insurance seguros coverage cobertura all todos"}];
  var lang = 'en';
  function getStored(){ try { return localStorage.getItem('cia-lang'); } catch(e) { return null; } }
  function store(l){ try { localStorage.setItem('cia-lang', l); } catch(e) {} }
  function setLang(l){
    lang = l;
    document.body.classList.toggle('lang-es', l === 'es');
    document.documentElement.lang = l;
    document.querySelectorAll('.lang-switch button').forEach(function(b){ b.setAttribute('aria-pressed', String(b.dataset.lang === l)); });
    var input = document.getElementById('site-search');
    if (input) input.placeholder = l === 'es' ? 'Buscar seguros…' : 'Search insurance…';
    store(l);
    if (input && input.value) runSearch();
  }
  document.querySelectorAll('.lang-switch button').forEach(function(b){ b.addEventListener('click', function(){ setLang(b.dataset.lang); }); });

  // keep the chosen language when moving between pages
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href$=".html"]');
    if (a && lang === 'es') { a.setAttribute('href', a.getAttribute('href').split('#')[0] + '#es'); }
  }, true);

  // mobile menu
  var menuBtn = document.querySelector('.menu-btn'), nav = document.getElementById('main-nav');
  if (menuBtn) menuBtn.addEventListener('click', function(){
    var open = menuBtn.getAttribute('aria-expanded') !== 'true';
    menuBtn.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
  });

  // search
  var input = document.getElementById('site-search'), list = document.getElementById('search-results');
  function norm(s){ return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function runSearch(){
    var q = norm(input.value.trim());
    if (!q) { list.hidden = true; input.setAttribute('aria-expanded','false'); return []; }
    var words = q.split(/\s+/);
    var hits = INDEX.map(function(it){
      var hay = norm(it.en.join(' ') + ' ' + it.es.join(' ') + ' ' + it.k);
      var title = norm(it[lang][0]);
      var score = 0;
      words.forEach(function(w){ if (hay.indexOf(w) > -1) score += 1; if (title.indexOf(w) > -1) score += 2; });
      return {it: it, score: score, all: words.every(function(w){ return hay.indexOf(w) > -1; })};
    }).filter(function(h){ return h.all; }).sort(function(a,b){ return b.score - a.score; }).slice(0, 6);
    list.innerHTML = '';
    if (!hits.length) {
      var li = document.createElement('li'); li.className = 'none';
      li.textContent = lang === 'es' ? 'Sin resultados. Llámenos al 407-433-5475.' : 'No results. Call us at 407-433-5475.';
      list.appendChild(li);
    }
    hits.forEach(function(h, n){
      var li = document.createElement('li'); li.setAttribute('role','option');
      var a = document.createElement('a'); a.href = h.it.u + (lang === 'es' ? '#es' : '');
      var b = document.createElement('b'); b.textContent = h.it[lang][0];
      var s = document.createElement('span'); s.textContent = h.it[lang][1];
      a.appendChild(b); a.appendChild(s); li.appendChild(a); list.appendChild(li);
    });
    list.hidden = false; input.setAttribute('aria-expanded','true');
    return hits;
  }
  if (input) {
    input.addEventListener('input', runSearch);
    input.addEventListener('keydown', function(e){
      if (e.key === 'Enter') { var first = list.querySelector('a'); if (first) { e.preventDefault(); location.href = first.getAttribute('href'); } }
      if (e.key === 'Escape') { input.value = ''; runSearch(); }
      if (e.key === 'ArrowDown') { var f = list.querySelector('a'); if (f) { e.preventDefault(); f.focus(); } }
    });
    list.addEventListener('keydown', function(e){
      var links = Array.prototype.slice.call(list.querySelectorAll('a')), i = links.indexOf(document.activeElement);
      if (e.key === 'ArrowDown' && i < links.length - 1) { e.preventDefault(); links[i+1].focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); (i > 0 ? links[i-1] : input).focus(); }
      if (e.key === 'Escape') { input.focus(); input.value = ''; runSearch(); }
    });
    document.addEventListener('click', function(e){ if (!e.target.closest('.search')) { list.hidden = true; input.setAttribute('aria-expanded','false'); } });
    input.addEventListener('focus', function(){ if (input.value) runSearch(); });
  }

  // copy buttons
  document.querySelectorAll('.copy').forEach(function(btn){
    btn.addEventListener('click', function(){
      var old = btn.innerHTML, done = function(){ btn.textContent = lang === 'es' ? 'Copiado' : 'Copied'; setTimeout(function(){ btn.innerHTML = old; }, 1800); };
      var select = function(){ var el = document.getElementById(btn.dataset.target); var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); };
      try { navigator.clipboard.writeText(btn.dataset.copy).then(done, select); } catch(e) { select(); }
    });
  });

  var start = getStored() || 'en';
  if (location.hash === '#es') start = 'es';
  if (location.hash === '#en') start = 'en';
  setLang(start);
})();
