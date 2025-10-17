// script.js
document.addEventListener("DOMContentLoaded", () => {
  // --- Lightbox ---
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

  // --- Validation du formulaire ---
  const form = document.querySelector("form");
  if (!form) return; // sécurité

  form.addEventListener("submit", event => {
    event.preventDefault();

    const nom = form.querySelector("#nom");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    let erreurs = [];

    // Vérifie le nom (au moins 2 lettres)
    if (!nom.value.trim() || nom.value.trim().length < 2) {
      erreurs.push("Le nom doit contenir au moins 2 lettres.");
    }

    // Vérifie l'adresse email
    const regexEmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email.value.trim())) {
      erreurs.push("Veuillez entrer une adresse email valide.");
    }

    // Vérifie le message (au moins 2 lettres)
    if (!message.value.trim() || message.value.trim().length < 2) {
      erreurs.push("Le message doit contenir au moins 2 caractères.");
    }

    // Affichage des erreurs
    if (erreurs.length > 0) {
      alert(erreurs.join("\n"));
    } else {
      alert("Merci pour votre message !");
      form.reset();
    }
  });
});
