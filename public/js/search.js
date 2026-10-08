/**
 * BharatDarshan - Client-Side Search System
 * Static index across destinations, states, categories, and travel guides.
 * No API, No Backend, 100% Client-Side Vanilla JS.
 */

const SEARCH_DATABASE = [
  // Key Destinations
  {
    title: "Ayodhya Travel Guide",
    url: "/destinations/uttar-pradesh/ayodhya.html",
    category: "Religious & Pilgrimage",
    state: "Uttar Pradesh",
    keywords: ["ayodhya", "ram mandir", "saryu", "hanuman garhi", "kanak bhawan", "pilgrimage", "uttar pradesh", "temple", "ram janmabhoomi"]
  },
  {
    title: "Varanasi (Kashi) Travel Guide",
    url: "/destinations/uttar-pradesh/varanasi.html",
    category: "Spiritual & Heritage",
    state: "Uttar Pradesh",
    keywords: ["varanasi", "kashi", "banaras", "ganga aarti", "dashashwamedh ghat", "kashi vishwanath", "sarnath", "temple", "ghats"]
  },
  {
    title: "Agra & Taj Mahal Travel Guide",
    url: "/destinations/uttar-pradesh/agra.html",
    category: "Historical & Monuments",
    state: "Uttar Pradesh",
    keywords: ["agra", "taj mahal", "agra fort", "fatehpur sikri", "mehtab bagh", "mughal", "monuments", "wonders"]
  },
  {
    title: "Jaipur (Pink City) Travel Guide",
    url: "/destinations/rajasthan/jaipur.html",
    category: "Heritage & Forts",
    state: "Rajasthan",
    keywords: ["jaipur", "hawa mahal", "amer fort", "city palace", "jantar mantar", "nahargarh", "pink city", "rajasthan", "forts"]
  },
  {
    title: "Udaipur (City of Lakes) Travel Guide",
    url: "/destinations/rajasthan/udaipur.html",
    category: "Romantic & Heritage",
    state: "Rajasthan",
    keywords: ["udaipur", "lake pichola", "city palace", "jag mandir", "fateh sagar", "saheliyon ki bari", "rajasthan", "lakes"]
  },
  {
    title: "Mumbai City Guide",
    url: "/destinations/maharashtra/mumbai.html",
    category: "Coastal & Metropolis",
    state: "Maharashtra",
    keywords: ["mumbai", "gateway of india", "marine drive", "elephanta caves", "juhu beach", "cst", "maharashtra", "bollywood"]
  },
  {
    title: "Delhi Capital Heritage Guide",
    url: "/destinations/delhi/delhi.html",
    category: "Capital & Historical",
    state: "Delhi",
    keywords: ["delhi", "new delhi", "red fort", "qutub minar", "india gate", "humayun tomb", "lotus temple", "chandni chowk", "jama masjid"]
  },
  {
    title: "Amritsar Golden Temple Guide",
    url: "/destinations/punjab/amritsar.html",
    category: "Spiritual & Historical",
    state: "Punjab",
    keywords: ["amritsar", "golden temple", "harmandir sahib", "jallianwala bagh", "wagah border", "punjab", "langar"]
  },
  {
    title: "Srinagar & Dal Lake Travel Guide",
    url: "/destinations/kashmir/srinagar.html",
    category: "Hill Station & Lakes",
    state: "Jammu & Kashmir",
    keywords: ["srinagar", "dal lake", "shikara", "mughal gardens", "shalimar", "kashmir", "houseboat", "tulip garden"]
  },
  {
    title: "Goa Beach & Heritage Guide",
    url: "/destinations/goa/goa.html",
    category: "Beaches & Coastal",
    state: "Goa",
    keywords: ["goa", "calangute", "baga", "palolem", "dudhsagar", "panaji", "churches", "beaches", "water sports"]
  },
  {
    title: "Kochi (Cochin) Backwaters Guide",
    url: "/destinations/kerala/kochi.html",
    category: "Coastal & Heritage",
    state: "Kerala",
    keywords: ["kochi", "cochin", "fort kochi", "chinese fishing nets", "mattancherry", "kerala", "backwaters", "kathakali"]
  },
  {
    title: "Rishikesh Yoga Capital Guide",
    url: "/destinations/uttarakhand/rishikesh.html",
    category: "Adventure & Spiritual",
    state: "Uttarakhand",
    keywords: ["rishikesh", "laxman jhula", "ram jhula", "ganga aarti", "rafting", "yoga", "triveni ghat", "uttarakhand", "himalayas"]
  },
  {
    title: "Kolkata Cultural Capital Guide",
    url: "/destinations/west-bengal/kolkata.html",
    category: "Heritage & Culture",
    state: "West Bengal",
    keywords: ["kolkata", "calcutta", "victoria memorial", "howrah bridge", "dakshineswar", "park street", "west bengal"]
  },
  {
    title: "Shimla Queen of Hills Guide",
    url: "/destinations/himachal-pradesh/shimla.html",
    category: "Hill Station & Nature",
    state: "Himachal Pradesh",
    keywords: ["shimla", "mall road", "kalka shimla toy train", "jakhoo temple", "kufri", "himachal pradesh", "snow"]
  },
  {
    title: "Madurai Temple City Guide",
    url: "/destinations/tamil-nadu/madurai.html",
    category: "Temples & Pilgrimage",
    state: "Tamil Nadu",
    keywords: ["madurai", "meenakshi amman temple", "thirumalai nayakkar mahal", "south india", "tamil nadu", "dravidian"]
  },
  {
    title: "Hampi UNESCO Ruins Guide",
    url: "/destinations/karnataka/hampi.html",
    category: "Historical & Ancient Ruins",
    state: "Karnataka",
    keywords: ["hampi", "vijayanagara", "virupaksha temple", "stone chariot", "vittala temple", "karnataka", "unesco"]
  },

  // State Pages
  {
    title: "Uttar Pradesh Tourism Guide",
    url: "/states/uttar-pradesh.html",
    category: "State Guide",
    state: "Uttar Pradesh",
    keywords: ["uttar pradesh", "up tourism", "ayodhya", "varanasi", "agra", "lucknow", "mathura", "prayagraj"]
  },
  {
    title: "Rajasthan Tourism Guide",
    url: "/states/rajasthan.html",
    category: "State Guide",
    state: "Rajasthan",
    keywords: ["rajasthan", "rajasthan tourism", "jaipur", "udaipur", "jodhpur", "jaisalmer", "pushkar", "thar desert", "forts"]
  },
  {
    title: "Maharashtra Tourism Guide",
    url: "/states/maharashtra.html",
    category: "State Guide",
    state: "Maharashtra",
    keywords: ["maharashtra", "mumbai", "pune", "ajanta ellora", "lonavala", "western ghats"]
  },
  {
    title: "Kerala God's Own Country Guide",
    url: "/states/kerala.html",
    category: "State Guide",
    state: "Kerala",
    keywords: ["kerala", "gods own country", "alleppey", "kochi", "munnar", "wayanad", "kovalam", "backwaters"]
  },
  {
    title: "Delhi Capital Territory Guide",
    url: "/states/delhi.html",
    category: "State Guide",
    state: "Delhi",
    keywords: ["delhi", "national capital", "delhi ncr", "historical monuments", "food"]
  },
  {
    title: "Himachal Pradesh Tourism Guide",
    url: "/states/himachal-pradesh.html",
    category: "State Guide",
    state: "Himachal Pradesh",
    keywords: ["himachal pradesh", "manali", "shimla", "dharamshala", "spiti valley", "kasol", "mountains"]
  },
  {
    title: "Goa Tourism & Coast Guide",
    url: "/states/goa.html",
    category: "State Guide",
    state: "Goa",
    keywords: ["goa", "north goa", "south goa", "beaches", "nightlife", "coastal"]
  },
  {
    title: "Tamil Nadu Temple Heritage Guide",
    url: "/states/tamil-nadu.html",
    category: "State Guide",
    state: "Tamil Nadu",
    keywords: ["tamil nadu", "chennai", "madurai", "thanjavur", "rameswaram", "ooty", "temples"]
  },
  {
    title: "Uttarakhand Devbhoomi Guide",
    url: "/states/uttarakhand.html",
    category: "State Guide",
    state: "Uttarakhand",
    keywords: ["uttarakhand", "rishikesh", "haridwar", "dehradun", "mussoorie", "nainital", "char dham"]
  },
  {
    title: "Punjab Land of Five Rivers",
    url: "/states/punjab.html",
    category: "State Guide",
    state: "Punjab",
    keywords: ["punjab", "amritsar", "ludhiana", "chandigarh", "golden temple", "culture"]
  },
  {
    title: "West Bengal Culture & Hills Guide",
    url: "/states/west-bengal.html",
    category: "State Guide",
    state: "West Bengal",
    keywords: ["west bengal", "kolkata", "darjeeling", "sundarbans", "digha"]
  },
  {
    title: "Karnataka Heritage & Nature Guide",
    url: "/states/karnataka.html",
    category: "State Guide",
    state: "Karnataka",
    keywords: ["karnataka", "bengaluru", "mysuru", "hampi", "coorg", "gokarna"]
  },

  // Category Pages
  {
    title: "Historical Places in India",
    url: "/categories/historical-places.html",
    category: "Category",
    keywords: ["historical places", "monuments", "unesco", "heritage", "ancient india", "architecture"]
  },
  {
    title: "Religious Places & Pilgrimage in India",
    url: "/categories/religious-places.html",
    category: "Category",
    keywords: ["religious places", "pilgrimage", "spiritual", "holy shrines", "faith"]
  },
  {
    title: "Famous Temples of India",
    url: "/categories/temples.html",
    category: "Category",
    keywords: ["temples", "mandir", "hindu temples", "dravidian", "nagar", "jyotirlinga"]
  },
  {
    title: "Historic Mosques of India",
    url: "/categories/mosques.html",
    category: "Category",
    keywords: ["mosques", "masjid", "jama masjid", "islamic architecture", "mughal"]
  },
  {
    title: "Royal Forts & Palaces of India",
    url: "/categories/forts.html",
    category: "Category",
    keywords: ["forts", "palaces", "rajasthan forts", "hill forts", "citadels"]
  },
  {
    title: "Best Beaches in India",
    url: "/categories/beaches.html",
    category: "Category",
    keywords: ["beaches", "coastline", "goa", "kerala beaches", "andaman", "gokarna"]
  },
  {
    title: "Hill Stations of India",
    url: "/categories/hill-stations.html",
    category: "Category",
    keywords: ["hill stations", "mountains", "himalayas", "shimla", "manali", "ooty", "munnar"]
  },
  {
    title: "Wildlife Sanctuaries & National Parks",
    url: "/categories/wildlife.html",
    category: "Category",
    keywords: ["wildlife", "national parks", "tigers", "safari", "kaziranga", "jim corbett", "ranthambore"]
  },
  {
    title: "Nature & Eco-Tourism in India",
    url: "/categories/nature.html",
    category: "Category",
    keywords: ["nature", "waterfalls", "valleys", "lakes", "forests", "trekking"]
  },
  {
    title: "Family Destinations in India",
    url: "/categories/family-travel.html",
    category: "Category",
    keywords: ["family travel", "vacation with kids", "safe travel", "family resorts"]
  },
  {
    title: "Pilgrimage Circuits in India",
    url: "/categories/pilgrimage.html",
    category: "Category",
    keywords: ["pilgrimage", "char dham", "tirupati", "vaishno devi", "buddhist circuit"]
  },
  {
    title: "Weekend Getaways across India",
    url: "/categories/weekend-getaways.html",
    category: "Category",
    keywords: ["weekend getaways", "short trips", "from delhi", "from mumbai", "from bangalore"]
  },

  // Practical Travel Guides
  {
    title: "How to Plan an India Trip — Complete Guide",
    url: "/guides/india-travel-guide.html",
    category: "Travel Guide",
    keywords: ["how to plan india trip", "first time travel india", "itinerary planning", "transportation"]
  },
  {
    title: "India Travel Budget & Cost Estimation Guide",
    url: "/guides/india-travel-budget.html",
    category: "Travel Guide",
    keywords: ["budget", "trip cost", "hotel prices", "train tickets", "india expense calculator"]
  },
  {
    title: "Family Travel in India — Practical Tips & Best Places",
    url: "/guides/family-travel-guide.html",
    category: "Travel Guide",
    keywords: ["family guide", "travel with children", "elderly travel tips", "comfort travel"]
  },
  {
    title: "Best Weekend Trips from Delhi NCR",
    url: "/guides/weekend-trips-delhi.html",
    category: "Travel Guide",
    keywords: ["delhi weekend trips", "delhi to agra", "delhi to jaipur", "delhi to rishikesh"]
  },
  {
    title: "How to Travel by Train in India (Indian Railways Guide)",
    url: "/guides/how-to-travel-by-train-in-india.html",
    category: "Travel Guide",
    keywords: ["train travel", "irctc", "vande bharat", "rajdhani", "sleeper", "ac 2 tier", "railways"]
  },
  {
    title: "India Travel Packing Checklist — All Seasons",
    url: "/guides/india-travel-packing-checklist.html",
    category: "Travel Guide",
    keywords: ["packing checklist", "what to wear india", "modest clothing", "medicines", "essentials"]
  },
  {
    title: "How to Plan a Pilgrimage Trip in India",
    url: "/guides/how-to-plan-a-pilgrimage-trip.html",
    category: "Travel Guide",
    keywords: ["pilgrimage planning", "temple dress code", "vip darshan tips", "senior citizen pilgrimage"]
  },
  {
    title: "How to Choose the Best Season for Travel in India",
    url: "/guides/how-to-choose-the-best-season-for-travel.html",
    category: "Travel Guide",
    keywords: ["best season", "monsoon travel", "winter india travel", "weather by region"]
  }
];

// Search Modal and Inline Search Logic
document.addEventListener('DOMContentLoaded', () => {
  const modalBackdrop = document.querySelector('.search-modal-backdrop');
  const modalInput = document.querySelector('.search-modal-input');
  const resultsContainer = document.querySelector('.search-results-list');
  const searchTriggers = document.querySelectorAll('.search-trigger-btn, [data-search-trigger]');
  const closeBtn = document.querySelector('.search-modal-close');

  function openModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.add('open');
      if (modalInput) {
        modalInput.value = '';
        modalInput.focus();
        renderResults('');
      }
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
    }
  }

  searchTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  function performSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) return SEARCH_DATABASE.slice(0, 6);

    return SEARCH_DATABASE.filter(item => {
      if (item.title.toLowerCase().includes(q)) return true;
      if (item.category && item.category.toLowerCase().includes(q)) return true;
      if (item.state && item.state.toLowerCase().includes(q)) return true;
      return item.keywords.some(k => k.includes(q));
    });
  }

  function renderResults(query) {
    if (!resultsContainer) return;
    const results = performSearch(query);

    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <li style="padding: 1.5rem; text-align: center; color: var(--color-text-muted);">
          No destinations or guides found matching "<strong>${escapeHtml(query)}</strong>".<br>
          <span style="font-size: 0.85rem; color: var(--color-text-light);">Try searching for Ayodhya, Jaipur, Temples, Beaches, or Trains.</span>
        </li>
      `;
      return;
    }

    resultsContainer.innerHTML = results.map(item => `
      <li class="search-result-item">
        <a href="${item.url}">
          <div class="search-item-title">${escapeHtml(item.title)}</div>
          <div class="search-item-meta">${escapeHtml(item.category)} ${item.state ? '• ' + escapeHtml(item.state) : ''}</div>
        </a>
      </li>
    `).join('');
  }

  if (modalInput) {
    modalInput.addEventListener('input', (e) => {
      renderResults(e.target.value);
    });
  }

  // Support for Homepage Hero Search Input
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroSearchBtn = document.getElementById('heroSearchBtn');

  if (heroSearchInput && heroSearchBtn) {
    function handleHeroSearch() {
      const q = heroSearchInput.value.trim();
      if (q) {
        openModal();
        if (modalInput) {
          modalInput.value = q;
          renderResults(q);
        }
      } else {
        openModal();
      }
    }

    heroSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleHeroSearch();
    });

    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleHeroSearch();
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }
});
