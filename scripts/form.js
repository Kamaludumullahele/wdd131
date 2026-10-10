
// Set the current year and last modified date in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Define the list of products available for review
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate the product select dropdown with options from the products array
const productSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Handle review form submission and update review count in localStorage
const reviewForm = document.querySelector(".review-form");

reviewForm.addEventListener("submit", () => {
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    reviewCount += 1;

    localStorage.setItem("reviewCount", reviewCount);
});

// Display the review count on the confirmation page
const reviewCount = localStorage.getItem("reviewCount") || 0;

document.querySelector("#review-count").textContent =
    `You have submitted ${reviewCount} reviews.`;