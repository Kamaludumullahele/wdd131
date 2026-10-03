document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const mainnav = document.querySelector("nav ul.nav-list");
const hambutton = document.querySelector("#menuButton");
// add event listener to toggle the navigation menu
hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    const isOpen = mainnav.classList.contains("show");
    hambutton.setAttribute("aria-expanded", isOpen);
    hambutton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    hambutton.textContent = isOpen ? "✕" : "☰";
});
// copied temple data for use in the filtered temples script
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Metro Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl: "images/manila-temple.jpg"
    },
    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl:
            "images/bountiful-utah-temple.jpeg"
    },
    {
        templeName: "Boise Idaho",
        location: "Boise, Idaho, United States",
        dedicated: "1984, May, 25",
        area: 35868,
        imageUrl:
            "images/boise-idaho-temple.jpeg"

    }
];


const templeGallary = document.getElementById("temple-gallery");

function displayTemples(templeList) {
    templeGallary.innerHTML = templeList.map(temple => `
        <div class="temple-card">
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" decoding="async">
        </div>
    `).join("");
}

const oldTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0]) < 1900);

displayTemples(temples);

mainnav.addEventListener("click", event => {
    const filterLink = event.target.closest("[data-filter]");
    if (!filterLink) return;

    event.preventDefault();
    displayTemples(filterLink.dataset.filter === "old" ? oldTemples : temples);
});