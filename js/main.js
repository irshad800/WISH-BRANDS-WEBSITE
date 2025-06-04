window.addEventListener("load", function () {
  const gifDuration = 3500;
  
  setTimeout(() => {
    const gif = document.getElementById("loaderGif");
    gif.style.display = "none";

    const text = document.getElementById("preloaderText");
    text.style.display = "block";
    text.style.opacity = "0";
    text.style.transition = "opacity 1s ease";

    requestAnimationFrame(() => {
      text.style.opacity = "1";
    });

    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      const overlay = document.querySelector(".overlay");

      preloader.style.transition = "opacity 1s ease";
      preloader.style.opacity = "0";

      setTimeout(() => {
        preloader.style.display = "none";
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto";
      }, 1000);
    }, 2000);
  }, gifDuration);
});
