/* =============================================================
   TradingAcademy Pro — app.js
   Navigation, Quiz System, Glossary, Progress, Certificate
   ============================================================= */

// ─── Quiz Data ────────────────────────────────────────────────
const quizData = {
  1: [
    {
      question: "Qu'est-ce que le trading ?",
      options: [
        "L'achat et la vente d'actifs financiers pour réaliser un profit",
        "Uniquement l'achat de cryptomonnaies sur une plateforme",
        "Un jeu de hasard basé sur la spéculation aléatoire",
        "L'investissement à long terme uniquement dans des actions"
      ],
      correct: 0,
      explanation: "Le trading consiste à acheter et vendre des actifs financiers (actions, devises, crypto, etc.) dans le but de réaliser un profit. Il se distingue de l'investissement par sa fréquence et son horizon temporel plus court."
    },
    {
      question: "Qu'est-ce qu'un ordre Market ?",
      options: [
        "Un ordre exécuté immédiatement au prix du marché",
        "Un ordre qui attend un prix spécifique pour s'exécuter",
        "Un ordre valable uniquement pendant 24 heures",
        "Un ordre pour vendre à découvert uniquement"
      ],
      correct: 0,
      explanation: "L'ordre Market est exécuté immédiatement au meilleur prix disponible sur le marché. Il garantit l'exécution mais pas le prix exact (risque de slippage)."
    },
    {
      question: "Le marché Forex est...",
      options: [
        "Le marché des changes entre devises mondiales, le plus grand au monde",
        "Une bourse d'actions comme le CAC 40 ou le Nasdaq",
        "Un marché réservé aux matières premières comme l'or et le pétrole",
        "Une plateforme de cryptomonnaies uniquement"
      ],
      correct: 0,
      explanation: "Le Forex (Foreign Exchange) est le plus grand marché financier mondial avec environ 6 500 milliards de dollars échangés chaque jour. Il est ouvert 24h/24, 5 jours sur 7."
    }
  ],
  2: [
    {
      question: "Quelle est la durée typique d'un trade en Scalping ?",
      options: [
        "Quelques secondes à quelques minutes",
        "Plusieurs heures dans la même journée",
        "Quelques jours à une semaine",
        "Plusieurs semaines ou mois"
      ],
      correct: 0,
      explanation: "Le scalping est un style de trading très rapide où les trades durent de quelques secondes à quelques minutes. L'objectif est d'accumuler de nombreux petits profits tout au long de la journée."
    },
    {
      question: "Le Swing Trading se caractérise par des positions tenues...",
      options: [
        "De quelques jours à quelques semaines",
        "Quelques secondes seulement",
        "Plusieurs années comme l'investissement long terme",
        "Exactement 24 heures (ni plus ni moins)"
      ],
      correct: 0,
      explanation: "Le swing trading capture des mouvements de prix sur plusieurs jours ou semaines. C'est le style recommandé pour les débutants car il laisse le temps d'analyser calmement."
    },
    {
      question: "Quel style de trading nécessite généralement le plus grand capital de départ ?",
      options: [
        "Day Trading",
        "Scalping",
        "Position Trading",
        "Swing Trading"
      ],
      correct: 1,
      explanation: "Le scalping nécessite un capital plus important car les profits par trade sont très petits et les coûts de transaction (spread, commissions) s'accumulent rapidement. De plus, aux USA, la règle PDT exige 25 000 $ pour le day trading."
    }
  ],
  3: [
    {
      question: "Que représente un Doji sur un graphique en chandeliers japonais ?",
      options: [
        "L'indécision du marché — ouverture et fermeture presque identiques",
        "Une forte tendance haussière avec un long corps vert",
        "Une forte tendance baissière avec un long corps rouge",
        "Un gap de prix important entre deux sessions"
      ],
      correct: 0,
      explanation: "Le Doji indique l'indécision du marché : le cours d'ouverture et de clôture sont presque identiques, formant une croix ou un signe plus. C'est souvent un signal de retournement potentiel."
    },
    {
      question: "Un RSI au-dessus de 70 indique...",
      options: [
        "Une zone de surachat (possible retournement à la baisse)",
        "Une zone de survente (possible rebond haussier)",
        "Une tendance parfaitement neutre sans signal",
        "Un signal d'achat fort et immédiat"
      ],
      correct: 0,
      explanation: "Un RSI > 70 signale que l'actif est en zone de surachat, ce qui peut indiquer un retournement baissier imminent. Cependant, en forte tendance haussière, le RSI peut rester suracheté longtemps."
    },
    {
      question: "Le MACD mesure...",
      options: [
        "La convergence/divergence de deux moyennes mobiles exponentielles",
        "Le volume total des transactions sur une période",
        "Le niveau de volatilité absolu d'un actif",
        "Le sentiment général du marché en temps réel"
      ],
      correct: 0,
      explanation: "Le MACD (Moving Average Convergence Divergence) mesure la relation entre deux EMA (12 et 26 périodes). Il génère des signaux d'achat/vente quand la ligne MACD croise la ligne Signal."
    }
  ],
  4: [
    {
      question: "Que signifie PER en analyse fondamentale des actions ?",
      options: [
        "Price Earnings Ratio — rapport entre le cours et le bénéfice par action",
        "Profit Estimation Rate — taux d'estimation des profits futurs",
        "Price Exchange Rate — taux de change du prix de l'action",
        "Portfolio Earnings Return — rendement du portefeuille"
      ],
      correct: 0,
      explanation: "Le PER (Price Earnings Ratio) compare le cours d'une action à ses bénéfices par action. Un PER < 15 est généralement considéré comme bon marché, > 25 comme cher (varie selon le secteur)."
    },
    {
      question: "Quel facteur influence principalement les paires de devises sur le Forex ?",
      options: [
        "Les taux d'intérêt des banques centrales (Fed, BCE, BOJ...)",
        "Le cours du Bitcoin et des cryptomonnaies",
        "Les résultats trimestriels des grandes entreprises",
        "Le cours de l'or et des matières premières uniquement"
      ],
      correct: 0,
      explanation: "Les décisions de taux d'intérêt des banques centrales sont le principal moteur des paires de devises. Une hausse de taux attire les capitaux étrangers et apprécie la devise concernée."
    },
    {
      question: "Les tokenomics en crypto-monnaies désignent...",
      options: [
        "L'étude économique d'un token : offre, demande, utilité et distribution",
        "La technologie blockchain sous-jacente et son code source",
        "Uniquement les frais de transaction du réseau",
        "La capitalisation boursière totale d'une cryptomonnaie"
      ],
      correct: 0,
      explanation: "Les tokenomics analysent tous les aspects économiques d'un token : offre totale, circulating supply, distribution, mécanismes de burn, vesting schedule, utilité dans l'écosystème, etc."
    }
  ],
  5: [
    {
      question: "La règle des 1–2% en gestion du risque signifie...",
      options: [
        "Ne jamais risquer plus de 1 à 2% de son capital total sur un seul trade",
        "Viser un profit minimum de 1 à 2% par trade pour être rentable",
        "Utiliser un levier compris entre 1 et 2 sur chaque position",
        "Diversifier son portefeuille sur 1 à 2 actifs seulement"
      ],
      correct: 0,
      explanation: "Cette règle fondamentale protège votre capital : même avec 10 trades perdants consécutifs, vous ne perdez que 10–20% de votre capital. Elle assure votre survie à long terme sur les marchés."
    },
    {
      question: "À quoi sert un Stop-Loss ?",
      options: [
        "Limiter les pertes en fermant automatiquement une position perdante",
        "Maximiser les profits en fermant automatiquement une position gagnante",
        "Ouvrir automatiquement de nouvelles positions quand une opportunité se présente",
        "Calculer automatiquement la taille de position optimale"
      ],
      correct: 0,
      explanation: "Le Stop-Loss est un ordre conditionnel qui ferme automatiquement votre position si le prix atteint un niveau de perte prédéfini. C'est votre protection indispensable contre les pertes incontrôlées."
    },
    {
      question: "Un ratio Risque/Récompense de 1:2 signifie...",
      options: [
        "On risque 100 € pour potentiellement gagner 200 € sur le trade",
        "On risque 200 € pour potentiellement gagner 100 € seulement",
        "On divise sa position en deux pour réduire le risque de moitié",
        "On effectue 2 trades pour compenser chaque trade perdant"
      ],
      correct: 0,
      explanation: "Un R/R de 1:2 est le minimum recommandé. Avec ce ratio, même en gagnant seulement 34% de vos trades, vous restez profitable à long terme. C'est pour cela que le R/R prime sur le win rate."
    }
  ],
  6: [
    {
      question: "Qu'est-ce que le FOMO en trading ?",
      options: [
        "La peur de manquer une opportunité, poussant à entrer précipitamment sans analyse",
        "Une stratégie de trading basée sur les données de sentiment du marché",
        "Un indicateur technique mesurant la force des tendances",
        "Un type d'ordre de bourse permettant d'acheter au plus bas"
      ],
      correct: 0,
      explanation: "FOMO (Fear Of Missing Out) pousse les traders à entrer dans des trades sans analyse, souvent au mauvais moment — généralement au sommet d'une hausse. C'est l'une des erreurs psychologiques les plus coûteuses."
    },
    {
      question: "À quoi sert un journal de trading ?",
      options: [
        "Enregistrer et analyser ses trades pour identifier ses erreurs et s'améliorer continuellement",
        "Suivre les actualités financières et les annonces économiques importantes",
        "Calculer automatiquement les impôts sur les plus-values",
        "Partager ses performances et signaux de trading sur les réseaux sociaux"
      ],
      correct: 0,
      explanation: "Le journal de trading est un outil d'amélioration continue : en analysant ses trades passés (gagnants ET perdants), on identifie ses erreurs récurrentes et on devient un meilleur trader."
    },
    {
      question: "Le biais de confirmation en trading, c'est...",
      options: [
        "Chercher uniquement les informations qui confirment notre opinion préexistante",
        "Confirmer chaque trade avec au minimum deux indicateurs techniques différents",
        "Attendre la confirmation d'un signal technique avant d'entrer en position",
        "Vérifier ses ordres auprès du broker avant leur exécution"
      ],
      correct: 0,
      explanation: "Ce biais dangereux nous empêche d'avoir une vision objective du marché en ignorant les signaux contraires à notre opinion. Il faut activement chercher des arguments contre notre position."
    }
  ],
  7: [
    {
      question: "Qu'est-ce qu'un bot DCA (Dollar Cost Averaging) ?",
      options: [
        "Un bot qui achète à intervalles réguliers pour moyenner le prix d'achat sur le temps",
        "Un bot qui trade à haute fréquence en quelques millisecondes",
        "Un bot d'arbitrage exploitant les différences de prix entre exchanges",
        "Un bot qui suit les tendances avec des indicateurs techniques comme le RSI"
      ],
      correct: 0,
      explanation: "Le DCA Bot achète périodiquement (ex : toutes les semaines) une somme fixe, réduisant l'impact de la volatilité sur le prix d'achat moyen. C'est la stratégie la moins risquée pour les débutants en crypto."
    },
    {
      question: "Un bot d'arbitrage exploite...",
      options: [
        "Les différences de prix du même actif sur différentes plateformes simultanément",
        "Les tendances long terme identifiées par l'analyse fondamentale",
        "Les patterns de chandeliers japonais en analyse technique",
        "Les annonces économiques et publications de données macro"
      ],
      correct: 0,
      explanation: "L'arbitrage profite des inefficiences de marché en achetant moins cher sur un exchange et revendant immédiatement plus cher sur un autre. Ces opportunités sont brèves et nécessitent une exécution très rapide."
    },
    {
      question: "Quel est le principal risque de l'overfitting pour un bot de trading ?",
      options: [
        "La stratégie fonctionne sur données historiques mais échoue en conditions réelles (live)",
        "Le bot consomme trop de ressources serveur et ralentit l'exécution des ordres",
        "Les frais de transaction deviennent trop élevés avec une stratégie très active",
        "La connexion internet est instable et entraîne des déconnexions fréquentes"
      ],
      correct: 0,
      explanation: "L'overfitting survient quand on optimise trop une stratégie sur les données passées. Elle devient 'apprise par cœur' sur ce contexte historique spécifique et ne se généralise pas aux nouvelles données de marché."
    },
    {
      question: "Le backtesting sert à...",
      options: [
        "Tester une stratégie sur des données historiques avant de la déployer avec du capital réel",
        "Vérifier la stabilité de la connexion à l'exchange et la fiabilité de l'API",
        "Contrôler la sécurité des clés API et détecter d'éventuelles failles",
        "Calculer les frais de trading optimaux pour maximiser la rentabilité nette"
      ],
      correct: 0,
      explanation: "Le backtesting simule les performances passées d'une stratégie pour évaluer sa viabilité avant de risquer du capital réel. Il permet de calculer win rate, drawdown, Sharpe ratio et autres métriques clés."
    }
  ],
  8: [
    {
      question: "Qu'est-ce que le levier en trading ?",
      options: [
        "Un mécanisme permettant de contrôler une position plus grande que son capital disponible",
        "Un indicateur de tendance mesurant la force d'un mouvement de prix",
        "Un type de graphique utilisé en analyse technique avancée",
        "Une stratégie d'investissement exclusivement réservée au long terme"
      ],
      correct: 0,
      explanation: "Le levier multiplie les gains ET les pertes. Un levier x10 signifie que vous contrôlez 10× votre capital investi. Un mouvement de 5% entraîne un gain ou perte de 50% de votre mise."
    },
    {
      question: "Vendre à découvert (short selling) signifie...",
      options: [
        "Vendre un actif qu'on ne possède pas en empruntant, en pariant sur sa baisse",
        "Vendre rapidement un actif après l'avoir acheté pour sécuriser un petit profit",
        "Vendre une petite quantité d'actifs sans utiliser tout son capital disponible",
        "Vendre ses positions avant la fermeture quotidienne du marché"
      ],
      correct: 0,
      explanation: "Le short selling permet de profiter des baisses de prix en empruntant un actif au broker, le vendant, puis le rachetant moins cher pour le rendre. Le risque est théoriquement illimité si le prix monte."
    },
    {
      question: "Le spread en trading désigne...",
      options: [
        "La différence entre le prix d'achat (Ask) et le prix de vente (Bid)",
        "L'écart de temps entre deux trades consécutifs exécutés",
        "La commission fixe prélevée par le courtier sur chaque transaction",
        "L'amplitude de variation quotidienne du prix d'un actif"
      ],
      correct: 0,
      explanation: "Le spread est le coût implicite de chaque transaction : plus il est faible, moins il est coûteux de trader. C'est aussi la principale rémunération des market makers et brokers sans commission."
    }
  ]
};

// ─── State ────────────────────────────────────────────────────
const TOTAL_MODULES = 8;
let completedModules = JSON.parse(localStorage.getItem('tradingAcademy_completed') || '[]');
let currentModule = 1;
let quizState = {};   // { moduleId: { active, currentQ, score, answered } }

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateAllProgress();
  setupMobileMenu();
  showModule(1);
});

// ─── Module Navigation ────────────────────────────────────────
function showModule(id) {
  // Hide all sections
  document.querySelectorAll('.module-section').forEach(s => {
    s.classList.remove('active');
  });
  // Remove active from all nav items
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
  });

  // Show target
  const sec = document.getElementById('module-' + id);
  if (sec) sec.classList.add('active');
  const nav = document.getElementById('nav-' + id);
  if (nav) nav.classList.add('active');

  currentModule = id;

  // On mobile, close sidebar
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar').classList.remove('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Mobile Sidebar ───────────────────────────────────────────
function setupMobileMenu() {
  const btn = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  if (!btn || !sidebar) return;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('active');
  });

  // Close on overlay click (outside sidebar)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 &&
        !sidebar.contains(e.target) &&
        e.target !== btn &&
        !btn.contains(e.target)) {
      sidebar.classList.remove('open');
      sidebar.classList.remove('active');
    }
  });
}

// ─── Progress Tracking ────────────────────────────────────────
function markModuleComplete(moduleId) {
  if (!completedModules.includes(moduleId)) {
    completedModules.push(moduleId);
    localStorage.setItem('tradingAcademy_completed', JSON.stringify(completedModules));
  }
  updateAllProgress();
  if (completedModules.length === TOTAL_MODULES) {
    showCertificate();
  }
}

function updateAllProgress() {
  const pct = Math.round((completedModules.length / TOTAL_MODULES) * 100);

  // Sidebar overall bar
  const overallFill = document.getElementById('overallFill');
  if (overallFill) overallFill.style.width = pct + '%';
  const overallPct = document.getElementById('overallPct');
  if (overallPct) overallPct.textContent = pct + '%';

  // Floating widget
  const floatingPct = document.getElementById('floatingPct');
  if (floatingPct) floatingPct.textContent = pct + '%';
  const floatingFill = document.getElementById('floatingFill');
  if (floatingFill) floatingFill.style.width = pct + '%';
  const floatingModules = document.getElementById('floatingModules');
  if (floatingModules) floatingModules.textContent = completedModules.length + ' / ' + TOTAL_MODULES + ' modules';

  // Trophy text
  const trophy = document.getElementById('trophyText');
  if (trophy) trophy.textContent = '🏆 ' + completedModules.length + ' / ' + TOTAL_MODULES + ' modules';

  // Nav dots
  for (let i = 1; i <= TOTAL_MODULES; i++) {
    const dot = document.getElementById('dot-' + i);
    if (dot) {
      dot.classList.toggle('done', completedModules.includes(i));
    }
  }
}

// ─── Quiz System ──────────────────────────────────────────────
function startQuiz(moduleId) {
  const container = document.getElementById('quiz-container-' + moduleId);
  if (!container) return;

  quizState[moduleId] = {
    currentQ: 0,
    score: 0,
    answered: false
  };

  container.innerHTML = '';
  container.style.display = 'block';

  renderQuestion(moduleId);
}

function renderQuestion(moduleId) {
  const container = document.getElementById('quiz-container-' + moduleId);
  const state = quizState[moduleId];
  const questions = quizData[moduleId];

  if (!questions || !container) return;

  if (state.currentQ >= questions.length) {
    renderScore(moduleId);
    return;
  }

  const q = questions[state.currentQ];
  const qNum = state.currentQ + 1;
  const total = questions.length;
  const progressPct = ((state.currentQ) / total) * 100;

  const letters = ['A', 'B', 'C', 'D'];

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${progressPct}%"></div>
      </div>
      <div class="quiz-q-num">Question ${qNum} / ${total}</div>
      <div class="quiz-q-text">${q.question}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-opt" onclick="answerQuiz(${moduleId}, ${i})" id="opt-${moduleId}-${i}">
            <span class="opt-letter">${letters[i]}</span>
            <span class="opt-text">${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="explanation-${moduleId}" style="display:none">
        <strong>💡 Explication :</strong> ${q.explanation}
      </div>
      <div class="quiz-nav" style="margin-top:16px;text-align:right">
        <button class="btn-next-q" id="nextBtn-${moduleId}" onclick="nextQuestion(${moduleId})" style="display:none">
          ${state.currentQ + 1 < total ? 'Question suivante →' : 'Voir les résultats →'}
        </button>
      </div>
    </div>
  `;

  state.answered = false;
}

function answerQuiz(moduleId, selectedIndex) {
  const state = quizState[moduleId];
  if (!state || state.answered) return;

  state.answered = true;
  const q = quizData[moduleId][state.currentQ];
  const isCorrect = selectedIndex === q.correct;

  if (isCorrect) state.score++;

  // Style all buttons
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((_, i) => {
    const btn = document.getElementById('opt-' + moduleId + '-' + i);
    if (!btn) return;
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add('correct');
    } else if (i === selectedIndex && !isCorrect) {
      btn.classList.add('wrong');
    } else {
      btn.style.opacity = '0.5';
    }
  });

  // Show explanation
  const expEl = document.getElementById('explanation-' + moduleId);
  if (expEl) expEl.style.display = 'block';

  // Show next button
  const nextBtn = document.getElementById('nextBtn-' + moduleId);
  if (nextBtn) nextBtn.style.display = 'inline-block';
}

function nextQuestion(moduleId) {
  const state = quizState[moduleId];
  if (!state) return;
  state.currentQ++;
  state.answered = false;
  renderQuestion(moduleId);
}

function renderScore(moduleId) {
  const container = document.getElementById('quiz-container-' + moduleId);
  const state = quizState[moduleId];
  const total = quizData[moduleId].length;
  const score = state.score;
  const pct = Math.round((score / total) * 100);

  let emoji = '🎉';
  let title = 'Excellent !';
  let msg = 'Vous maîtrisez parfaitement ce module !';

  if (pct < 50) {
    emoji = '📚';
    title = 'Continuez à apprendre';
    msg = 'Relisez le module et retentez le quiz pour valider vos connaissances.';
  } else if (pct < 80) {
    emoji = '👍';
    title = 'Bien joué !';
    msg = 'Vous avez de bonnes bases. Un peu de révision et vous serez parfait !';
  }

  const passed = pct >= 50;
  if (passed) {
    markModuleComplete(moduleId);
  }

  const nextModule = moduleId < TOTAL_MODULES ? moduleId + 1 : null;

  container.innerHTML = `
    <div class="quiz-score-card">
      <div class="score-emoji">${emoji}</div>
      <div class="score-title">${title}</div>
      <div class="score-value">${score} / ${total}</div>
      <div class="score-pct">${pct}% de bonnes réponses</div>
      <p class="score-msg">${msg}</p>
      ${passed ? '<div class="score-badge">✅ Module validé !</div>' : ''}
      <div class="score-actions">
        <button class="btn-retry" onclick="startQuiz(${moduleId})">🔄 Réessayer</button>
        ${nextModule ? `<button class="btn-next-module" onclick="showModule(${nextModule})">Module ${nextModule} →</button>` : ''}
      </div>
    </div>
  `;
}

// ─── Glossary Filter ──────────────────────────────────────────
function filterGlossary() {
  const input = document.getElementById('glossaryInput');
  const countEl = document.getElementById('glossaryCount');
  if (!input) return;

  const query = input.value.toLowerCase().trim();
  const items = document.querySelectorAll('#glossaryGrid .g-item');
  let visible = 0;

  items.forEach(item => {
    const term = (item.dataset.term || '').toLowerCase();
    const text = item.textContent.toLowerCase();
    const match = !query || term.includes(query) || text.includes(query);
    item.style.display = match ? '' : 'none';
    if (match) visible++;
  });

  if (countEl) {
    countEl.innerHTML = 'Affichage de <strong>' + visible + '</strong> termes sur 61';
  }
}

// ─── Certificate ──────────────────────────────────────────────
function showCertificate() {
  const wrap = document.getElementById('certificateWrap');
  if (!wrap) return;
  wrap.style.display = 'block';

  const certDate = document.getElementById('certDate');
  if (certDate) {
    const now = new Date();
    certDate.textContent = now.toLocaleDateString('fr-FR', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
