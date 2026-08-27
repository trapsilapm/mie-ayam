/**
 * DATA 5 VARIAN MIE AYAM PILIHAN
 * File gambar dari folder: images/mie 1.jpg s/d images/mie 5.jpg
 * Dilengkapi atribusi sumber gambar
 */
const MIE_AYAM_ITEMS = [
  {
    id: 1,
    name: "Mie Ayam Frozen Praktis Spesial",
    category: "original",
    price: 25000,
    rating: 4.9,
    reviews: 1420,
    badge: "Best Seller",
    badgeType: "badge-best",
    image: "images/mie 1.jpg",
    fallback: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
    sourceUrl: "https://buyer.paxelmarket.co/product/PRDN98RBG3PP/PRDN98RBG3PP",
    sourceLabel: "buyer.paxelmarket.co",
    desc: "Mie ayam kenyal nikmat siap saji dengan racikan bumbu rempah pilihan, potongan daging ayam manis gurih melimpah, dan kaldu wangi.",
    toppings: ["Daging Ayam Bumbu Spesial", "Minyak Bawang Gurih", "Sawi Hijau", "Sambal Rawit"],
    flavor: { gurih: "★★★★★", manis: "★★★☆☆", pedas: "★★☆☆☆", kental: "★★★☆☆" },
    highlight: true
  },
  {
    id: 2,
    name: "Mie Ayam Khas Jogja Kuah Kental",
    category: "original",
    price: 22000,
    rating: 4.9,
    reviews: 2150,
    badge: "Legendaris Jogja",
    badgeType: "badge-best",
    image: "images/mie 2.jpg",
    fallback: "https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=800&auto=format&fit=crop",
    sourceUrl: "https://www.wsrentaljogja.com/mie-ayam-enak-di-jogja/",
    sourceLabel: "wsrentaljogja.com",
    desc: "Cita rasa otentik Jogja dengan kuah kental manis gurih berempah pekat, potongan daging ayam empuk, dan sawi rebus segar melimpah.",
    toppings: ["Ayam Kecap Kental Jogja", "Daun Bawang Iris", "Sawi Manis", "Pangsit Goreng"],
    flavor: { gurih: "★★★★★", manis: "★★★★☆", pedas: "★☆☆☆☆", kental: "★★★★★" },
    highlight: true
  },
  {
    id: 3,
    name: "Mie Ayam Komplit Pangsit & Bakso",
    category: "spesial",
    price: 28000,
    rating: 4.8,
    reviews: 980,
    badge: "Top Instagrammable",
    badgeType: "badge-special",
    image: "images/mie 3.jpg",
    fallback: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop",
    sourceUrl: "https://www.instagram.com/p/CFEUOJYgSVJ/",
    sourceLabel: "Instagram @p/CFEUOJYgSVJ",
    desc: "Perpaduan sempurna mie keriting kenyal dengan topping ayam bumbu cokelat pekat, bakso sapi halus, pangsit basah lembut, dan kerupuk pangsit renyah.",
    toppings: ["Ayam Tumis Bumbu", "Bakso Sapi Lembut", "Pangsit Basah", "Pangsit Goreng", "Acar Timun"],
    flavor: { gurih: "★★★★★", manis: "★★★☆☆", pedas: "★★☆☆☆", kental: "★★★★☆" },
    highlight: true
  },
  {
    id: 4,
    name: "Mie Ayam Khas Semarang Gurih Mantap",
    category: "yamin",
    price: 24000,
    rating: 4.8,
    reviews: 1340,
    badge: "Khas Semarang",
    badgeType: "badge-special",
    image: "images/mie 4.jpg",
    fallback: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=800&auto=format&fit=crop",
    sourceUrl: "https://www.nibble.id/mie-ayam-di-semarang-yang-enak/",
    sourceLabel: "nibble.id",
    desc: "Kelezatan mie ayam khas Semarang dengan taburan ayam cincang bumbu semur gurih, aroma minyak wijen harum, dan kuah kaldu terpisah yang bening gurih.",
    toppings: ["Ayam Cincang Semur", "Tongcai Gurih", "Pangsit Rebus", "Bawang Goreng Renyah"],
    flavor: { gurih: "★★★★★", manis: "★★☆☆☆", pedas: "★☆☆☆☆", kental: "★★★☆☆" },
    highlight: true
  },
  {
    id: 5,
    name: "Mie Ayam Jamur Kancing Komplet",
    category: "spesial",
    price: 27000,
    rating: 4.9,
    reviews: 1780,
    badge: "Resep Kompas Food",
    badgeType: "badge-best",
    image: "images/mie 5.jpg",
    fallback: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800&auto=format&fit=crop",
    sourceUrl: "https://www.kompas.com/food/read/2023/10/11/200500475/resep-mi-ayam-jamur-komplet-pakai-jamur-kancing?page=all",
    sourceLabel: "kompas.com/food",
    desc: "Resep mi ayam jamur komplet dengan irisan jamur kancing segar, tumisan daging ayam kecap gurih legit, serta kuah kaldu ayam gurih alami.",
    toppings: ["Jamur Kancing Juicy", "Daging Ayam Kecap", "Bok Choy Segar", "Pangsit Goreng Crispy"],
    flavor: { gurih: "★★★★★", manis: "★★★☆☆", pedas: "★☆☆☆☆", kental: "★★★★☆" },
    highlight: true
  }
];

// Helper: Format Rupiah
function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
}

// DOM Elements
const highlightTrack = document.getElementById('highlightTrack');
const menuGrid = document.getElementById('menuGrid');
const filterTabs = document.getElementById('filterTabs');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const dishModal = document.getElementById('dishModal');
const modalBody = document.getElementById('modalBody');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const navbar = document.getElementById('navbar');

// Render Horizontal Showcase Reel
function renderShowcase() {
  if (!highlightTrack) return;
  const highlights = MIE_AYAM_ITEMS;
  
  highlightTrack.innerHTML = highlights.map(item => `
    <div class="reel-card" onclick="openDishModal(${item.id})">
      <div class="reel-img-wrap">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${item.fallback}'" loading="lazy">
        <span class="reel-badge">${item.badge}</span>
      </div>
      <div class="reel-content">
        <div class="reel-rating">
          <i class="fa-solid fa-star"></i> <span>${item.rating} (${item.reviews})</span>
        </div>
        <h4 class="reel-title">${item.name}</h4>
        <div class="reel-source-small">
          <i class="fa-solid fa-link"></i> <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${item.sourceLabel}</a>
        </div>
        <div class="reel-footer">
          <span class="reel-price">${formatRupiah(item.price)}</span>
          <button class="btn-detail"><i class="fa-solid fa-arrow-right"></i> Detail</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Menu Cards
function renderMenu(items) {
  if (!menuGrid) return;
  
  if (items.length === 0) {
    menuGrid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  
  noResults.classList.add('hidden');
  menuGrid.innerHTML = items.map(item => `
    <div class="dish-card" data-id="${item.id}">
      <div class="dish-img-box">
        <span class="dish-number">#${item.id}</span>
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${item.fallback}'" loading="lazy">
        <span class="dish-badge ${item.badgeType}">${item.badge}</span>
      </div>
      
      <div class="dish-content">
        <div class="dish-meta-top">
          <span class="dish-category-label">${item.category}</span>
          <div class="dish-rating">
            <i class="fa-solid fa-star"></i> ${item.rating} (${item.reviews})
          </div>
        </div>

        <h3 class="dish-title">${item.name}</h3>
        <p class="dish-desc">${item.desc}</p>

        <div class="dish-toppings-preview">
          ${item.toppings.slice(0, 3).map(top => `<span class="topping-chip">${top}</span>`).join('')}
          ${item.toppings.length > 3 ? `<span class="topping-chip">+${item.toppings.length - 3}</span>` : ''}
        </div>

        <div class="dish-source-credit">
          <span>Sumber foto:</span>
          <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" title="Buka sumber gambar asli">
            ${item.sourceLabel} <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>

        <div class="dish-footer">
          <div class="dish-price">${formatRupiah(item.price)}</div>
          <button class="btn-detail" onclick="openDishModal(${item.id})">
            <i class="fa-solid fa-eye"></i> Detail Rasa
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Open Detail Modal
window.openDishModal = function(id) {
  const item = MIE_AYAM_ITEMS.find(dish => dish.id === id);
  if (!item || !modalBody || !dishModal) return;

  modalBody.innerHTML = `
    <div class="modal-dish-layout">
      <div class="modal-img-container">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${item.fallback}'">
        <div class="modal-img-source-overlay">
          <span>Foto: <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">${item.sourceLabel} <i class="fa-solid fa-external-link"></i></a></span>
        </div>
      </div>
      <div class="modal-info-pane">
        <div>
          <div class="dish-meta-top" style="margin-bottom: 6px;">
            <span class="dish-category-label">${item.category.toUpperCase()} • PILIHAN NO. ${item.id}</span>
            <div class="dish-rating">
              <i class="fa-solid fa-star"></i> ${item.rating} (${item.reviews} ulasan)
            </div>
          </div>
          <h2 style="font-size: 1.55rem; margin-bottom: 12px;">${item.name}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 16px;">${item.desc}</p>
          
          <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: var(--primary); margin-bottom: 8px;">
            Profil Rasa:
          </h4>
          <div class="modal-flavor-meters">
            <div class="flavor-row"><span>Tingkat Gurih</span> <span class="flavor-dots">${item.flavor.gurih}</span></div>
            <div class="flavor-row"><span>Rasa Manis</span> <span class="flavor-dots">${item.flavor.manis}</span></div>
            <div class="flavor-row"><span>Sensasi Pedas</span> <span class="flavor-dots">${item.flavor.pedas}</span></div>
            <div class="flavor-row"><span>Kekentalan Kuah</span> <span class="flavor-dots">${item.flavor.kental}</span></div>
          </div>

          <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: var(--primary); margin-bottom: 8px;">
            Topping & Isian Lengkap:
          </h4>
          <div class="modal-toppings-list">
            ${item.toppings.map(t => `<span class="modal-topping-pill"><i class="fa-solid fa-check text-amber"></i> ${t}</span>`).join('')}
          </div>
        </div>

        <div class="modal-action-bar">
          <div>
            <span style="font-size: 0.8rem; color: var(--text-dim); display: block;">Harga Porsi</span>
            <strong style="font-size: 1.45rem; color: var(--primary);">${formatRupiah(item.price)}</strong>
          </div>
          <button class="btn btn-primary" onclick="alert('Memilih ${item.name}!')">
            <i class="fa-brands fa-whatsapp"></i> Pesan Menu Ini
          </button>
        </div>
      </div>
    </div>
  `;

  dishModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Close Modal Handler
function closeModal() {
  if (!dishModal) return;
  dishModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (dishModal) {
  dishModal.addEventListener('click', (e) => {
    if (e.target === dishModal) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && dishModal && dishModal.classList.contains('active')) {
    closeModal();
  }
});

// Filter & Search Logic
let currentCategory = 'all';
let currentSearch = '';

function applyFilters() {
  let filtered = MIE_AYAM_ITEMS;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(item => item.category === currentCategory);
  }

  if (currentSearch.trim() !== '') {
    const term = currentSearch.toLowerCase();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(term) ||
      item.desc.toLowerCase().includes(term) ||
      item.toppings.some(top => top.toLowerCase().includes(term))
    );
  }

  renderMenu(filtered);
}

// Category Tabs Listener
if (filterTabs) {
  filterTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      applyFilters();
    }
  });
}

// Search Input Listener
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    applyFilters();
  });
}

// Horizontal Scroll Mousewheel Helper
const scrollContainer = document.querySelector('.horizontal-scroll-container');
if (scrollContainer) {
  scrollContainer.addEventListener('wheel', (evt) => {
    if (evt.deltaY !== 0) {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY * 1.5;
    }
  }, { passive: false });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderShowcase();
  renderMenu(MIE_AYAM_ITEMS);
});
