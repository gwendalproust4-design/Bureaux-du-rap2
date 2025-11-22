// --- LOGIQUE DU SITE (script.js) ---

const grid = document.getElementById('rapperGrid');
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Configuration
const CARDS_PER_LOAD = 12; // Nombre de rappeurs à afficher par coup
let currentList = [];      // La liste active (filtrée ou complète)
let currentIndex = 0;      // Compteur de cartes affichées

// Fonction pour mélanger un tableau (Algorithme de Fisher-Yates)
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

    if (certificationsHTML === '') {
        certificationsHTML = '<span style="opacity:0.5; font-size:0.8rem; font-weight:700; letter-spacing:1px;">🎤 ARTISTE</span>';
    }

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

// --- SYSTÈME D'AFFICHAGE PROGRESSIF ---

// 1. Fonction principale : Prépare la liste et affiche le premier lot
function initialiserAffichage(liste) {
    currentList = liste; // On stocke la liste qu'on veut afficher
    currentIndex = 0;    // On remet le compteur à zéro
    grid.innerHTML = ''; // On vide la grille
    
    afficherLotSuivant(); // On lance l'affichage du premier paquet
}

// 2. Fonction qui ajoute les cartes
function afficherLotSuivant() {
    // On récupère les prochains rappeurs (ex: de 0 à 12, puis de 12 à 24...)
    const nextRappeurs = currentList.slice(currentIndex, currentIndex + CARDS_PER_LOAD);
    
    // On les ajoute au HTML existant
    nextRappeurs.forEach(rappeur => {
        grid.innerHTML += creerCarte(rappeur);
    });
    
    // On met à jour le compteur
    currentIndex += nextRappeurs.length;
    
    // Gestion du bouton "Voir plus"
    if (currentIndex >= currentList.length) {
        loadMoreBtn.style.display = 'none'; // Tout est affiché, on cache le bouton
    } else {
        loadMoreBtn.style.display = 'block'; // Il en reste, on affiche le bouton
    }
}

// 3. Événement sur le bouton "Voir plus"
loadMoreBtn.addEventListener('click', afficherLotSuivant);


// --- DÉMARRAGE DU SITE ---
if (typeof dataRappeurs !== 'undefined') {
    // On mélange au démarrage
    let listeDemarrage = melangerTableau([...dataRappeurs]);
    initialiserAffichage(listeDemarrage);
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
        // Quand on cherche, on réinitialise l'affichage avec les résultats trouvés
        initialiserAffichage(resultats);
    });
}

// --- SYSTÈME DE FILTRES ---
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Gestion des classes actives (design)
        // Si ce n'est pas le bouton "Voir plus" (qui a aussi la classe filter-btn parfois)
        if(button.id !== 'loadMoreBtn') {
            document.querySelectorAll('.filter-btn:not(#loadMoreBtn)').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.getAttribute('data-filter');
            let resultatsFiltres;

            if (category === 'all') {
                // Tout voir : on remélange
                resultatsFiltres = melangerTableau([...dataRappeurs]);
            } else if (category === 'classique') {
                resultatsFiltres = dataRappeurs.filter(rappeur => !rappeur.statut);
                resultatsFiltres = melangerTableau(resultatsFiltres);
            } else {
                resultatsFiltres = dataRappeurs.filter(rappeur => rappeur.statut === category);
                resultatsFiltres = melangerTableau(resultatsFiltres);
            }
            
            // On lance l'affichage avec la nouvelle liste filtrée
            initialiserAffichage(resultatsFiltres);
        }
    });
});