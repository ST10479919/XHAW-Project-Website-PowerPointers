/*  Empowering the Nation — Simple Site Interactivity  */

// Helper query
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

/* Discount Calculator (Checkout & Quote) 
 Rules
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

function formatRand(n){ // Format number as ZAR (Rand) currency
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
  const ta = $('#feedback-text'); // Text area element
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
  if(loginForm){ loginForm.addEventListener('submit', mockLogin); } // Attach mock login handler if form exists
});

document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".course-checkbox");
  const totalBeforeEl = document.querySelector(".total-before");
  const vatLineEl = document.querySelector(".vat-line");
  const discountLineEl = document.querySelector(".discount-line");
  const finalTotalEl = document.querySelector(".final-total");
  const kickerEl = document.querySelector(".discount-kicker");
  const selectionList = document.querySelector(".selection-list");

  checkboxes.forEach(cb => cb.addEventListener("change", updateTotals));

  function updateTotals() {
    let subtotal = 0;
    let count = 0;
    selectionList.innerHTML = "";

    checkboxes.forEach(cb => {
      if (cb.checked) {
        subtotal += parseFloat(cb.value);
        count++;
        const li = document.createElement("li");
        li.textContent = cb.dataset.title + " — R" + parseFloat(cb.value).toFixed(2);
        selectionList.appendChild(li);
      }
    });

    // VAT at 15%
    let vat = subtotal * 0.15;

    // Discount logic
    let discountRate = 0;
    if (count >= 4) discountRate = 0.15;
    else if (count >= 3) discountRate = 0.10;
    else if (count >= 2) discountRate = 0.05;


    const discountAmount = (subtotal + vat) * discountRate;
    const finalTotal = subtotal + vat - discountAmount;

    // Update DOM
    totalBeforeEl.textContent = "R" + subtotal.toFixed(2);
    vatLineEl.textContent = "R" + vat.toFixed(2);
    discountLineEl.textContent = `${(discountRate * 100).toFixed(0)}% — R${discountAmount.toFixed(2)}`;
    finalTotalEl.textContent = "R" + finalTotal.toFixed(2);

    kickerEl.textContent = count > 0 ? `You selected ${count} course(s).` : "";
  }
});

// checkoutValidation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const checkboxes = document.querySelectorAll('.course-checkbox');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent normal submit

    // ✅ 1. Check at least one course selected
    const selected = Array.from(checkboxes).some(cb => cb.checked);
    if (!selected) {
      alert('⚠️ Please select at least one course before submitting.');
      return;
    }

    // ✅ 2. Grab form inputs
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const city = document.getElementById('city');
    let valid = true;

    // Helper functions for showing / clearing errors
    const showError = (input, message) => {
      let msg = input.parentElement.querySelector('.error-msg');
      if (!msg) {
        msg = document.createElement('small');
        msg.className = 'error-msg';
        msg.style.color = 'red';
        input.parentElement.appendChild(msg);
      }
      msg.textContent = message;
      input.style.borderColor = 'red';
    };

    const clearError = (input) => {
      const msg = input.parentElement.querySelector('.error-msg');
      if (msg) msg.remove();
      input.style.borderColor = '';
    };

    // ✅ Full Name validation
    if (fullname.value.trim().length < 3) {
      showError(fullname, 'Full name must be at least 3 characters.');
      valid = false;
    } else clearError(fullname);

    // ✅ Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      showError(email, 'Enter a valid email address.');
      valid = false;
    } else clearError(email);

    // ✅ Phone validation (+27 or 0 start, 9–11 digits)
    const phonePattern = /^(\+27|0)\d{9,11}$/;
    if (!phonePattern.test(phone.value.trim())) {
      showError(phone, 'Enter a valid South African phone number.');
      valid = false;
    } else clearError(phone);

    // ✅ City validation
    if (city.value.trim().length < 2) {
      showError(city, 'City name must be at least 2 characters.');
      valid = false;
    } else clearError(city);

    // ✅ If all checks passed
    if (valid) {
      alert('✅ Thank you! This is a demo — your information has been validated.');
      form.reset();
      checkboxes.forEach(cb => cb.checked = false);
    }
  });

  // ✅ Allow only digits and "+" in phone number
  const phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9+]/g, '');
  });
});

// script.js — Validation for Request a Quote form

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quote-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page refresh

    // Retrieve input values
    const name = document.getElementById("q-name").value.trim();
    const surname = document.getElementById("q-surname").value.trim();
    const email = document.getElementById("q-email").value.trim();
    const gender = document.getElementById("q-gender").value;
    const notes = document.getElementById("q-notes").value.trim();

    // Validation flags
    let isValid = true;
    let errorMessage = "";

    // Name validation
    if (name === "" || name.length < 2) {
      isValid = false;
      errorMessage += "• Please enter a valid name (at least 2 characters).\n";
    }

    // Surname validation
    if (surname === "" || surname.length < 2) {
      isValid = false;
      errorMessage += "• Please enter a valid surname (at least 2 characters).\n";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      errorMessage += "• Please enter a valid email address.\n";
    }

    // Gender validation
    if (gender === "") {
      isValid = false;
      errorMessage += "• Please select your gender.\n";
    }

    // If not valid, show error alert
    if (!isValid) {
      alert("Please fix the following errors:\n\n" + errorMessage);
      return;
    }

    // If valid, show success message
    alert(
      `Quote request submitted successfully!\n\nThank you, ${name} ${surname}.\nWe will contact you at ${email} shortly.`
    );

    // Optionally clear form after submission
    form.reset();
  });
});
