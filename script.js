// Libros animados (se dibujan con SVG para cada personaje)
const book = (cx, cy, cover, pawL, pawR, fur) => `
<g transform="translate(${cx},${cy})">
  <path d="M-58 -2 L0 8 L58 -2 L58 60 L0 70 L-58 60Z" fill="${cover}"/>
  <path d="M-51 -8 Q-25 -14 0 -4 L0 58 Q-25 50 -51 54Z" fill="#fffaf0"/>
  <path d="M51 -8 Q25 -14 0 -4 L0 58 Q25 50 51 54Z" fill="#fff3e0"/>
  <g stroke="#e3cfb4" stroke-width="1.5" stroke-linecap="round"><path d="M-42 8 Q-25 4 -8 10M-42 20 Q-25 16 -8 22M-42 32 Q-25 28 -8 34"/></g>
  <g class="flip"><path d="M0 -4 Q25 -14 51 -8 L51 54 Q25 50 0 58Z" fill="#fffaf0" stroke="#e3cfb4"/></g>
  <path d="M-6 -2 L6 -2 L6 22 L0 17 L-6 22Z" fill="#f6d98a"/>
  <ellipse cx="${pawL}" cy="34" rx="13" ry="10" fill="${fur}"/><ellipse cx="${pawR}" cy="34" rx="13" ry="10" fill="${fur}"/>
</g>`;
document.getElementById('bunny').insertAdjacentHTML('beforeend', book(170, 232, '#2f3f8f', -56, 56, '#fff4f0'));
document.getElementById('bear').insertAdjacentHTML('beforeend', book(430, 240, '#a23d6b', -60, 60, '#b07a52'));

// Estrellas del cielo
const sky = document.getElementById('sky');
for (let i = 0; i < 70; i++) {
  const s = document.createElement('i');
  const size = Math.random() * 3 + 1;
  s.className = 'star';
  s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${size}px;height:${size}px;--d:${1.5+Math.random()*3}s;animation-delay:${-Math.random()*4}s`;
  sky.appendChild(s);
}

// Textos: una frase corta de Sarah J. Maas y mensajes originales inspirados en sus mundos
const pages = [
  { text: '“To the stars who listen—and the dreams that are answered.”<br><small>A las estrellas que escuchan, y a los sueños que se cumplen.</small>',
    src: 'Sarah J. Maas · Una corte de rosas y espinas' },
  { text: '“To the people who look at the stars and wish.”<br><small>A quienes miran las estrellas y piden un deseo.</small>',
    src: 'Sarah J. Maas · Una corte de niebla y furia' },
  { text: '“Be glad of your human heart.”<br><small>Alégrate de tu corazón humano.</small>',
    src: 'Sarah J. Maas · Una corte de rosas y espinas' },
  { text: '“Night Triumphant—and the Stars Eternal.”<br><small>La noche triunfante, y las estrellas eternas.</small>',
    src: 'Sarah J. Maas · Una corte de alas y ruina' },
  { text: 'Hay libros que se abren como una puerta secreta: detrás hay cortes de noche, estrellas que escuchan y alguien que por fin te llama por tu nombre.',
    src: 'Escrito con cariño, inspirado en los mundos de Sarah J. Maas' },
  { text: 'Entre páginas y mantita nadie tiene que ser invencible. Basta con leer una noche más.',
    src: 'Para quien sueña con Prythian' },
  { text: 'Que tus sueños tengan alas, tu corazón tenga fuego y tu noche siempre tenga una estrella escuchando.',
    src: 'Un deseo para ti ✦' }
];
const q = document.getElementById('quote'), src = document.getElementById('source');
let i = 0;
function show(n) {
  q.classList.add('out'); src.classList.add('out');
  setTimeout(() => {
    q.innerHTML = pages[n].text; src.textContent = pages[n].src;
    q.classList.remove('out'); src.classList.remove('out');
  }, 450);
}
q.innerHTML = pages[0].text; src.textContent = pages[0].src;
document.getElementById('next').addEventListener('click', () => { i = (i + 1) % pages.length; show(i); });

// Corazones al tocar a los personajes
document.querySelectorAll('.char').forEach(c => c.addEventListener('click', e => {
  for (let k = 0; k < 5; k++) {
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = ['♥', '✦', '♡'][k % 3];
    h.style.cssText = `left:${e.clientX - 10}px;top:${e.clientY - 10}px;--x:${(Math.random()-.5)*120}px;color:${k%2?'#f7c6d9':'#f6d98a'};animation-delay:${k*.08}s`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2000);
  }
}));
