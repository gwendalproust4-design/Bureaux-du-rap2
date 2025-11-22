// --- LOGIQUE DU SITE (script.js) ---

const grid = document.getElementById('rapperGrid');
const searchInput = document.getElementById('searchInput');

// Fonction pour mélanger un tableau (Algorithme de Fisher-Yates)
// C'est ce qui permet de mettre tout le monde au même niveau !
function melangerTableau(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fonction pour créer une carte HTML
function creerCarte(rappeur) {
    const classeSpeciale = rappeur.statut ? rappeur.statut : '';
    const lien = rappeur.id ? `artiste.html?id=${rappeur.id}` : '#';

    // Gestion des icônes de certification
    let certificationsHTML = '';
    if (rappeur.certifications) {
        if (rappeur.certifications.or) certificationsHTML += '<span title="Disque d\'Or" style="margin-right:5px; font-size:1.2rem;">📀</span>';
        if (rappeur.certifications.platine) certificationsHTML += '<span title="Disque de Platine" style="margin-right:5px; font-size:1.2rem;">💿</span>';
        if (rappeur.certifications.diamant) certificationsHTML += '<span title="Disque de Diamant" style="font-size:1.2rem;">💎</span>';
    }

    // Tag par défaut
    if (certificationsHTML === '') {
        certificationsHTML = '<span style="opacity:0.5; font-size:0.8rem; font-weight:700; letter-spacing:1px;">🎤 ARTISTE</span>';
    }

    // Gestion de l'image (Placeholder si erreur)
    return `
        <a href="${lien}" style="text-decoration:none; color:inherit; display:block;">
            <article class="card ${classeSpeciale}">
                <img src="${rappeur.image}" alt="${rappeur.nom}" class="card-image" loading="lazy" onerror="this.src='https://placehold.co/400x400/1a1a1a/8A2BE2?text=${rappeur.nom}'">
                <div class="card-content">
                    <div class="card-header">
                        <h2 class="card-name">${rappeur.nom}</h2>
                        <div class="card-certifs">
                            ${certificationsHTML}
                        </div>
                    </div>
                    <p class="card-bio">${rappeur.bio}</p>
                </div>
            </article>
        </a>
    `;
}

// Fonction pour afficher les rappeurs
function afficherRappeurs(liste) {
    grid.innerHTML = '';
    liste.forEach(rappeur => {
        grid.innerHTML += creerCarte(rappeur);
    });
}

// --- DÉMARRAGE DU SITE ---
if (typeof dataRappeurs !== 'undefined') {
    // 1. On fait une copie de la base de données pour ne pas modifier l'originale
    let listeMelangee = [...dataRappeurs];
    
    // 2. On mélange cette copie aléatoirement
    listeMelangee = melangerTableau(listeMelangee);
    
    // 3. On affiche la liste mélangée
    afficherRappeurs(listeMelangee);
} else {
    console.error("Erreur : database.js n'est pas chargé !");
}

// --- SYSTÈME DE RECHERCHE ---
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const recherche = e.target.value.toLowerCase();
        const resultats = dataRappeurs.filter(rappeur => {
            return rappeur.nom.toLowerCase().includes(recherche) || 
                   (rappeur.bio && rappeur.bio.toLowerCase().includes(recherche));
        });
        // Pas besoin de mélanger les résultats de recherche, on veut voir ce qu'on cherche
        afficherRappeurs(resultats);
    });
}

// --- SYSTÈME DE FILTRES ---
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const category = button.getAttribute('data-filter');
        let resultatsFiltres;

        if (category === 'all') {
            // Si on clique sur "Tout voir", on remélange pour changer l'ordre !
            resultatsFiltres = melangerTableau([...dataRappeurs]);
        } else if (category === 'classique') {
            resultatsFiltres = dataRappeurs.filter(rappeur => !rappeur.statut);
            // On mélange aussi les résultats filtrés pour garder la logique
            resultatsFiltres = melangerTableau(resultatsFiltres);
        } else {
            resultatsFiltres = dataRappeurs.filter(rappeur => rappeur.statut === category);
            resultatsFiltres = melangerTableau(resultatsFiltres);
        }
        
        afficherRappeurs(resultatsFiltres);
    });
});