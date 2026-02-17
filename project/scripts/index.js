// Select the theme toggle button
const themeButton = document.querySelector("#changeThemeSite");

// Stop if the button does not exist (prevents runtime errors)
if (!themeButton) {
  console.error("Theme button not found. Check the button ID in HTML.");
}

// Check if a theme was previously saved
const savedTheme = localStorage.getItem("theme");

// Apply saved theme on page load
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (themeButton) themeButton.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
} else {
  if (themeButton) themeButton.innerHTML = `<i class="bi bi-moon-fill"></i>`;
}

// Function to toggle between light and dark mode
function changeThemeSite() {
  const isDarkMode = document.body.classList.toggle("dark");

  if (isDarkMode) {
    themeButton.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    localStorage.setItem("theme", "light");
  }
}
