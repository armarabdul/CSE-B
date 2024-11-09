// Smooth scroll to a section when the Learn More button is clicked
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    window.scrollTo({
      top: element.offsetTop - 20, // Adjust the offset to match any header or navigation bar
      behavior: 'smooth'
    });
  }
  