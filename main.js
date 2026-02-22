window.onload = () => {
  document.body.classList.remove("container");

  const music = document.getElementById("bg-music");

  document.body.addEventListener("click", () => {
    music.play();
  }, { once: true });
};