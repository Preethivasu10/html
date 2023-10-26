
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 50, 
          behavior: "smooth",
        });
      });
    });
  });
  document.getElementById('updateContent').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('jobTitle').value;
    // Get other input values here
  
    // Update the content with the input values
    document.querySelector('.preethi').textContent = name;
    document.querySelector('.preethii').textContent = jobTitle;
    // Update other content here
  });
// Set initial input field values
document.getElementById('name').value = 'preethi vasu';
document.getElementById('jobTitle').value = 'full stack developer / MCA student';
// Set initial values for other input fields
  