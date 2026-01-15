
// Screen navigation
function navigate(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// Populate training items
const trainingData = [
  { title: 'Establecer objetivos personales', description: 'Define metas alcanzables en ámbitos académicos, laborales o personales, y haz seguimiento a tus avances.' },
  { title: 'Habilidades de vida diaria', description: 'Aprende a cocinar, lavar la ropa, manejar el dinero y usar el transporte público【673763134988003†L118-L121】.' },
  { title: 'Toma de decisiones', description: 'Participa en la toma de decisiones sobre tu vida y analiza las consecuencias de tus elecciones【673763134988003†L122-L124】.' },
  { title: 'Autogestión de la salud', description: 'Maneja tu salud: toma medicamentos, sigue un plan de tratamiento y reconoce síntomas importantes【673763134988003†L125-L127】.' },
  { title: 'Habilidades sociales', description: 'Desarrolla habilidades sociales mediante actividades grupales y fortalece tu red de apoyo【673763134988003†L127-L129】.' },
  { title: 'Tecnología asistiva', description: 'Conoce dispositivos como lectores de pantalla o sistemas de comunicación aumentativa【673763134988003†L130-L133】.' },
  { title: 'Movilidad', description: 'Fomenta la movilidad independiente con prótesis, sillas de ruedas o ayudas para caminar【673763134988003†L134-L137】.' },
  { title: 'Actividades recreativas', description: 'Participa en actividades deportivas y recreativas adaptadas a tus intereses【673763134988003†L139-L141】.' },
  { title: 'Voluntariado y empleo', description: 'Explora oportunidades de voluntariado o empleo que aumenten tu confianza y autoestima【673763134988003†L142-L144】.' },
  { title: 'Autocuidado', description: 'Practica autocuidado: higiene, descanso y alimentación equilibrada【673763134988003†L145-L147】.' }
];

const trainingList = document.querySelector('#training .list');
trainingData.forEach(item => {
  const div = document.createElement('div');
  div.className = 'training-item';
  div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
  div.addEventListener('click', () => {
    div.classList.toggle('active');
  });
  trainingList.appendChild(div);
});

// Wellness tips
const tips = [
  'Tómate cinco minutos para respirar y relajarte.',
  'Comparte tus sentimientos con un amigo o familiar.',
  'Sal a caminar y disfruta del aire libre.',
  'Escucha tu música favorita y canta.',
  'Realiza estiramientos suaves para liberar tensión.'
];
const tipsList = document.getElementById('wellnessTips');
tips.forEach(t => {
  const li = document.createElement('li');
  li.textContent = t;
  tipsList.appendChild(li);
});

// Chat functionality
const chatMessages = [];
function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  if (!message) return;
  chatMessages.push({ sender: 'usuario', text: message });
  chatMessages.push({ sender: 'psicologo', text: 'Gracias por compartir. ¿Puedes contarme más?' });
  renderChat();
  input.value = '';
}
function renderChat() {
  const container = document.getElementById('chatMessages');
  container.innerHTML = '';
  chatMessages.forEach(msg => {
    const p = document.createElement('p');
    p.textContent = (msg.sender === 'usuario' ? 'Tú: ' : 'Profesional: ') + msg.text;
    container.appendChild(p);
  });
  container.scrollTop = container.scrollHeight;
}

// Community posts
const postsData = [
  { user: 'María – Loja', text: 'Hoy practicamos la actividad de turnos en casa. Todos escuchamos sin interrumpir.' },
  { user: 'Carlos – Quito', text: 'Probamos una rutina de respiración. ¡Nos sentimos más relajados!' },
  { user: 'Ana – Cuenca', text: 'Organizamos una salida al parque adaptado y fue genial.' }
];
function renderPosts() {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';
  postsData.forEach(p => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `<h3>${p.user}</h3><p>${p.text}</p>`;
    postsContainer.appendChild(div);
  });
}
renderPosts();
function publishPost() {
  const textArea = document.getElementById('newPostText');
  const text = textArea.value.trim();
  if (!text) return;
  postsData.unshift({ user: 'Tú', text });
  textArea.value = '';
  renderPosts();
}

// Plan generator
function generatePlan() {
  const type = document.getElementById('disabilityType').value;
  const age = document.getElementById('ageGroup').value;
  const caregivers = parseInt(document.getElementById('caregivers').value) || 1;
  const suggestions = [];
  // Basic mapping
  if (type === 'fisica') {
    suggestions.push('Realiza ejercicios de movilidad como natación o caminatas【673763134988003†L164-L171】.');
    suggestions.push('Aplica técnicas de autocuidado y descanso【673763134988003†L145-L147】.');
  }
  if (type === 'intelectual') {
    suggestions.push('Practica habilidades de vida diaria como cocinar y manejar dinero【673763134988003†L118-L121】.');
    suggestions.push('Fomenta la toma de decisiones y participa en actividades recreativas【673763134988003†L122-L144】.');
  }
  if (type === 'auditiva') {
    suggestions.push('Usa tecnología asistiva y aprende lenguaje de señas【673763134988003†L130-L133】.');
    suggestions.push('Participa en deportes adaptados como goalball【673763134988003†L176-L179】.');
  }
  if (type === 'visual') {
    suggestions.push('Aprende a utilizar lectores de pantalla y dispositivos de orientación【673763134988003†L130-L133】.');
    suggestions.push('Explora movilidad con bastón blanco y perros guía.');
  }
  if (type === 'psicosocial') {
    suggestions.push('Integra rutinas de respiración y mindfulness para reducir el estrés.');
    suggestions.push('Participa en grupos de apoyo y actividades sociales【673763134988003†L127-L129】.');
  }
  if (type === 'lenguaje') {
    suggestions.push('Usa sistemas de comunicación aumentativa y alternativa【673763134988003†L130-L133】.');
    suggestions.push('Practica ejercicios de fonoaudiología y comunicación con gestos.');
  }
  if (age === '0-5') {
    suggestions.push('Introduce juegos sensoriales y estimulación temprana.');
  } else if (age === '6-12') {
    suggestions.push('Promueve la participación en actividades escolares y deportivas adaptadas【673763134988003†L139-L141】.');
  } else if (age === '13-18') {
    suggestions.push('Fortalece habilidades de vida independiente y socialización.');
  } else if (age === 'adulto') {
    suggestions.push('Explora oportunidades de empleo o voluntariado【673763134988003†L142-L144】.');
  } else if (age === 'mayor') {
    suggestions.push('Incorpora ejercicios de fortalecimiento y estiramientos【673763134988003†L201-L203】.');
  }
  suggestions.push('Apoyo de ' + caregivers + ' cuidador(es) será clave para acompañarte.');
  const result = document.getElementById('planResult');
  result.innerHTML = '<h2>Tu plan sugerido</h2><ul>' + suggestions.map(s => '<li>' + s + '</li>').join('') + '</ul>';
}

// Resources
const resources = {
  guides: [
    { title: 'Manual de vida independiente', desc: 'Guía para desarrollar habilidades de autonomía y autocuidado.' },
    { title: 'Cómo solicitar ayudas técnicas', desc: 'Pasos para gestionar equipos y dispositivos de apoyo.' },
    { title: 'Herramientas para cuidadores', desc: 'Recursos prácticos para reducir el estrés y mejorar la convivencia.' }
  ],
  therapies: [
    { title: 'Musicoterapia', desc: 'Terapia que utiliza la música para mejorar la salud física y emocional.' },
    { title: 'Terapia acuática', desc: 'Ejercicios en agua que favorecen la movilidad y relajación.' },
    { title: 'Equinoterapia', desc: 'Terapia con caballos que mejora el equilibrio y la confianza【673763134988003†L193-L194】.' }
  ],
  videos: [
    { title: 'Habilidades de vida diaria', desc: 'Video de ejemplos prácticos para la rutina cotidiana.' },
    { title: 'Toma de decisiones', desc: 'Video tutorial para fortalecer la toma de decisiones.' },
    { title: 'Meditación y respiración', desc: 'Sesión guiada de meditación para cuidadores y pacientes.' }
  ],
  institutions: [
    { title: 'CONADIS', desc: 'Consejo Nacional para la Igualdad de Discapacidades.' },
    { title: 'MSP', desc: 'Ministerio de Salud Pública – Servicios de atención a la discapacidad.' },
    { title: 'Teletón', desc: 'Fundación que ofrece terapias y apoyo a familias en Ecuador.' }
  ],
  // New category: respite information for caregivers
  respite: [
    { title: '¿Qué es el respiro?', desc: 'El respiro brinda descanso temporal a las familias cuidadoras, reduciendo el estrés, la ansiedad y el aislamiento【744526284658150†L475-L499】.' },
    { title: 'Beneficios del respiro', desc: 'Ayuda a evitar hospitalizaciones y retrasar colocaciones fuera del hogar, mejorando la calidad de vida【744526284658150†L475-L500】.' },
    { title: 'Cómo solicitar respiro', desc: 'Busca programas locales y organizaciones como la Red Nacional de Respiro para informarte sobre servicios y elegibilidad.' }
  ],
  // New category: community and programs
  programs: [
    { title: 'Red de apoyo familiar', desc: 'Programas que facilitan grupos de apoyo, consejería y educación para cuidadores.' },
    { title: 'Grupos de habilidades sociales', desc: 'Encuentros para fortalecer la comunicación y la integración social de las personas con discapacidad.' },
    { title: 'Participación en actividades inclusivas', desc: 'Información sobre eventos culturales, deportivos y recreativos accesibles.' }
  ]
};
function showCategory(category) {
  const list = document.getElementById('resourceList');
  list.innerHTML = '';
  resources[category].forEach(item => {
    const div = document.createElement('div');
    div.className = 'resource-item';
    div.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
    list.appendChild(div);
  });
}

