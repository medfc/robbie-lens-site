// scripts/lightbox.js
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.className = "lightbox";
  lightbox.innerHTML = `<img src="" alt="Agrandissement photo" class="lightbox-img">`;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector("img");

  // Cible toutes les images cliquables (galerie accueil + portfolio)
  document.querySelectorAll(".gallery img, .lien-conteneur-photo img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", e => {
      e.preventDefault();
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  });
});
