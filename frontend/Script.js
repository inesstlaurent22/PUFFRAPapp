async function rechercher() {
  const metier = document.getElementById('metier').value;
  const codePostal = document.getElementById('codePostal').value;
  const note = document.getElementById('note').value;

  const params = new URLSearchParams({ metier, code_postal: codePostal, note });

  const res = await fetch(`http://localhost:5000/api/adresses?${params}`);
  const data = await res.json();

  const ul = document.getElementById('resultats');
  ul.innerHTML = '';
  data.forEach(a => {
    const li = document.createElement('li');
    li.textContent = `${a.nom} - ${a.metier} - ${a.code_postal} - ⭐ ${a.note}`;
    ul.appendChild(li);
  });
}
