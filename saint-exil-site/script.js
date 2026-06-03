const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

btn?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const books = [
  {
    title: "Comme un cimetiere debout en moi",
    cover: "comme.jpeg",
    summary: `Comme un cimetière debout en moi dépeint la déchéance psychologique d'un homme confiné, luttant contre la faim et l'isolement alors que le chaos règne dehors. Ce roman explore la fragilité masculine et le poids des souvenirs à travers la transformation du protagoniste en une carcasse impuissante. L'œuvre analyse le traumatisme de la claustration et la violence urbaine, transformant l'intime en un cimetière de souvenirs brisés.`,
    buyText: "Acheter sur Amazon",
    buyLink: "https://www.amazon.fr/Comme-cimeti%C3%A8re-debout-en-moi/dp/2493420276"
  },
  {
    title: "Je m'accuse",
    cover: "oeuvres2.jpg",
    summary: `Résumé à ajouter prochainement.`,
    buyText: "Lien d’achat à venir",
    buyLink: "#"
  },
  {
    title: "Les nues mendiantes",
    cover: "oeuvres4.jpg",
    summary: `Résumé à ajouter prochainement.`,
    buyText: "Lien d’achat à venir",
    buyLink: "#"
  },
  {
    title: "Et la mer a bu la nuit",
    cover: "mer.jpeg",
    summary: `Et la mer a bu la nuit est une exploration poétique de la complexité des sentiments d’Étienne De Saint-Exil. Ce recueil invite les lecteurs à plonger dans un océan d’émotions intenses, où chaque vers exprime une douce violence intérieure. Avec une plume précise et profonde, l’auteur sculpte les mots, offrant un voyage littéraire qui renouvelle le lien avec la poésie. Son style subtil et évocateur capture l’essence de chaque sentiment, transformant la lecture en une expérience riche et mémorable.`,
    buyText: "Obtenir le livre",
    buyLink: "https://www.lysbleueditions.com/litterature/poesie/et-la-mer-a-bu-la-nuit/"
  },
  {
    title: "Fumées sur les îles",
    cover: "fumees.jpeg",
    summary: `Résumé à ajouter prochainement.`,
    buyText: "Lien d’achat à venir",
    buyLink: "#"
  },
  {
    title: "Un chant deux coeurs",
    cover: "un chant.jpeg",
    summary: `Résumé à ajouter prochainement.`,
    buyText: "Lien d’achat à venir",
    buyLink: "#"
  }
];

const booksGrid = document.querySelector('#booksGrid');
const bookModal = document.querySelector('#bookModal');
const bookModalTitle = document.querySelector('#bookModalTitle');
const bookModalSummary = document.querySelector('#bookModalSummary');
const bookModalCover = document.querySelector('.book-modal-cover');
const bookModalBuy = document.querySelector('#bookModalBuy');
const bookModalClose = document.querySelector('.book-modal-close');
const bookModalBackdrop = document.querySelector('[data-close-modal]');

const openBookModal = (index) => {
  if (!bookModal || !books[index]) return;
  const book = books[index];

  if (bookModalCover) {
    bookModalCover.src = book.cover;
    bookModalCover.alt = `${book.title} couverture`;
  }
  if (bookModalTitle) bookModalTitle.textContent = book.title;
  if (bookModalSummary) bookModalSummary.textContent = book.summary;
  if (bookModalBuy) {
    bookModalBuy.textContent = book.buyText;
    bookModalBuy.href = book.buyLink;
  }

  bookModal.classList.add('active');
  bookModal.setAttribute('aria-hidden', 'false');
};

const closeBookModal = () => {
  if (!bookModal) return;
  bookModal.classList.remove('active');
  bookModal.setAttribute('aria-hidden', 'true');
};

if (booksGrid) {
  books.forEach((book, index) => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.dataset.index = index;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.innerHTML = `
      <div class="book-cover">
        <img src="${book.cover}" alt="${book.title} couverture" />
      </div>
      <h3>${book.title}</h3>
      <span class="book-divider"></span>
    `;

    card.addEventListener('click', () => openBookModal(index));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openBookModal(index);
      }
    });

    booksGrid.appendChild(card);
  });
}

if (bookModal) {
  bookModalClose?.addEventListener('click', closeBookModal);
  bookModalBackdrop?.addEventListener('click', closeBookModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && bookModal.classList.contains('active')) {
      closeBookModal();
    }
  });
}

const newsItems = [
  {
    title: "Étienne De Saint-Exil au Salon du Livre Africain de Paris",
    date: "12 mai 2026",
    excerpt: "L’auteur participe à une rencontre littéraire autour de la mémoire, de l’identité et de la littérature francophone.",
    cover: "images/actualite-1.jpg",
    link: "#"
  },
  {
    title: "Une rencontre culturelle entre Haïti et la Bretagne",
    date: "28 avril 2026",
    excerpt: "Un échange autour de la culture, de la transmission et des ponts entre les peuples.",
    cover: "images/actualite-2.jpg",
    link: "#"
  }
];

const newsGrid = document.querySelector('#newsGrid');
if (newsGrid) {
  newsItems.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.innerHTML = `
      <div class="news-cover">
        <img src="${item.cover}" alt="${item.title} couverture" onerror="this.onerror=null;this.src='portrait.png';" />
      </div>
      <div class="news-card-content">
        <span class="news-date">${item.date}</span>
        <h2>${item.title}</h2>
        <p>${item.excerpt}</p>
        <a class="news-link" href="${item.link}" target="_blank" rel="noopener">Lire l’article →</a>
      </div>
    `;
    newsGrid.appendChild(card);
  });
}
