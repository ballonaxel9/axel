/* ============================================================
   TradingAcademy Pro — JavaScript
   ============================================================ */

// ===== DONNÉES QUIZ =====
const QUIZZES = {
  q1: [
    {
      q: "Quel est le plus grand marché financier au monde ?",
      opts: ["La Bourse de New York", "Le marché Forex", "Le marché Bitcoin", "Le marché des matières premières"],
      ans: 1
    },
    {
      q: "Un ordre 'Market' s'exécute à quel prix ?",
      opts: ["Au prix que tu fixes", "Au prix actuel du marché", "Au prix d'hier", "Au prix moyen de la journée"],
      ans: 1
    },
    {
      q: "Quel marché est ouvert 24h/24, 7j/7 ?",
      opts: ["La Bourse de Paris", "Le Forex", "Les matières premières", "Les cryptomonnaies"],
      ans: 3
    }
  ],
  q2: [
    {
      q: "Quel type de trading est le plus court ?",
      opts: ["Position Trading", "Swing Trading", "Scalping", "Day Trading"],
      ans: 2
    },
    {
      q: "Le Swing Trading dure généralement :",
      opts: ["Quelques secondes", "Quelques minutes", "Jours à semaines", "Années"],
      ans: 2
    },
    {
      q: "Quel trading est recommandé aux débutants ?",
      opts: ["Scalping", "Day Trading ultra-fréquence", "Swing Trading", "Market Making"],
      ans: 2
    }
  ],
  q3: [
    {
      q: "Une bougie verte (haussière) signifie que :",
      opts: ["Le prix a baissé", "Le prix a monté pendant la période", "Il n'y a pas eu de transactions", "Le marché est fermé"],
      ans: 1
    },
    {
      q: "Qu'indique un RSI au-dessus de 70 ?",
      opts: ["L'actif est survendu", "L'actif est surachet", "La tendance est baissière", "Le volume est faible"],
      ans: 1
    },
    {
      q: "Qu'est-ce qu'un support ?",
      opts: ["Un niveau où le prix a tendance à rebondir à la hausse", "Un niveau où le prix casse à la baisse", "Une résistance inversée", "Un indicateur de volume"],
      ans: 0
    },
    {
      q: "Le pattern 'Doji' représente :",
      opts: ["Une forte tendance haussière", "Une forte tendance baissière", "L'indécision du marché", "Un signal d'achat certain"],
      ans: 2
    }
  ],
  q4: [
    {
      q: "PER signifie :",
      opts: ["Prix En Réserve", "Prix/Earnings Ratio (Price Earnings Ratio)", "Performance Et Rendement", "Prévision Économique Rapide"],
      ans: 1
    },
    {
      q: "Si une banque centrale MONTE ses taux d'intérêt, sa devise :",
      opts: ["S'affaiblit généralement", "Se renforce généralement", "Ne change pas", "Disparaît"],
      ans: 1
    },
    {
      q: "Pour analyser un projet crypto, on regarde en premier :",
      opts: ["Le prix du Bitcoin", "Le whitepaper et les tokenomics", "La couleur du logo", "L'âge du PDG"],
      ans: 1
    }
  ],
  q5: [
    {
      q: "La règle du 1-2% signifie que tu ne risques pas plus de :",
      opts: ["1-2% de ton profit", "1-2% de ton capital total par trade", "1-2% de ta mise de départ totale", "1-2€ par trade"],
      ans: 1
    },
    {
      q: "Un ratio risque/rendement de 1:2 signifie :",
      opts: ["On risque 2 pour gagner 1", "On risque 1 pour gagner 2", "On risque et gagne pareil", "Le risque est nul"],
      ans: 1
    },
    {
      q: "Le stop-loss sert à :",
      opts: ["Maximiser les gains", "Limiter automatiquement les pertes", "Acheter plus quand ça baisse", "Doubler la mise"],
      ans: 1
    }
  ],
  q6: [
    {
      q: "FOMO signifie :",
      opts: ["Fear Of Missing Out (peur de rater)", "Force Of Market Orders", "Follow On Market Operations", "Full On Money Options"],
      ans: 0
    },
    {
      q: "Le 'Revenge Trading' c'est :",
      opts: ["Une stratégie très efficace", "Trader pour venger une perte, souvent irrationnel", "Un type de bot automatique", "Un terme de gestion du risque"],
      ans: 1
    },
    {
      q: "Un bon trader doit :",
      opts: ["Suivre ses émotions", "Avoir un plan précis et s'y tenir", "Trader sans stop-loss", "Tout miser sur un seul trade"],
      ans: 1
    }
  ],
  q7: [
    {
      q: "Un bot de trading est :",
      opts: ["Un robot physique qui trade", "Un programme automatisé qui exécute des trades selon des règles", "Un trader humain très rapide", "Une application mobile d'actualités"],
      ans: 1
    },
    {
      q: "Le 'Grid Bot' fonctionne en :",
      opts: ["Suivant la tendance principale", "Plaçant des ordres à intervalles réguliers dans une fourchette de prix", "Copiant les trades des experts", "Analysant les fondamentaux"],
      ans: 1
    },
    {
      q: "L'overfitting dans le backtesting signifie :",
      opts: ["La stratégie est trop simple", "La stratégie marche parfaitement sur le passé mais pas sur le futur", "Le bot consomme trop de CPU", "Il y a trop de trades"],
      ans: 1
    },
    {
      q: "Freqtrade est :",
      opts: ["Une plateforme payante", "Un framework open source Python pour créer des bots", "Un exchange crypto", "Un signal de trading"],
      ans: 1
    },
    {
      q: "Le 'DCA Bot' (Dollar Cost Averaging) consiste à :",
      opts: ["Acheter tout en une seule fois", "Investir régulièrement de petites sommes pour moyenner le prix", "Vendre à découvert", "Faire de l'arbitrage"],
      ans: 1
    }
  ]
};

// ===== GLOSSAIRE =====
const GLOSSARY = [
  { term:"Bull Market 🐂", def:"Marché en hausse prolongée. Les investisseurs sont optimistes." },
  { term:"Bear Market 🐻", def:"Marché en baisse prolongée (-20% ou plus). Pessimisme généralisé." },
  { term:"Pip 📍", def:"Plus petite variation de prix sur le Forex (0,0001 pour EUR/USD)." },
  { term:"Lot 📦", def:"Unité de mesure de volume sur le Forex. 1 lot standard = 100 000 unités de devise." },
  { term:"Levier 🔧", def:"Multiplicateur qui permet de trader avec plus que son capital réel. Amplifie gains ET pertes." },
  { term:"Marge 💳", def:"Montant bloqué par le broker pour ouvrir une position avec levier." },
  { term:"Stop-Loss 🛑", def:"Ordre automatique qui clôture la position si le prix atteint un niveau de perte défini." },
  { term:"Take-Profit 🎯", def:"Ordre automatique qui clôture la position quand l'objectif de gain est atteint." },
  { term:"Long 📈", def:"Acheter un actif en espérant que son prix monte." },
  { term:"Short 📉", def:"Vendre un actif à découvert en espérant que son prix baisse." },
  { term:"Spread 📏", def:"Différence entre le prix d'achat (Ask) et le prix de vente (Bid). Le coût de la transaction." },
  { term:"Liquidité 💧", def:"Facilité avec laquelle un actif peut être acheté ou vendu sans impacter son prix." },
  { term:"Volatilité 🌊", def:"Amplitude des variations de prix d'un actif. Plus c'est volatile, plus le risque est élevé." },
  { term:"RSI 📊", def:"Relative Strength Index. Indicateur de 0 à 100. >70 = suracheté, <30 = survendu." },
  { term:"MACD 📡", def:"Moving Average Convergence Divergence. Mesure la différence entre deux moyennes mobiles." },
  { term:"Support 🏗️", def:"Niveau de prix où la demande est suffisante pour stopper une baisse et provoquer un rebond." },
  { term:"Résistance 🧱", def:"Niveau de prix où l'offre est suffisante pour stopper une hausse et provoquer une correction." },
  { term:"Chandelier japonais 🕯️", def:"Représentation graphique d'un prix sur une période (corps + mèches) indiquant ouverture, clôture, plus haut, plus bas." },
  { term:"Tendance (Trend) 📈", def:"Direction générale du marché. Haussière (higher highs & lows) ou baissière (lower highs & lows)." },
  { term:"Breakout 💥", def:"Cassure d'un niveau clé (support/résistance) avec potentiel de forte continuation." },
  { term:"Pullback 🔄", def:"Correction temporaire dans le sens inverse d'une tendance avant de la reprendre." },
  { term:"Drawdown 📉", def:"Baisse maximale depuis un plus haut. Mesure le risque subi sur une période." },
  { term:"PnL 💰", def:"Profit and Loss. Résultat financier d'une position ou d'une période." },
  { term:"Backtest 🔬", def:"Tester une stratégie de trading sur des données historiques." },
  { term:"API 🔗", def:"Interface permettant aux bots de se connecter à un exchange et de passer des ordres automatiquement." },
  { term:"Exchange 🏛️", def:"Plateforme d'échange de cryptomonnaies ou d'actifs financiers (Binance, Coinbase, etc.)." },
  { term:"Tokenomics ⚙️", def:"Étude de l'économie d'un token crypto : supply, distribution, utilité, inflation." },
  { term:"Whitepaper 📄", def:"Document technique décrivant un projet crypto, sa technologie et son modèle économique." },
  { term:"FOMO 😰", def:"Fear Of Missing Out. Peur de rater une opportunité qui pousse à prendre de mauvaises décisions." },
  { term:"FUD 😨", def:"Fear, Uncertainty, Doubt. Informations négatives qui créent la peur et font baisser les prix." },
  { term:"DCA 📅", def:"Dollar Cost Averaging. Investir régulièrement une somme fixe pour lisser le prix d'achat." },
  { term:"Grid Trading 📐", def:"Stratégie plaçant des ordres à intervalles réguliers au-dessus et en-dessous d'un prix." },
  { term:"Market Cap 💎", def:"Capitalisation boursière. Prix × nombre de tokens/actions en circulation." },
  { term:"NFP 👷", def:"Non-Farm Payrolls. Indicateur américain majeur sur l'emploi publié chaque 1er vendredi du mois." },
  { term:"PIB 🏭", def:"Produit Intérieur Brut. Mesure de la richesse produite par un pays. Impact fort sur le Forex." },
  { term:"Slippage 💨", def:"Différence entre le prix attendu et le prix réel d'exécution d'un ordre." },
  { term:"Arbitrage ⚡", def:"Profit réalisé en exploitant les différences de prix d'un même actif sur différents marchés." },
  { term:"Mèche 🕯️", def:"Partie fine d'un chandelier japonais indiquant les prix extrêmes atteints dans la période." },
  { term:"Volume 📦", def:"Nombre de transactions réalisées sur un actif pendant une période. Confirme les mouvements." },
  { term:"Corrélation 🔗", def:"Relation entre deux actifs. Corrélation positive : ils bougent ensemble. Négative : en sens opposé." }
];

// ===== INDICATEUR MODAL DATA =====
const INDICATORS_INFO = {
  rsi: {
    title: "📏 RSI — Relative Strength Index",
    desc: `• Oscillateur entre 0 et 100\n• RSI > 70 → Surachat (risque de baisse)\n• RSI < 30 → Survente (risque de hausse)\n• Divergence RSI/Prix = signal fort\n• Utilisé pour confirmer les retournements`
  },
  macd: {
    title: "📊 MACD — Convergence/Divergence",
    desc: `• Différence entre MA12 et MA26\n• Ligne de signal = MA9 du MACD\n• Histogramme = MACD - Signal\n• Croisement haussier → Signal d'achat\n• Croisement baissier → Signal de vente\n• Divergence = retournement potentiel`
  },
  bollinger: {
    title: "📐 Bandes de Bollinger",
    desc: `• Bande centrale = Moyenne Mobile 20 périodes\n• Bandes sup/inf = MA20 ± 2 écarts types\n• Prix proche de la bande haute → Surachat\n• Prix proche de la bande basse → Survente\n• Squeeze (resserrement) → Explosion imminente\n• Bollinger Bounce = retour vers la moyenne`
  },
  ma: {
    title: "📈 Moyennes Mobiles (MA)",
    desc: `• MA20 : court terme (day trading)\n• MA50 : moyen terme (swing)\n• MA200 : long terme (tendance majeure)\n• Croisement MA50 > MA200 = Golden Cross 🌟\n• Croisement MA50 < MA200 = Death Cross 💀\n• Prix > MA = tendance haussière`
  }
};

// ===== STATE =====
const state = {
  completedModules: JSON.parse(localStorage.getItem('tradingProModules') || '[]'),
  scores: JSON.parse(localStorage.getItem('tradingProScores') || '{}')
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initScrollReveal();
  initCounters();
  renderAllQuizzes();
  renderGlossary();
  updateProgress();
  restoreState();
});

// ===== PARTICLES =====
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left:${Math.random()*100}%;
      animation-duration:${8+Math.random()*12}s;
      animation-delay:${Math.random()*10}s;
      width:${2+Math.random()*3}px;
      height:${2+Math.random()*3}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
    `;
    container.appendChild(p);
  }
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== COUNTERS =====
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        animateCount(el, 0, target, 1500);
        observer.unobserve(el);
      }
    });
  });
  counters.forEach(c => observer.observe(c));
}

function animateCount(el, from, to, duration) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (to - from) * eased);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// ===== NAVIGATION =====
function goTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Update active nav
    document.querySelectorAll('.nav-item').forEach((item, idx) => {
      item.classList.remove('active');
      const ids = ['hero','module1','module2','module3','module4','module5','module6','module7','module8'];
      if (ids[idx] === id) item.classList.add('active');
    });
    // Close sidebar on mobile
    if (window.innerWidth < 900) closeSidebar();
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
}

// ===== EXPAND CARD (markets) =====
function expandCard(card) {
  const detail = card.querySelector('.market-detail');
  const isExpanded = card.classList.contains('expanded');
  document.querySelectorAll('.market-card').forEach(c => {
    c.classList.remove('expanded');
    const d = c.querySelector('.market-detail');
    if (d) d.classList.add('hidden');
  });
  if (!isExpanded) {
    card.classList.add('expanded');
    if (detail) detail.classList.remove('hidden');
  }
}

// ===== INDICATOR MODAL =====
function showIndicator(id) {
  const data = INDICATORS_INFO[id];
  if (!data) return;
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-ind-title">${data.title}</div>
    <div class="modal-ind-desc">${data.desc.replace(/\n/g, '<br>')}</div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ===== QUIZ SYSTEM =====
function renderAllQuizzes() {
  Object.entries(QUIZZES).forEach(([id, questions]) => {
    const container = document.getElementById(id);
    if (!container) return;
    renderQuiz(container, id, questions);
  });
}

function renderQuiz(container, id, questions) {
  container.innerHTML = '';
  questions.forEach((q, qi) => {
    const div = document.createElement('div');
    div.className = 'quiz-question';
    div.innerHTML = `
      <div class="quiz-q-text">${qi+1}. ${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, oi) => `
          <button class="quiz-opt" onclick="answerQuiz('${id}',${qi},${oi},${q.ans},this)">
            ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="${id}-exp-${qi}"></div>
    `;
    container.appendChild(div);
  });
}

function answerQuiz(quizId, qIdx, optIdx, correctIdx, btn) {
  const qDiv = btn.closest('.quiz-question');
  const opts = qDiv.querySelectorAll('.quiz-opt');
  opts.forEach(o => o.disabled = true);

  if (optIdx === correctIdx) {
    btn.classList.add('correct');
    showExplosion(btn, '✅');
  } else {
    btn.classList.add('wrong');
    opts[correctIdx].classList.add('correct');
    showExplosion(btn, '❌');
  }

  // Track score
  const total = QUIZZES[quizId].length;
  if (!state.scores[quizId]) state.scores[quizId] = { correct: 0, answered: 0 };
  state.scores[quizId].answered++;
  if (optIdx === correctIdx) state.scores[quizId].correct++;

  // Check if quiz complete
  const allAnswered = state.scores[quizId].answered >= total;
  if (allAnswered) {
    const score = state.scores[quizId].correct;
    const passed = score >= Math.ceil(total * 0.6);
    const container = document.getElementById(quizId);
    if (container && !container.querySelector('.quiz-result')) {
      const result = document.createElement('div');
      result.className = `quiz-result ${passed ? 'good' : 'bad'}`;
      result.innerHTML = passed
        ? `🎉 Bravo ! ${score}/${total} — Module validé !`
        : `💪 ${score}/${total} — Relis le module et réessaie !`;
      container.appendChild(result);

      if (passed) {
        const moduleNum = quizId.replace('q','');
        completeModule(moduleNum);
      }
    }
    saveState();
  }
}

function showExplosion(btn, emoji) {
  const el = document.createElement('div');
  el.textContent = emoji;
  el.style.cssText = `
    position:fixed;
    left:${btn.getBoundingClientRect().left + 20}px;
    top:${btn.getBoundingClientRect().top}px;
    font-size:24px; z-index:1000;
    pointer-events:none;
    animation:explode 0.8s ease forwards;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

// Add explode keyframe dynamically
const style = document.createElement('style');
style.textContent = `
@keyframes explode {
  0% { transform:scale(0.5) translateY(0); opacity:1 }
  100% { transform:scale(2) translateY(-40px); opacity:0 }
}`;
document.head.appendChild(style);

// ===== GLOSSARY =====
function renderGlossary() {
  const grid = document.getElementById('glossary-grid');
  if (!grid) return;
  grid.innerHTML = GLOSSARY.map(item => `
    <div class="gloss-item">
      <div class="gloss-term">${item.term}</div>
      <div class="gloss-def">${item.def}</div>
    </div>
  `).join('');
}

function filterGlossary(val) {
  const items = document.querySelectorAll('.gloss-item');
  const search = val.toLowerCase();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(search) ? '' : 'none';
  });
}

// ===== PROGRESS =====
function completeModule(moduleNum) {
  if (!state.completedModules.includes(moduleNum)) {
    state.completedModules.push(moduleNum);
    const dot = document.getElementById(`dot${moduleNum}`);
    if (dot) {
      dot.classList.add('done');
      dot.style.background = '#10b981';
    }
    saveState();
    updateProgress();

    if (state.completedModules.length >= 7) {
      showCertificate();
    }
  }
}

function updateProgress() {
  const pct = Math.round((state.completedModules.length / 8) * 100);
  const bar = document.getElementById('global-progress');
  const pctEl = document.getElementById('global-pct');
  const pfBar = document.getElementById('pf-bar');
  const pfPct = document.getElementById('pf-pct');

  if (bar) bar.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  if (pfBar) pfBar.style.setProperty('--progress', pct + '%');
  if (pfPct) pfPct.textContent = pct + '%';
}

function showCertificate() {
  const cert = document.getElementById('certificate');
  if (cert) {
    cert.style.display = 'flex';
    const trophy = document.getElementById('trophy');
    if (trophy) trophy.style.display = 'block';
    setTimeout(() => goTo('certificate'), 800);
  }
}

// ===== PERSIST STATE =====
function saveState() {
  localStorage.setItem('tradingProModules', JSON.stringify(state.completedModules));
  localStorage.setItem('tradingProScores', JSON.stringify(state.scores));
}

function restoreState() {
  state.completedModules.forEach(num => {
    const dot = document.getElementById(`dot${num}`);
    if (dot) { dot.classList.add('done'); dot.style.background = '#10b981'; }
  });
  updateProgress();
}

// ===== SCROLL ACTIVE NAV =====
window.addEventListener('scroll', () => {
  const ids = ['hero','module1','module2','module3','module4','module5','module6','module7','module8'];
  const navItems = document.querySelectorAll('.nav-item');
  let current = 0;
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = i;
  });
  navItems.forEach((item, i) => {
    item.classList.toggle('active', i === current);
  });
}, { passive: true });

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
