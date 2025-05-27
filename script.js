document.addEventListener("DOMContentLoaded", function () {
  const liste = document.getElementById("liste-entreprises");
  const input = document.getElementById("recherche");

  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      afficher(data);

      input.addEventListener("input", () => {
        const texte = input.value.toLowerCase();
        const filtres = data.filter(e =>
          e.nom.toLowerCase().includes(texte) ||
          e.adresse.toLowerCase().includes(texte) ||
          e.categorie.toLowerCase().includes(texte)
        );
        afficher(filtres);
      });

      function afficher(listeEntreprises) {
        liste.innerHTML = "";
        listeEntreprises.forEach(e => {
          const div = document.createElement("div");
          div.classList.add("entreprise");
          div.innerHTML = `
            <strong>${e.nom}</strong><br>
            ${e.adresse}<br>
            ${e.telephone}<br>
            <em>${e.categorie}</em>
          `;
          liste.appendChild(div);
        });
      }
    });
});
