interface CoursePrices {
  [key: string]: number;
}

const coursePrices: CoursePrices = {
  "First Aid": 1500,
  "Sewing": 1500,
  "Landscaping": 1500,
  "Life Skills": 1500,
  "Child Minding": 750,
  "Cooking": 750,
  "Garden Maintenance": 750,
};

const form = document.getElementById('quoteForm') as HTMLFormElement;
const resultDiv = document.getElementById('quoteResult') as HTMLDivElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const courseSelect = form.elements.namedItem('courses') as HTMLSelectElement;
  const selectedOptions = Array.from(courseSelect.selectedOptions).map(option => option.value);



  let discount = 0;
  if (selectedOptions.length === 2) discount = 0.05;
  else if (selectedOptions.length === 3) discount = 0.10;
  else if (selectedOptions.length > 3) discount = 0.15;
    
  
  let total = selectedOptions.reduce((sum, course) => {
    return sum + (coursePrices[course] || 0);
  }, 0);

  const discountAmount = total * discount;
  const finalPrice = total - discountAmount;

  resultDiv.innerHTML = `
    <h3>Quote Summary</h3>
    <p>Selected Courses: ${selectedOptions.join(', ')}</p>
    <p>Total Before Discount: R${total.toFixed(2)}</p>
    <p>Discount: R${discountAmount.toFixed(2)} (${discount * 100}%)</p>
    <p><strong>Final Price: R${finalPrice.toFixed(2)}</strong></p>
  `;
});
