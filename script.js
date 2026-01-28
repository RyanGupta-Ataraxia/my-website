const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        toggleBtn.textContent = "🌙 Dark mode";
    } else {
        toggleBtn.textContent = "☀️ Light mode";
    }
});
