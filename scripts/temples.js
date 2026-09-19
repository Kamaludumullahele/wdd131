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
