const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

btn?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const books = [
  { title: "Comme un cimetiere debout en moi", cover: "Comme-un-cimetiere-debout-en-moi.jpg" },
  { title: "Je m'acuse", cover: "oeuvres2.jpg" },
  { title: "Les nues mendiantes", cover: "oeuvres4.jpg" },
  { title: "Et la mer a bu la nuit", cover: "oeuvres3.jfif" },
  { title: "Fumée sur les îles", cover: "portrait.png" },
  { title: "Un chant deux coeurs", cover: "portrait.png" }
];


const booksGrid = document.querySelector('#booksGrid');
if (booksGrid) {
  books.forEach((book) => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.innerHTML = `
      <div class="book-cover">
        <img src="${book.cover}" alt="${book.title} couverture" />
      </div>
      <h3>${book.title}</h3>
      <span class="book-divider"></span>
    `;
    booksGrid.appendChild(card);
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
