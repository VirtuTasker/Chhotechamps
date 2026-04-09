/* ── shared.js — Nav + Footer injection + interactions ── */
(function(){

const SERVICES = [
  {label:'Personality Development',slug:'personality-development'},
  {label:'Confidence Building',slug:'confidence-building'},
  {label:'Memory Training',slug:'memory-training'},
  {label:'Brain Development',slug:'brain-development'},
  {label:'Public Speaking',slug:'public-speaking'},
  {label:'Communication Skills',slug:'communication-skills'},
  {label:'Focus Improvement',slug:'focus-improvement'},
  {label:'Handwriting Training',slug:'handwriting-training'},
  {label:'Creative Writing',slug:'creative-writing'},
  {label:'Leadership Skills',slug:'leadership-skills'},
  {label:'Emotional Intelligence',slug:'emotional-intelligence'},
  {label:'Speed Reading',slug:'speed-reading'},
  {label:'Yoga & Mindfulness',slug:'yoga-mindfulness'},
  {label:'Art & Creativity',slug:'art-creativity'},
  {label:'Storytelling',slug:'storytelling'},
  {label:'Time Management',slug:'time-management'},
  {label:'Social Skills',slug:'social-skills'},
  {label:'STEM Thinking',slug:'stem-thinking'},
  {label:'English Speaking',slug:'english-speaking'},
  {label:'Music & Rhythm',slug:'music-rhythm'},
];

const LOCS_1 = [
  {label:'Mumbai',slug:'mumbai'},
  {label:'Andheri',slug:'andheri'},
  {label:'Bandra',slug:'bandra'},
  {label:'Borivali',slug:'borivali'},
  {label:'Kandivali',slug:'kandivali'},
  {label:'Malad',slug:'malad'},
  {label:'Goregaon',slug:'goregaon'},
  {label:'Jogeshwari',slug:'jogeshwari'},
  {label:'Dahisar',slug:'dahisar'},
  {label:'Mira Road',slug:'mira-road'},
];
const LOCS_2 = [
  {label:'Thane',slug:'thane'},
  {label:'Mulund',slug:'mulund'},
  {label:'Bhandup',slug:'bhandup'},
  {label:'Ghatkopar',slug:'ghatkopar'},
  {label:'Kurla',slug:'kurla'},
  {label:'Chembur',slug:'chembur'},
  {label:'Vikhroli',slug:'vikhroli'},
  {label:'Powai',slug:'powai'},
  {label:'Santacruz',slug:'santacruz'},
  {label:'Vile Parle',slug:'vile-parle'},
  {label:'Juhu',slug:'juhu'},
  {label:'Khar',slug:'khar'},
  {label:'Dadar',slug:'dadar'},
  {label:'Parel',slug:'parel'},
  {label:'Worli',slug:'worli'},
  {label:'Colaba',slug:'colaba'},
  {label:'Navi Mumbai',slug:'navi-mumbai'},
  {label:'Vasai',slug:'vasai'},
  {label:'Virar',slug:'virar'},
  {label:'Panvel',slug:'panvel'},
];

const ROOT = document.body.getAttribute('data-root') || '';

// ── Build service dropdown items ──
const svcItems1 = SERVICES.slice(0,10).map(s=>`<a href="${ROOT}/services/${s.slug}.html">${s.label}</a>`).join('');
const svcItems2 = SERVICES.slice(10).map(s=>`<a href="${ROOT}/services/${s.slug}.html">${s.label}</a>`).join('');
const locItems1 = LOCS_1.map(l=>`<a href="${ROOT}/locations/${l.slug}.html">${l.label}</a>`).join('');
const locItems2 = LOCS_2.map(l=>`<a href="${ROOT}/locations/${l.slug}.html">${l.label}</a>`).join('');
const mobSvc = SERVICES.map(s=>`<a href="${ROOT}/services/${s.slug}.html">▸ ${s.label}</a>`).join('');
const mobLoc = [...LOCS_1,...LOCS_2].map(l=>`<a href="${ROOT}/locations/${l.slug}.html">📍 ${l.label}</a>`).join('');

document.body.insertAdjacentHTML('afterbegin',`
<nav class="navbar">
  <div class="nav-inner">
    <a href="${ROOT}/index.html" class="nav-logo">🌟 Chhote <span>Champs</span></a>
    <ul class="nav-links">
      <li><a href="${ROOT}/index.html">Home</a></li>
      <li class="dropdown">
        <a href="#">Services ▾</a>
        <div class="dropdown-menu wide">
          <div>${svcItems1}</div>
          <div>${svcItems2}</div>
        </div>
      </li>
      <li class="dropdown">
        <a href="#">Locations ▾</a>
        <div class="dropdown-menu wide">
          <div>${locItems1}</div>
          <div>${locItems2}</div>
        </div>
      </li>
      <li><a href="${ROOT}/online.html">Online</a></li>
      <li><a href="${ROOT}/pricing.html">Pricing</a></li>
      <li><a href="${ROOT}/about.html">About</a></li>
      <li><a href="${ROOT}/become-trainer.html">Join as Trainer</a></li>
      <li><a href="${ROOT}/faq.html">FAQ</a></li>
      <li><a href="https://wa.me/919082107982?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Chhote%20Champs." target="_blank" class="nav-cta">💬 WhatsApp</a></li>
    </ul>
    <button class="hamburger" onclick="toggleNav()" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
  <div class="mob-menu" id="mobMenu">
    <a href="${ROOT}/index.html">🏠 Home</a>
    <a href="${ROOT}/online.html">💻 Online Program</a>
    <a href="${ROOT}/pricing.html">💰 Pricing</a>
    <a href="${ROOT}/about.html">ℹ️ About Us</a>
    <a href="${ROOT}/become-trainer.html">🎓 Become a Trainer</a>
    <a href="${ROOT}/faq.html">❓ FAQ</a>
    <a href="${ROOT}/contact.html">📞 Contact</a>
    <strong style="padding:12px 4px 4px;display:block;color:var(--coral);font-size:.82rem;text-transform:uppercase;letter-spacing:.5px">── Services ──</strong>
    ${mobSvc}
    <strong style="padding:12px 4px 4px;display:block;color:var(--sky);font-size:.82rem;text-transform:uppercase;letter-spacing:.5px">── Locations ──</strong>
    ${mobLoc}
    <a href="https://wa.me/919082107982?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Chhote%20Champs." target="_blank" class="mob-wa">💬 WhatsApp Us Now</a>
  </div>
</nav>`);

// ── Footer ──
const footerSvc = SERVICES.slice(0,10).map(s=>`<li><a href="${ROOT}/services/${s.slug}.html">${s.label}</a></li>`).join('');
const footerSvc2 = SERVICES.slice(10).map(s=>`<li><a href="${ROOT}/services/${s.slug}.html">${s.label}</a></li>`).join('');
const footerLoc = [...LOCS_1,...LOCS_2].slice(0,12).map(l=>`<li><a href="${ROOT}/locations/${l.slug}.html">${l.label}</a></li>`).join('');

document.body.insertAdjacentHTML('beforeend',`
<footer class="footer">
  <div class="footer-grid">
    <div>
      <span class="footer-logo">🌟 Chhote Champs</span>
      <p class="footer-desc">Mumbai's most trusted kids development brand. Expert-led training in personality development, confidence, public speaking, memory, brain development & 20+ more programs. Online & offline across all of Mumbai.</p>
      <a href="https://wa.me/919082107982?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Chhote%20Champs." target="_blank" class="footer-wa-btn">💬 WhatsApp Us</a>
    </div>
    <div>
      <h4>Our Programs</h4>
      <ul>${footerSvc}</ul>
    </div>
    <div>
      <h4>More Programs</h4>
      <ul>${footerSvc2}</ul>
    </div>
    <div>
      <h4>Locations</h4>
      <ul>${footerLoc}</ul>
    </div>
    <div>
      <h4>Quick Links</h4>
      <ul>
        <li><a href="${ROOT}/online.html">Online Program</a></li>
        <li><a href="${ROOT}/pricing.html">Pricing</a></li>
        <li><a href="${ROOT}/about.html">About Us</a></li>
        <li><a href="${ROOT}/faq.html">FAQ</a></li>
        <li><a href="${ROOT}/become-trainer.html">Become a Trainer</a></li>
        <li><a href="${ROOT}/contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Chhote Champs. All rights reserved. Kids Training Mumbai.</span>
    <span>Online • Andheri • Bandra • Borivali • Kandivali • Malad • Goregaon & more</span>
  </div>
</footer>
<a href="https://wa.me/919082107982?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Chhote%20Champs." class="wa-sticky" target="_blank" title="Chat on WhatsApp">💬</a>`);

})();

function toggleNav(){
  document.getElementById('mobMenu').classList.toggle('open');
}

// FAQ accordion
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click',()=>{
      q.parentElement.classList.toggle('open');
    });
  });
});
