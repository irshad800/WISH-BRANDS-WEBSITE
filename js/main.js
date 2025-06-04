window.addEventListener("load", function () {
  const gifDuration = 3500;

  // Step 1: Show "Wish Brands" after GIF
  setTimeout(() => {
    document.getElementById("loaderGif").style.display = "none";

    const text = document.getElementById("preloaderText");
    text.style.display = "block";
    text.style.opacity = "0";
    text.style.transition = "opacity 1s ease";

    requestAnimationFrame(() => {
      text.style.opacity = "1";
    });

    // Step 2: Show Crunch Button
    setTimeout(() => {
      document.getElementById("crunchButton").style.display = "flex";
    }, 1500);
  }, gifDuration);

  // Step 3: Handle Crunch Button Click
  document.getElementById("crunchButton").addEventListener("click", () => {
    const crunchSound = document.getElementById("crunchSound");
    const cookie = document.getElementById("cookieElement");
    const preloader = document.getElementById("preloader");
    const overlay = document.querySelector(".overlay");
    const crunchBtn = document.getElementById("crunchButton");

    // Play crunch sound
    crunchSound.play();

    // Animate cookie
    cookie.classList.add("crunched");

    // Hide button and transition
    crunchBtn.style.transition = "transform 0.3s ease, opacity 0.5s";
    crunchBtn.style.transform = "scale(0.3) rotate(45deg)";
    crunchBtn.style.opacity = "0";

    setTimeout(() => {
      crunchBtn.style.display = "none";
      preloader.style.transition = "opacity 1s ease";
      preloader.style.opacity = "0";

      setTimeout(() => {
        preloader.style.display = "none";
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto";
      }, 1000);
    }, 800);
  });
});
