
// dark mode
// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

function darkmode(){
  const btn = document.querySelector("#option-darkmode");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  console.log('dark scheme', prefersDarkScheme);
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
  } else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
  }

  btn.addEventListener("click", function () {
    console.log('clicked');
    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
      var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
      document.body.classList.toggle("dark-theme");
      var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    localStorage.setItem("theme", theme);
  });
}


function init_options(){
  darkmode();
}

init_options();


