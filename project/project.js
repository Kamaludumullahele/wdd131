document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const STORAGE_KEY = "contactMessages";

function getMessages() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveMessage(data) {
    const messages = getMessages();
    messages.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

function getMessagesText() {
    return getMessages()
        .map(m =>
            `Date: ${m.date}\n` +
            `Name: ${m.name}\n` +
            `Email: ${m.email}\n` +
            `Subject: ${m.subject}\n` +
            `Message: ${m.message}\n` +
            `----------------------------------------\n`)
        .join("");
}

function renderMessages() {
    const output = document.querySelector("#savedMessages");
    if (output) {
        output.textContent = getMessagesText() || "No messages saved.";
    }
}

renderMessages();

function downloadMessages() {
    const blob = new Blob([getMessagesText()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "messages.txt";
    link.click();
    URL.revokeObjectURL(url);
}

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = {
            name: contactForm.elements.name.value.trim(),
            email: contactForm.elements.email.value.trim(),
            subject: contactForm.elements.subject.value,
            message: contactForm.elements.message.value.trim(),
            date: new Date().toLocaleString()
        };

        saveMessage(data);
        renderMessages();
        document.querySelector("#formStatus").textContent =
            `Thank you, ${data.name}! Your message has been saved.`;
        contactForm.reset();
    });
}
