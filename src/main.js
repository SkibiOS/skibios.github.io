if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
  
) {
  // making individual checks
  window.location.replace("skibios.github.io/src/mobile-index.html");
}
const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}