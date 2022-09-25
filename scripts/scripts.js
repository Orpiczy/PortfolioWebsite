const switchTheme = () => {
  console.log(`switchTheme from ${document.documentElement.className}`);
  const isDarkThemOn = document.documentElement.className == "dark";
  document.documentElement.className = isDarkThemOn ? "light" : "dark";
  console.log(`to ${document.documentElement.className}`);
};

const switchThemeButton = document.getElementById("theme-switch");
switchThemeButton.addEventListener("click", switchTheme);
