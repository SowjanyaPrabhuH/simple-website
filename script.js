
    document.addEventListener("DOMContentLoaded", function() {
        const servicesBtn = document.getElementById("services-btn");
        const dropdown = servicesBtn.querySelector(".dropdown");

        servicesBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        });
    });
