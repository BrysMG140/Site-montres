
document.addEventListener('DOMContentLoaded', () => {
    fetch('produits.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('produits');
            data.forEach(produit => {
                const div = document.createElement('div');
                div.className = 'produit';
                div.innerHTML = `
                    <img src="${produit.image}" alt="${produit.nom}">
                    <h3>${produit.nom}</h3>
                    <p>${produit.prix} €</p>
                    <button>Ajouter au panier</button>
                `;
                container.appendChild(div);
            });
        });
});
