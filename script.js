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
// SITE CONTENT CONFIG (cv, profile, projects)
// ══════════════════════════════════════════

var DEFAULT_SITE_CONTENT = {
  cv: {
    path: 'content/cv/current.pdf'
  },
  profile: {
    baseName: 'content/profile/current',
    extensions: ['jpg', 'jpeg', 'png', 'webp']
  },
  projects: [
    {
      title: 'Autonomous Guidance Stack',
      primaryUrl: 'https://github.com/SirBaldo',
      extras: [
        { label: 'repo', url: 'https://github.com/SirBaldo' },
        { label: 'paper', url: 'https://sirbaldo.github.io/' }
      ]
    },
    {
      title: 'Flight Ops Dashboard',
      primaryUrl: 'https://github.com/SirBaldo',
      extras: [
        { label: 'repo', url: 'https://github.com/SirBaldo' }
      ]
    },
    {
      title: 'Orbital ML Study',
      primaryUrl: 'https://sirbaldo.github.io/',
      extras: [
        { label: 'paper', url: 'https://sirbaldo.github.io/' }
      ]
    }
  ]
};

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function normalizeExtensions(list) {
  if (!Array.isArray(list)) return [];
  var unique = {};
  var normalized = [];
  list.forEach(function(item) {
    if (!isNonEmptyString(item)) return;
    var ext = item.trim().toLowerCase().replace(/^\.+/, '');
    if (!ext || unique[ext]) return;
    unique[ext] = true;
    normalized.push(ext);
  });
  return normalized;
}

function normalizeProjectItem(item) {
  if (!item || typeof item !== 'object') return null;
  if (!isNonEmptyString(item.title) || !isNonEmptyString(item.primaryUrl)) return null;
  var project = {
    title: item.title.trim(),
    primaryUrl: item.primaryUrl.trim(),
    extras: []
  };
  if (Array.isArray(item.extras)) {
    item.extras.forEach(function(extra) {
      if (!extra || typeof extra !== 'object') return;
      if (!isNonEmptyString(extra.url)) return;
      project.extras.push({
        label: isNonEmptyString(extra.label) ? extra.label.trim() : 'link',
        url: extra.url.trim()
      });
    });
  }
  return project;
}

function normalizeProjects(list) {
  if (!Array.isArray(list)) return [];
  var projects = [];
  list.forEach(function(item) {
    var normalized = normalizeProjectItem(item);
    if (normalized) projects.push(normalized);
  });
  return projects;
}

function getSiteContent(raw) {
  var normalized = {
    cv: { path: DEFAULT_SITE_CONTENT.cv.path },
    profile: {
      baseName: DEFAULT_SITE_CONTENT.profile.baseName,
      extensions: DEFAULT_SITE_CONTENT.profile.extensions.slice()
    },
    projects: DEFAULT_SITE_CONTENT.projects.slice()
  };

  if (!raw || typeof raw !== 'object') return normalized;

  if (raw.cv && isNonEmptyString(raw.cv.path)) {
    normalized.cv.path = raw.cv.path.trim();
  }

  if (raw.profile && typeof raw.profile === 'object') {
    if (isNonEmptyString(raw.profile.baseName)) {
      normalized.profile.baseName = raw.profile.baseName.trim();
    }
    var profileExtensions = normalizeExtensions(raw.profile.extensions);
    if (profileExtensions.length) {
      normalized.profile.extensions = profileExtensions;
    }
  }

  var projects = normalizeProjects(raw.projects);
  if (projects.length) {
    normalized.projects = projects;
  }

  return normalized;
}

var siteContent = getSiteContent(window.SITE_CONTENT);

// ══════════════════════════════════════════
// PROFILE PHOTO EXPAND
// ══════════════════════════════════════════

var profilePhotoWrapper = document.getElementById('profilePhoto');
var profilePhotoElement = profilePhotoWrapper ? profilePhotoWrapper.querySelector('.profile-photo') : null;
var photoFocusLayer = document.getElementById('photoFocusLayer');
var photoFocusContent = photoFocusLayer ? photoFocusLayer.querySelector('.photo-focus-content') : null;
var photoFocusImage = document.getElementById('photoFocusImage');
var photoFocusCaption = document.getElementById('photoFocusCaption');
var photoFocusCloseBtn = document.getElementById('photoFocusClose');
var photoHoverTimerId = null;
var photoFocusMouseLeaveTimerId = null;
var photoFocusAnimImage = null;
var photoFocusTimeline = null;
var photoFocusFallbackTimerId = null;
var photoFocusState = 'closed';
var PHOTO_HOVER_OPEN_DELAY_MS = 400;
var PHOTO_MOUSELEAVE_CLOSE_DELAY_MS = 0;
var PHOTO_FOCUS_OPEN_MS = 480;
var PHOTO_FOCUS_CLOSE_MS = 380;
var PHOTO_FOCUS_OPEN_EASE = 'power2.out';
var PHOTO_FOCUS_CLOSE_EASE = 'power2.inOut';
var coarsePointerQuery = window.matchMedia('(hover: none), (pointer: coarse)');
var isCoarsePointer = coarsePointerQuery.matches;

if (coarsePointerQuery.addEventListener) {
  coarsePointerQuery.addEventListener('change', function(e) {
    isCoarsePointer = e.matches;
  });
} else if (coarsePointerQuery.addListener) {
  coarsePointerQuery.addListener(function(e) {
    isCoarsePointer = e.matches;
  });
}

function applyCvLinks() {
  var cvPath = siteContent.cv.path;
  var topCvLink = document.getElementById('topCvLink');
  var socialCvLink = document.getElementById('socialCvLink');
  [topCvLink, socialCvLink].forEach(function(link) {
    if (!link) return;
    link.setAttribute('href', cvPath);
    link.setAttribute('download', '');
  });
  if (typeof urls === 'object' && urls) {
    urls.cv = cvPath;
  }
}

function renderProjects() {
  var projectList = document.getElementById('projectList');
  if (!projectList) return;
  if (!Array.isArray(siteContent.projects) || siteContent.projects.length === 0) return;

  projectList.innerHTML = '';
  siteContent.projects.forEach(function(project) {
    var li = document.createElement('li');

    var primary = document.createElement('a');
    primary.className = 'project-primary-link';
    primary.href = project.primaryUrl;
    primary.target = '_blank';
    primary.rel = 'noopener noreferrer';
    primary.textContent = project.title;
    li.appendChild(primary);

    if (Array.isArray(project.extras) && project.extras.length) {
      var extrasWrap = document.createElement('span');
      extrasWrap.className = 'project-extra-links';

      project.extras.forEach(function(extra, index) {
        if (index > 0) {
          var sep = document.createElement('span');
          sep.className = 'project-extra-sep';
          sep.textContent = '|';
          extrasWrap.appendChild(sep);
        }
        var extraLink = document.createElement('a');
        extraLink.href = extra.url;
        extraLink.target = '_blank';
        extraLink.rel = 'noopener noreferrer';
        extraLink.textContent = extra.label;
        extrasWrap.appendChild(extraLink);
      });

      li.appendChild(extrasWrap);
    }

    projectList.appendChild(li);
  });
}

function resolveProfileImage() {
  if (!profilePhotoElement) return;
  var profile = siteContent.profile || DEFAULT_SITE_CONTENT.profile;
  var baseName = isNonEmptyString(profile.baseName) ? profile.baseName.trim() : DEFAULT_SITE_CONTENT.profile.baseName;
  var extensions = normalizeExtensions(profile.extensions);
  if (!extensions.length) {
    extensions = DEFAULT_SITE_CONTENT.profile.extensions.slice();
  }

  var unique = {};
  var candidates = [];

  function addCandidate(src) {
    if (!isNonEmptyString(src)) return;
    var normalized = src.trim();
    if (unique[normalized]) return;
    unique[normalized] = true;
    candidates.push(normalized);
  }

  extensions.forEach(function(ext) {
    addCandidate(baseName + '.' + ext);
  });

  addCandidate(profilePhotoElement.getAttribute('src'));

  function tryCandidate(index) {
    if (index >= candidates.length) return;
    var candidate = candidates[index];
    var probe = new Image();
    probe.onload = function() {
      profilePhotoElement.src = candidate;
      if (photoFocusImage) photoFocusImage.src = candidate;
    };
    probe.onerror = function() {
      tryCandidate(index + 1);
    };
    probe.src = candidate;
  }

  tryCandidate(0);
}

renderProjects();
resolveProfileImage();
applyCvLinks();

function isPhotoFocusOpen() {
  return photoFocusState !== 'closed';
}

function clearPhotoFocusStateClasses() {
  document.body.classList.remove('photo-focus-opening', 'photo-focus-active', 'photo-focus-closing');
}

function setPhotoFocusState(nextState) {
  photoFocusState = nextState;
  clearPhotoFocusStateClasses();
  if (nextState === 'opening') document.body.classList.add('photo-focus-opening');
  if (nextState === 'open') document.body.classList.add('photo-focus-active');
  if (nextState === 'closing') document.body.classList.add('photo-focus-closing');
}

function cancelProfileHoverOpen() {
  if (photoHoverTimerId) {
    clearTimeout(photoHoverTimerId);
    photoHoverTimerId = null;
  }
}

function cancelPhotoFocusMouseLeaveClose() {
  if (photoFocusMouseLeaveTimerId) {
    clearTimeout(photoFocusMouseLeaveTimerId);
    photoFocusMouseLeaveTimerId = null;
  }
}

function schedulePhotoFocusMouseLeaveClose() {
  if (isCoarsePointer || !isPhotoFocusOpen()) return;
  cancelPhotoFocusMouseLeaveClose();
  photoFocusMouseLeaveTimerId = setTimeout(function() {
    closeProfileFocus();
  }, PHOTO_MOUSELEAVE_CLOSE_DELAY_MS);
}

function syncProfileFocusContent() {
  if (!profilePhotoElement || !photoFocusImage) return;
  photoFocusImage.src = profilePhotoElement.currentSrc || profilePhotoElement.src;
  photoFocusImage.alt = profilePhotoElement.alt || 'Profile photo';
  if (photoFocusCaption) {
    photoFocusCaption.textContent = 'Whatcha looking at?';
  }
}

function getElementRect(el) {
  if (!el) return null;
  var rect = el.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return null;
  return rect;
}

function setPhotoFocusImageVisibility(hidden) {
  if (!photoFocusImage) return;
  if (hidden) {
    photoFocusImage.style.opacity = '0';
    photoFocusImage.style.visibility = 'hidden';
  } else {
    photoFocusImage.style.opacity = '';
    photoFocusImage.style.visibility = '';
  }
}

function stopPhotoFocusAnimation() {
  if (photoFocusTimeline && typeof photoFocusTimeline.kill === 'function') {
    photoFocusTimeline.kill();
  }
  photoFocusTimeline = null;
  if (photoFocusFallbackTimerId) {
    clearTimeout(photoFocusFallbackTimerId);
    photoFocusFallbackTimerId = null;
  }
}

function removePhotoFocusAnimImage() {
  stopPhotoFocusAnimation();
  if (photoFocusAnimImage && photoFocusAnimImage.parentNode) {
    photoFocusAnimImage.parentNode.removeChild(photoFocusAnimImage);
  }
  photoFocusAnimImage = null;
}

function createPhotoFocusAnimImage(rect) {
  if (!rect || !profilePhotoElement) return null;
  removePhotoFocusAnimImage();
  var clone = document.createElement('img');
  clone.className = 'photo-focus-anim-image';
  clone.src = profilePhotoElement.currentSrc || profilePhotoElement.src;
  clone.alt = profilePhotoElement.alt || 'Profile photo';
  clone.style.left = rect.left + 'px';
  clone.style.top = rect.top + 'px';
  clone.style.width = rect.width + 'px';
  clone.style.height = rect.height + 'px';
  document.body.appendChild(clone);
  photoFocusAnimImage = clone;
  return clone;
}

function animatePhotoFocusClone(clone, fromRect, toRect, duration, ease, done) {
  if (!clone || !fromRect || !toRect || prefersReducedMotion) {
    if (done) done();
    return;
  }

  stopPhotoFocusAnimation();

  if (window.gsap && typeof window.gsap.timeline === 'function') {
    window.gsap.set(clone, {
      left: fromRect.left,
      top: fromRect.top,
      width: fromRect.width,
      height: fromRect.height
    });
    photoFocusTimeline = window.gsap.timeline({
      onComplete: function() {
        photoFocusTimeline = null;
        if (done) done();
      }
    });
    photoFocusTimeline.to(clone, {
      left: toRect.left,
      top: toRect.top,
      width: toRect.width,
      height: toRect.height,
      duration: duration / 1000,
      ease: ease || PHOTO_FOCUS_OPEN_EASE,
      overwrite: 'auto'
    });
    return;
  }

  if (typeof clone.animate === 'function') {
    photoFocusTimeline = clone.animate([
      { left: fromRect.left + 'px', top: fromRect.top + 'px', width: fromRect.width + 'px', height: fromRect.height + 'px' },
      { left: toRect.left + 'px', top: toRect.top + 'px', width: toRect.width + 'px', height: toRect.height + 'px' }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.22, 0.78, 0.16, 1)',
      fill: 'forwards'
    });
    photoFocusTimeline.onfinish = function() {
      photoFocusTimeline = null;
      if (done) done();
    };
    photoFocusTimeline.oncancel = function() {
      photoFocusTimeline = null;
    };
    return;
  }

  clone.style.transition = 'left ' + duration + 'ms cubic-bezier(0.22, 0.78, 0.16, 1), top ' + duration + 'ms cubic-bezier(0.22, 0.78, 0.16, 1), width ' + duration + 'ms cubic-bezier(0.22, 0.78, 0.16, 1), height ' + duration + 'ms cubic-bezier(0.22, 0.78, 0.16, 1)';
  requestAnimationFrame(function() {
    clone.style.left = toRect.left + 'px';
    clone.style.top = toRect.top + 'px';
    clone.style.width = toRect.width + 'px';
    clone.style.height = toRect.height + 'px';
  });
  photoFocusFallbackTimerId = setTimeout(function() {
    photoFocusFallbackTimerId = null;
    if (done) done();
  }, duration);
}

function finalizePhotoFocusOpen() {
  removePhotoFocusAnimImage();
  setPhotoFocusImageVisibility(false);
  setPhotoFocusState('open');
}

function finalizePhotoFocusClose() {
  removePhotoFocusAnimImage();
  if (photoFocusLayer) {
    photoFocusLayer.classList.remove('open');
    photoFocusLayer.setAttribute('aria-hidden', 'true');
  }
  setPhotoFocusImageVisibility(true);
  setPhotoFocusState('closed');
}

function openProfileFocus() {
  if (!photoFocusLayer) return;
  if (photoFocusState === 'open' || photoFocusState === 'opening') return;

  cancelProfileHoverOpen();
  cancelPhotoFocusMouseLeaveClose();
  syncProfileFocusContent();

  var startRect = getElementRect(profilePhotoElement);
  if (photoFocusState === 'closing' && photoFocusAnimImage) {
    var liveRect = getElementRect(photoFocusAnimImage);
    if (liveRect) startRect = liveRect;
  }

  stopPhotoFocusAnimation();

  setPhotoFocusState('opening');
  photoFocusLayer.setAttribute('aria-hidden', 'false');
  photoFocusLayer.classList.add('open');
  setPhotoFocusImageVisibility(true);

  if (prefersReducedMotion || !profilePhotoElement || !photoFocusImage) {
    finalizePhotoFocusOpen();
    return;
  }

  if (!startRect) {
    finalizePhotoFocusOpen();
    return;
  }

  requestAnimationFrame(function() {
    if (photoFocusState !== 'opening') return;
    var targetRect = getElementRect(photoFocusImage);
    if (!targetRect) {
      finalizePhotoFocusOpen();
      return;
    }
    var clone = createPhotoFocusAnimImage(startRect);
    animatePhotoFocusClone(clone, startRect, targetRect, PHOTO_FOCUS_OPEN_MS, PHOTO_FOCUS_OPEN_EASE, finalizePhotoFocusOpen);
  });
}

function closeProfileFocus() {
  cancelProfileHoverOpen();
  cancelPhotoFocusMouseLeaveClose();
  if (!photoFocusLayer) return;
  if (!isPhotoFocusOpen() || photoFocusState === 'closing') return;

  var startRect = photoFocusAnimImage ? getElementRect(photoFocusAnimImage) : getElementRect(photoFocusImage);
  var endRect = getElementRect(profilePhotoElement);

  stopPhotoFocusAnimation();
  setPhotoFocusState('closing');

  if (prefersReducedMotion || !profilePhotoElement || !photoFocusImage || !startRect || !endRect) {
    finalizePhotoFocusClose();
    return;
  }

  setPhotoFocusImageVisibility(true);
  var clone = createPhotoFocusAnimImage(startRect);
  animatePhotoFocusClone(clone, startRect, endRect, PHOTO_FOCUS_CLOSE_MS, PHOTO_FOCUS_CLOSE_EASE, finalizePhotoFocusClose);
}

function scheduleProfileHoverOpen() {
  if (isCoarsePointer || photoFocusState !== 'closed') return;
  cancelProfileHoverOpen();
  photoHoverTimerId = setTimeout(function() {
    openProfileFocus();
    photoHoverTimerId = null;
  }, PHOTO_HOVER_OPEN_DELAY_MS);
}

function toggleProfileFocus() {
  if (isPhotoFocusOpen()) {
    closeProfileFocus();
  } else {
    openProfileFocus();
  }
}

if (profilePhotoWrapper) {
  profilePhotoWrapper.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleProfileFocus();
  });

  if (!isCoarsePointer) {
    profilePhotoWrapper.addEventListener('mouseenter', scheduleProfileHoverOpen);
    profilePhotoWrapper.addEventListener('mouseleave', cancelProfileHoverOpen);
  }
}

if (photoFocusCloseBtn) {
  photoFocusCloseBtn.addEventListener('click', closeProfileFocus);
}

if (photoFocusLayer) {
  photoFocusLayer.addEventListener('click', function(e) {
    if (e.target === photoFocusLayer) {
      closeProfileFocus();
    }
  });
}

if (photoFocusContent) {
  photoFocusContent.addEventListener('mouseenter', cancelPhotoFocusMouseLeaveClose);
  photoFocusContent.addEventListener('mouseleave', schedulePhotoFocusMouseLeaveClose);
}

// ══════════════════════════════════════════
// NAME STYLE CYCLING (curated set)
// ══════════════════════════════════════════

var nameClick = document.getElementById('nameClick');
var NAME_TEXT = 'Federico Baldan';
var currentNameStylePos = 0;
var nameClickBurstTimeoutId = null;

var blockColors = [
  'rgba(244, 168, 184, 0.25)', 'rgba(168, 216, 234, 0.25)', 'rgba(195, 177, 225, 0.25)',
  'rgba(249, 216, 156, 0.25)', 'rgba(184, 230, 200, 0.25)', 'rgba(240, 184, 208, 0.25)',
  'rgba(160, 200, 240, 0.25)', 'rgba(212, 192, 232, 0.25)', 'rgba(252, 228, 168, 0.25)',
  'rgba(168, 224, 208, 0.25)', 'rgba(232, 176, 192, 0.25)', 'rgba(144, 192, 232, 0.25)',
  'rgba(200, 176, 224, 0.25)', 'rgba(248, 216, 144, 0.25)', 'rgba(152, 216, 192, 0.25)'
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
  { id: 4, className: 'name-style-4', render: renderAerospaceHudName },
  { id: 6, className: 'name-style-6', render: renderTelemetryName },
  { id: 7, className: 'name-style-7', render: renderMissionStampName },
  { id: 9, className: 'name-style-9', render: renderBrailleOnlyName },
  { id: 13, className: 'name-style-13', render: renderMonolineEngraveName }
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

function renderAerospaceHudName() {
  var chars = NAME_TEXT.split('');
  var html = '<span class="hud-core">';
  for (var i = 0; i < chars.length; i++) {
    var ch = chars[i];
    if (ch === ' ') {
      html += '<span class="name-space"></span>';
    } else {
      html += '<span class="hud-letter">' + ch + '</span>';
    }
  }
  html += '</span>';
  html += '<span class="hud-flight-path" aria-hidden="true"></span>';
  html += '<span class="hud-waypoint" style="left:12%" aria-hidden="true"></span>';
  html += '<span class="hud-waypoint" style="left:38%" aria-hidden="true"></span>';
  html += '<span class="hud-waypoint" style="left:64%" aria-hidden="true"></span>';
  html += '<span class="hud-waypoint" style="left:88%" aria-hidden="true"></span>';
  html += '<span class="hud-coord hud-coord-left" aria-hidden="true">ALT 328</span>';
  html += '<span class="hud-coord hud-coord-right" aria-hidden="true">HDG 045</span>';
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

function fitNameToContainer() {
  nameClick.style.fontSize = '';
  var parent = nameClick.parentElement;
  if (!parent) return;
  var maxWidth = parent.offsetWidth - 60;
  var currentWidth = nameClick.scrollWidth;
  if (currentWidth > maxWidth && maxWidth > 0) {
    var scale = maxWidth / currentWidth;
    nameClick.style.fontSize = Math.max(scale * 100, 55) + '%';
  }
}

function applyNameStyleByPos(pos) {
  var styleConfig = nameStyleRegistry[pos] || nameStyleRegistry[0];
  nameClick.classList.remove('braille-only', 'name-style-0');
  nameStyleRegistry.forEach(function(style) {
    nameClick.classList.remove(style.className);
  });
  nameClick.classList.add(styleConfig.className);
  styleConfig.render();
  requestAnimationFrame(fitNameToContainer);
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
var radarOverlay = document.getElementById('radarOverlay');
var statusMessage = document.getElementById('statusMessage');
var radarAnimating = false;
var mlAnimating = false;
var rocketLaunching = false;
var ROCKET_LAUNCH_MS = 2900;
var ROCKET_PRELAUNCH_MS = 700;
var ROCKET_PARTICLE_COUNT = 28;

function updateAllStatusMessages(text) {
  if (statusMessage) statusMessage.textContent = text;
}

function syncStatusFeatureAttention() {
  if (!statusMessage) return;
  var featureActive = rocketLaunching || radarAnimating || mlAnimating;
  statusMessage.classList.toggle('feature-emphasis', featureActive);
}

function launchRocket() {
  if (rocketLaunching) return;
  var previousStatus = statusMessage ? statusMessage.textContent : '';
  var launchStatusText = 'to infinity and beyond';
  rocketLaunching = true;
  syncStatusFeatureAttention();
  updateAllStatusMessages(launchStatusText);

  rocketContainer.classList.remove('launching');
  void rocketContainer.offsetWidth;
  rocketContainer.classList.add('launching');

  var rect = rocketContainer.getBoundingClientRect();
  createParticles(rect.left + rect.width / 2, rect.bottom);

  setTimeout(function() {
    rocketContainer.classList.remove('launching');
    rocketLaunching = false;
    if (statusMessage && statusMessage.textContent === launchStatusText && !mlAnimating && !radarAnimating) {
      updateAllStatusMessages(previousStatus);
    }
    syncStatusFeatureAttention();
  }, ROCKET_LAUNCH_MS);
}

ignitionBtn.addEventListener('click', launchRocket);
if (radarBtn) {
  radarBtn.addEventListener('click', launchRadarGraph);
}

function createParticles(x, y) {
  var count = ROCKET_PARTICLE_COUNT;
  var ignitionSpreadCount = Math.max(6, Math.round(count * 0.35));
  var delayStep = Math.max(22, Math.round((ROCKET_PRELAUNCH_MS + 320) / count));
  for (var i = 0; i < count; i++) {
    (function(idx) {
      var inGroundPhase = idx < ignitionSpreadCount;
      var emissionDelay = inGroundPhase
        ? idx * 18
        : ignitionSpreadCount * 18 + (idx - ignitionSpreadCount) * delayStep;
      setTimeout(function() {
        var p = document.createElement('div');
        p.className = 'particle';
        var ox = (Math.random() - 0.5) * (inGroundPhase ? 46 : 28);
        var oy = inGroundPhase ? Math.random() * 10 : Math.random() * 18;
        var dx = (Math.random() - 0.5) * (inGroundPhase ? 84 : 34);
        var dy = (inGroundPhase ? 56 : 96) + Math.random() * (inGroundPhase ? 36 : 52);
        p.style.left = (x + ox) + 'px';
        p.style.top = (y + oy + idx * 2.8) + 'px';
        p.style.setProperty('--dx', dx.toFixed(2) + 'px');
        p.style.setProperty('--dy', dy.toFixed(2) + 'px');
        var size = 2 + Math.random() * 4;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        var colors = ['#ff4500', '#ff6b35', '#ff8c00', '#ffcc00', '#ff2200'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(p);
        setTimeout(function() { p.classList.add('animate'); }, 10);
        setTimeout(function() { p.remove(); }, 800);
      }, emissionDelay);
    })(i);
  }
}

function launchRadarGraph() {
  if (!radarOverlay || radarAnimating || mlAnimating) return;
  radarAnimating = true;
  syncStatusFeatureAttention();
  radarOverlay.innerHTML = '';
  radarOverlay.classList.remove('qlearn-mode');

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
    syncStatusFeatureAttention();
  }, prefersReducedMotion ? 1200 : 2200);
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
// ML FEATURES (Self-Attention, Neural Pulse, Q-Learning)
// ══════════════════════════════════════════

var qlearnBtn = document.getElementById('qlearnBtn');
var rrtBtn = document.getElementById('rrtBtn');

function setAlgoButtonState(button, active) {
  if (!button) return;
  button.classList.toggle('ml-active', active);
  button.setAttribute('aria-pressed', active ? 'true' : 'false');
}

function isAnyAnimating() {
  return radarAnimating || mlAnimating;
}

// ── Q-Learning Agent ──

function launchQLearning() {
  if (!radarOverlay || isAnyAnimating()) return;
  mlAnimating = true;
  syncStatusFeatureAttention();
  radarOverlay.innerHTML = '';
  radarOverlay.classList.add('qlearn-mode');
  setAlgoButtonState(qlearnBtn, true);
  setAlgoButtonState(rrtBtn, false);

  var isMobile = window.matchMedia('(max-width: 768px)').matches;
  var gridSize = isMobile ? 5 : 6;
  var cellSize = isMobile ? 30 : 38;
  var gridW = gridSize * cellSize;
  var gridH = gridSize * cellSize;
  var prev = statusMessage ? statusMessage.textContent : '';
  updateAllStatusMessages('exploring... | eps: 0.95 | loss: --');

  var frame = document.createElement('div');
  frame.className = 'qlearn-frame';
  frame.style.width = gridW + 'px';
  frame.style.height = gridH + 'px';

  var grid = document.createElement('div');
  grid.className = 'q-grid';
  grid.style.gridTemplateColumns = 'repeat(' + gridSize + ', ' + cellSize + 'px)';
  grid.style.gridTemplateRows = 'repeat(' + gridSize + ', ' + cellSize + 'px)';
  frame.appendChild(grid);
  radarOverlay.appendChild(frame);

  var cells = [];
  for (var r = 0; r < gridSize; r++) {
    for (var c = 0; c < gridSize; c++) {
      var cell = document.createElement('div');
      cell.className = 'q-cell';
      cell.dataset.row = r;
      cell.dataset.col = c;
      grid.appendChild(cell);
      cells.push(cell);
    }
  }

  var blockedCoords = isMobile
    ? [[1, 2], [2, 1], [3, 3], [1, 4]]
    : [[1, 2], [2, 2], [3, 1], [3, 4], [4, 3], [1, 5]];
  var blocked = {};
  blockedCoords.forEach(function(pair) {
    blocked[pair[0] + ',' + pair[1]] = true;
  });
  blocked['0,0'] = false;
  blocked[(gridSize - 1) + ',' + (gridSize - 1)] = false;

  function idxFromRC(row, col) {
    return row * gridSize + col;
  }
  function isBlocked(row, col) {
    return !!blocked[row + ',' + col];
  }
  function isInside(row, col) {
    return row >= 0 && row < gridSize && col >= 0 && col < gridSize;
  }

  for (var br = 0; br < gridSize; br++) {
    for (var bc = 0; bc < gridSize; bc++) {
      if (isBlocked(br, bc)) {
        cells[idxFromRC(br, bc)].classList.add('q-blocked');
      }
    }
  }

  if (cells[0]) cells[0].classList.add('q-start');
  if (cells[cells.length - 1]) cells[cells.length - 1].classList.add('q-goal-cell');

  var agent = document.createElement('div');
  agent.className = 'q-agent';
  agent.style.left = (cellSize / 2 - 4) + 'px';
  agent.style.top = (cellSize / 2 - 4) + 'px';
  grid.appendChild(agent);

  var goal = document.createElement('div');
  goal.className = 'q-goal';
  goal.style.left = ((gridSize - 1) * cellSize + cellSize / 2 - 5) + 'px';
  goal.style.top = ((gridSize - 1) * cellSize + cellSize / 2 - 5) + 'px';
  grid.appendChild(goal);

  var actions = [
    { dr: 0, dc: 1, arrow: '\u2192' },
    { dr: 1, dc: 0, arrow: '\u2193' },
    { dr: 0, dc: -1, arrow: '\u2190' },
    { dr: -1, dc: 0, arrow: '\u2191' }
  ];
  var stateCount = gridSize * gridSize;
  var qTable = new Array(stateCount).fill(null).map(function() {
    return new Array(actions.length).fill(0);
  });

  function maxQ(stateIndex) {
    var values = qTable[stateIndex];
    var maxVal = -Infinity;
    for (var vi = 0; vi < values.length; vi++) {
      if (values[vi] > maxVal) maxVal = values[vi];
    }
    return maxVal;
  }

  function validActionIndices(row, col) {
    var valid = [];
    for (var ai = 0; ai < actions.length; ai++) {
      var nr = row + actions[ai].dr;
      var nc = col + actions[ai].dc;
      if (!isInside(nr, nc)) continue;
      if (isBlocked(nr, nc)) continue;
      valid.push(ai);
    }
    return valid;
  }

  function argMaxValid(stateIndex, validIdxs) {
    var best = validIdxs[0];
    var bestValue = qTable[stateIndex][best];
    for (var i = 1; i < validIdxs.length; i++) {
      var idx = validIdxs[i];
      var value = qTable[stateIndex][idx];
      if (value > bestValue + 1e-9 || (Math.abs(value - bestValue) <= 1e-9 && Math.random() < 0.5)) {
        best = idx;
        bestValue = value;
      }
    }
    return best;
  }

  function chooseAction(row, col, epsilon) {
    var validIdxs = validActionIndices(row, col);
    if (!validIdxs.length) return -1;
    if (Math.random() < epsilon) {
      return validIdxs[Math.floor(Math.random() * validIdxs.length)];
    }
    return argMaxValid(idxFromRC(row, col), validIdxs);
  }

  var alpha = 0.32;
  var gamma = 0.92;
  var epsilonStart = 0.95;
  var epsilonEnd = 0.08;
  var episodes = prefersReducedMotion ? (isMobile ? 26 : 34) : (isMobile ? 54 : 78);
  var maxStepsPerEpisode = gridSize * gridSize * 2;
  var explorationTrace = [];
  var lossSamples = [];

  for (var ep = 0; ep < episodes; ep++) {
    var row = 0;
    var col = 0;
    var epsilon = epsilonStart + (epsilonEnd - epsilonStart) * (ep / Math.max(1, episodes - 1));
    var episodeLoss = 0;
    var episodeVisits = {};

    for (var step = 0; step < maxStepsPerEpisode; step++) {
      var actionIdx = chooseAction(row, col, epsilon);
      if (actionIdx < 0) break;

      var action = actions[actionIdx];
      var nextRow = row + action.dr;
      var nextCol = col + action.dc;
      var reward = -0.025;
      var done = false;

      if (!isInside(nextRow, nextCol) || isBlocked(nextRow, nextCol)) {
        nextRow = row;
        nextCol = col;
        reward = -0.16;
      } else if (nextRow === gridSize - 1 && nextCol === gridSize - 1) {
        reward = 1.0;
        done = true;
      } else {
        var repeatKey = nextRow + ',' + nextCol;
        if (episodeVisits[repeatKey]) reward -= 0.035;
      }

      var stateIndex = idxFromRC(row, col);
      var nextStateIndex = idxFromRC(nextRow, nextCol);
      var tdTarget = reward + (done ? 0 : gamma * maxQ(nextStateIndex));
      var tdError = tdTarget - qTable[stateIndex][actionIdx];
      qTable[stateIndex][actionIdx] += alpha * tdError;
      episodeLoss += Math.abs(tdError);

      var visitKey = nextRow + ',' + nextCol;
      episodeVisits[visitKey] = (episodeVisits[visitKey] || 0) + 1;

      if ((ep < 5 || ep % 10 === 0) && explorationTrace.length < 16) {
        explorationTrace.push({
          row: nextRow,
          col: nextCol,
          epsilon: epsilon,
          loss: Math.abs(tdError)
        });
      }

      row = nextRow;
      col = nextCol;
      if (done) break;
    }

    lossSamples.push(episodeLoss / Math.max(1, maxStepsPerEpisode));
  }

  function buildGreedyPath() {
    var path = [];
    var row = 0;
    var col = 0;
    var seen = {};
    var guard = gridSize * gridSize * 2;
    while (guard-- > 0) {
      if (row === gridSize - 1 && col === gridSize - 1) break;
      var key = row + ',' + col;
      seen[key] = (seen[key] || 0) + 1;
      if (seen[key] > 2) break;
      var valid = validActionIndices(row, col);
      if (!valid.length) break;
      var bestAction = argMaxValid(idxFromRC(row, col), valid);
      var nr = row + actions[bestAction].dr;
      var nc = col + actions[bestAction].dc;
      if (!isInside(nr, nc) || isBlocked(nr, nc)) break;
      row = nr;
      col = nc;
      path.push([row, col]);
      if (row === gridSize - 1 && col === gridSize - 1) break;
    }
    return path;
  }

  function buildBfsPath() {
    var queue = [[0, 0]];
    var parent = {};
    var visited = { '0,0': true };
    var found = false;
    while (queue.length) {
      var node = queue.shift();
      var row = node[0];
      var col = node[1];
      if (row === gridSize - 1 && col === gridSize - 1) {
        found = true;
        break;
      }
      var valid = validActionIndices(row, col);
      for (var vi = 0; vi < valid.length; vi++) {
        var nextAction = actions[valid[vi]];
        var nr = row + nextAction.dr;
        var nc = col + nextAction.dc;
        var nextKey = nr + ',' + nc;
        if (visited[nextKey]) continue;
        visited[nextKey] = true;
        parent[nextKey] = [row, col];
        queue.push([nr, nc]);
      }
    }
    if (!found) return [];
    var rev = [];
    var cr = gridSize - 1;
    var cc = gridSize - 1;
    while (!(cr === 0 && cc === 0)) {
      rev.push([cr, cc]);
      var p = parent[cr + ',' + cc];
      if (!p) break;
      cr = p[0];
      cc = p[1];
    }
    rev.reverse();
    return rev;
  }

  var optimalPath = buildGreedyPath();
  var reachedGoal = optimalPath.length > 0 && optimalPath[optimalPath.length - 1][0] === gridSize - 1 && optimalPath[optimalPath.length - 1][1] === gridSize - 1;
  if (!reachedGoal) optimalPath = buildBfsPath();
  if (!optimalPath.length) optimalPath = [[gridSize - 1, gridSize - 1]];

  var stepDelay = prefersReducedMotion ? 110 : 135;
  var explorationSteps = Math.min(explorationTrace.length, prefersReducedMotion ? 6 : 12);
  for (var ex = 0; ex < explorationSteps; ex++) {
    (function(exIdx) {
      setTimeout(function() {
        var info = explorationTrace[exIdx];
        agent.style.left = (info.col * cellSize + cellSize / 2 - 4) + 'px';
        agent.style.top = (info.row * cellSize + cellSize / 2 - 4) + 'px';
        var visitedIdx = idxFromRC(info.row, info.col);
        if (cells[visitedIdx] && !cells[visitedIdx].classList.contains('q-blocked')) {
          cells[visitedIdx].classList.add('visited');
        }
        updateAllStatusMessages('exploring... | eps: ' + info.epsilon.toFixed(2) + ' | loss: ' + info.loss.toFixed(3));
      }, exIdx * stepDelay);
    })(ex);
  }

  var convergenceStart = explorationSteps * stepDelay + 130;

  setTimeout(function() {
    var avgLoss = lossSamples.reduce(function(acc, value) { return acc + value; }, 0) / Math.max(1, lossSamples.length);
    updateAllStatusMessages('Q(s,a) converging | avg loss: ' + avgLoss.toFixed(3));
    agent.style.left = (cellSize / 2 - 4) + 'px';
    agent.style.top = (cellSize / 2 - 4) + 'px';
    agent.classList.add('converging');

    optimalPath.forEach(function(pos, idx) {
      setTimeout(function() {
        agent.style.left = (pos[1] * cellSize + cellSize / 2 - 4) + 'px';
        agent.style.top = (pos[0] * cellSize + cellSize / 2 - 4) + 'px';

        var prevRow = idx === 0 ? 0 : optimalPath[idx - 1][0];
        var prevCol = idx === 0 ? 0 : optimalPath[idx - 1][1];
        var dr = pos[0] - prevRow;
        var dc = pos[1] - prevCol;
        var arrow = dc > 0 ? '\u2192' : dc < 0 ? '\u2190' : dr > 0 ? '\u2193' : '\u2191';
        var prevCellIdx = idxFromRC(prevRow, prevCol);
        if (cells[prevCellIdx] && !cells[prevCellIdx].classList.contains('q-blocked') && !cells[prevCellIdx].querySelector('.q-arrow')) {
          var arrowEl = document.createElement('span');
          arrowEl.className = 'q-arrow';
          arrowEl.textContent = arrow;
          cells[prevCellIdx].appendChild(arrowEl);
        }

        if (pos[0] === gridSize - 1 && pos[1] === gridSize - 1) {
          goal.classList.add('reached');
          updateAllStatusMessages('reward +1.0 | optimal path found');
        } else {
          var qStar = maxQ(idxFromRC(pos[0], pos[1]));
          updateAllStatusMessages('policy rollout... | q*: ' + qStar.toFixed(2));
        }
      }, idx * stepDelay);
    });
  }, convergenceStart);

  var totalDuration = convergenceStart + optimalPath.length * stepDelay + 640;

  setTimeout(function() {
    radarOverlay.innerHTML = '';
    radarOverlay.classList.remove('qlearn-mode');
    setAlgoButtonState(qlearnBtn, false);
    updateAllStatusMessages(prev);
    mlAnimating = false;
    syncStatusFeatureAttention();
  }, prefersReducedMotion ? totalDuration * 0.6 : totalDuration);
}

if (qlearnBtn) qlearnBtn.addEventListener('click', launchQLearning);



// ── RRT Path Planning ──

function launchRRT() {
  if (!radarOverlay || isAnyAnimating()) return;
  mlAnimating = true;
  syncStatusFeatureAttention();
  radarOverlay.innerHTML = '';
  radarOverlay.classList.remove('qlearn-mode');
  setAlgoButtonState(rrtBtn, true);
  setAlgoButtonState(qlearnBtn, false);

  var w = window.innerWidth;
  var h = window.innerHeight;
  var isMobile = window.matchMedia('(max-width: 768px)').matches;
  var prev = statusMessage ? statusMessage.textContent : '';

  var mapW = Math.round(Math.min(isMobile ? w * 0.88 : w * 0.56, isMobile ? 340 : 620));
  var mapH = Math.round(Math.min(isMobile ? h * 0.42 : h * 0.5, isMobile ? 260 : 420));
  var mapLeft = Math.round((w - mapW) / 2);
  var mapTop = Math.round((h - mapH) / 2);
  var mapRight = mapLeft + mapW;
  var mapBottom = mapTop + mapH;
  var framePadding = isMobile ? 28 : 34;
  var pointPadding = 8;

  var start = { x: mapLeft + framePadding, y: mapBottom - framePadding };
  var goal = { x: mapRight - framePadding, y: mapTop + framePadding };

  var frame = document.createElement('div');
  frame.className = 'rrt-frame';
  frame.style.left = mapLeft + 'px';
  frame.style.top = mapTop + 'px';
  frame.style.width = mapW + 'px';
  frame.style.height = mapH + 'px';
  radarOverlay.appendChild(frame);

  var startEl = document.createElement('div');
  startEl.className = 'rrt-node rrt-start';
  startEl.style.left = start.x + 'px';
  startEl.style.top = start.y + 'px';
  radarOverlay.appendChild(startEl);

  var goalEl = document.createElement('div');
  goalEl.className = 'rrt-node rrt-goal';
  goalEl.style.left = goal.x + 'px';
  goalEl.style.top = goal.y + 'px';
  radarOverlay.appendChild(goalEl);

  var obstacleCount = isMobile ? 5 : 6;
  var obstacleSpacing = isMobile ? 12 : 18;
  var obstacleCollisionMargin = isMobile ? 5 : 7;
  var obstacles = [];
  function isOverlappingObstacle(candidate) {
    for (var oi = 0; oi < obstacles.length; oi++) {
      var ob = obstacles[oi];
      var separated =
        candidate.x + candidate.w + obstacleSpacing < ob.x ||
        ob.x + ob.w + obstacleSpacing < candidate.x ||
        candidate.y + candidate.h + obstacleSpacing < ob.y ||
        ob.y + ob.h + obstacleSpacing < candidate.y;
      if (!separated) return true;
    }
    return false;
  }

  for (var oi = 0; oi < obstacleCount; oi++) {
    var placed = false;
    var attempts = 0;
    while (!placed && attempts < 48) {
      attempts++;
      var ow = randomRange(isMobile ? 30 : 40, isMobile ? 58 : 96);
      var oh = randomRange(isMobile ? 24 : 30, isMobile ? 46 : 68);
      var ox = randomRange(mapLeft + 16, mapRight - ow - 16);
      var oy = randomRange(mapTop + 16, mapBottom - oh - 16);
      var centerX = ox + ow / 2;
      var centerY = oy + oh / 2;
      var farFromStart = Math.hypot(centerX - start.x, centerY - start.y) > (isMobile ? 48 : 62);
      var farFromGoal = Math.hypot(centerX - goal.x, centerY - goal.y) > (isMobile ? 48 : 62);
      var candidate = { x: ox, y: oy, w: ow, h: oh };
      if (!farFromStart || !farFromGoal) continue;
      if (isOverlappingObstacle(candidate)) continue;

      obstacles.push(candidate);
      var obsEl = document.createElement('div');
      obsEl.className = 'rrt-obstacle';
      obsEl.style.left = ox + 'px';
      obsEl.style.top = oy + 'px';
      obsEl.style.width = ow + 'px';
      obsEl.style.height = oh + 'px';
      radarOverlay.appendChild(obsEl);
      placed = true;
    }
  }

  var nodes = [start];
  var totalNodes = prefersReducedMotion ? (isMobile ? 18 : 24) : (isMobile ? 36 : 48);
  var stepSize = isMobile ? 24 : 30;
  var nodeIdx = 0;
  var goalReached = false;
  var goalThreshold = isMobile ? 46 : 56;
  var goalBias = prefersReducedMotion ? 0.32 : 0.42;
  var tickMs = prefersReducedMotion ? 36 : 24;
  var cleanupTimeoutId = null;

  updateAllStatusMessages('RRT: expanding... | nodes: 1');

  function cleanupRRT() {
    if (cleanupTimeoutId) {
      clearTimeout(cleanupTimeoutId);
      cleanupTimeoutId = null;
    }
    radarOverlay.innerHTML = '';
    radarOverlay.classList.remove('qlearn-mode');
    setAlgoButtonState(rrtBtn, false);
    updateAllStatusMessages(prev);
    mlAnimating = false;
    syncStatusFeatureAttention();
  }

  function expandObstacleRect(obstacle, margin) {
    return {
      left: obstacle.x - margin,
      right: obstacle.x + obstacle.w + margin,
      top: obstacle.y - margin,
      bottom: obstacle.y + obstacle.h + margin
    };
  }

  function pointInRect(x, y, rect) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  }

  function segmentsIntersect(a, b, c, d) {
    function orient(p, q, r) {
      return (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);
    }
    function onSegment(p, q, r) {
      return q.x >= Math.min(p.x, r.x) - 1e-6 &&
        q.x <= Math.max(p.x, r.x) + 1e-6 &&
        q.y >= Math.min(p.y, r.y) - 1e-6 &&
        q.y <= Math.max(p.y, r.y) + 1e-6;
    }
    var o1 = orient(a, b, c);
    var o2 = orient(a, b, d);
    var o3 = orient(c, d, a);
    var o4 = orient(c, d, b);

    if ((o1 > 0) !== (o2 > 0) && (o3 > 0) !== (o4 > 0)) return true;
    if (Math.abs(o1) < 1e-9 && onSegment(a, c, b)) return true;
    if (Math.abs(o2) < 1e-9 && onSegment(a, d, b)) return true;
    if (Math.abs(o3) < 1e-9 && onSegment(c, a, d)) return true;
    if (Math.abs(o4) < 1e-9 && onSegment(c, b, d)) return true;
    return false;
  }

  function segmentIntersectsRect(a, b, rect) {
    if (pointInRect(a.x, a.y, rect) || pointInRect(b.x, b.y, rect)) return true;

    var tl = { x: rect.left, y: rect.top };
    var tr = { x: rect.right, y: rect.top };
    var br = { x: rect.right, y: rect.bottom };
    var bl = { x: rect.left, y: rect.bottom };

    if (segmentsIntersect(a, b, tl, tr)) return true;
    if (segmentsIntersect(a, b, tr, br)) return true;
    if (segmentsIntersect(a, b, br, bl)) return true;
    if (segmentsIntersect(a, b, bl, tl)) return true;
    return false;
  }

  function isCollidingPoint(x, y, margin) {
    var useMargin = typeof margin === 'number' ? margin : obstacleCollisionMargin;
    for (var i = 0; i < obstacles.length; i++) {
      var rect = expandObstacleRect(obstacles[i], useMargin);
      if (pointInRect(x, y, rect)) return true;
    }
    return false;
  }

  function isSegmentColliding(a, b) {
    for (var i = 0; i < obstacles.length; i++) {
      var rect = expandObstacleRect(obstacles[i], obstacleCollisionMargin);
      if (segmentIntersectsRect(a, b, rect)) return true;
    }
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var steps = Math.max(8, Math.ceil(distance / 4));
    for (var s = 0; s <= steps; s++) {
      var t = s / steps;
      if (isCollidingPoint(a.x + dx * t, a.y + dy * t, obstacleCollisionMargin)) return true;
    }
    return false;
  }

  function drawSegment(className, from, to) {
    var seg = document.createElement('div');
    seg.className = className;
    var dx = to.x - from.x;
    var dy = to.y - from.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    seg.style.left = from.x + 'px';
    seg.style.top = from.y + 'px';
    seg.style.width = dist + 'px';
    seg.style.transform = 'rotate(' + Math.atan2(dy, dx) + 'rad)';
    radarOverlay.appendChild(seg);
    return dist;
  }

  function tracePathWaypoints(node) {
    var traced = [];
    var current = node;
    while (current) {
      traced.push({ x: current.x, y: current.y });
      current = current.parent;
    }
    traced.reverse();
    return traced;
  }

  function computePathCost(waypoints) {
    var total = 0;
    for (var i = 1; i < waypoints.length; i++) {
      var dx = waypoints[i].x - waypoints[i - 1].x;
      var dy = waypoints[i].y - waypoints[i - 1].y;
      total += Math.sqrt(dx * dx + dy * dy);
    }
    return total;
  }

  function drawPathSegments(waypoints) {
    for (var i = 1; i < waypoints.length; i++) {
      drawSegment('rrt-path', waypoints[i - 1], waypoints[i]);
    }
  }

  function animateRobotFollower(waypoints, onDone) {
    if (!radarOverlay || waypoints.length < 2) {
      if (onDone) onDone();
      return;
    }

    var robot = document.createElement('div');
    robot.className = 'rrt-robot';
    robot.style.left = waypoints[0].x + 'px';
    robot.style.top = waypoints[0].y + 'px';
    radarOverlay.appendChild(robot);

    var currentSegment = 0;
    var startTime = null;
    var segmentDuration = prefersReducedMotion ? 80 : 60;
    var totalSegments = waypoints.length - 1;

    function animateRobot(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / segmentDuration, 1);

      if (currentSegment >= totalSegments) {
        updateAllStatusMessages('destination reached');
        if (onDone) onDone();
        return;
      }

      var from = waypoints[currentSegment];
      var to = waypoints[currentSegment + 1];
      var dx = to.x - from.x;
      var dy = to.y - from.y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      var x = from.x + dx * progress;
      var y = from.y + dy * progress;
      robot.style.left = x + 'px';
      robot.style.top = y + 'px';

      var heading = Math.round(Math.atan2(dy, dx) * 180 / Math.PI);
      if (heading < 0) heading += 360;
      robot.style.setProperty('--robot-angle', Math.atan2(dy, dx) + 'rad');

      var velocity = (dist / (segmentDuration / 1000)).toFixed(1);
      var progressPercent = Math.round(((currentSegment + progress) / totalSegments) * 100);
      updateAllStatusMessages('robot: progress ' + progressPercent + '% | vel: ' + velocity + ' m/s | hdg: ' + heading + '°');

      if (progress < 1) {
        requestAnimationFrame(animateRobot);
      } else {
        currentSegment++;
        startTime = null;
        requestAnimationFrame(animateRobot);
      }
    }

    requestAnimationFrame(animateRobot);
  }

  function finalizeWithNode(pathNode, label) {
    var waypoints = tracePathWaypoints(pathNode);
    var last = waypoints[waypoints.length - 1];
    var goalLinkClear = !last || !isSegmentColliding(last, goal);
    if (goalLinkClear && (!last || last.x !== goal.x || last.y !== goal.y)) {
      waypoints.push({ x: goal.x, y: goal.y });
    }
    drawPathSegments(waypoints);
    var pathCost = Math.round(computePathCost(waypoints));
    if (goalLinkClear) {
      updateAllStatusMessages(label + ' | cost: ' + pathCost);
    } else {
      updateAllStatusMessages('closest feasible path | cost: ' + pathCost);
    }
    setTimeout(function() {
      animateRobotFollower(waypoints, function() {
        cleanupTimeoutId = setTimeout(cleanupRRT, prefersReducedMotion ? 500 : 850);
      });
    }, prefersReducedMotion ? 120 : 260);
  }

  function chooseBestTerminalNode() {
    var sorted = nodes.slice().sort(function(a, b) {
      return Math.hypot(a.x - goal.x, a.y - goal.y) - Math.hypot(b.x - goal.x, b.y - goal.y);
    });

    for (var i = 0; i < sorted.length; i++) {
      if (!isSegmentColliding(sorted[i], goal)) return sorted[i];
    }
    return sorted[0] || start;
  }

  var rrtInterval = setInterval(function() {
    if (nodeIdx >= totalNodes || goalReached) {
      clearInterval(rrtInterval);
      if (!goalReached) {
        var bestNode = chooseBestTerminalNode();
        finalizeWithNode(bestNode, 'path refined');
      }
      return;
    }

    var sample;
    if (Math.random() < goalBias) {
      sample = { x: goal.x, y: goal.y };
    } else {
      sample = {
        x: randomRange(mapLeft + pointPadding, mapRight - pointPadding),
        y: randomRange(mapTop + pointPadding, mapBottom - pointPadding)
      };
    }

    var nearest = nodes[0];
    var minDist = Infinity;
    for (var ni = 0; ni < nodes.length; ni++) {
      var d = Math.hypot(nodes[ni].x - sample.x, nodes[ni].y - sample.y);
      if (d < minDist) {
        minDist = d;
        nearest = nodes[ni];
      }
    }

    if (!nearest || minDist === 0) {
      nodeIdx++;
      return;
    }

    var dx = sample.x - nearest.x;
    var dy = sample.y - nearest.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var newX = nearest.x + (dx / dist) * Math.min(stepSize, dist);
    var newY = nearest.y + (dy / dist) * Math.min(stepSize, dist);

    var insideBounds = newX > mapLeft + pointPadding &&
      newX < mapRight - pointPadding &&
      newY > mapTop + pointPadding &&
      newY < mapBottom - pointPadding;

    if (insideBounds && !isCollidingPoint(newX, newY) && !isSegmentColliding(nearest, { x: newX, y: newY })) {
      var newNode = { x: newX, y: newY, parent: nearest };
      nodes.push(newNode);

      drawSegment('rrt-branch', nearest, newNode);
      var nodeDot = document.createElement('div');
      nodeDot.className = 'rrt-node';
      nodeDot.style.left = newX + 'px';
      nodeDot.style.top = newY + 'px';
      radarOverlay.appendChild(nodeDot);

      updateAllStatusMessages('RRT: expanding... | nodes: ' + nodes.length);

      var distToGoal = Math.hypot(newX - goal.x, newY - goal.y);
      if (distToGoal < goalThreshold && !isSegmentColliding(newNode, goal)) {
        goalReached = true;
        clearInterval(rrtInterval);
        finalizeWithNode(newNode, 'path found');
      }
    }

    nodeIdx++;
  }, tickMs);
}

if (rrtBtn) rrtBtn.addEventListener('click', launchRRT);

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

document.addEventListener('click', function(e) {
  if (!sidePanel.classList.contains('open')) return;
  if (sidePanel.contains(e.target)) return;
  if (e.target.closest('.clickable-item')) return;
  if (e.target.closest('.lightbox')) return;
  closePanel();
});

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

panelContent.addEventListener('pointerdown', function(e) {
  var thumb = e.target.closest('.gallery-thumb');
  if (!thumb) return;
  thumb.classList.add('tap-feedback');
});

panelContent.addEventListener('pointerup', function(e) {
  var thumb = e.target.closest('.gallery-thumb');
  if (!thumb) return;
  thumb.classList.remove('tap-feedback');
});

panelContent.addEventListener('pointercancel', function(e) {
  var thumb = e.target.closest('.gallery-thumb');
  if (!thumb) return;
  thumb.classList.remove('tap-feedback');
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

function transitionLightboxImage(newIndex) {
  if (currentGallery.length === 0) return;
  lightboxImg.style.opacity = '0';
  lightboxImg.style.transform = 'scale(0.95)';
  setTimeout(function() {
    currentGalleryIndex = newIndex;
    updateLightboxImage();
    requestAnimationFrame(function() {
      lightboxImg.style.opacity = '';
      lightboxImg.style.transform = '';
    });
  }, 180);
}

function showNextImage() {
  if (currentGallery.length === 0) return;
  transitionLightboxImage((currentGalleryIndex + 1) % currentGallery.length);
}

function showPrevImage() {
  if (currentGallery.length === 0) return;
  transitionLightboxImage((currentGalleryIndex - 1 + currentGallery.length) % currentGallery.length);
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

var toggleTheme = document.getElementById('toggleTheme');
var toggleBg = document.getElementById('toggleBg');
var themeColorMeta = document.querySelector('meta[name="theme-color"]');

var paletteMap = {
  light: ['cream', 'rose', 'sky', 'sage', 'peach', 'lavender'],
  dark: ['claude']
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
  if (toggleTheme) {
    toggleTheme.title = currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
    toggleTheme.classList.toggle('active', currentTheme === 'dark');
  }
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
if (toggleTheme) toggleTheme.addEventListener('click', toggleThemeMode);

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
  EN: '\uD83C\uDDFA\uD83C\uDDF8',
  IT: '\uD83C\uDDEE\uD83C\uDDF9',
  ES: '\uD83C\uDDEA\uD83C\uDDF8',
  ZH: '\uD83C\uDDE8\uD83C\uDDF3',
  FR: '\uD83C\uDDEB\uD83C\uDDF7',
  DE: '\uD83C\uDDE9\uD83C\uDDEA'
};

var translations = {
  EN: { role1: 'aerospace engineer', role2: 'grew up as a vibe computer scientist', bio: 'peek behind the scenes', about: 'about', projects_copy: "some things I've worked on", but: 'but' },
  IT: { role1: 'ingegnere aerospaziale', role2: 'cresciuto come vibe computer scientist', bio: 'sbircia dietro le quinte', about: 'about', projects_copy: "some things I've worked on", but: 'but' },
  ES: { role1: 'ingeniero aeroespacial', role2: 'crecido como vibe computer scientist', bio: 'echa un vistazo entre bastidores', about: 'about', projects_copy: "some things I've worked on", but: 'but' },
  ZH: { role1: '\u822A\u7A7A\u822A\u5929\u5DE5\u7A0B\u5E08', role2: '\u6210\u957F\u4E3A\u4E00\u540D vibe \u8BA1\u7B97\u673A\u79D1\u5B66\u5BB6', bio: '\u4E00\u8D77\u7AA5\u63A2\u5E55\u540E', about: 'about', projects_copy: "some things I've worked on", but: 'but' },
  FR: { role1: 'ing\u00E9nieur a\u00E9rospatial', role2: 'grandi en tant que vibe computer scientist', bio: 'jette un oeil aux coulisses', about: 'about', projects_copy: "some things I've worked on", but: 'but' },
  DE: { role1: 'Luft- und Raumfahrtingenieur', role2: 'aufgewachsen als Vibe Computer Scientist', bio: 'wirf einen blick hinter die kulissen', about: 'about', projects_copy: "some things I've worked on", but: 'but' }
};

function applyLanguage(lang) {
  var fallback = translations.EN;
  var t = translations[lang] || fallback;
  var summaryBut = document.getElementById('summaryBut');
  var summaryProjects = document.getElementById('summaryProjects');
  document.getElementById('role1').textContent = t.role1 || fallback.role1;
  document.getElementById('role2').textContent = t.role2 || fallback.role2;
  document.getElementById('bioText').textContent = t.bio || fallback.bio;
  document.getElementById('summaryAbout').textContent = t.about || fallback.about;
  if (summaryProjects) summaryProjects.textContent = t.projects_copy || fallback.projects_copy;
  if (summaryBut) summaryBut.textContent = t.but || fallback.but;
}

langBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  langDropdown.classList.toggle('open');
  // Close mail dropdown if open
  var mailDd = document.getElementById('mailDropdown');
  if (mailDd) mailDd.classList.remove('open');
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

    applyLanguage(lang);

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

if (mailBtn) {
  mailBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (mailDropdown) mailDropdown.classList.toggle('open');
    // Close lang dropdown if open
    langDropdown.classList.remove('open');
  });
}

mailOptions.forEach(function(opt) {
  opt.addEventListener('click', function(e) {
    e.stopPropagation();
    var email = this.dataset.email;
    if (email) {
      copyToClipboard(email);
      if (mailDropdown) mailDropdown.classList.remove('open');
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
    if (mailDropdown) mailDropdown.classList.remove('open');
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
// STATUS MESSAGES (auto + click to cycle)
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

var currentStatusIdx = 0;

var statusAnimating = false;
var statusRotateIntervalId = null;
var STATUS_ROTATE_MS = 3000;

function cycleStatusMessage() {
  if (statusAnimating || mlAnimating || radarAnimating || rocketLaunching) return;
  statusAnimating = true;
  currentStatusIdx = (currentStatusIdx + 1) % statusMessages.length;
  statusMessage.style.opacity = 0;
  setTimeout(function() {
    updateAllStatusMessages(statusMessages[currentStatusIdx]);
    statusMessage.style.opacity = 1;
    setTimeout(function() { statusAnimating = false; }, 300);
  }, 300);
}

function startStatusAutoRotate() {
  if (statusRotateIntervalId) return;
  statusRotateIntervalId = setInterval(cycleStatusMessage, STATUS_ROTATE_MS);
}

function stopStatusAutoRotate() {
  if (!statusRotateIntervalId) return;
  clearInterval(statusRotateIntervalId);
  statusRotateIntervalId = null;
}

function resetStatusAutoRotate() {
  stopStatusAutoRotate();
  startStatusAutoRotate();
}

statusMessage.addEventListener('click', function() {
  cycleStatusMessage();
  resetStatusAutoRotate();
});

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    stopStatusAutoRotate();
  } else {
    startStatusAutoRotate();
  }
});

startStatusAutoRotate();

// ══════════════════════════════════════════
// COMMAND PALETTE
// ══════════════════════════════════════════

var palette = document.getElementById('commandPalette');
var cmdInput = document.getElementById('commandInput');
var commands = document.querySelectorAll('.command-item');
var selectedIndex = 0;

var urls = {
  cv: siteContent.cv.path,
  linkedin: 'https://www.linkedin.com/in/fbaldan/',
  github: 'https://github.com/SirBaldo'
};


document.addEventListener('keydown', function(e) {
  // Cmd/Ctrl+K: open command palette
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openPalette();
    return;
  }
  // Escape: close overlays in priority order
  if (e.key === 'Escape') {
    if (isPhotoFocusOpen()) {
      closeProfileFocus();
    } else if (palette.classList.contains('active')) {
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
  var randomPos = Math.floor(Math.random() * nameStyleRegistry.length);
  applyNameStyleByPos(randomPos);
  currentNameStylePos = randomPos;
  applyThemePalette();
  initStaggeredReveal();
  initMagneticHover();
}

initPortfolioExperience();

window.addEventListener('resize', function() {
  requestAnimationFrame(fitNameToContainer);
});
