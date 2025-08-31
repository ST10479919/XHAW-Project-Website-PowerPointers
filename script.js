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
 VAT inclusive (15%)
*/
function computeDiscount(courseCount){
  if(courseCount <= 1) return 0; // Only one course
  if(courseCount === 2) return 0.05; // Two courses
  if(courseCount === 3) return 0.10; // Three courses
  return 0.15; // 4 or more
}

function formatRand(n){ // Format number as ZAR currency
  return "R" + Number(n).toLocaleString("en-ZA", {maximumFractionDigits:2, minimumFractionDigits:2});
}

// Collect selected courses from any form that uses input[name="course"]
function getSelectedCourses(container=document){
  const nodes = $$('input[name="course"]:checked', container); // Get checked inputs
  return nodes.map(n => ({ // Map to the object
    id: n.id || n.value,// Use id or value as identifier
    title: n.dataset.title || n.value, // 
    price: Number(n.value) // Convert price to number
  })); // Return array of {id, title, price}
}

function updateCheckoutSummary(container=document){
  const listEl = $('.selection-list', container); // ul element for listing selected courses
  const totalEl = $('.total-before', container); // span element for subtotal
  const discEl  = $('.discount-line', container); // span element for discount amount
  const vatEl = $('.vat-amount', container); // span element for vat
  const finalEl = $('.final-total', container); // span element for final total
  

  if(!listEl || !totalEl || !discEl || !finalEl) return;

  const items = getSelectedCourses(container); // Get selected courses
  const count = items.length; // Number of selected courses
  const subtotal = items.reduce((a,c)=>a+c.price,0); // Sum of prices
  const rate = computeDiscount(count); // Discount rate based on count
  const discount = subtotal * rate; // Discount amount 
  const discountedCost = subtotal - discount; // Discounted cost
  const vat = discountedCost * 0.15; // VAT amount
  const finalTotal = discountedCost + vat; // Final total
 

  // Render selection list
  listEl.innerHTML = (count === 0) // No items selected
    ? '<li class="note">No courses selected yet.</li>'
    : items.map(i=>`<li>${i.title} — <strong>${formatRand(i.price)}</strong></li>`).join('');

  totalEl.textContent = formatRand(subtotal); // Show subtotal 
  discEl.textContent  = `${(rate*100).toFixed(0)}% — ${formatRand(discount)}`; // Show discount rate & amount
  // TODO: add display for vat amount added
  finalEl.textContent = formatRand(finalTotal); // Show final total
  
  // Also show a friendly kicker line if applicable
  const kicker = $('.discount-kicker', container);
  if(kicker){
    if(rate === 0 && count === 1) kicker.textContent = 'Tip: Add 1 more course to unlock 5% off.'; // 1 course
    else if(rate === 0 && count === 0) kicker.textContent = 'Pick any course(s) to see your discount.'; // 0 courses
    else if(rate === 0.05) kicker.textContent = 'Nice! You got 5% off.'; // 2 courses
    else if(rate === 0.10) kicker.textContent = 'Great choice! 10% discount applied.'; // 3 courses
    else if(rate >= 0.15) kicker.textContent = 'You unlocked the maximum 15% discount!'; // 4+ courses
    else kicker.textContent = ''; // Fallback (This should not happen)
  }
}

// Wire up change listeners where needed (works on checkout.html & quote.html)
function attachCourseListeners(root=document){
  $$('.course-checkbox', root).forEach(cb=>{ // Find all checkboxes
    cb.addEventListener('change', ()=> updateCheckoutSummary(root)); // Update summary immediatly when change
  });
}

// Login form demo (no backend)
function mockLogin(e){ // Simulate login process
  e.preventDefault(); // Prevent actual submission
  const email = $('#login-email').value.trim(); // Get email input value
  const msg = $('#login-msg'); // Message display element  
  if(email){ // If email is provided
    msg.textContent = 'Logged in (demo only). Welcome!'; // Show welcome message
    msg.style.color = '#1F8A5B';
  }else{ 
    msg.textContent = 'Please enter your email.'; // Prompt for email
    msg.style.color = '#B12A2A'; 
  }
}

// Feedback form: character counter
function bindFeedbackCounter(){ // Works on contact.html
  const ta = $('#feedback-text'); // Textarea element
  const out = $('#char-count'); // Output element
  if(!ta || !out) return; // Exit if elements not found
  const max = Number(ta.getAttribute('maxlength')||1000); // Get maxlength or default to 1000
  const update = ()=>{ 
    const left = max - ta.value.length; // Calculate remaining characters
    out.textContent = `${left} characters remaining`; 
  };
  ta.addEventListener('input', update); update(); 
}

// Initialize per-page scripts when DOM loads
document.addEventListener('DOMContentLoaded', ()=>{
  attachCourseListeners(document); // Attach listeners to course checkboxes
  updateCheckoutSummary(document); // Initial summary update
  bindFeedbackCounter(); // Bind feedback character counter 
  const loginForm = $('#login-form'); // Login form element
  if(loginForm){ loginForm.addEventListener('submit', mockLogin); }
});
