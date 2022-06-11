const location2 = (window.location.href);
const date = (document.lastModified);
const d = document.querySelector(".script");
const d2 = () => {
    d.textContent = `Last Modified date: ${date}      Location: ${location2}`
} 