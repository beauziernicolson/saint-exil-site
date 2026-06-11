const BOOKS_STORAGE_KEY = 'ese_books';
const CONTACTS_STORAGE_KEY = 'ese_contacts';

const defaultBooks = [
  {
    id: 'book-1',
    title: 'Comme un cimetière debout en moi',
    cover: 'comme.jpeg',
    summary: 'Comme un cimetière debout en moi dépeint la déchéance psychologique d\'un homme confiné, luttant contre la faim et l\'isolement alors que le chaos règne dehors. Ce roman explore la fragilité masculine et le poids des souvenirs à travers la transformation du protagoniste en une carcasse impuissante. L\'œuvre analyse le traumatisme de la claustration et la violence urbaine, transformant l\'intime en un cimetière de souvenirs brisés.',
    excerpt: 'Comme un cimetière debout en moi dépeint la déchéance psychologique d\'un homme confiné, luttant contre la faim et l\'isolement alors que le chaos règne dehors. Ce roman explore la fragilité masculine et le poids des souvenirs à travers la transformation du protagoniste en une carcasse impuissante. L\'œuvre analyse le traumatisme de la claustration et la violence urbaine, transformant l\'intime en un cimetière de souvenirs brisés.',
    buyText: 'Acheter sur Amazon',
    buyLink: 'https://www.amazon.fr/Comme-cimeti%C3%A8re-debout-en-moi/dp/2493420276',
    badge: '',
    disabledBuy: false,
    createdAt: '2026-05-01T10:00:00.000Z'
  },
  {
    id: 'book-2',
    title: 'Je m\'accuse',
    cover: 'oeuvres2.jpg',
    summary: '<!-- COLLER ICI L\'EXTRAIT COMPLET FOURNI PAR LE CLIENT -->',
    excerpt: 'Extrait du livre paru en 2012',
    buyText: 'Lire l\'extrait (PDF)',
    buyLink: '#',
    pdfLink: 'Extrait - Je m\'accuse.pdf',
    badge: 'Extrait du livre paru en 2012',
    disabledBuy: true,
    createdAt: '2026-05-02T10:00:00.000Z'
  },
  {
    id: 'book-3',
    title: 'Les nues mendiantes',
    cover: 'night.jpeg',
    summary: 'Résumé à ajouter prochainement.',
    excerpt: 'Résumé à ajouter prochainement.',
    buyText: 'Lien d’achat à venir',
    buyLink: '#',
    badge: '',
    disabledBuy: false,
    createdAt: '2026-05-03T10:00:00.000Z'
  },
  {
    id: 'book-4',
    title: 'Et la mer a bu la nuit',
    cover: 'mer.jpeg',
    summary: 'Et la mer a bu la nuit est une exploration poétique de la complexité des sentiments d’Étienne De Saint-Exil. Ce recueil invite les lecteurs à plonger dans un océan d’émotions intenses, où chaque vers exprime une douce violence intérieure. Avec une plume précise et profonde, l’auteur sculpte les mots, offrant un voyage littéraire qui renouvelle le lien avec la poésie. Son style subtil et évocateur capture l’essence de chaque sentiment, transformant la lecture en une expérience riche et mémorable.',
    excerpt: 'Et la mer a bu la nuit est une exploration poétique de la complexité des sentiments d’Étienne De Saint-Exil. Ce recueil invite les lecteurs à plonger dans un océan d’émotions intenses, où chaque vers exprime une douce violence intérieure. Avec une plume précise et profonde, l’auteur sculpte les mots, offrant un voyage littéraire qui renouvelle le lien avec la poésie. Son style subtil et évocateur capture l’essence de chaque sentiment, transformant la lecture en une expérience riche et mémorable.',
    buyText: 'Obtenir le livre',
    buyLink: 'https://www.lysbleueditions.com/litterature/poesie/et-la-mer-a-bu-la-nuit/',
    badge: '',
    disabledBuy: false,
    createdAt: '2026-05-04T10:00:00.000Z'
  },
  {
    id: 'book-5',
    title: 'Fumées sur les îles',
    cover: 'fumees.jpeg',
    summary: `<h3>L'Écriture Inconnue</h3>

<p><em>Extrait du recueil Fumées sur les îles</em></p>

Sous une couverture<br>
De servitude,<br>
Des mots cimetières.<br>
Paragraphes incohérents<br>
En lettres de sable<br>
Traitant ce sujet<br>
Hostile à l'écriture<br>
De l'Au-delà :<br>
C'est l'ouvrage<br>
Des gueux<br>
Où tout est gravé<br>
A l'envers.<br><br>

<strong>Étienne De Saint-Exil</strong><br>
2009`,
    excerpt: 'Extrait du recueil Fumées sur les îles.',
    buyText: 'Lien de publication à venir',
    buyLink: '#',
    badge: 'Extrait du recueil Fumées sur les îles',
    disabledBuy: true,
    createdAt: '2026-05-05T10:00:00.000Z'
  },
  {
    id: 'book-6',
    title: 'Un chant deux coeurs',
    cover: 'un chant.jpeg',
    summary: `<span class="section-label">Titre :</span>

<h3>Ode à Ylesha</h3>

<p><em>Extrait du recueil Un Chant Deux Cœurs</em></p>

« Regarde là-bas, la verdure est bien sereine.<br>
Viens dans mes bras, maîtresse, que je t'y emmène<br>
Voir l'enchanté Ouanga-négresse s'en allant<br>
En élégance fine, d'une fleur à l'autre.<br><br>

Ambitieux d'âme de s'en faire fidèle apôtre.<br>
Fais de moi celui de ce conjugal instant.<br><br>

Viens te blottir contre mon cœur, ô petit ange<br>
Aux yeux d'une vierge splendeur qui se mélange<br>
A la clarté de l'aube étant si fraîche et pure. Ô<br><br>

Rossignol fera son concert de plus bel,<br>
Quand, là-bas, assis à l'ombre, l'âme fidèle,<br>
On se contera les Tézin, les Jean Le sot.<br><br>

Puis je me plongerai dans tes yeux, te serine<br>
A quel point, combien tu es ma fleur divine. »<br><br>

<strong>Étienne De Saint-Exil</strong><br>
Août 2004`,
    excerpt: 'Extrait du recueil Un Chant Deux Cœurs.',
    buyText: 'Lien de publication à venir',
    buyLink: '#',
    badge: 'Extrait du recueil Un Chant Deux Cœurs',
    disabledBuy: true,
    createdAt: '2026-05-06T10:00:00.000Z'
  }
];

const defaultContacts = {
  instagram: 'https://www.instagram.com/etienne_de_saint_exil',
  email: 'contact@etiennedesaintexil.com',
  facebook: 'https://www.facebook.com/share/18Zdq7zx3n/',
  twitter: '#',
  tiktok: 'https://www.tiktok.com/@etienne.de.sainte',
  whatsapp: '',
  phone: ''
};

const createId = (prefix) => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
};

const parseStoredJson = (value) => {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const normalizeBook = (item, fallbackId) => ({
  id: item?.id || fallbackId || createId('book'),
  title: item?.title || 'Œuvre sans titre',
  cover: item?.cover || '',
  summary: item?.summary || item?.excerpt || '',
  excerpt: item?.excerpt || item?.summary || '',
  buyText: item?.buyText || 'Acheter le livre',
  buyLink: item?.buyLink || '#',
  pdfLink: item?.pdfLink || '',
  badge: item?.badge || '',
  disabledBuy: Boolean(item?.disabledBuy),
  createdAt: item?.createdAt || new Date().toISOString()
});

const syncBooksFromDefaultData = () => {
  const stored = parseStoredJson(window.localStorage.getItem(BOOKS_STORAGE_KEY));

  if (!Array.isArray(stored)) {
    window.localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(defaultBooks));
    return [...defaultBooks];
  }

  const defaultsByTitle = Object.fromEntries(
    defaultBooks.map((book) => [book.title, book])
  );

  const nextBooks = stored.map((item, index) => {
    const title = typeof item?.title === 'string' ? item.title.trim() : '';

    if (title === 'Un chant deux coeurs' || title === 'Je m\'accuse' || title === 'Fumées sur les îles') {
      const source = defaultsByTitle[title];

      if (!source) {
        return normalizeBook(item, item?.id || `book-${index + 1}`);
      }

      return normalizeBook({
        ...item,
        title,
        cover: item?.cover || source.cover,
        summary: source.summary,
        excerpt: source.excerpt,
        buyText: source.buyText,
        buyLink: source.buyLink,
        pdfLink: source.pdfLink || item?.pdfLink || '',
        badge: source.badge,
        disabledBuy: Boolean(source.disabledBuy),
        createdAt: item?.createdAt || source.createdAt
      }, item?.id || `book-${index + 1}`);
    }

    return normalizeBook(item, item?.id || `book-${index + 1}`);
  });

  window.localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(nextBooks));
  return nextBooks;
};

const getBooks = () => syncBooksFromDefaultData();

const createBook = (book) => {
  const books = getBooks();
  const newBook = normalizeBook({
    ...book,
    id: createId('book'),
    createdAt: new Date().toISOString()
  }, createId('book'));
  const nextBooks = [newBook, ...books];
  window.localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(nextBooks));
  return newBook;
};

const updateBook = (id, updates) => {
  const books = getBooks();
  const index = books.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const updatedBook = normalizeBook({
    ...books[index],
    ...updates,
    id,
    createdAt: books[index].createdAt || new Date().toISOString()
  }, id);

  books[index] = updatedBook;
  window.localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
  return updatedBook;
};

const deleteBook = (id) => {
  const books = getBooks();
  const nextBooks = books.filter((item) => item.id !== id);
  window.localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(nextBooks));
  return nextBooks;
};

const getContacts = () => {
  const stored = parseStoredJson(window.localStorage.getItem(CONTACTS_STORAGE_KEY));
  if (stored && typeof stored === 'object') {
    return { ...defaultContacts, ...stored };
  }

  window.localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(defaultContacts));
  return { ...defaultContacts };
};

const saveContacts = (contacts) => {
  const nextContacts = { ...defaultContacts, ...contacts };
  window.localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(nextContacts));
  return nextContacts;
};

const booksGrid = document.querySelector('#booksGrid');
const bookModal = document.querySelector('#bookModal');
const bookModalTitle = document.querySelector('#bookModalTitle');
const bookModalSummary = document.querySelector('#bookModalSummary');
const bookModalBadge = document.querySelector('#bookModalBadge');
const bookModalCover = document.querySelector('.book-modal-cover');
const bookModalBuy = document.querySelector('#bookModalBuy');
const bookModalClose = document.querySelector('.book-modal-close');
const bookModalBackdrop = document.querySelector('[data-close-modal]');

const openBookModal = (book) => {
  if (!bookModal || !book) return;

  if (bookModalCover) {
    bookModalCover.src = book.cover || 'portrait.png';
    bookModalCover.alt = `${book.title} couverture`;
  }

  if (bookModalTitle) bookModalTitle.textContent = book.title;
  if (bookModalSummary) {
    bookModalSummary.innerHTML = book.summary || book.excerpt || '';
  }
  if (bookModalBadge) {
    const badgeText = book.badge || '';
    bookModalBadge.textContent = badgeText;
    bookModalBadge.style.display = badgeText ? 'inline-flex' : 'none';
  }
  if (bookModalBuy) {
    const hasPdfLink = Boolean(book.pdfLink && String(book.pdfLink).trim());

    if (hasPdfLink) {
      bookModalBuy.textContent = book.buyText || 'Lire l\'extrait (PDF)';
      bookModalBuy.href = book.pdfLink;
      bookModalBuy.classList.remove('book-buy-btn--disabled');
      bookModalBuy.setAttribute('aria-disabled', 'false');
      bookModalBuy.setAttribute('tabindex', '0');
      bookModalBuy.onclick = null;
      bookModalBuy.setAttribute('target', '_blank');
      bookModalBuy.setAttribute('rel', 'noopener noreferrer');
    } else {
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
  }

  bookModal.classList.add('active');
  bookModal.setAttribute('aria-hidden', 'false');
};

const closeBookModal = () => {
  if (!bookModal) return;
  bookModal.classList.remove('active');
  bookModal.setAttribute('aria-hidden', 'true');
};

const renderBookCards = () => {
  if (!booksGrid) return;

  const books = getBooks();
  booksGrid.innerHTML = '';

  if (!books.length) {
    booksGrid.innerHTML = '<div class="news-empty">Aucune œuvre disponible pour le moment.</div>';
    return;
  }

  books.forEach((book) => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.dataset.id = book.id;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.innerHTML = `
      <div class="book-cover">
        <img src="${book.cover || 'portrait.png'}" alt="${book.title} couverture" />
      </div>
      <h3>${book.title}</h3>
      <span class="book-divider"></span>
    `;

    card.addEventListener('click', () => openBookModal(book));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openBookModal(book);
      }
    });

    booksGrid.appendChild(card);
  });
};

renderBookCards();

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

const adminBooksList = document.querySelector('#adminBooksList');
const bookForm = document.querySelector('#bookForm');
const bookIdInput = document.querySelector('#bookId');
const bookTitleInput = document.querySelector('#bookTitle');
const bookCoverInput = document.querySelector('#bookCover');
const bookCoverFileInput = document.querySelector('#bookCoverFile');
const bookCoverPreview = document.querySelector('#bookCoverPreview');
const bookSummaryInput = document.querySelector('#bookSummary');
const bookExcerptInput = document.querySelector('#bookExcerpt');
const bookBuyTextInput = document.querySelector('#bookBuyText');
const bookBuyLinkInput = document.querySelector('#bookBuyLink');
const bookBadgeInput = document.querySelector('#bookBadge');
const bookDisabledBuyInput = document.querySelector('#bookDisabledBuy');
const bookSubmitBtn = document.querySelector('#bookSubmitBtn');
const bookCancelBtn = document.querySelector('#bookCancelBtn');
let editingBookId = null;
let selectedBookCoverBase64 = '';

const updateBookCoverPreview = (src) => {
  if (!bookCoverPreview) return;
  if (src) {
    bookCoverPreview.src = src;
    bookCoverPreview.hidden = false;
  } else {
    bookCoverPreview.src = '';
    bookCoverPreview.hidden = true;
  }
};

const resetBookForm = () => {
  if (!bookForm) return;
  bookForm.reset();
  editingBookId = null;
  selectedBookCoverBase64 = '';
  updateBookCoverPreview('');
  if (bookIdInput) bookIdInput.value = '';
  if (bookSubmitBtn) bookSubmitBtn.textContent = 'Ajouter';
  if (bookDisabledBuyInput) bookDisabledBuyInput.value = 'false';
};

const renderAdminBooks = () => {
  if (!adminBooksList) return;
  const books = getBooks();

  if (!books.length) {
    adminBooksList.innerHTML = '<div class="news-empty">Aucune œuvre enregistrée.</div>';
    return;
  }

  adminBooksList.innerHTML = books.map((book) => `
    <article class="admin-news-card">
      <div class="admin-news-card-inner">
        <div class="admin-news-meta">
          <strong>${book.title}</strong>
          <span>${book.badge || 'Œuvre locale'}</span>
        </div>
        <div class="admin-news-text">${book.summary || book.excerpt || 'Aucun résumé disponible.'}</div>
        <div class="admin-news-actions">
          <button type="button" data-action="edit-book" data-id="${book.id}">Modifier</button>
          <button type="button" data-action="delete-book" data-id="${book.id}">Supprimer</button>
        </div>
      </div>
    </article>
  `).join('');
};

const fillBookForm = (book) => {
  if (!bookForm || !book) return;
  editingBookId = book.id;
  if (bookIdInput) bookIdInput.value = book.id;
  if (bookTitleInput) bookTitleInput.value = book.title || '';
  if (bookCoverInput) bookCoverInput.value = book.cover || '';
  if (bookSummaryInput) bookSummaryInput.value = book.summary || '';
  if (bookExcerptInput) bookExcerptInput.value = book.excerpt || '';
  if (bookBuyTextInput) bookBuyTextInput.value = book.buyText || '';
  if (bookBuyLinkInput) bookBuyLinkInput.value = book.buyLink || '';
  if (bookBadgeInput) bookBadgeInput.value = book.badge || '';
  if (bookDisabledBuyInput) bookDisabledBuyInput.value = String(Boolean(book.disabledBuy));
  selectedBookCoverBase64 = '';
  updateBookCoverPreview(book.cover || '');
  if (bookSubmitBtn) bookSubmitBtn.textContent = 'Modifier';
};

if (bookCoverFileInput) {
  bookCoverFileInput.addEventListener('change', async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || !target.files?.length) {
      selectedBookCoverBase64 = '';
      updateBookCoverPreview('');
      return;
    }

    const file = target.files[0];
    selectedBookCoverBase64 = await readImageAsBase64(file);
    updateBookCoverPreview(selectedBookCoverBase64);
  });
}

if (bookForm) {
  bookForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = bookTitleInput?.value || '';
    const summary = bookSummaryInput?.value || '';
    const excerpt = bookExcerptInput?.value || '';
    const buyText = bookBuyTextInput?.value || 'Acheter le livre';
    const buyLink = bookBuyLinkInput?.value || '#';
    const badge = bookBadgeInput?.value || '';
    const disabledBuy = bookDisabledBuyInput?.value === 'true';
    const cover = selectedBookCoverBase64 || (bookCoverInput?.value || '').trim();

    if (!title.trim()) return;

    if (editingBookId) {
      updateBook(editingBookId, {
        title: title.trim(),
        cover,
        summary: summary.trim(),
        excerpt: excerpt.trim(),
        buyText: buyText.trim(),
        buyLink: buyLink.trim(),
        badge: badge.trim(),
        disabledBuy
      });
    } else {
      createBook({
        title: title.trim(),
        cover,
        summary: summary.trim(),
        excerpt: excerpt.trim(),
        buyText: buyText.trim(),
        buyLink: buyLink.trim(),
        badge: badge.trim(),
        disabledBuy
      });
    }

    resetBookForm();
    renderAdminBooks();
    renderBookCards();
  });
}

if (bookCancelBtn) {
  bookCancelBtn.addEventListener('click', resetBookForm);
}

if (adminBooksList) {
  adminBooksList.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.dataset.action;
    const id = target.dataset.id;

    if (action === 'edit-book' && id) {
      const book = getBooks().find((item) => item.id === id);
      if (book) fillBookForm(book);
      return;
    }

    if (action === 'delete-book' && id) {
      deleteBook(id);
      renderAdminBooks();
      renderBookCards();
    }
  });
}

renderAdminBooks();

const contactForm = document.querySelector('#contactForm');
const contactInstagramInput = document.querySelector('#contactInstagram');
const contactEmailInput = document.querySelector('#contactEmail');
const contactFacebookInput = document.querySelector('#contactFacebook');
const contactTwitterInput = document.querySelector('#contactTwitter');
const contactTikTokInput = document.querySelector('#contactTikTok');
const contactWhatsAppInput = document.querySelector('#contactWhatsApp');
const contactPhoneInput = document.querySelector('#contactPhone');

const normalizeContactHref = (value, key) => {
  const trimmed = String(value || '').trim();
  if (!trimmed || trimmed === '#') return '#';

  if (key === 'email') return `mailto:${trimmed}`;
  if (key === 'whatsapp') return `https://wa.me/${trimmed.replace(/\D/g, '')}`;
  if (key === 'phone') return `tel:${trimmed}`;
  if (key === 'instagram' && !/^https?:\/\//i.test(trimmed)) return `https://www.instagram.com/${trimmed.replace(/^@/, '')}`;
  if (key === 'facebook' && !/^https?:\/\//i.test(trimmed)) return `https://www.facebook.com/${trimmed.replace(/^@/, '')}`;
  if (key === 'twitter' && !/^https?:\/\//i.test(trimmed)) return `https://x.com/${trimmed.replace(/^@/, '')}`;
  if (key === 'tiktok' && !/^https?:\/\//i.test(trimmed)) return `https://www.tiktok.com/@${trimmed.replace(/^@/, '')}`;

  return trimmed;
};

const applyStoredContacts = () => {
  const contacts = getContacts();
  document.querySelectorAll('[data-contact-key]').forEach((link) => {
    const key = link.dataset.contactKey;
    const value = contacts[key] || '';
    link.href = normalizeContactHref(value, key);
  });
};

const renderContactForm = () => {
  const contacts = getContacts();
  if (contactInstagramInput) contactInstagramInput.value = contacts.instagram || '';
  if (contactEmailInput) contactEmailInput.value = contacts.email || '';
  if (contactFacebookInput) contactFacebookInput.value = contacts.facebook || '';
  if (contactTwitterInput) contactTwitterInput.value = contacts.twitter || '';
  if (contactTikTokInput) contactTikTokInput.value = contacts.tiktok || '';
  if (contactWhatsAppInput) contactWhatsAppInput.value = contacts.whatsapp || '';
  if (contactPhoneInput) contactPhoneInput.value = contacts.phone || '';
};

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveContacts({
      instagram: contactInstagramInput?.value || '',
      email: contactEmailInput?.value || '',
      facebook: contactFacebookInput?.value || '',
      twitter: contactTwitterInput?.value || '',
      tiktok: contactTikTokInput?.value || '',
      whatsapp: contactWhatsAppInput?.value || '',
      phone: contactPhoneInput?.value || ''
    });
    applyStoredContacts();
  });
}

renderContactForm();
applyStoredContacts();

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

function readImageAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

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
