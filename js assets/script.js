// ==========================================
// BROWN'S BAKERY - JAVASCRIPT FUNCTIONALITY
// ==========================================


// 1. PRODUCT SEARCH FUNCTIONALITY

const searchInput = document.getElementById("product-search");
const productItems = document.querySelectorAll(".product-item");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const searchTerm = searchInput.value.toLowerCase().trim();

        productItems.forEach(function (product) {

            const productText = product.textContent.toLowerCase();

            if (productText.includes(searchTerm)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });
    });
}


// 2. IMAGE GALLERY LIGHTBOX FUNCTIONALITY

const galleryImages = document.querySelectorAll(".lightbox-image");

if (galleryImages.length > 0) {

    const lightbox = document.createElement("div");

    lightbox.id = "image-lightbox";

    lightbox.innerHTML = `
        <button id="lightbox-close" aria-label="Close image">&times;</button>
        <img id="lightbox-display" src="" alt="">
    `;

    document.body.appendChild(lightbox);

    const lightboxDisplay = document.getElementById("lightbox-display");
    const lightboxClose = document.getElementById("lightbox-close");

    galleryImages.forEach(function (image) {

        image.style.cursor = "pointer";

        image.addEventListener("click", function () {

            lightboxDisplay.src = image.src;
            lightboxDisplay.alt = image.alt;
            lightbox.style.display = "flex";

        });
    });

    lightboxClose.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }

    });
}


// 3. FAQ ACCORDION FUNCTIONALITY

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer = question.nextElementSibling;

        const isOpen = question.getAttribute("aria-expanded") === "true";

        // Remove or restore the HTML hidden attribute
        answer.hidden = isOpen;

        // Update the button accessibility state
        question.setAttribute("aria-expanded", String(!isOpen));

        // Update the plus/minus symbol
        const icon = question.querySelector("span");

        if (icon) {
            icon.textContent = isOpen ? "+" : "−";
        }

    });
});


// ==========================================
// END OF BROWN'S BAKERY JAVASCRIPT
// ==========================================