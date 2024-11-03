function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const menuIcon = document.getElementById("menuIcon");

    if (dropdownMenu.style.display === "flex") {
        dropdownMenu.style.display = "none";       // Hide dropdown menu
        menuIcon.innerHTML = "&#9776;";            // Change to hamburger icon
    } else {
        dropdownMenu.style.display = "flex";       // Show dropdown menu
        menuIcon.innerHTML = "&times;";            // Change to cross icon
    }
}

// document.querySelector('.nav-links[href="#about-section"]').addEventListener('click', function(e) {
//     e.preventDefault(); // Prevent default anchor behavior
//     document.querySelector('#about-section').scrollIntoView({ 
//         behavior: 'smooth' 
//     });
// });

document.querySelector('.scroll-for-more').addEventListener('click', function() {
    const targetSection = document.getElementById('about-section');

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth' // Smooth scrolling
        });
    }
});
