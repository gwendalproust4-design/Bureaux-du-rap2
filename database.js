// --- BASE DE DONNÉES BUREAU DU RAP (database.js) ---

const dataRappeurs = [
    // ==========================================
    // 🏆 LES LÉGENDES (OR)
    // ==========================================
    {
        id: "booba",
        nom: "Booba",
        statut: "legende",
        image: "img/RAP-data/booba.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le Duc. Plus de 20 ans de règne. Patron du 92i et visionnaire du business."
    },
    {
        id: "iam",
        nom: "IAM",
        statut: "legende",
        image: "img/RAP-data/iam.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Les architectes du rap français. L'École du Micro d'Argent est un monument historique."
    },
    {
        id: "ntm",
        nom: "Suprême NTM",
        statut: "legende",
        image: "img/RAP-data/ntm.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "L'énergie brute de la révolte. Kool Shen et JoeyStarr ont marqué le fer rouge l'histoire."
    },
    {
        id: "sexion",
        nom: "Sexion d'Assaut",
        statut: "legende",
        image: "img/RAP-data/sexion_dassaut.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le groupe qui a marqué toute une génération avec L'Apogée. Une usine à talents."
    },
    {
        id: "disiz",
        nom: "Disiz",
        statut: "legende",
        image: "img/RAP-data/disiz.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "De 'J'pète les plombs' à 'L'Amour', une carrière exemplaire de réinvention constante."
    },
    {
        id: "dosseh",
        nom: "Dosseh",
        statut: "legende",
        image: "img/RAP-data/dosseh.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "La plume et la faim. L'auteur de 'Yuri' et 'Vidalo$$a', respecté pour son écriture."
    },
    {
        id: "lefa",
        nom: "Lefa",
        statut: "legende",
        image: "img/RAP-data/lefa.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Technicien hors pair de la Sexion. Une carrière solo solide et des performances scéniques incroyables."
    },
    {
        id: "kaaris",
        nom: "Kaaris",
        statut: "legende",
        image: "img/RAP-data/kaaris.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le Dozo. Il a importé la Trap de Chicago en France. 'Or Noir' est une bible."
    },
    {
        id: "rohff",
        nom: "Rohff",
        statut: "legende",
        image: "img/RAP-data/rhoff.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "Le Padre. La puissance et la technique du 94. Une figure majeure du rap hardcore."
    },
    {
        id: "mcsolaar",
        nom: "MC Solaar",
        statut: "legende",
        image: "img/RAP-data/mc_solar.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "L'As de Trèfle. Le poète qui a démocratisé le rap en France avec une plume littéraire."
    },

    // ==========================================
    // 🔥 LES TENDANCES & TÊTES D'AFFICHE (ROUGE)
    // ==========================================
    {
        id: "gazo",
        nom: "Gazo",
        statut: "tendance",
        image: "img/RAP-data/gazo.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le chef de la Drill FR. Une voix rocailleuse et des tubes qui inondent les charts."
    },
    {
        id: "tiakola",
        nom: "Tiakola",
        statut: "tendance",
        image: "img/RAP-data/tiakola.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le prince de la mélo. Impossible d'allumer la radio sans tomber sur lui."
    },
    {
        id: "kobalad",
        nom: "Koba LaD",
        statut: "tendance",
        image: "img/RAP-data/koba_lad.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le style du Bat 7. Un flow unique, élastique et une énergie débordante."
    },
    {
        id: "ziak",
        nom: "Ziak",
        statut: "tendance",
        image: "img/RAP-data/ziak.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le mystère de la Drill. Masqué et armé de rimes tranchantes. 'Akimbo' a marqué les esprits."
    },
    {
        id: "fave",
        nom: "Favé",
        statut: "tendance",
        image: "img/RAP-data/fave.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "L'énergie Jersey. Une ascension fulgurante avec 'Urus' et des refrains entêtants."
    },
    {
        id: "yame",
        nom: "Yamê",
        statut: "tendance",
        image: "img/RAP-data/yame.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "La révélation 'Bécane'. Une voix unique entre rap, soul et jazz qui a conquis le monde."
    },
    {
        id: "werenoi",
        nom: "Werenoi",
        statut: "tendance",
        image: "img/RAP-data/werenoi.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "La machine. Très discret médiatiquement mais omniprésent dans les charts."
    },
    {
        id: "oboy",
        nom: "Oboy",
        statut: "tendance",
        image: "img/RAP-data/oboy.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le mumble rap sombre et sexy. Des tubes mainstream comme 'TDB' et une vibe unique."
    },
    {
        id: "luidji",
        nom: "Luidji",
        statut: "tendance",
        image: "img/RAP-data/luidji.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "Le crooner du rap. 'Tristesse Business' est un classique moderne de storytelling amoureux."
    },
    {
        id: "lorenzo",
        nom: "Lorenzo",
        statut: "tendance",
        image: "img/RAP-data/lorenzo.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "L'empereur du sale. Un personnage décalé mais un sens du marketing et du hit redoutable."
    },
    {
        id: "greenmontana",
        nom: "Green Montana",
        statut: "tendance",
        image: "img/RAP-data/green_montana.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "La froideur mélodique. Protégé de Booba, il a imposé une vibe glaciale et envoutante."
    },
    {
        id: "houdi",
        nom: "Houdi",
        statut: "tendance",
        image: "img/RAP-data/houdi.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "Le rappeur masqué du 77. Une productivité folle et une technique tout-terrain."
    },
    {
        id: "kerchak",
        nom: "Kerchak",
        statut: "tendance",
        image: "img/RAP-data/kerchak.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "Le retour de la Jersey en France. Une énergie communicative et des gimmicks puissants."
    },
    {
        id: "meryl",
        nom: "Meryl",
        statut: "tendance",
        image: "img/RAP-data/meryl.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "Toplineuse de génie devenue artiste complète. Elle mélange rap et sonorités caribéennes."
    },
    {
        id: "larry",
        nom: "Larry",
        statut: "tendance",
        image: "img/RAP-data/larry.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "L'énergie de Strasbourg. 'Woin Woin', flow rapide et attitude street."
    },
    {
        id: "kalashcrimi",
        nom: "Kalash Criminel",
        statut: "tendance",
        image: "img/RAP-data/kalash_criminel.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "Le cagoulé le plus connu de France. Sauvagerie, engagement politique et ad-libs cultes."
    },
    {
        id: "luvresval",
        nom: "Luv Resval",
        statut: "tendance",
        image: "img/RAP-data/luv_resval.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "Le prince déchu. Une technique incroyable et un univers Star Wars. Parti trop tôt."
    },
    {
        id: "jul",
        nom: "Jul",
        ville: "Marseille",
        statut: "tendance", // Jul est hors catégorie, mais on le met là pour la couleur
        image: "img/RAP-data/jul.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "L'OVNI. L'artiste le plus productif et écouté. Il a créé son propre monde."
    },
    {
        id: "ninho",
        nom: "Ninho",
        statut: "tendance",
        image: "img/RAP-data/ninho.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Jefe. L'homme aux certifications infinies. Un parcours sans faute."
    },
    {
        id: "pnl",
        nom: "PNL",
        statut: "tendance",
        image: "img/RAP-data/pnl.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "La Légende QLF. Ils ont révolutionné la musique française et le marketing."
    },
    {
        id: "damso",
        nom: "Damso",
        statut: "tendance",
        image: "img/RAP-data/damso.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Dems. L'écriture la plus sombre et poétique du game."
    },
    {
        id: "sch",
        nom: "SCH",
        statut: "tendance",
        image: "img/RAP-data/sch.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le S. Plus qu'un rappeur, un personnage de cinéma. Voix grave et univers mafieux."
    },
    {
        id: "nekfeu",
        nom: "Nekfeu",
        statut: "tendance",
        image: "img/RAP-data/nekfeu.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Cyborg. Le technicien parfait qui a su toucher le grand public."
    },
    {
        id: "vald",
        nom: "Vald",
        statut: "tendance",
        image: "img/RAP-data/vald.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le génie incompris. Entre troll et messages profonds."
    },
    {
        id: "plk",
        nom: "PLK",
        statut: "tendance",
        image: "img/RAP-data/plk.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Polak. L'efficacité incarnée. Il enchaîne les flows rapides."
    },
    {
        id: "hamza",
        nom: "Hamza",
        statut: "tendance",
        image: "img/RAP-data/hamza.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "Sauce God. Le roi du drip et des prods léchées."
    },

    // ==========================================
    // 💎 LES PÉPITES & UNDERGROUND (CYAN)
    // ==========================================
    {
        id: "lafeve",
        nom: "La Fève",
        statut: "pepite",
        image: "img/RAP-data/la feve.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "Le chef de file de la New Wave. 'ERRR' a changé le paysage underground."
    },
    {
        id: "solalune",
        nom: "So La Lune",
        statut: "pepite",
        image: "img/RAP-data/so_la_lune.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "La voix qui divise et fascine. Une mélancolie pure et haut perchée."
    },
    {
        id: "khali",
        nom: "Khali",
        statut: "pepite",
        image: "img/RAP-data/khali.webp",
        certifications: { or: false, platine: false, diamant: false },
        bio: "L'émotion nasillarde. Un univers sonore expérimental et très touchant."
    },
    {
        id: "winnterzuko",
        nom: "Winnterzuko",
        statut: "pepite",
        image: "img/RAP-data/winnterzuko.webp",
        certifications: { or: false, platine: false, diamant: false },
        bio: "Hyperpop et rap. Des textes touchants sur des prods rapides et futuristes."
    },
    {
        id: "luther",
        nom: "Luther",
        statut: "pepite",
        image: "img/RAP-data/luther.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "Le mystère d'Avignon. Visage caché, 'Garçon' est un classique instantané."
    },
    {
        id: "hjeunecrack",
        nom: "H JeuneCrack",
        statut: "pepite",
        image: "img/RAP-data/h jeunecrack.webp",
        certifications: { or: false, platine: false, diamant: false },
        bio: "Le roi du DIY. Tout est fait maison avec génie et humour."
    },
    {
        id: "mairo",
        nom: "Mairo",
        statut: "pepite",
        image: "img/RAP-data/mairo.webp",
        certifications: { or: false, platine: false, diamant: false },
        bio: "La technique suisse. 'Omar Chappier' est une leçon de découpage de prod."
    },
    {
        id: "kekra",
        nom: "Kekra",
        statut: "pepite",
        image: "img/RAP-data/kekra.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "Le masqué de Courbevoie. Flow tout-terrain, indépendance totale et productivité."
    },
    {
        id: "femtogo",
        nom: "Femtogo",
        statut: "pepite",
        image: "img/RAP-data/femtogo.webp",
        bio: "Baby Hayabusa. Un style futuriste, énergique et très référencé."
    },
    {
        id: "wallace",
        nom: "Wallace Cleaver",
        statut: "pepite",
        image: "img/RAP-data/wallace_cleaver.webp",
        bio: "La sincérité brute. Une plume qui touche en plein cœur avec une voix puissante."
    },
    {
        id: "yvnnis",
        nom: "Yvnnis",
        statut: "pepite",
        image: "img/RAP-data/yvnnis.webp",
        bio: "L'attitude et le flow. Une des grosses révélations récentes, charismatique au micro."
    },
    {
        id: "menacesantana",
        nom: "Menace Santana",
        statut: "pepite",
        image: "img/RAP-data/menace_santana.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "L'ambiance film d'horreur. Drill sombre et cinématique unique en France."
    },
    {
        id: "lamano",
        nom: "La Mano 1.9",
        statut: "pepite",
        image: "img/RAP-data/la_mano.webp",
        certifications: { or: true, platine: false, diamant: false }, // Sexy Woman Platine
        bio: "La nouvelle terreur du 19. Énergie street brute qui cartonne sur TikTok."
    },
    {
        id: "rounhaa",
        nom: "Rounhaa",
        statut: "pepite",
        image: "img/RAP-data/rounhaa.webp",
        bio: "L'émotion digitale. Signé chez Sublime, un talent pur aux mélodies envoûtantes."
    },
    {
        id: "bushi",
        nom: "Bushi",
        statut: "pepite",
        image: "img/RAP-data/bushi.webp",
        bio: "Saturne. Un univers mystique, des visuels soignés et des connexions US (Quavo)."
    },
    {
        id: "thahomey",
        nom: "ThaHomey",
        statut: "pepite",
        image: "img/RAP-data/thahomey.webp",
        bio: "Le roi de la DMV en France. Flow nonchalant, technique et avant-gardiste."
    },
    {
        id: "j9ueve",
        nom: "J9ueve",
        statut: "pepite",
        image: "img/RAP-data/j9ueve.webp",
        bio: "Vibes next gen. Des mélodies planantes qui restent en tête."
    },
    {
        id: "ptitesoeur",
        nom: "Ptite Soeur",
        statut: "pepite",
        image: "img/RAP-data/ptite_soeur.webp",
        bio: "Talent émergent à suivre de très près. Une proposition artistique singulière."
    },
    {
        id: "benndoz",
        nom: "Benndo Z",
        statut: "pepite",
        image: "img/RAP-data/benndo_z.webp",
        bio: "La cagoule la plus drôle (et talentueuse) du rap. Entre parodie et technique réelle."
    },
    {
        id: "deenburbigo",
        nom: "Deen Burbigo",
        statut: "pepite",
        image: "img/RAP-data/deen_burbigo.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "Grand Cru. Plume fine du Saboteur, il s'est bonifié avec le temps comme le vin."
    },
    {
        id: "diditrix",
        nom: "Didi Trix",
        statut: "pepite",
        image: "img/RAP-data/didi_trix.webp",
        bio: "Le flow le plus bondissant de Bondy. Une attitude unique."
    },
    {
        id: "theodora",
        nom: "Theodora",
        statut: "pepite",
        image: "img/RAP-data/theodora.webp",
        bio: "La nouvelle voix hybride. Entre mélodies entêtantes et rythmiques rap."
    },
    {
        id: "folies",
        nom: "Folie's",
        statut: "pepite",
        image: "img/RAP-data/folies.webp",
        bio: "Univers coloré et singulier. Un artiste qui ne ressemble à personne."
    },
    {
        id: "gapman",
        nom: "Gapman",
        statut: "pepite",
        image: "img/RAP-data/gapman.webp",
        bio: "La Trap du Nord. Validé par Binks Beatz, des prods lourdes et des flows rapides."
    },
    {
        id: "junglejack",
        nom: "Jungle Jack",
        statut: "pepite",
        image: "img/RAP-data/jungle_jack.webp",
        bio: "Technique et flows précis. Un rappeur solide à l'ancienne mais moderne."
    },
    {
        id: "g2b",
        nom: "G2B",
        statut: "pepite",
        image: "img/RAP-data/g2b.webp",
        bio: "L'énergie brute du groupe. De la street pure et dure."
    },
    {
        id: "hladrogue",
        nom: "H La Drogue",
        statut: "pepite",
        image: "img/RAP-data/h_la_drogue.webp",
        bio: "Le 92 dans sa forme la plus street. Des récits de quartier sans filtre."
    },
    {
        id: "inocasablanca",
        nom: "Ino Casablanca",
        statut: "pepite",
        image: "img/RAP-data/ino_casablanca.webp",
        bio: "Fusion unique. Il mélange ses origines et le rap pour un résultat frais."
    },
    {
        id: "jeunelion",
        nom: "Jeune Lion",
        statut: "pepite",
        image: "img/RAP-data/jeune_lion.webp",
        bio: "L'esprit d'Abidjan et le flow parisien. Spirituel et énergique."
    },
    {
        id: "jeunemorty",
        nom: "Jeune Morty",
        statut: "pepite",
        image: "img/RAP-data/jeune_morty.webp",
        bio: "Sonorités Memphis et style sombre. Une ambiance très particulière."
    },
    {
        id: "jima",
        nom: "Jima",
        statut: "pepite",
        image: "img/RAP-data/jima.webp",
        bio: "Underground et créatif. Un artiste à découvrir pour les curieux."
    },
    {
        id: "tkkf",
        nom: "TKKF",
        statut: "pepite",
        image: "img/RAP-data/tkkf.webp",
        bio: "Hyperpop Rap. De l'énergie pure et des sonorités digitales."
    },
    {
        id: "55asky",
        nom: "55asky",
        statut: "pepite",
        image: "img/RAP-data/55asky.webp",
        bio: "Le boss de la Plug en France. 8ruki a créé sa propre voie."
    },
    {
        id: "kpri",
        nom: "Kpri",
        statut: "pepite",
        image: "img/RAP-data/kpri.webp",
        bio: "L'ancien de Lyonzon. Un flow technique et une voix reconnaissable."
    },
    {
        id: "lalaace",
        nom: "Lala &ce",
        statut: "pepite",
        image: "img/RAP-data/lala_ace.webp",
        bio: "Le flow le plus cool et décalé du game. Une icône de style."
    },
    {
        id: "malo",
        nom: "Malo",
        statut: "pepite",
        image: "img/RAP-data/malo.webp",
        bio: "Flow tout terrain et énergie scénique incroyable. Il sait tout faire."
    },
    {
        id: "maureen",
        nom: "Maureen",
        statut: "pepite",
        image: "img/RAP-data/maureen.webp",
        bio: "Shatta Queen avec une touche rap. L'énergie des Antilles."
    },
    {
        id: "tks2g",
        nom: "TKS 2G",
        statut: "pepite",
        image: "img/RAP-data/tks_2g.webp",
        bio: "La relève Shatta/Rap. Ça kicke et ça danse."
    },
    {
        id: "nes",
        nom: "Nes",
        statut: "pepite",
        image: "img/RAP-data/nes.webp",
        bio: "La technique au service du style. Un rappeur complet et prometteur."
    },
    {
        id: "osirusjack",
        nom: "Osirus Jack",
        statut: "pepite",
        image: "img/RAP-data/osirus_jack.webp",
        bio: "Le membre du 667. Complots, rimes riches et flows sombres."
    },
    {
        id: "roshi",
        nom: "Captaine Roshi",
        statut: "pepite",
        image: "img/RAP-data/captaine_roshi.webp",
        bio: "La voix cassée et l'énergie Larosh. La Trap à son meilleur niveau."
    },
    {
        id: "rowjay",
        nom: "Rowjay",
        statut: "pepite",
        image: "img/RAP-data/rowjay.webp",
        bio: "Le Jeune Fin du rap jeu. Des références pointues et un humour unique."
    },
    {
        id: "sherifflazone",
        nom: "Sherifflazone",
        statut: "pepite",
        image: "img/RAP-data/sherifflazone.webp",
        bio: "Pionnier de la DMV Crank en France. Un flow décalé et addictif."
    },
    {
        id: "laioss",
        nom: "Laïoss",
        statut: "pepite",
        image: "img/RAP-data/laioss.webp",
        bio: "Underground quality. Une plume et une ambiance à part."
    },
    {
        id: "zuukou",
        nom: "Zuukou Mayzie",
        statut: "pepite",
        image: "img/RAP-data/zuukou_mayzie.webp",
        bio: "L'expert en pop culture du 667. Un univers riche et référencé."
    },
    {
        id: "34murphy",
        nom: "34Murphy",
        statut: "pepite",
        image: "img/RAP-data/34murphy.webp",
        bio: "Mélodies et textes introspectifs. Une touche de sensibilité."
    },
    {
        id: "404billy",
        nom: "404Billy",
        statut: "pepite",
        image: "img/RAP-data/404billy.webp",
        bio: "Sombre, technique et sans concession. Le rap noir et blanc."
    },
    {
        id: "youvdee",
        nom: "Youv Dee",
        statut: "pepite",
        image: "img/RAP-data/youv_dee.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "Du rap au Rock. Un artiste libre qui ne se fixe aucune limite."
    },
    {
        id: "benjaminepps",
        nom: "Benjamin Epps",
        statut: "pepite",
        image: "img/RAP-data/benjamin epps.webp",
        bio: "La voix de crécelle. L'esprit New-Yorkais des années 90."
    },
    {
        id: "isha",
        nom: "Isha",
        statut: "pepite",
        image: "img/RAP-data/isha.webp",
        bio: "Le sage. Une écriture chirurgicale et une maturité rare."
    },
    {
        id: "limsa",
        nom: "Limsa d'Aulnay",
        statut: "pepite",
        image: "img/RAP-data/limsa d_aulnay.webp",
        bio: "La fluidité. Un flow qui glisse tout seul."
    },
    {
        id: "furax",
        nom: "Furax Barbarossa",
        statut: "pepite",
        image: "img/RAP-data/furax barbossa.webp",
        bio: "L'ogre. Une écriture complexe et rageuse."
    },
    {
        id: "jazzybazz",
        nom: "Jazzy Bazz",
        statut: "pepite",
        image: "img/RAP-data/jazzy bazz.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "L'élégance. Entre rap technique et sonorités jazz."
    },
    {
        id: "georgio",
        nom: "Georgio",
        statut: "pepite",
        image: "img/RAP-data/georgio.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "Le rap littéraire et rock. L'énergie du désespoir."
    },
    {
        id: "zamdane",
        nom: "Zamdane",
        statut: "pepite",
        image: "img/RAP-data/zamdan.webp",
        certifications: { or: true, platine: false, diamant: false },
        bio: "La mélancolie solaire. Il raconte l'exil avec émotion."
    },
    {
        id: "princewaly",
        nom: "Prince Waly",
        statut: "pepite",
        image: "img/RAP-data/prince waly.webp",
        bio: "Le style incarné. Storytelling et voix de crooner."
    },
    {
        id: "lujipeka",
        nom: "Lujipeka",
        statut: "pepite",
        image: "img/RAP-data/lujipeka.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "L'énergie spontanée. Rap décomplexé et scène."
    },
    {
        id: "jewelusain",
        nom: "Jewel Usain",
        statut: "pepite",
        image: "img/RAP-data/jewel usain.webp",
        bio: "Le bosseur. Il sait tout faire : chanter et découper."
    },
    {
        id: "scylla",
        nom: "Scylla",
        statut: "pepite",
        image: "img/RAP-data/scylla.webp",
        bio: "La voix grave. Rap profond et spirituel."
    },
    {
        id: "bbjacques",
        nom: "B.B. Jacques",
        statut: "pepite",
        image: "img/RAP-data/bb_jacques.webp",
        bio: "L'intensité. Révélé par Nouvelle École."
    },
    {
        id: "keeqaid",
        nom: "Keeqaid",
        statut: "pepite",
        image: "img/RAP-data/keeqaid.webp",
        bio: "L'énergie brute. Membre du 93 qui monte en puissance."
    }
];