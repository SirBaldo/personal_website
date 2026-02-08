// ── Panel Content Data ──
var panelData = {
  bio: {
    title: 'About me',
    photos: [
      'https://picsum.photos/400/400?random=10',
      'https://picsum.photos/400/400?random=11',
      'https://picsum.photos/400/400?random=12',
      'https://picsum.photos/400/400?random=13',
      'https://picsum.photos/400/400?random=14',
      'https://picsum.photos/400/400?random=15'
    ],
    text: [
      "I'm Federico, an aerospace engineer with a passion for coding and technology.",
      "I started programming out of curiosity and now I can't stop. I love building things that work and solving complex problems.",
      "When I'm not writing code, I'm probably exploring new technologies or watching YouTube videos about space exploration.",
      "I believe the combination of aerospace engineering and computer science is the future, and I want to be part of it."
    ],
    tags: [
      { name: 'Python', tooltip: '// my first love' },
      { name: 'JavaScript', tooltip: "// it's complicated" },
      { name: 'MATLAB', tooltip: '// the dark beast' },
      { name: 'CAD', tooltip: '// where everything takes shape' },
      { name: 'Machine Learning', tooltip: '// the future is now' }
    ]
  },
  project1: {
    title: 'Project Alpha',
    photos: [
      'https://picsum.photos/400/400?random=20',
      'https://picsum.photos/400/400?random=21',
      'https://picsum.photos/400/400?random=22',
      'https://picsum.photos/400/400?random=23',
      'https://picsum.photos/400/400?random=24',
      'https://picsum.photos/400/400?random=25'
    ],
    text: [
      'Autonomous drone control system developed during my university journey.',
      'Uses path planning algorithms and computer vision to navigate complex environments.',
      'The system has been tested in simulation and on real hardware with promising results.'
    ],
    tags: [
      { name: 'Python', tooltip: '// core logic' },
      { name: 'ROS', tooltip: '// robot operating system' },
      { name: 'Computer Vision', tooltip: "// drone's eyes" },
      { name: 'Control Systems', tooltip: '// the brain' }
    ]
  },
  project2: {
    title: 'Project Beta',
    photos: [
      'https://picsum.photos/400/400?random=30',
      'https://picsum.photos/400/400?random=31',
      'https://picsum.photos/400/400?random=32',
      'https://picsum.photos/400/400?random=33',
      'https://picsum.photos/400/400?random=34',
      'https://picsum.photos/400/400?random=35'
    ],
    text: [
      'Machine learning pipeline for predictive analysis of aerospace data.',
      'Processes real-time telemetry and generates predictions on system status.',
      'Integrated with a web dashboard for results visualization.'
    ],
    tags: [
      { name: 'TensorFlow', tooltip: '// neural models' },
      { name: 'Python', tooltip: '// always him' },
      { name: 'Data Science', tooltip: '// data speaks' },
      { name: 'Real-time', tooltip: '// milliseconds matter' }
    ]
  },
  project3: {
    title: 'Project Gamma',
    photos: [
      'https://picsum.photos/400/400?random=40',
      'https://picsum.photos/400/400?random=41',
      'https://picsum.photos/400/400?random=42',
      'https://picsum.photos/400/400?random=43',
      'https://picsum.photos/400/400?random=44',
      'https://picsum.photos/400/400?random=45'
    ],
    text: [
      'Web application dashboard for embedded systems monitoring.',
      'Modern frontend with interactive charts and real-time updates.',
      'RESTful API backend with authentication and user management.'
    ],
    tags: [
      { name: 'React', tooltip: '// UI magic' },
      { name: 'Node.js', tooltip: '// backend bro' },
      { name: 'WebSocket', tooltip: '// real-time comms' },
      { name: 'Charts.js', tooltip: '// data viz' }
    ]
  }
};

// Easter Egg
console.log('%c FEDERICO BALDAN ', 'background: #58a6ff; color: #1a1a1a; font-size: 20px; padding: 10px;');
console.log('Hey dev! You found the easter egg.');
console.log('Tip: click on the name to cycle through styles!');

var reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
var prefersReducedMotion = reducedMotionQuery.matches;

if (reducedMotionQuery.addEventListener) {
  reducedMotionQuery.addEventListener('change', function(e) {
    prefersReducedMotion = e.matches;
  });
} else if (reducedMotionQuery.addListener) {
  reducedMotionQuery.addListener(function(e) {
    prefersReducedMotion = e.matches;
  });
}

// ══════════════════════════════════════════
// NAME STYLE CYCLING (curated set)
// ══════════════════════════════════════════

var nameClick = document.getElementById('nameClick');
var NAME_TEXT = 'Federico Baldan';
var currentNameStylePos = 0;
var nameClickBurstTimeoutId = null;

var blockColors = [
  '#f4a8b8', '#a8d8ea', '#c3b1e1', '#f9d89c', '#b8e6c8',
  '#f0b8d0', '#a0c8f0', '#d4c0e8', '#fce4a8', '#a8e0d0',
  '#e8b0c0', '#90c0e8', '#c8b0e0', '#f8d890', '#98d8c0'
];

var missionTilts = [-4, 3, -2, 2, -3, 4, -1, 1];
var telemetryBits = ['00', '01', '10', '11'];
var brailleMap = {
  a: '\u2801', b: '\u2803', c: '\u2809', d: '\u2819', e: '\u2811',
  f: '\u280B', g: '\u281B', h: '\u2813', i: '\u280A', j: '\u281A',
  k: '\u2805', l: '\u2807', m: '\u280D', n: '\u281D', o: '\u2815',
  p: '\u280F', q: '\u281F', r: '\u2817', s: '\u280E', t: '\u281E',
  u: '\u2825', v: '\u2827', w: '\u283A', x: '\u282D', y: '\u283D',
  z: '\u2835'
};

var nameStyleRegistry = [
  { id: 1, className: 'name-style-1', render: renderClaudeBlocksName },
  { id: 2, className: 'name-style-2', render: renderPlainName },
  { id: 3, className: 'name-style-3', render: renderPlainName },
  { id: 4, className: 'name-style-4', render: renderPlanetConstellationName },
  { id: 6, className: 'name-style-6', render: renderTelemetryName },
  { id: 7, className: 'name-style-7', render: renderMissionStampName },
  { id: 9, className: 'name-style-9', render: renderBrailleOnlyName },
  { id: 13, className: 'name-style-13', render: renderMonolineEngraveName },
  { id: 14, className: 'name-style-14', render: renderNeonWireName },
  { id: 15, className: 'name-style-15', render: renderDotMatrixName },
  { id: 16, className: 'name-style-16', render: renderAeroSerifName }
];

function renderPlainName() {
  nameClick.textContent = NAME_TEXT;
}

function renderNameByLetter(className, optionsBuilder) {
  var html = '';
  for (var i = 0; i < NAME_TEXT.length; i++) {
    var letter = NAME_TEXT[i];
    if (letter === ' ') {
      html += '<span class="name-space"></span>';
      continue;
    }

    var extraAttrs = optionsBuilder ? optionsBuilder(letter, i) : '';
    html += '<span class="' + className + '" ' + extraAttrs + '>' + letter + '</span>';
  }
  nameClick.innerHTML = html;
}

function renderClaudeBlocksName() {
  renderNameByLetter('name-letter', function(letter, idx) {
    return 'style="background:' + blockColors[idx % blockColors.length] + '"';
  });
}

function renderPlanetConstellationName() {
  var chars = NAME_TEXT.split('');
  var html = '<span class="planet-constellation-core">';
  for (var i = 0; i < chars.length; i++) {
    var ch = chars[i];
    if (ch === ' ') {
      html += '<span class="name-space"></span>';
      continue;
    }
    if (ch === 'o' || ch === 'a' || ch === 'd') {
      html += '<span class="planet-glyph" data-char="' + ch + '" aria-label="' + ch + '">' + ch + '</span>';
    } else {
      html += '<span class="constellation-letter">' + ch + '</span>';
    }
  }
  html += '</span>';
  html += '<span class="constellation-track constellation-track-1" aria-hidden="true"></span>';
  html += '<span class="constellation-track constellation-track-2" aria-hidden="true"></span>';
  html += '<span class="constellation-node constellation-node-1" aria-hidden="true"></span>';
  html += '<span class="constellation-node constellation-node-2" aria-hidden="true"></span>';
  html += '<span class="constellation-node constellation-node-3" aria-hidden="true"></span>';
  nameClick.innerHTML = html;
}

function renderTelemetryName() {
  renderNameByLetter('telemetry-letter', function(letter, idx) {
    return 'data-bit="' + telemetryBits[idx % telemetryBits.length] + '"';
  });
}

function renderMissionStampName() {
  renderNameByLetter('mission-letter', function(letter, idx) {
    return 'style="--tilt:' + missionTilts[idx % missionTilts.length] + 'deg"';
  });
}

function getBrailleChar(letter) {
  var normalized = letter.toLowerCase();
  return brailleMap[normalized] || '\u2800';
}

function nameToBraille(text) {
  return text.split('').map(function(letter) {
    if (letter === ' ') return ' ';
    return getBrailleChar(letter);
  }).join('');
}

function renderBrailleOnlyName() {
  nameClick.classList.add('braille-only');
  nameClick.innerHTML = '<span class="braille-label">braille:</span> <span class="braille-text">' + nameToBraille(NAME_TEXT) + '</span>';
}

function renderMonolineEngraveName() {
  renderNameByLetter('monoline-letter');
}

function renderNeonWireName() {
  renderNameByLetter('neon-wire-letter');
}

function renderDotMatrixName() {
  renderNameByLetter('dot-matrix-letter');
}

function renderAeroSerifName() {
  renderNameByLetter('aero-serif-letter');
}

function triggerNameClickAccent() {
  nameClick.classList.remove('name-click-burst');
  void nameClick.offsetWidth;
  nameClick.classList.add('name-click-burst');
  if (nameClickBurstTimeoutId) clearTimeout(nameClickBurstTimeoutId);
  nameClickBurstTimeoutId = setTimeout(function() {
    nameClick.classList.remove('name-click-burst');
    nameClickBurstTimeoutId = null;
  }, 420);
}

function applyNameStyleByPos(pos) {
  var styleConfig = nameStyleRegistry[pos] || nameStyleRegistry[0];
  nameClick.classList.remove('braille-only');
  nameStyleRegistry.forEach(function(style) {
    nameClick.classList.remove(style.className);
  });
  nameClick.classList.add(styleConfig.className);
  styleConfig.render();
}

nameClick.addEventListener('click', function() {
  currentNameStylePos = (currentNameStylePos + 1) % nameStyleRegistry.length;
  applyNameStyleByPos(currentNameStylePos);
  triggerNameClickAccent();
});

nameClick.addEventListener('mousedown', function(e) {
  e.preventDefault();
});

// ══════════════════════════════════════════
// ROCKET LAUNCH
// ══════════════════════════════════════════

var rocketContainer = document.getElementById('rocketContainer');
var ignitionBtn = document.getElementById('ignitionBtn');
var radarBtn = document.getElementById('radarBtn');
var signalBtn = document.getElementById('signalBtn');
var radarOverlay = document.getElementById('radarOverlay');
var radarAnimating = false;
var signalAnimating = false;

function launchRocket() {
  rocketContainer.classList.remove('launching');
  void rocketContainer.offsetWidth;
  rocketContainer.classList.add('launching');

  var rect = rocketContainer.getBoundingClientRect();
  createParticles(rect.left + rect.width / 2, rect.bottom);

  setTimeout(function() {
    rocketContainer.classList.remove('launching');
  }, 2200);
}

ignitionBtn.addEventListener('click', launchRocket);
if (radarBtn) {
  radarBtn.addEventListener('click', launchRadarGraph);
}
if (signalBtn) {
  signalBtn.addEventListener('click', launchSignal);
}

function createParticles(x, y) {
  var count = 20;
  for (var i = 0; i < count; i++) {
    (function(idx) {
      setTimeout(function() {
        var p = document.createElement('div');
        p.className = 'particle';
        var ox = (Math.random() - 0.5) * 24;
        var oy = Math.random() * 16;
        p.style.left = (x + ox) + 'px';
        p.style.top = (y + oy + idx * 4) + 'px';
        var size = 2 + Math.random() * 4;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        var colors = ['#ff4500', '#ff6b35', '#ff8c00', '#ffcc00', '#ff2200'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(p);
        setTimeout(function() { p.classList.add('animate'); }, 10);
        setTimeout(function() { p.remove(); }, 800);
      }, idx * 40);
    })(i);
  }
}

function launchRadarGraph() {
  if (!radarOverlay || radarAnimating || signalAnimating) return;
  radarAnimating = true;
  radarOverlay.innerHTML = '';

  var w = window.innerWidth;
  var h = window.innerHeight;
  var bottomSafe = 84;
  var isMobile = window.matchMedia('(max-width: 768px)').matches;
  var nodeCount = prefersReducedMotion ? 6 : (isMobile ? 9 : 14);
  var minX = Math.round(w * 0.12);
  var maxX = Math.round(w * 0.88);
  var minY = Math.round(h * 0.12);
  var maxY = Math.max(minY + 60, h - bottomSafe - Math.round(h * 0.08));
  var points = [];

  for (var i = 0; i < nodeCount; i++) {
    points.push({
      x: randomRange(minX, maxX),
      y: randomRange(minY, maxY)
    });
  }

  points.sort(function(a, b) { return a.x - b.x; });

  points.forEach(function(point, idx) {
    var dot = document.createElement('div');
    dot.className = 'radar-dot';
    dot.style.left = point.x + 'px';
    dot.style.top = point.y + 'px';
    dot.style.animationDelay = (idx * 0.04) + 's';
    radarOverlay.appendChild(dot);
  });

  for (var p = 0; p < points.length; p++) {
    connectRadarPoints(points[p], points[p + 1], p * 0.05, isMobile);
    if (p % 2 === 0 && points[p + 2]) {
      connectRadarPoints(points[p], points[p + 2], p * 0.04 + 0.08, isMobile);
    }
  }

  setTimeout(function() {
    radarOverlay.innerHTML = '';
    radarAnimating = false;
  }, prefersReducedMotion ? 900 : 1700);
}

function connectRadarPoints(a, b, delay, isMobile) {
  if (!a || !b) return;
  var dx = b.x - a.x;
  var dy = b.y - a.y;
  var dist = Math.sqrt(dx * dx + dy * dy);
  var maxDistance = isMobile ? 220 : 280;
  if (dist > maxDistance) return;

  var line = document.createElement('div');
  line.className = 'radar-link';
  line.style.left = a.x + 'px';
  line.style.top = (a.y + 2) + 'px';
  line.style.width = dist + 'px';
  line.style.transform = 'rotate(' + Math.atan2(dy, dx) + 'rad)';
  line.style.animationDelay = delay + 's';
  radarOverlay.appendChild(line);
}

function randomRange(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

// ══════════════════════════════════════════
// SIDE PANEL
// ══════════════════════════════════════════

var sidePanel = document.getElementById('sidePanel');
var panelContent = document.getElementById('panelContent');
var panelClose = document.getElementById('panelClose');
var clickableItems = document.querySelectorAll('.clickable-item');

var currentGallery = [];
var currentGalleryIndex = 0;
var panelPolishTimeoutId = null;

clickableItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    var data = panelData[this.dataset.panel];
    if (!data) return;

    currentGallery = data.photos || [];
    var html = '<h2 class="side-panel-title">' + data.title + '</h2>';

    if (data.photos && data.photos.length > 0) {
      html += '<div class="photo-gallery">';
      data.photos.forEach(function(photo, idx) {
        html += '<img src="' + photo + '" alt="Photo ' + (idx + 1) + '" class="gallery-thumb" data-index="' + idx + '" loading="lazy">';
      });
      html += '</div>';
    }

    data.text.forEach(function(p) {
      html += '<p class="side-panel-text">' + p + '</p>';
    });

    html += '<div class="side-panel-tags">';
    data.tags.forEach(function(tag) {
      var name = typeof tag === 'object' ? tag.name : tag;
      var tip = typeof tag === 'object' ? tag.tooltip : '';
      html += '<span class="side-panel-tag" data-tooltip="' + tip + '">' + name + '</span>';
    });
    html += '</div>';

    panelContent.innerHTML = html;

    sidePanel.classList.remove('panel-polish');
    void sidePanel.offsetWidth;
    sidePanel.classList.add('panel-polish');
    sidePanel.classList.add('open');
    document.body.classList.add('panel-open');

    if (panelPolishTimeoutId) clearTimeout(panelPolishTimeoutId);
    panelPolishTimeoutId = setTimeout(function() {
      sidePanel.classList.remove('panel-polish');
      panelPolishTimeoutId = null;
    }, 520);
  });
});

panelClose.addEventListener('click', closePanel);

function closePanel() {
  sidePanel.classList.remove('open');
  document.body.classList.remove('panel-open');
  if (panelPolishTimeoutId) {
    clearTimeout(panelPolishTimeoutId);
    panelPolishTimeoutId = null;
  }
  sidePanel.classList.remove('panel-polish');
}

panelContent.addEventListener('click', function(e) {
  var thumb = e.target.closest('.gallery-thumb');
  if (thumb) {
    openLightbox(parseInt(thumb.dataset.index));
  }
});

// ══════════════════════════════════════════
// LIGHTBOX
// ══════════════════════════════════════════

var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightboxImg');

function openLightbox(idx) {
  if (currentGallery.length === 0) return;
  currentGalleryIndex = idx;
  updateLightboxImage();
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
}

function updateLightboxImage() {
  if (currentGallery.length > 0) {
    lightboxImg.src = currentGallery[currentGalleryIndex];
    document.getElementById('lightboxCurrent').textContent = currentGalleryIndex + 1;
    document.getElementById('lightboxTotal').textContent = currentGallery.length;
  }
}

function showNextImage() {
  if (currentGallery.length === 0) return;
  currentGalleryIndex = (currentGalleryIndex + 1) % currentGallery.length;
  updateLightboxImage();
}

function showPrevImage() {
  if (currentGallery.length === 0) return;
  currentGalleryIndex = (currentGalleryIndex - 1 + currentGallery.length) % currentGallery.length;
  updateLightboxImage();
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxNext').addEventListener('click', showNextImage);
document.getElementById('lightboxPrev').addEventListener('click', showPrevImage);

lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) closeLightbox();
});

// Touch swipe for lightbox navigation (mobile)
var touchStartX = 0;

lightbox.addEventListener('touchstart', function(e) {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

lightbox.addEventListener('touchend', function(e) {
  var diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) showNextImage();
    else showPrevImage();
  }
});

// ══════════════════════════════════════════
// KEYBOARD NAVIGATION (unified handler added after command palette)
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TOP BAR: THEME + PALETTE (2-step model)
// ══════════════════════════════════════════

var toggleBg = document.getElementById('toggleBg');
var toggleTheme = document.getElementById('toggleTheme');
var themeColorMeta = document.querySelector('meta[name="theme-color"]');

var paletteMap = {
  light: ['cream', 'rose', 'sky', 'sage', 'peach', 'lavender'],
  dark: ['charcoal', 'warm-ink']
};

var themeMetaColors = {
  light: '#f8efea',
  dark: '#1a1a1a'
};

var currentTheme = 'light';
var currentPaletteIndexByTheme = { light: 0, dark: 0 };

function getAllPaletteNames() {
  return paletteMap.light.concat(paletteMap.dark);
}

function applyThemePalette() {
  var allPalettes = getAllPaletteNames();
  document.body.classList.remove('theme-light', 'theme-dark');
  allPalettes.forEach(function(name) {
    document.body.classList.remove('palette-' + name);
  });

  var paletteName = paletteMap[currentTheme][currentPaletteIndexByTheme[currentTheme]];
  document.body.classList.add('theme-' + currentTheme, 'palette-' + paletteName);
  toggleBg.title = 'Palette: ' + paletteName;
  toggleBg.setAttribute('aria-label', 'Cycle color palette. Current ' + paletteName);
  toggleTheme.title = currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  toggleTheme.classList.toggle('active', currentTheme === 'dark');
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', themeMetaColors[currentTheme]);
  }
}

function toggleThemeMode() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyThemePalette();
}

function cycleActiveThemePalette() {
  var list = paletteMap[currentTheme];
  currentPaletteIndexByTheme[currentTheme] = (currentPaletteIndexByTheme[currentTheme] + 1) % list.length;
  applyThemePalette();
}

toggleBg.addEventListener('click', cycleActiveThemePalette);
toggleTheme.addEventListener('click', toggleThemeMode);

// ══════════════════════════════════════════
// TOP BAR: LANGUAGE DROPDOWN
// ══════════════════════════════════════════

var langBtn = document.getElementById('toggleLang');
var langDropdown = document.getElementById('langDropdown');
var langLabel = document.getElementById('langLabel');
var langFlagEl = document.getElementById('langFlag');
var langOptions = document.querySelectorAll('#langDropdown .dropdown-option');
var currentLang = 'EN';

var langFlags = {
  EN: '\uD83C\uDDEC\uD83C\uDDE7',
  IT: '\uD83C\uDDEE\uD83C\uDDF9',
  ES: '\uD83C\uDDEA\uD83C\uDDF8',
  ZH: '\uD83C\uDDE8\uD83C\uDDF3',
  FR: '\uD83C\uDDEB\uD83C\uDDF7',
  DE: '\uD83C\uDDE9\uD83C\uDDEA'
};

var translations = {
  EN: { role1: 'aerospace engineer', role2: 'grew up as a vibe computer scientist', bio: 'click here to learn more about me...', about: 'about', projects: 'projects', cv: 'cv' },
  IT: { role1: 'ingegnere aerospaziale', role2: 'cresciuto come vibe computer scientist', bio: 'clicca qui per sapere di pi\u00F9 su di me...', about: 'about', projects: 'projects', cv: 'cv' },
  ES: { role1: 'ingeniero aeroespacial', role2: 'crecido como vibe computer scientist', bio: 'haz clic aqu\u00ED para saber m\u00E1s sobre m\u00ED...', about: 'about', projects: 'projects', cv: 'cv' },
  ZH: { role1: '\u822A\u7A7A\u822A\u5929\u5DE5\u7A0B\u5E08', role2: '\u6210\u957F\u4E3A\u4E00\u540D vibe \u8BA1\u7B97\u673A\u79D1\u5B66\u5BB6', bio: '\u70B9\u51FB\u8FD9\u91CC\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u6211...', about: 'about', projects: 'projects', cv: 'cv' },
  FR: { role1: 'ing\u00E9nieur a\u00E9rospatial', role2: 'grandi en tant que vibe computer scientist', bio: 'cliquez ici pour en savoir plus sur moi...', about: 'about', projects: 'projects', cv: 'cv' },
  DE: { role1: 'Luft- und Raumfahrtingenieur', role2: 'aufgewachsen als Vibe Computer Scientist', bio: 'klicke hier, um mehr \u00FCber mich zu erfahren...', about: 'about', projects: 'projects', cv: 'cv' }
};

langBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  langDropdown.classList.toggle('open');
  // Close mail dropdown if open
  document.getElementById('mailDropdown').classList.remove('open');
});

langOptions.forEach(function(opt) {
  opt.addEventListener('click', function(e) {
    e.stopPropagation();
    var lang = this.dataset.lang;
    currentLang = lang;
    langLabel.textContent = lang;
    langFlagEl.textContent = langFlags[lang];
    langOptions.forEach(function(o) { o.classList.remove('active'); });
    this.classList.add('active');

    var t = translations[lang];
    document.getElementById('role1').textContent = t.role1;
    document.getElementById('role2').textContent = t.role2;
    document.getElementById('bioText').textContent = t.bio;
    document.getElementById('summaryAbout').textContent = t.about;
    document.getElementById('summaryProjects').textContent = t.projects;
    document.getElementById('summaryCv').textContent = t.cv;

    langDropdown.classList.remove('open');
  });
});

// ══════════════════════════════════════════
// TOP BAR: MAIL DROPDOWN (copy to clipboard)
// ══════════════════════════════════════════

var mailBtn = document.getElementById('mailBtn');
var mailDropdown = document.getElementById('mailDropdown');
var copyToast = document.getElementById('copyToast');
var mailOptions = document.querySelectorAll('#mailDropdown .dropdown-option');

mailBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  mailDropdown.classList.toggle('open');
  // Close lang dropdown if open
  langDropdown.classList.remove('open');
});

mailOptions.forEach(function(opt) {
  opt.addEventListener('click', function(e) {
    e.stopPropagation();
    var email = this.dataset.email;
    if (email) {
      copyToClipboard(email);
      mailDropdown.classList.remove('open');
    }
  });
});

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      showCopyToast(text + ' copied!');
    }).catch(function() {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showCopyToast(text + ' copied!');
}

var toastTimeoutId = null;

function showCopyToast(msg) {
  if (toastTimeoutId) clearTimeout(toastTimeoutId);
  copyToast.textContent = msg;
  copyToast.classList.add('show');
  toastTimeoutId = setTimeout(function() {
    copyToast.classList.remove('show');
    toastTimeoutId = null;
  }, 2000);
}

// ══════════════════════════════════════════
// CLOSE DROPDOWNS ON OUTSIDE CLICK
// ══════════════════════════════════════════

document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown-wrapper')) {
    langDropdown.classList.remove('open');
    mailDropdown.classList.remove('open');
  }
});

// ══════════════════════════════════════════
// SCROLL PROGRESS BAR
// ══════════════════════════════════════════

var scrollProgress = document.getElementById('scrollProgress');
var scrollTicking = false;

window.addEventListener('scroll', function() {
  if (!scrollTicking) {
    requestAnimationFrame(function() {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      scrollProgress.style.height = pct + '%';
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, { passive: true });

// ══════════════════════════════════════════
// STATUS MESSAGES (click to cycle)
// ══════════════════════════════════════════

var statusMessages = [
  'powered by mass caffeine',
  'ready for liftoff',
  'code is poetry',
  'night owl mode',
  'full stack energy',
  'always building',
  'focus mode: on'
];

var statusMessage = document.getElementById('statusMessage');
var currentStatusIdx = 0;

var statusAnimating = false;

statusMessage.addEventListener('click', function() {
  if (statusAnimating) return;
  statusAnimating = true;
  currentStatusIdx = (currentStatusIdx + 1) % statusMessages.length;
  statusMessage.style.opacity = 0;
  setTimeout(function() {
    statusMessage.textContent = statusMessages[currentStatusIdx];
    statusMessage.style.opacity = 1;
    setTimeout(function() { statusAnimating = false; }, 300);
  }, 300);
});

// ══════════════════════════════════════════
// COMMAND PALETTE
// ══════════════════════════════════════════

var palette = document.getElementById('commandPalette');
var cmdInput = document.getElementById('commandInput');
var commands = document.querySelectorAll('.command-item');
var selectedIndex = 0;

var urls = {
  cv: 'Baldan_Resume_update.pdf',
  linkedin: 'https://www.linkedin.com/in/fbaldan/',
  github: 'https://github.com/SirBaldo'
};

function launchSignal() {
  if (!radarOverlay || signalAnimating || radarAnimating) return;
  signalAnimating = true;
  radarOverlay.innerHTML = '';

  var baseEl = document.querySelector('.status-bar') || signalBtn;
  var baseRect = baseEl.getBoundingClientRect();
  var centerX = Math.round(baseRect.left + baseRect.width * 0.6);
  var centerY = Math.round(baseRect.top + baseRect.height * 0.35);
  var rtt = 14 + Math.floor(Math.random() * 9);

  if (prefersReducedMotion) {
    var prevReduced = statusMessage.textContent;
    statusMessage.textContent = 'UAV link stable | RL reward +0.84';
    setTimeout(function() {
      statusMessage.textContent = prevReduced;
      signalAnimating = false;
    }, 950);
    return;
  }

  var prev = statusMessage.textContent;
  statusMessage.textContent = 'UAV link: stable | RTT ' + rtt + 'ms';

  var ping = document.createElement('div');
  ping.className = 'signal-ping';
  ping.style.left = centerX + 'px';
  ping.style.top = centerY + 'px';
  radarOverlay.appendChild(ping);

  var pulse1 = document.createElement('div');
  pulse1.className = 'signal-ring';
  pulse1.style.left = centerX + 'px';
  pulse1.style.top = centerY + 'px';
  pulse1.style.animationDelay = '0s';
  radarOverlay.appendChild(pulse1);

  var pulse2 = document.createElement('div');
  pulse2.className = 'signal-ring';
  pulse2.style.left = centerX + 'px';
  pulse2.style.top = centerY + 'px';
  pulse2.style.animationDelay = '0.14s';
  radarOverlay.appendChild(pulse2);

  var rl = document.createElement('div');
  rl.className = 'signal-rl-step';
  rl.textContent = 'state -> action -> reward';
  rl.style.left = Math.max(12, centerX - 130) + 'px';
  rl.style.top = Math.max(12, centerY - 52) + 'px';
  rl.style.animationDelay = '0.55s';
  radarOverlay.appendChild(rl);

  setTimeout(function() {
    statusMessage.textContent = 'RL policy: converging';
  }, 620);

  setTimeout(function() {
    radarOverlay.innerHTML = '';
    statusMessage.textContent = prev;
    signalAnimating = false;
  }, 1480);
}

document.addEventListener('keydown', function(e) {
  // Cmd/Ctrl+K: open command palette
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openPalette();
    return;
  }
  // Escape: close overlays in priority order
  if (e.key === 'Escape') {
    if (palette.classList.contains('active')) {
      closePalette();
    } else if (lightbox.classList.contains('open')) {
      closeLightbox();
    } else if (sidePanel.classList.contains('open')) {
      closePanel();
    }
    return;
  }
  // Arrow keys: lightbox navigation
  if (lightbox.classList.contains('open')) {
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  }
});

function openPalette() {
  palette.classList.add('active');
  cmdInput.value = '';
  commands.forEach(function(c) { c.style.display = 'flex'; });
  selectedIndex = 0;
  updateSelection();
  setTimeout(function() { cmdInput.focus(); }, 10);
}

function closePalette() {
  palette.classList.remove('active');
}

palette.addEventListener('click', function(e) {
  if (e.target === palette) closePalette();
});

cmdInput.addEventListener('input', function() {
  var q = this.value.toLowerCase();
  commands.forEach(function(cmd) {
    cmd.style.display = cmd.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
  });
  selectedIndex = 0;
  updateSelection();
});

cmdInput.addEventListener('keydown', function(e) {
  var visible = Array.from(commands).filter(function(c) { return c.style.display !== 'none'; });
  if (e.key === 'ArrowDown') { e.preventDefault(); selectedIndex = Math.min(selectedIndex + 1, visible.length - 1); updateSelection(); }
  if (e.key === 'ArrowUp') { e.preventDefault(); selectedIndex = Math.max(selectedIndex - 1, 0); updateSelection(); }
  if (e.key === 'Enter' && visible[selectedIndex]) { executeCommand(visible[selectedIndex].dataset.action); }
});

function updateSelection() {
  commands.forEach(function(c) { c.classList.remove('selected'); });
  var visible = Array.from(commands).filter(function(c) { return c.style.display !== 'none'; });
  if (visible[selectedIndex]) visible[selectedIndex].classList.add('selected');
}

commands.forEach(function(cmd) {
  cmd.addEventListener('click', function() { executeCommand(cmd.dataset.action); });
});

function executeCommand(action) {
  closePalette();
  if (action === 'theme') {
    toggleThemeMode();
  } else if (action === 'email') {
    copyToClipboard('fbaldan@uw.edu');
  } else if (urls[action]) {
    window.open(urls[action], '_blank', 'noopener');
  }
}

// ══════════════════════════════════════════
// MICRO-WOW: STAGGERED REVEAL + MAGNETIC HOVER
// ══════════════════════════════════════════

function initStaggeredReveal() {
  var revealTargets = Array.from(document.querySelectorAll('.reveal-target'));
  if (revealTargets.length === 0) return;

  if (prefersReducedMotion) {
    revealTargets.forEach(function(item) { item.classList.add('revealed'); });
    return;
  }

  revealTargets.forEach(function(item, idx) {
    setTimeout(function() {
      item.classList.add('revealed');
    }, 80 + idx * 65);
  });
}

function initMagneticHover() {
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!finePointer || prefersReducedMotion) return;

  var magneticItems = document.querySelectorAll('.magnetic-item');
  magneticItems.forEach(function(item) {
    var maxOffset = item.classList.contains('social-link') ? 10 : 7;

    item.addEventListener('mousemove', function(e) {
      var rect = item.getBoundingClientRect();
      var relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      var relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      var dx = Math.max(-1, Math.min(1, relX)) * maxOffset;
      var dy = Math.max(-1, Math.min(1, relY)) * maxOffset;
      item.style.transform = 'translate3d(' + dx.toFixed(2) + 'px, ' + dy.toFixed(2) + 'px, 0)';
    });

    item.addEventListener('mouseleave', function() {
      item.style.transform = '';
    });

    item.addEventListener('blur', function() {
      item.style.transform = '';
    });
  });
}

function initPortfolioExperience() {
  applyNameStyleByPos(0);
  applyThemePalette();
  initStaggeredReveal();
  initMagneticHover();
}

initPortfolioExperience();
