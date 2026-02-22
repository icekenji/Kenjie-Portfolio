window.onload = () => {

  const overlay = document.getElementById("intro-overlay");
  const music = document.getElementById("bg-music");

  // DO NOT remove container here

  overlay.addEventListener("click", () => {

    // 🎵 Start music
    music.play();

    // 🌸 Start flower animation
    document.body.classList.remove("container");

    // ✨ Fade overlay
    overlay.style.opacity = "0";

    setTimeout(() => {
      overlay.style.display = "none";
    }, 1000);

  });

};