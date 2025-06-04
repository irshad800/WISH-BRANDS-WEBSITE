window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.querySelector(".main-content").style.display = "block";
    }, 500);
  }, 2500); // 2.5 seconds before fade out
});
