document.addEventListener('DOMContentLoaded', () => {
  const travelBtn = document.querySelector('.travel .btn');
  const modal = document.getElementById('travelModal');
  const closeModal = document.getElementById('closeModal');

  // Affiche le modal au clic
  travelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });

  // Ferme le modal au clic sur la croix
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Ferme le modal si on clique en dehors du contenu
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  //Produits de suggestion
  const products = [
    { name: 'Prime Video', image: 'prime-video@2x.jpg', description: 'Téléchargez Films & Séries sur Prime Video. Accédez à des milliers de films et séries avec des contenus exclusifs et des avantages Amazon Prime.', link: 'https://www.primevideo.com/?tag=66536060' },
    { name: 'Infinix Hot 30i', image: 'infinix-hot-30i.jpg', description: '256GB RAM : 08GB - Smartphone ultra-performant avec un design élégant et une autonomie incroyable.', link: 'https://amzn.to/4g0iSJO' },
    { name: 'Amazon Prime', image: 'prime@2x.jpg', description: 'Profitez des avantages Amazon Prime : Livraison rapide, films, séries et bien plus encore avec un abonnement mensuel abordable.', link: 'https://www.amazon.fr/amazonprime?_encoding=UTF8&primeCampaignId=prime_assoc_ft?tag=Partenaire:66536060-21' }
  ];
  //Produits de réservations
  const products2 = [
    { name: 'Hôtel', image: 'Hotel.jpg', description: 'Téléchargez Films & Séries sur Prime Video. Accédez à des milliers de films et séries avec des contenus exclusifs et des avantages Amazon Prime.', link: 'https://www.primevideo.com/?tag=66536060' },
    { name: 'Hôtel', image: 'Hotel.jpg', description: 'Téléchargez Films & Séries sur Prime Video. Accédez à des milliers de films et séries avec des contenus exclusifs et des avantages Amazon Prime.', link: 'https://www.primevideo.com/?tag=66536060' },
    { name: 'Hôtel', image: 'Hotel.jpg', description: 'Téléchargez Films & Séries sur Prime Video. Accédez à des milliers de films et séries avec des contenus exclusifs et des avantages Amazon Prime.', link: 'https://www.primevideo.com/?tag=66536060' },
    { name: 'Infinix Hot 30i', image: 'infinix-hot-30i.jpg', description: '256GB RAM : 08GB - Smartphone ultra-performant avec un design élégant et une autonomie incroyable.', link: 'https://amzn.to/4g0iSJO' },
    { name: 'Amazon Prime', image: 'prime@2x.jpg', description: 'Profitez des avantages Amazon Prime : Livraison rapide, films, séries et bien plus encore avec un abonnement mensuel abordable.', link: 'https://www.amazon.fr/amazonprime?_encoding=UTF8&primeCampaignId=prime_assoc_ft?tag=Partenaire:66536060-21' }
  ];
  //Nos produits 
  const products4 = [
    { name: 'Hôtel', image: 'Hotel.jpg', description: 'Téléchargez Films & Séries sur Prime Video. Accédez à des milliers de films et séries avec des contenus exclusifs et des avantages Amazon Prime.', link: 'https://www.primevideo.com/?tag=66536060' },
     { name: "Imprimante", image: "Imprimante.jpg", description :"Imprimante : Imprimez vos documents en haute qualité avec une imprimante multifonction, idéale pour le bureau comme pour la maison.", link:"https//"},
     { name: "Aspirateur", image: "aspira.jpeg", description :"Aspirateur : Gardez votre intérieur impeccable avec un aspirateur puissant et silencieux, idéal pour éliminer poussière et allergènes en un clin d'œil.", link:"https//" }, 
     { name: "T-shirt", image: "T-shirt.jpg", description :"T-shirt : Apportez du style à votre quotidien avec un t-shirt tendance, conçu pour allier confort et élégance.", link:"https//"},
      { name: "Tablette", image: "Tab.jpg" , description :"Tablette : Alliez mobilité et performance avec une tablette intuitive, idéale pour le travail, les études et le divertissement.", link:"https//"}, 
      { name: "Canapé", image: "Canapé.jpg", description :"Canapé : Offrez-vous un confort absolu avec un canapé design et moelleux, parfait pour des moments de détente inégalés.", link:"https//"},
       { name: "Console de jeux", image: "_console-de-jeu.png", description :"Console de jeux : Plongez dans l’univers du gaming avec une console de jeux dernière génération, offrant une expérience immersive exceptionnelle.", link:"https//"}, 
       { name: "Vélo", image: "Vélo.jpg", description :"Vélo : Explorez de nouveaux horizons avec un vélo performant, alliant confort et sécurité.", link:"https//"},
       { name: "Tondeuse à gazon", image: "Tondeuse.jpg", description: "Tondeuse à gazon : Obtenez une pelouse impeccable grâce à une tondeuse puissante et facile à manier. ", link: "https//" }, 
  ];

  const productList = document.getElementById('product-list');
  const productList2 = document.getElementById('product-list2');
  const productList4 = document.getElementById('product-list4');
  // Codage de Suggestions
  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const shortDescription = product.description.length > 80 ? product.description.substring(0, 80) + '...' : product.description;
    const fullDescription = product.description;

    productCard.innerHTML = `
      <img id="product-img-${index}" src="${product.image}" alt="${product.name}" onclick="openImageModal('${product.image}')">
      <h3>${product.name}</h3>
      <p id="description-${index}" class="description">${shortDescription}</p>
      ${product.description.length > 80 ? `<span id="toggleDescription-${index}" class="show-more" onclick="toggleDescription(${index}, '${fullDescription}')">Voir plus...</span>` : ""}
      <a href="${product.link}" target="_blank" class="btn">Acheter</a>
    `;

    productList.appendChild(productCard);
  });

  // Codage Réservations
  products2.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const shortDescription = product.description.length > 80 ? product.description.substring(0, 80) + '...' : product.description;
    const fullDescription = product.description;

    productCard.innerHTML = `
      <img id="product-img-${index}" src="${product.image}" alt="${product.name}" onclick="openImageModal('${product.image}')">
      <h3>${product.name}</h3>
      <p id="description2-${index}" class="description2">${shortDescription}</p>
      ${product.description.length > 80 ? `<span id="toggleDescription2-${index}" class="show-more" onclick="toggleDescription2(${index}, '${fullDescription}')">Voir plus...</span>` : ""}
      <a href="${product.link}" target="_blank" class="btn">Réservez</a>
    `;

    productList2.appendChild(productCard);
  });
products4.forEach((product, index) => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  
  const shortDescription = product.description.length > 80 ? product.description.substring(0, 80) + '...' : product.description;
  const fullDescription = product.description;
  
  productCard.innerHTML = `
      <img id="product-img-${index}" src="${product.image}" alt="${product.name}" onclick="openImageModal('${product.image}')">
      <h3>${product.name}</h3>
      <p id="description4-${index}" class="description4">${shortDescription}</p>
      ${product.description.length > 80 ? `<span id="toggleDescription4-${index}" class="show-more" onclick="toggleDescription4(${index}, '${fullDescription}')">Voir plus...</span>` : ""}
      <a href="${product.link}" target="_blank" class="btn">Réservez</a>
    `;
  
  productList4.appendChild(productCard);
  });
});
// Function description des suggestions
function toggleDescription(index, fullText) {
  const description = document.getElementById(`description-${index}`);
  const toggleButton = document.getElementById(`toggleDescription-${index}`);

  if (description.innerText.includes('...')) {
    description.innerText = fullText;
    toggleButton.innerText = "Voir moins...";
  } else {
    description.innerText = fullText.substring(0, 80) + '...';
    toggleButton.innerText = "Voir plus...";
  }
}

// Function description des réservations
function toggleDescription2(index, fullText) {
  const description = document.getElementById(`description2-${index}`);
  const toggleButton = document.getElementById(`toggleDescription2-${index}`);

  if (description.innerText.includes('...')) {
    description.innerText = fullText;
    toggleButton.innerText = "Voir moins...";
  } else {
    description.innerText = fullText.substring(0, 80) + '...';
    toggleButton.innerText = "Voir plus...";
  }
}
function toggleDescription4(index, fullText) {
  const description = document.getElementById(`description4-${index}`);
  const toggleButton = document.getElementById(`toggleDescription4-${index}`);

  if (description.innerText.includes('...')) {
    description.innerText = fullText;
    toggleButton.innerText = "Voir moins...";
  } else {
    description.innerText = fullText.substring(0, 80) + '...';
    toggleButton.innerText = "Voir plus...";
  }
}
// Function affiche l'image des produits après clic
function openImageModal(imageSrc) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Function close modal de l'image après clic
function closeImageModal() {
  document.getElementById("image-modal").style.display = "none";
}

// Catégories de produits codage
document.addEventListener("DOMContentLoaded", () => {
  const categoBtn = document.getElementById("catego-btn");
  const categoryList = document.getElementById("category-list");
  const categoryButtons = document.querySelectorAll(".category-btn");
  const productsSection = document.getElementById("products-section");
  const productList = document.getElementById("product-list3");

  const products = {
    electro: [
      { name: "Aspirateur", image: "aspira.jpeg", description :"Aspirateur : Gardez votre intérieur impeccable avec un aspirateur puissant et silencieux, idéal pour éliminer poussière et allergènes en un clin d'œil.", link:"https//" },
      { name: "Micro-ondes", image: "micro onde_.jpg", description :"Four micro-ondes : Réchauffez et cuisinez rapidement avec un micro-ondes performant, équipé de multiples fonctions pour un gain de temps optimal.", link:"https//"}, 
      { name: "Machine à laver", image: "machine à laver .jpg", description :"Machine à laver : Profitez d’un linge frais et propre avec une machine à laver haute performance, alliant économie d’eau et efficacité maximale.", link:"https//"}, 
      { name: "Réfrigérateur", image: "Réfrigérateur.jpg", description :"Réfrigérateur : Conservez vos aliments frais plus longtemps grâce à un réfrigérateur moderne, spacieux et écoénergétique.", link:"https//"}, 
      { name: "Lave-vaisselle", image: "Lave-vaisselle.jpg", description :"Lave-vaisselle : Dites adieu à la corvée de vaisselle avec un lave-vaisselle intelligent, conçu pour une propreté éclatante en toute simplicité.", link:"https//"}, 
      { name: "cafetière", image: "cafetier.jpg", description :"Cafetière : Dégustez un café parfait chaque matin grâce à une cafetière élégante, adaptée aux amateurs d’expresso comme aux amateurs de café filtre.", link:"https//"}, 
      { name: "fer à repasser", image: "FER_01.png", description :"Fer à repasser : Obtenez des vêtements impeccables en un instant avec un fer à repasser puissant et ergonomique, conçu pour éliminer les plis efficacement.", link:"https//"},
    ],
    info: [
      { name: "Imprimante", image: "Imprimante.jpg", description :"Imprimante : Imprimez vos documents en haute qualité avec une imprimante multifonction, idéale pour le bureau comme pour la maison.", link:"https//"},
      { name: "Clavier", image: "clavier.jpg" , description :"Clavier : Profitez d’un confort de frappe optimal avec un clavier ergonomique et réactif, conçu pour le gaming comme pour le travail.", link:"https//"}, 
      { name: "Routeur Wi-Fi", image: "WiFiNetwork.png", description :"Routeur Wi-Fi : Profitez d’une connexion Internet ultra-rapide et stable grâce à un routeur Wi-Fi performant, adapté aux foyers connectés.", link:"https//"}, 
      { name: "Écran pc", image: "Écran PC.jpg", description :"Écran PC : Améliorez votre expérience visuelle avec un écran PC haute résolution, idéal pour le gaming, le graphisme et le télétravail.", link:"https//"}, 
      { name: "Disque dur externe", image: "Disque.jpg", description :"Disque dur externe : Sauvegardez et transportez vos fichiers en toute sécurité avec un disque dur externe ultra-rapide et robuste.", link:"https//"}, 
      { name: "souris", image: "souris-gamer.jpg", description :"Souris : Naviguez avec précision grâce à une souris sans fil ou filaire, alliant confort et fluidité pour une utilisation quotidienne agréable.", link:"https//"}, 
      { name: "Ordinateur portable", image: "HP .jpg", description :"Ordinateur portable : Boostez votre productivité avec un ordinateur portable rapide et performant, parfait pour le travail comme pour le divertissement.", link:"https//"}
    ], 
    telephonie: [
      { name: "Smartphone", image: "Smartphone.jpg", description :"Smartphone : Découvrez la puissance et l’élégance avec un smartphone dernière génération, offrant des performances exceptionnelles et un appareil photo époustouflant.", link:"https//"},
      { name: "Tablette", image: "Tab.jpg" , description :"Tablette : Alliez mobilité et performance avec une tablette intuitive, idéale pour le travail, les études et le divertissement.", link:"https//"}, 
      { name: "écouteurs sans fil", image: "ÉcouteursSansFil.jpg", description :"Écouteurs sans fil : Plongez dans une expérience sonore immersive avec des écouteurs sans fil offrant une qualité audio exceptionnelle et une autonomie prolongée.", link:"https//"}, 
      { name: "chargeur rapide", image: "Charge.jpg", description :"Chargeur rapide : Rechargez vos appareils en un temps record avec un chargeur rapide compact et puissant.", link:"https//"}, 
      { name: "montre connectée", image: "Montre.jpg", description :"Montre connectée : Restez actif et connecté avec une montre intelligente, parfaite pour suivre vos performances sportives et vos notifications en un seul geste.", link:"https//"}, 
      { name: "Power bank", image: "Power.jpg", description :"Power bank : Ne tombez plus jamais en panne de batterie grâce à une power bank haute capacité, conçue pour vous accompagner partout.", link:"https//"}, 
    ],
    mode: [
      { name: "T-shirt", image: "T-shirt.jpg", description :"T-shirt : Apportez du style à votre quotidien avec un t-shirt tendance, conçu pour allier confort et élégance.", link:"https//"},
      { name: "Jeans", image: "Jean.jpg" , description :"Jeans : Misez sur un jean indémodable, offrant une coupe parfaite et un confort absolu en toutes circonstances.", link:"https//"}, 
      { name: "chaussure", image: "Chaussures.jpg", description :"Chaussures : Marchez avec assurance grâce à des chaussures stylées et confortables, adaptées à toutes les occasions.", link:"https//"}, 
      { name: "montre", image: "Montre_WEB1.jpg", description :"Montre : Affirmez votre style avec une montre sophistiquée, alliant design raffiné et fonctionnalités modernes.", link:"https//"}, 
      { name: "sac à main ", image: "sac-a-main-femme.jpg", description :"Sac à main : Ajoutez une touche d’élégance à votre tenue avec un sac à main chic et pratique, idéal pour toutes vos sorties.", link:"https//"},  
      { name: "Lunettes de soleil", image: "Lunettes2.jpg", description :"Lunettes de soleil : Protégez vos yeux avec des lunettes de soleil élégantes et tendance, offrant une protection UV optimale.", link:"https//"}
    ],
    jardinBrico: [
      { name: "Tondeuse à gazon", image: "Tondeuse.jpg", description: "Tondeuse à gazon : Obtenez une pelouse impeccable grâce à une tondeuse puissante et facile à manier. ", link: "https//" },
      { name: "Barbecue", image: "Barbecue.webp", description: "Barbecue : Partagez des moments conviviaux avec un barbecue performant, parfait pour des grillades savoureuses.", link: "https//" }, 
      { name: "Perceuse", image: "Perceuse.jpg", description :"Perceuse : Réalisez tous vos projets de bricolage avec une perceuse robuste et polyvalente.", link:"https//"}, 
      { name: "Échelle", image: "Échelle.jpg", description :"Échelle : Travaillez en toute sécurité avec une échelle stable et résistante, idéale pour tous vos travaux en hauteur.", link:"https//"}, 
      { name: "Gants de jardinage", image: "gants-de-jardinage.jpg", description :"Gants de jardinage : Protégez vos mains avec des gants de jardinage confortables et résistants.", link:"https//"}
    ], 
    maisonDeco: [
      { name: "Canapé", image: "Canapé.jpg", description :"Canapé : Offrez-vous un confort absolu avec un canapé design et moelleux, parfait pour des moments de détente inégalés.", link:"https//"},
      { name: "table basse", image: "TableBasse.jpg" , description :"Table basse : Ajoutez une touche moderne à votre salon avec une table basse élégante et fonctionnelle.", link:"https//"}, 
      { name: "Linge de lit", image: "Linge de lit.jpg", description :"Linge de lit : Dormez paisiblement dans un linge de lit doux et respirant, conçu pour un confort optimal toute l’année.", link:"https//"}, 
      { name: "Rideaux", image: "RIDEAUX.jpg", description :"Rideaux : Transformez votre intérieur avec des rideaux raffinés, alliant esthétisme et occultation parfaite.", link:"https//"}, 
      { name: "lampe de chevet ", image: "lampe_de_chevet.webp", description :"Lampe de chevet : Créez une ambiance chaleureuse avec une lampe de chevet design, idéale pour vos moments de lecture.", link:"https//"}, 
      { name: "cadre de photo", image: "Cadre-de photo.jpg", description :"Cadres photo : Personnalisez votre décoration avec des cadres photo élégants, mettant en valeur vos souvenirs les plus précieux.", link:"https//"}, 
    ], 
    sportLoisirs: [
      { name: "Vélo", image: "Vélo.jpg", description :"Vélo : Explorez de nouveaux horizons avec un vélo performant, alliant confort et sécurité.", link:"https//"},
      { name: "Haltères ", image: "Haltère.jpg" , description :"Haltères : Atteignez vos objectifs de fitness avec des haltères ergonomiques et ajustables.", link:"https//"}, 
      { name: "Tapis de yoga ", image: "grand_tapis_de yoga.jpg", description :"Tapis de yoga : Améliorez votre pratique avec un tapis de yoga antidérapant et ultra-confortable.", link:"https//"}, 
      { name: "Ballon de football", image: "Ballon.jpg", description :"Ballon de football : Profitez de matchs intenses avec un ballon de football résistant et parfaitement équilibré.", link:"https//"}, 
      { name: "Montre sport", image: "Montre sport.jpg", description :"Montre sport : Suivez vos performances avec une montre sport équipée de capteurs de dernière génération.", link:"https//"}, 
    ],
    jeux:[
      { name: "Puzzle", image: "Puzzle5.jpg ", description :"Puzzle : Stimulez votre esprit avec un puzzle captivant, idéal pour toute la famille.", link:"https//"},
      { name: "Jeux de société", image: "jeu-de-societe.jpg" , description :"Jeux de société : Passez des moments inoubliables avec des jeux de société divertissants et stratégiques.", link:"https//"}, 
      { name: "Peluche", image: "Peluche.webp", description :"Peluche : Offrez douceur et réconfort avec une peluche moelleuse et adorable.", link:"https//"}, 
      { name: "Voiture télécommandée", image: "Voiture télécommande.png", description :"Voiture télécommandée : Offrez à votre enfant des heures d’amusement avec une voiture télécommandée ultra-rapide et maniable.", link:"https//"}, 
      { name: "Console de jeux", image: "_console-de-jeu.png", description :"Console de jeux : Plongez dans l’univers du gaming avec une console de jeux dernière génération, offrant une expérience immersive exceptionnelle.", link:"https//"}
    ]
  };

  let categoryVisible = false;
  let currentCategory = null;

  // Gérer l'affichage des catégories
  categoBtn.addEventListener("click", () => {
    categoryVisible = !categoryVisible;
    categoryList.classList.toggle("hidden", !categoryVisible);
    productsSection.classList.add("hidden");
  });

  // Gérer l'affichage des produits
  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      if (currentCategory === category) {
        productsSection.classList.add("hidden");
        currentCategory = null;
      } else {
        displayProducts(category);
        productsSection.classList.remove("hidden");
        currentCategory = category;
      }
    });
  });

  // Cacher tout en cliquant en dehors
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".catego")) {
      categoryVisible = false;
      productsSection.classList.add("hidden");
      currentCategory = null;
    }
  });

  function displayProducts(category) {
    productList.innerHTML = "";

    products[category].forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      const shortDescription = product.description.length > 80 ? product.description.substring(0, 80) + '...' : product.description;
      const fullDescription = product.description;

      productCard.innerHTML = ` <img id="product-img-" src="${product.image}" alt="${product.name}" onclick="openImageModal('${product.image}')">
        <h3>${product.name}</h3>
        <p id="description" class="description">${product.description}</p>
        <a href="${product.link}" target="_blank" class="btn">Acheter</a>
      `;

      productList.appendChild(productCard);
    });
  }
});