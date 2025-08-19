/* ========== Empowering the Nation — Simple Site Interactivity ========== */

// Helper: query
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

/* ----- Discount Calculator (Checkout & Quote) ----- 
 Rules:
 1 course: 0%
 2 courses: 5%
 3 courses: 10%
 4+ courses: 15%
*/
function computeDiscount(courseCount){
  if(courseCount <= 1) return 0;
  if(courseCount === 2) return 0.05;
  if(courseCount === 3) return 0.10;
  return 0.15; // 4 or more
}

function formatRand(n){
  return "R" + Number(n).toLocaleString("en-ZA", {maximumFractionDigits:2, minimumFractionDigits:2});
}

// Collect selected courses from any form that uses input[name="course"]
function getSelectedCourses(container=document){
  const nodes = $$('input[name="course"]:checked', container);
  return nodes.map(n => ({
    id: n.id || n.value,
    title: n.dataset.title || n.value,
    price: Number(n.value)
  }));
}

function updateCheckoutSummary(container=document){
  const listEl = $('.selection-list', container);
  const totalEl = $('.total-before', container);
  const discEl  = $('.discount-line', container);
  const finalEl = $('.final-total', container);

  if(!listEl || !totalEl || !discEl || !finalEl) return;

  const items = getSelectedCourses(container);
  const count = items.length;
  const subtotal = items.reduce((a,c)=>a+c.price,0);
  const rate = computeDiscount(count);
  const discount = subtotal * rate;
  const finalTotal = subtotal - discount;

  // Render selection list
  listEl.innerHTML = (count === 0)
    ? '<li class="note">No courses selected yet.</li>'
    : items.map(i=>`<li>${i.title} — <strong>${formatRand(i.price)}</strong></li>`).join('');

  totalEl.textContent = formatRand(subtotal);
  discEl.textContent  = `${(rate*100).toFixed(0)}% — ${formatRand(discount)}`;
  finalEl.textContent = formatRand(finalTotal);
  
  // Also show a friendly kicker line if applicable
  const kicker = $('.discount-kicker', container);
  if(kicker){
    if(rate === 0 && count === 1) kicker.textContent = 'Tip: Add 1 more course to unlock 5% off.';
    else if(rate === 0 && count === 0) kicker.textContent = 'Pick any course(s) to see your discount.';
    else if(rate === 0.05) kicker.textContent = 'Nice! You got 5% off.';
    else if(rate === 0.10) kicker.textContent = 'Great choice! 10% discount applied.';
    else if(rate >= 0.15) kicker.textContent = 'You unlocked the maximum 15% discount!';
    else kicker.textContent = '';
  }
}

// Wire up change listeners where needed (works on checkout.html & quote.html)
function attachCourseListeners(root=document){
  $$('.course-checkbox', root).forEach(cb=>{
    cb.addEventListener('change', ()=> updateCheckoutSummary(root));
  });
}

// Login form demo (no backend)
function mockLogin(e){
  e.preventDefault();
  const email = $('#login-email').value.trim();
  const msg = $('#login-msg');
  if(email){
    msg.textContent = 'Logged in (demo only). Welcome!';
    msg.style.color = '#1F8A5B';
  }else{
    msg.textContent = 'Please enter your email.';
    msg.style.color = '#B12A2A';
  }
}

// Feedback form: character counter
function bindFeedbackCounter(){
  const ta = $('#feedback-text');
  const out = $('#char-count');
  if(!ta || !out) return;
  const max = Number(ta.getAttribute('maxlength')||1000);
  const update = ()=>{
    const left = max - ta.value.length;
    out.textContent = `${left} characters remaining`;
  };
  ta.addEventListener('input', update); update();
}

// Initialize per-page scripts when DOM loads
document.addEventListener('DOMContentLoaded', ()=>{
  attachCourseListeners(document);
  updateCheckoutSummary(document);
  bindFeedbackCounter();
  const loginForm = $('#login-form');
  if(loginForm){ loginForm.addEventListener('submit', mockLogin); }
});
