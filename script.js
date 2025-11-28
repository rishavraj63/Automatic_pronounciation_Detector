document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const errorMsg = document.getElementById("errorMsg");
  const loader = document.getElementById("loaderOverlay");

  // Make sure loader is hidden when page starts
  if(loader) loader.classList.remove("show");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (username.value === "sonal" && password.value === "1234") {

      if (errorMsg) errorMsg.classList.add("hidden");

      if (loader) loader.classList.add("show");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);

    } else {
      if (errorMsg) {
        errorMsg.classList.remove("hidden");
        errorMsg.classList.add("shake");
        setTimeout(() => errorMsg.classList.remove("shake"), 700);
      }
    }
  });
});
