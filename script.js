const quotes = [
    "Code is like humor. When you have to explain it, it's bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes."
];

const challenges = [
    "Build a calculator",
    "Create a To-Do App",
    "Make a Weather App",
    "Design a Landing Page"
];

function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleTimeString();

    const hour = now.getHours();

    if (hour < 12)
        greeting.textContent = "Good Morning ☀️";
    else if (hour < 18)
        greeting.textContent = "Good Afternoon 🌤️";
    else
        greeting.textContent = "Good Evening 🌙";
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById("quote").textContent =
    quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("challenge").textContent =
    challenges[Math.floor(Math.random() * challenges.length)];

document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("light");
});
