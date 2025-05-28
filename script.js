// Simple JavaScript to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Display a message in the console (could be replaced with actual submission logic)
  console.log('Form submitted:', { name, email, phone, message });

  // Show an alert message after form submission
  alert('Your message has been sent successfully!');
  
  // Reset the form
  document.getElementById('contact-form').reset();
});
