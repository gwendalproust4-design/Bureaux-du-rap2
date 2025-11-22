const dataRappeurs = [
    // --- LES LÉGENDES (OR) ---
    {
        id: "booba", // INDISPENSABLE : L'identifiant unique pour le lien
        nom: "Booba",
        ville: "92i",
        statut: "legende",
        image: "img/RAP-data/booba.webp",
        // Bio courte pour la carte
        bio: "Le Duc. Plus de 20 ans de règne. Il a traversé les époques en écrasant la concurrence. Le Boss final du jeu.",
        // Bio longue pour la page profil
        bioLongue: "Élie Yaffa, dit Booba, est né le 9 décembre 1976 à Boulogne-Billancourt. Il commence sa carrière avec le groupe Lunatic aux côtés d'Ali. Leur album 'Mauvais Œil' est le premier album indépendant à obtenir un disque d'or. <br><br> En 2002, il se lance en solo avec 'Temps Mort', considéré comme un classique absolu. Fondateur du 92i, créateur de marques et lanceur de talents (Damso, Shay, SDM...), il règne sur le rap français depuis plus de deux décennies.",
        // Liste des albums pour la page profil
        albums: [
            { titre: "Temps Mort", annee: "2002", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/72/e3/66/72e36656-6915-6763-2323-226606179e47/00602527614865.rgb.jpg/600x600bf-60.jpg" },
            { titre: "Ouest Side", annee: "2006", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f4/79/d6/f479d6c2-f776-7825-d4da-479037021e6e/00602498384585.rgb.jpg/600x600bf-60.jpg" },
            { titre: "Trône", annee: "2017", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/60/c4/3c/60c43c43-287e-b948-e851-5f06a7e18c76/00602567303781.rgb.jpg/600x600bf-60.jpg" },
            { titre: "ULTRA", annee: "2021", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e6/7a/08/e67a0857-8421-944a-093c-c2362110850a/00602435868482.rgb.jpg/600x600bf-60.jpg" }
        ]
    },
    {
        nom: "IAM",
        ville: "Marseille",
        statut: "legende",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/IAM_F%C3%AAte_de_l%27Humanit%C3%A9_2014_006.jpg/640px-IAM_F%C3%AAte_de_l%27Humanit%C3%A9_2014_006.jpg",
        bio: "L'École du Micro d'Argent. Les architectes du rap français. Sagesse, textes profonds et respect éternel."
    },
    {
        nom: "NTM",
        ville: "93",
        statut: "legende",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Joey_Starr_2011.jpg/640px-Joey_Starr_2011.jpg",
        bio: "Suprême NTM. L'énergie brute de la révolte. Kool Shen et JoeyStarr ont marqué le fer rouge l'histoire de la culture."
    },
    {
        nom: "Rohff",
        ville: "94",
        statut: "legende",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Rohff_2013.jpg/640px-Rohff_2013.jpg",
        bio: "Le Padre. La puissance et la technique. 'Le Code de l'Horreur' reste un des meilleurs albums de tous les temps."
    },
    {
        nom: "MC Solaar",
        ville: "94",
        statut: "legende",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/MC_Solaar_Cannes_2018.jpg/640px-MC_Solaar_Cannes_2018.jpg",
        bio: "L'As de Trèfle. Le poète qui a fait entrer le rap dans les salons français. Une plume fine et intemporelle."
    },

    // --- LES TENDANCES DU MOMENT (ROUGE / FEU) ---
    {
        nom: "Gazo",
        ville: "93",
        statut: "tendance",
        image: "https://intrld.com/wp-content/uploads/2022/10/gazo-kmt-nouvel-album.jpg",
        bio: "Le roi de la Drill FR. Une voix rocailleuse reconnaissable entre mille. Il transforme chaque featuring en tube."
    },
    {
        nom: "Tiakola",
        ville: "La Courneuve",
        statut: "tendance",
        image: "https://generations.fr/media/news/thumb/870x489_6290e2e78f6b9-tiakola.jpg",
        bio: "Le prince de la mélo. Impossible d'allumer la radio sans tomber sur lui. Il a le secret des refrains qui restent."
    },
    {
        nom: "Werenoi",
        ville: "93",
        statut: "tendance",
        image: "https://intrld.com/wp-content/uploads/2023/03/werenoi-carre-album.jpg",
        bio: "La révélation machine. Très discret médiatiquement mais omniprésent dans les charts. Un flow carré et efficace."
    },
    {
        nom: "SDM",
        ville: "92",
        statut: "tendance",
        image: "https://intrld.com/wp-content/uploads/2022/12/sdm-liens-100-chanson.jpg",
        bio: "Ocho. La voix tonitruante du 92i. Il mélange la street crédibilité avec une ouverture musicale impressionnante."
    },
    {
        nom: "Zola",
        ville: "Evry (91)",
        statut: "tendance",
        image: "https://generations.fr/media/news/thumb/870x489_5fb7e6e8c9a5e-zola.jpg",
        bio: "Le style c'est lui. Flow américain, attitude rockstar et motos. Il incarne la jeunesse décomplexée."
    },

    // --- LES CLASSIQUES & INCONTOURNABLES (STANDARD - VIOLET) ---
    {
        nom: "Jul",
        ville: "Marseille",
        // Pas de statut = Violet par défaut
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jul_2022.jpg/640px-Jul_2022.jpg",
        bio: "L'OVNI. L'artiste le plus écouté. Il a créé son propre monde. On l'aime ou on le déteste, mais on le respecte."
    },
    {
        nom: "Ninho",
        ville: "91 / 77",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ninho_2023.jpg/640px-Ninho_2023.jpg",
        bio: "Jefe. L'homme aux certifications infinies. Un parcours sans faute depuis ses premières mixtapes."
    },
    {
        nom: "PNL",
        ville: "Tarterêts",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/PNL_Coachella_2017.jpg/640px-PNL_Coachella_2017.jpg",
        bio: "La Légende QLF. Ils ont révolutionné la musique française, l'indépendance et le marketing. Deux frères, une galaxie."
    },
    {
        nom: "Freeze Corleone",
        ville: "667",
        image: "https://intrld.com/wp-content/uploads/2020/09/freeze-corleone-lmf-menace-fantome-1000x600.jpg",
        bio: "Le Chen. Un rap codifié, technique et sombre. Il a créé une secte musicale avec le 667. Ekip."
    },
    {
        nom: "Damso",
        ville: "Bruxelles",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Damso_Cannes_2018.jpg/640px-Damso_Cannes_2018.jpg",
        bio: "Dems. L'écriture la plus sombre et poétique du game. Il transforme ses tourments personnels en or."
    },
    {
        nom: "SCH",
        ville: "Marseille",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/SCH_2022.jpg/640px-SCH_2022.jpg",
        bio: "Le S. Plus qu'un rappeur, un personnage de cinéma. Voix grave et univers mafieux."
    },
    {
        nom: "Orelsan",
        ville: "Caen",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Orelsan_2018.jpg/640px-Orelsan_2018.jpg",
        bio: "Le narrateur. Il raconte la vie des gens normaux comme personne d'autre. Civilisation est un classique moderne."
    },
    {
        nom: "Nekfeu",
        ville: "Paris",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nekfeu_2016.jpg/640px-Nekfeu_2016.jpg",
        bio: "Cyborg. Le technicien parfait qui a su toucher le grand public. Discret aujourd'hui, mais légendaire."
    },
    {
        nom: "Kaaris",
        ville: "Sevran",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Kaaris_2014.jpg/640px-Kaaris_2014.jpg",
        bio: "Le Dozo. Il a importé la Trap de Chicago en France. 'Or Noir' a changé la face du rap français à jamais."
    },
    {
        nom: "Dinos",
        ville: "La Courneuve",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Dinos_2022.jpg/640px-Dinos_2022.jpg",
        bio: "Le Spleen. Un rap mélancolique et visuel. Dinos prend son temps pour livrer des œuvres d'art."
    },
    {
        nom: "Laylow",
        ville: "Toulouse",
        image: "https://intrld.com/wp-content/uploads/2021/07/laylow-etrange-histoire-mr-anderson-analyse.jpg",
        bio: "Mr Anderson. Le visionnaire du digital. Ses albums sont des films auditifs futuristes."
    },
    {
        nom: "Vald",
        ville: "93",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Vald_2022.jpg/640px-Vald_2022.jpg",
        bio: "Le génie incompris. Entre troll et messages profonds, Vald maîtrise le rap technique comme peu d'autres."
    },
    {
        nom: "PLK",
        ville: "92",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/PLK_2022.jpg/640px-PLK_2022.jpg",
        bio: "Polak. L'efficacité incarnée. Il enchaîne les flows rapides et les mélodies avec une facilité déconcertante."
    },
    {
        nom: "Alpha Wann",
        ville: "Paris",
        image: "https://generations.fr/media/news/thumb/870x489_6023e4c9677d8-alpha-wann-don-dada-mixtape-vol-1.jpg",
        bio: "Le Don. Le rappeur préféré de tes rappeurs préférés. La rime est une science dont il est le meilleur chercheur."
    },
    {
        nom: "Hamza",
        ville: "Bruxelles",
        image: "https://generations.fr/media/news/thumb/870x489_63dce61234397-hamza.jpg",
        bio: "Sauce God. Il a amené la vibe américaine/canadienne en francophonie. Le roi du drip et des prods léchées."
    },
    // --- LES PÉPITES & UNDERGROUND (CYAN) ---
    // --- SCÈNE INDÉPENDANTE & UNDERGROUND ---
    
    // PÉPITE : Hugo TSR (Le culte de l'anonymat et du boom-bap parisien)
    {
        nom: "Hugo TSR",
        ville: "Paris (18ème)",
        statut: "pepite",
        image: "https://img.youtube.com/vi/QsNft5ftYSs/maxresdefault.jpg",
        bio: "Le fantôme. Il fuit la célébrité et livre le même rap brut depuis 20 ans. Une légende de l'ombre avec une fanbase ultra-fidèle."
    },
    // STANDARD : Demi Portion (La force tranquille)
    {
        nom: "Demi Portion",
        ville: "Sète (34)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Demi_Portion_2022.jpg/640px-Demi_Portion_2022.jpg",
        bio: "L'artisan. Un rap sincère, fait maison, loin du bling-bling. Il organise son propre festival et prône le partage avant tout."
    },
    // PÉPITE : La Fève (Le chef de file de la New Wave)
    {
        nom: "La Fève",
        ville: "Fontenay-sous-Bois",
        statut: "pepite",
        image: "https://intrld.com/wp-content/uploads/2021/12/la-feve-errr-analyse.jpg",
        bio: "Le renouveau. Avec son flow nonchalant et ses prods minimalistes, il a influencé toute la nouvelle génération Soundcloud."
    },
    // STANDARD : Souffrance (La technique pure)
    {
        nom: "Souffrance",
        ville: "Montreuil (93)",
        image: "https://generations.fr/media/news/thumb/870x489_6283b7e0630c6-souffrance.jpg",
        bio: "Membre de L'Uzine. Un flow froid et tranchant comme une lame. Il dépeint la réalité de la banlieue sans filtre."
    },
    // PÉPITE : Benjamin Epps (Le revival des années 90)
    {
        nom: "Benjamin Epps",
        ville: "Belleville",
        statut: "pepite",
        image: "https://generations.fr/media/news/thumb/870x489_62615f59dc060-benjamin-epps.jpg",
        bio: "La voix de crécelle. Il a ramené l'esprit New-Yorkais des années 90 en France. Arrogant, talentueux et unique."
    },
    // STANDARD : Isha (Le vétéran respecté)
    {
        nom: "Isha",
        ville: "Bruxelles",
        image: "https://intrld.com/wp-content/uploads/2020/02/isha-lva3-interview.jpg",
        bio: "Le sage. Une écriture chirurgicale et une maturité rare. Il raconte ses cicatrices de vie avec une honnêteté désarmante."
    },
    // STANDARD : Limsa d'Aulnay
    {
        nom: "Limsa d'Aulnay",
        ville: "Aulnay-sous-Bois",
        image: "https://intrld.com/wp-content/uploads/2020/12/limsa-daulnay-logique-part-2.jpg",
        bio: "La fluidité. Un flow qui glisse tout seul, des rimes intelligentes et une personnalité attachante."
    },
    // STANDARD : Furax Barbarossa
    {
        nom: "Furax Barbarossa",
        ville: "Toulouse",
        image: "https://lc.cx/M_Exemple_Furax.jpg",
        bio: "L'ogre. Une écriture complexe et rageuse. Une figure emblématique de l'underground technique."
    },
    // STANDARD : Jazzy Bazz
    {
        nom: "Jazzy Bazz",
        ville: "Paris (19ème)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Jazzy_Bazz_2016.jpg/640px-Jazzy_Bazz_2016.jpg",
        bio: "L'élégance. Entre rap technique et sonorités jazz/nocturnes. Un membre clé de L'Entourage."
    },
    // PÉPITE : Khali (La voix de l'émotion étrange)
    {
        nom: "Khali",
        ville: "Bordeaux",
        statut: "pepite",
        image: "https://intrld.com/wp-content/uploads/2021/05/khali-la-lait.jpg",
        bio: "L'OVNI émotionnel. Une voix nasillarde unique qui divise ou fascine. Un univers sonore expérimental et touchant."
    },
    // STANDARD : Georgio
    {
        nom: "Georgio",
        ville: "Paris (18ème)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Georgio_2016.jpg/640px-Georgio_2016.jpg",
        bio: "Le rap littéraire et rock. Il raconte ses peines et ses espoirs avec une énergie qui fédère un large public."
    },
    // PÉPITE : Zamdane (La mélancolie solaire)
    {
        nom: "Zamdane",
        ville: "Marseille",
        statut: "pepite",
        image: "https://intrld.com/wp-content/uploads/2022/02/zamdane-couleur-de-ma-peine.jpg",
        bio: "L'émotion brute. Il raconte l'exil et la galère avec une musicalité incroyable. Une étoile montante très prometteuse."
    },
    // STANDARD : Prince Waly
    {
        nom: "Prince Waly",
        ville: "Montreuil",
        image: "https://intrld.com/wp-content/uploads/2022/09/prince-waly-moussa-album.jpg",
        bio: "Le style. Un storytelling cinématographique et une voix de crooner. L'esthétique est toujours soignée."
    },
    // PÉPITE : H JeuneCrack (Le génie du DIY)
    {
        nom: "H JeuneCrack",
        ville: "Toulouse",
        statut: "pepite",
        image: "https://intrld.com/wp-content/uploads/2023/05/h-jeunecrack.jpg",
        bio: "Fait Maison. Il produit et mixe tout lui-même dans sa chambre. Un style décalé, drôle et bourré de références."
    },
    // STANDARD : Lujipeka
    {
        nom: "Lujipeka",
        ville: "Rennes",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lujipeka_2022.jpg/640px-Lujipeka_2022.jpg",
        bio: "L'énergie spontanée. Ancien de Columbine, il propose un rap frais, décomplexé et parfait pour la scène."
    },
    // STANDARD : Jewel Usain
    {
        nom: "Jewel Usain",
        ville: "Argenteuil",
        image: "https://generations.fr/media/news/thumb/870x489_617fd34243518-jewel-usain.jpg",
        bio: "Le bosseur. Des années de charbon dans l'ombre. Il sait tout faire : chanter, kicker, découper."
    },
    // PÉPITE : Luther (Le mystère hype)
    {
        nom: "Luther",
        ville: "Avignon",
        statut: "pepite",
        image: "https://intrld.com/wp-content/uploads/2022/06/luther-garcon-analyse.jpg",
        bio: "Le fantôme d'Avignon. Visage caché, textes introspectifs et prods futuristes. Il a conquis la critique avec 'Garçon'."
    },
    // PÉPITE : Mairo (La découpe Suisse)
    {
        nom: "Mairo",
        ville: "Suisse (Genève)",
        statut: "pepite",
        image: "https://intrld.com/wp-content/uploads/2023/05/mairo-omer-album.jpg",
        bio: "L'orfèvre. Probablement l'un des meilleurs techniciens actuels. Ses placements rythmiques sont d'une précision chirurgicale."
    },
    // STANDARD : Scylla
    {
        nom: "Scylla",
        ville: "Bruxelles",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Scylla_2019.jpg/640px-Scylla_2019.jpg",
        bio: "La voix grave. Un rap profond, presque spirituel. Ses textes sont des leçons de vie, souvent accompagnés de piano."
    },

];

// --- LA LOGIQUE DU SITE ---

const grid = document.getElementById('rapperGrid');
const searchInput = document.getElementById('searchInput');

// Fonction pour créer une carte HTML
// Fonction pour créer une carte HTML
// Fonction pour créer une carte HTML avec un LIEN
function creerCarte(rappeur) {
    const classeSpeciale = rappeur.statut ? rappeur.statut : '';
    
    // Si le rappeur a un ID, on crée un lien vers artiste.html, sinon le lien est vide (#)
    const lien = rappeur.id ? `artiste.html?id=${rappeur.id}` : '#';

    return `
        <a href="${lien}" style="text-decoration:none; color:inherit; display:block;">
            <article class="card ${classeSpeciale}">
                <img src="${rappeur.image}" alt="${rappeur.nom}" class="card-image">
                <div class="card-content">
                    <div class="card-header">
                        <h2 class="card-name">${rappeur.nom}</h2>
                    </div>
                    <p class="card-bio">${rappeur.bio}</p>
                </div>
            </article>
        </a>
    `;
}

// Fonction pour afficher les rappeurs (tous ou filtrés)
function afficherRappeurs(liste) {
    // On vide la grille d'abord
    grid.innerHTML = '';
    
    // On boucle sur chaque rappeur pour créer sa carte
    liste.forEach(rappeur => {
        grid.innerHTML += creerCarte(rappeur);
    });
}

// 1. Afficher tout le monde au démarrage
afficherRappeurs(dataRappeurs);

// 2. Système de recherche
searchInput.addEventListener('input', (e) => {
    const recherche = e.target.value.toLowerCase();
    
    // On filtre la liste
    const resultats = dataRappeurs.filter(rappeur => {
        return rappeur.nom.toLowerCase().includes(recherche) || 
               rappeur.ville.toLowerCase().includes(recherche);
    });

    // On réaffiche avec les résultats filtrés
    afficherRappeurs(resultats);
});
// --- SYSTÈME DE FILTRES (Catégories) ---

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Retirer la classe 'active' de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // 2. Ajouter la classe 'active' au bouton cliqué
        button.classList.add('active');

        // 3. Récupérer la catégorie demandée (all, legende, tendance...)
        const category = button.getAttribute('data-filter');

        // 4. Filtrer la liste
        let resultatsFiltres;

        if (category === 'all') {
            // Si 'Tout voir', on prend toute la liste
            resultatsFiltres = dataRappeurs;
        } else if (category === 'classique') {
            // Si 'Classique', on prend ceux qui n'ont PAS de statut spécial
            resultatsFiltres = dataRappeurs.filter(rappeur => !rappeur.statut);
        } else {
            // Sinon (Legende, Tendance, Pepite), on compare le statut
            resultatsFiltres = dataRappeurs.filter(rappeur => rappeur.statut === category);
        }

        // 5. Afficher la nouvelle liste
        afficherRappeurs(resultatsFiltres);
    });
});