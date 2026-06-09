const books = [
  {
    title: "Comme un cimetière debout en moi",
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
    cover: "night.jpeg",
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
    summary: `
      <strong>Titre :</strong> Extrait du recueil<br>
      <strong>Sous-titre :</strong> Ode à Ylesha<br><br>
      <strong>Contenu :</strong><br><br>
      « Regarde là-bas, la verdure est bien sereine.<br>
      Viens dans mes bras, maîtresse, que je t'y emmène<br>
      Voir l'enchanté Ouanga-négresse s'en allant<br>
      En élégance fine, d'une fleur à l'autre.<br><br>
      Ambitieux d'âme de s'en faire fidèle apôtre.<br>
      Fais de moi celui de ce conjugal instant.<br><br>
      Viens te blottir contre mon cœur, ô petit ange<br>
      Aux yeux d'une vierge splendeur qui se mélange<br>
      A la clarté de l'aube étant si fraîche et pure.<br><br>
      Rossignol fera son concert de plus bel,<br>
      Quand, là-bas, assis à l'ombre, l'âme fidèle,<br>
      On se contera les Tézin, les Jean Le sot.<br><br>
      Puis je me plongerai dans tes yeux, te serine<br>
      A quel point, combien tu es ma fleur divine. »<br><br>
      <strong>Étienne De Saint-Exil</strong><br>
      Août 2004
    `,
    buyText: "Lien de publication à venir",
    buyLink: "#",
    badge: "Extrait du recueil Un Chant Deux Cœurs",
    disabledBuy: true
  }
];

const booksGrid = document.querySelector('#booksGrid');
const bookModal = document.querySelector('#bookModal');
const bookModalTitle = document.querySelector('#bookModalTitle');
const bookModalSummary = document.querySelector('#bookModalSummary');
const bookModalBadge = document.querySelector('#bookModalBadge');
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
  if (bookModalSummary) {
    bookModalSummary.innerHTML = book.summary || '';
  }
  if (bookModalBadge) {
    const badgeText = book.badge || '';
    bookModalBadge.textContent = badgeText;
    bookModalBadge.style.display = badgeText ? 'inline-flex' : 'none';
  }
  if (bookModalBuy) {
    const isDisabled = Boolean(book.disabledBuy);
    bookModalBuy.textContent = book.buyText || 'Acheter le livre';
    bookModalBuy.href = isDisabled ? '#' : (book.buyLink || '#');
    bookModalBuy.classList.toggle('book-buy-btn--disabled', isDisabled);
    bookModalBuy.setAttribute('aria-disabled', String(isDisabled));
    bookModalBuy.setAttribute('tabindex', isDisabled ? '-1' : '0');
    bookModalBuy.onclick = isDisabled
      ? (event) => event.preventDefault()
      : null;
    bookModalBuy.removeAttribute('target');
    if (!isDisabled) {
      bookModalBuy.setAttribute('target', '_blank');
      bookModalBuy.setAttribute('rel', 'noopener');
    } else {
      bookModalBuy.removeAttribute('rel');
    }
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

const NEWS_STORAGE_KEY = 'ese_news';

const defaultNewsItems = [
  {
    id: 'news-1',
    title: 'Étienne De Saint-Exil au Salon du Livre Africain de Paris',
    excerpt: 'L’auteur participe à une rencontre littéraire autour de la mémoire, de l’identité et de la littérature francophone.',
    image: 'images/actualite-1.jpg',
    articleUrl: '#',
    createdAt: '2026-05-12T00:00:00.000Z'
  },
  {
    id: 'news-2',
    title: 'Une rencontre culturelle entre Haïti et la Bretagne',
    excerpt: 'Un échange autour de la culture, de la transmission et des ponts entre les peuples.',
    image: 'images/actualite-2.jpg',
    articleUrl: '#',
    createdAt: '2026-04-28T00:00:00.000Z'
  }
];

const parseStoredNews = (value) => {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

const saveNewsStore = (news) => {
  window.localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(news));
};

const getNews = () => {
  const stored = parseStoredNews(window.localStorage.getItem(NEWS_STORAGE_KEY));
  if (stored) {
    return [...stored].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  saveNewsStore(defaultNewsItems);
  return [...defaultNewsItems];
};

const createNews = ({ title, excerpt, image, articleUrl }) => {
  const news = getNews();
  const newItem = {
    id: crypto.randomUUID ? crypto.randomUUID() : `news-${Date.now()}`,
    title: title.trim(),
    excerpt: excerpt.trim(),
    image: image.trim(),
    articleUrl: articleUrl.trim(),
    createdAt: new Date().toISOString()
  };
  const nextNews = [newItem, ...news];
  saveNewsStore(nextNews);
  return newItem;
};

const updateNews = (id, updates) => {
  const news = getNews();
  const index = news.findIndex((item) => item.id === id);
  if (index === -1) return null;
  const updatedItem = {
    ...news[index],
    title: updates.title.trim(),
    excerpt: updates.excerpt.trim(),
    image: updates.image.trim(),
    articleUrl: updates.articleUrl.trim()
  };
  const nextNews = [...news];
  nextNews[index] = updatedItem;
  saveNewsStore(nextNews);
  return updatedItem;
};

const deleteNews = (id) => {
  const news = getNews();
  const nextNews = news.filter((item) => item.id !== id);
  saveNewsStore(nextNews);
  return nextNews;
};

const renderNewsCards = () => {
  const newsGrid = document.querySelector('#newsGrid');
  if (!newsGrid) return;
  const news = getNews();
  if (!news.length) {
    newsGrid.innerHTML = '<div class="news-empty">Aucune actualité disponible.</div>';
    return;
  }
  newsGrid.innerHTML = news.map((item) => `
    <article class="news-card">
      <div class="news-cover">
        <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null;this.src='portrait.png';" />
      </div>
      <div class="news-card-content">
        <span class="news-date">${new Date(item.createdAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <h2>${item.title}</h2>
        <p>${item.excerpt}</p>
        <a class="news-link" href="${item.articleUrl}" target="_blank" rel="noopener">Lire l’article →</a>
      </div>
    </article>
  `).join('');
};

renderNewsCards();

const adminNewsList = document.querySelector('#adminNewsList');
const newsForm = document.querySelector('#newsForm');
const newsIdInput = document.querySelector('#newsId');
const newsTitleInput = document.querySelector('#newsTitle');
const newsExcerptInput = document.querySelector('#newsExcerpt');
const newsImageInput = document.querySelector('#newsImage');
const newsImageFileInput = document.querySelector('#newsImageFile');
const newsImagePreview = document.querySelector('#newsImagePreview');
const newsUrlInput = document.querySelector('#newsUrl');
const newsSubmitBtn = document.querySelector('#newsSubmitBtn');
const newsCancelBtn = document.querySelector('#newsCancelBtn');
let editingNewsId = null;
let selectedImageBase64 = '';

const readImageAsBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const updateImagePreview = (src) => {
  if (!newsImagePreview) return;
  if (src) {
    newsImagePreview.src = src;
    newsImagePreview.hidden = false;
  } else {
    newsImagePreview.src = '';
    newsImagePreview.hidden = true;
  }
};

const resetNewsForm = () => {
  if (!newsForm) return;
  newsForm.reset();
  editingNewsId = null;
  selectedImageBase64 = '';
  updateImagePreview('');
  if (newsIdInput) newsIdInput.value = '';
  if (newsSubmitBtn) newsSubmitBtn.textContent = 'Publier';
};

const renderAdminNews = () => {
  if (!adminNewsList) return;
  const news = getNews();
  if (!news.length) {
    adminNewsList.innerHTML = '<div class="news-empty">Aucune actualité enregistrée.</div>';
    return;
  }
  adminNewsList.innerHTML = news.map((item) => `
    <article class="admin-news-card">
      <div class="admin-news-card-inner">
        <div class="admin-news-meta">
          <strong>${item.title}</strong>
          <span>${new Date(item.createdAt).toLocaleDateString('fr-FR')}</span>
        </div>
        <div class="admin-news-text">${item.excerpt}</div>
        <div class="admin-news-actions">
          <button type="button" data-action="edit" data-id="${item.id}">Modifier</button>
          <button type="button" data-action="delete" data-id="${item.id}">Supprimer</button>
        </div>
      </div>
    </article>
  `).join('');
};

const fillNewsForm = (item) => {
  if (!newsForm || !item) return;
  editingNewsId = item.id;
  if (newsIdInput) newsIdInput.value = item.id;
  if (newsTitleInput) newsTitleInput.value = item.title;
  if (newsExcerptInput) newsExcerptInput.value = item.excerpt;
  if (newsImageInput) newsImageInput.value = item.image;
  if (newsImageFileInput) newsImageFileInput.value = '';
  selectedImageBase64 = '';
  updateImagePreview(item.image);
  if (newsUrlInput) newsUrlInput.value = item.articleUrl;
  if (newsSubmitBtn) newsSubmitBtn.textContent = 'Modifier';
};

if (newsImageFileInput) {
  newsImageFileInput.addEventListener('change', async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || !target.files?.length) {
      selectedImageBase64 = '';
      updateImagePreview('');
      return;
    }

    const file = target.files[0];
    selectedImageBase64 = await readImageAsBase64(file);
    updateImagePreview(selectedImageBase64);
  });
}

if (newsForm) {
  newsForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = newsTitleInput?.value || '';
    const excerpt = newsExcerptInput?.value || '';
    const image = newsImageInput?.value || '';
    const articleUrl = newsUrlInput?.value || '';

    if (!title.trim() || !excerpt.trim()) return;

    let imageValue = selectedImageBase64 || image.trim();
    if (!imageValue) return;

    if (editingNewsId) {
      updateNews(editingNewsId, { title, excerpt, image: imageValue, articleUrl });
    } else {
      createNews({ title, excerpt, image: imageValue, articleUrl });
    }

    resetNewsForm();
    renderAdminNews();
    renderNewsCards();
  });
}

if (newsCancelBtn) {
  newsCancelBtn.addEventListener('click', resetNewsForm);
}

if (adminNewsList) {
  adminNewsList.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) return;

    if (action === 'edit') {
      const item = getNews().find((entry) => entry.id === id);
      fillNewsForm(item);
    }

    if (action === 'delete') {
      deleteNews(id);
      renderAdminNews();
      renderNewsCards();
      if (editingNewsId === id) {
        resetNewsForm();
      }
    }
  });
}

renderAdminNews();
