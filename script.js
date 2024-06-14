const chateaux = [
  {
    name: "Château 1",
    category: "medieval",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    name: "Château 2",
    category: "renaissance",
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    name: "Château 3",
    category: "medieval",
    image: "https://picsum.photos/200/300?random=3",
  },
  {
    name: "Château 4",
    category: "renaissance",
    image: "https://picsum.photos/200/300?random=4",
  },
  {
    name: "Château 5",
    category: "medieval",
    image: "https://picsum.photos/200/300?random=5",
  },
  {
    name: "Château 6",
    category: "renaissance",
    image: "https://picsum.photos/200/300?random=6",
  },
  {
    name: "Château 7",
    category: "medieval",
    image: "https://picsum.photos/200/300?random=7",
  },
  {
    name: "Château 8",
    category: "renaissance",
    image: "https://picsum.photos/200/300?random=8",
  },
  {
    name: "Château 9",
    category: "medieval",
    image: "https://picsum.photos/200/300?random=9",
  },
  {
    name: "Château 10",
    category: "renaissance",
    image: "https://picsum.photos/200/300?random=10",
  },
];

function displayChateaux(filteredChateaux) {
  const chateauxList = document.getElementById("chateaux-list");
  chateauxList.innerHTML = "";
  filteredChateaux.forEach((chateau) => {
    const chateauCard = document.createElement("div");
    chateauCard.className = "chateau-card";
    chateauCard.innerHTML = `
          <img src="${chateau.image}" alt="${chateau.name}">
          <h3>${chateau.name}</h3>
          <p>${
            chateau.category.charAt(0).toUpperCase() + chateau.category.slice(1)
          }</p>
      `;
    chateauxList.appendChild(chateauCard);
  });
}

function filterChateaux(category) {
  if (category === "all") {
    displayChateaux(chateaux);
  } else {
    const filteredChateaux = chateaux.filter(
      (chateau) => chateau.category === category
    );
    displayChateaux(filteredChateaux);
  }
}

// Afficher tous les châteaux par défaut
displayChateaux(chateaux);
