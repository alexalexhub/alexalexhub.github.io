// Apply fade-in animation to the main section
const mainSection = document.querySelector('main');
mainSection.classList.add('fade-in');

// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form data
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  // Perform form validation
  if (name && email && message) {
    // Form is valid, display success message
    alert('Form submitted successfully!');
    form.reset(); // Clear form fields
  } else {
    // Form is invalid, display error message
    alert('Please fill in all fields!');
  }
});
