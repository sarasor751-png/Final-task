const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");
const themeBtn = document.getElementById("themeBtn");

if (welcomeBtn && welcomeMessage) {
  welcomeBtn.addEventListener("click", function () {
    welcomeMessage.textContent = "Welcome to Sara Mohamed's Information Systems Research Page!";
  });
}

if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("alt-theme");
  });
}
