// ═══════════ PROPERTY DATA ═══════════
const properties = [
    {
        id: 1, title: "Sunrise Heights 1BHK", type: "1bhk", location: "ONKAR Society, Kharar",
        price: 8500, beds: 1, baths: 1, sqft: 550, image: "images/prop1.png",
        tag: "Verified", amenities: ["WiFi", "Parking", "Power Backup"]
    },
    {
        id: 2, title: "Modern Valley 2BHK", type: "2bhk", location: "Modern Valley, Landran",
        price: 14000, beds: 2, baths: 2, sqft: 900, image: "images/prop3.png",
        tag: "Popular", amenities: ["WiFi", "Gym", "CCTV"]
    },
    {
        id: 3, title: "Villa Palacio 2BHK", type: "2bhk", location: "Villa Palacio, Mohali",
        price: 16500, beds: 2, baths: 2, sqft: 1050, image: "images/prop1.png",
        tag: "Premium", amenities: ["Pool", "Club House", "Parking"]
    },
    {
        id: 4, title: "Darpan Green 1BHK", type: "1bhk", location: "Darpan Green, Kharar",
        price: 7000, beds: 1, baths: 1, sqft: 480, image: "images/prop2.png",
        tag: "Budget", amenities: ["WiFi", "Water Supply", "Laundry"]
    },
    {
        id: 5, title: "Boys PG — CU Campus", type: "pg", location: "Near CU Gate, Kharar",
        price: 5500, beds: 1, baths: 1, sqft: 200, image: "images/prop2.png",
        tag: "Meals Included", amenities: ["WiFi", "Meals", "Cleaning"]
    },
    {
        id: 6, title: "Girls PG — Rayat Bahra", type: "pg", location: "Near Rayat Bahra, Mohali",
        price: 6000, beds: 1, baths: 1, sqft: 220, image: "images/prop1.png",
        tag: "Girls Only", amenities: ["Meals", "CCTV", "WiFi"]
    },
    {
        id: 7, title: "Skyline Residency 3BHK", type: "3bhk", location: "Sector 66, Mohali",
        price: 22000, beds: 3, baths: 2, sqft: 1400, image: "images/prop3.png",
        tag: "Premium", amenities: ["Gym", "Pool", "Parking"]
    },
    {
        id: 8, title: "Green Meadows 2BHK", type: "2bhk", location: "Phase 7, Mohali",
        price: 12000, beds: 2, baths: 1, sqft: 820, image: "images/prop1.png",
        tag: "Verified", amenities: ["Garden", "Parking", "Power Backup"]
    },
    {
        id: 9, title: "Co-ed PG — CGC Landran", type: "pg", location: "Near CGC, Landran",
        price: 4500, beds: 1, baths: 1, sqft: 180, image: "images/prop2.png",
        tag: "Budget", amenities: ["WiFi", "Meals", "Laundry"]
    }
];

// ═══════════ RENDER PROPERTIES ═══════════
function renderProperties(filter = 'all') {
    const grid = document.getElementById('propertyGrid');
    const filtered = filter === 'all' ? properties : properties.filter(p => p.type === filter);
    
    grid.innerHTML = filtered.map(p => `
        <div class="property-card" data-type="${p.type}">
            <div class="card-image">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <div class="card-badges">
                    <span class="badge badge-rent">For Rent</span>
                    <span class="badge badge-type">${p.tag}</span>
                </div>
                <button class="card-save" title="Save">♡</button>
            </div>
            <div class="card-body">
                <div class="card-price">₹${p.price.toLocaleString('en-IN')}<small>/month</small></div>
                <div class="card-title">${p.title}</div>
                <div class="card-location">📍 ${p.location}</div>
                <div class="card-amenities">
                    <div class="amenity">🛏 <span>${p.beds}</span> Bed</div>
                    <div class="amenity">🚿 <span>${p.baths}</span> Bath</div>
                    <div class="amenity">📐 <span>${p.sqft}</span> sqft</div>
                </div>
            </div>
        </div>
    `).join('');
}

// ═══════════ FILTER BUTTONS ═══════════
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProperties(btn.dataset.filter);
    });
});

// ═══════════ SEARCH TABS ═══════════
document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// ═══════════ NAVBAR SCROLL ═══════════
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ═══════════ SMOOTH NAV LINKS ═══════════
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href');
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Update active nav on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
});

// ═══════════ STAT COUNTER ANIMATION ═══════════
function animateCounters() {
    document.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.target);
        const suffix = target >= 1000 ? '+' : '+';
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                el.textContent = target.toLocaleString('en-IN') + suffix;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current).toLocaleString('en-IN');
            }
        }, 16);
    });
}

// ═══════════ INTERSECTION OBSERVER ═══════════
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('hero-stats')) animateCounters();
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('[data-aos], .hero-stats').forEach(el => observer.observe(el));

// ═══════════ MODALS ═══════════
function openModal(id) {
    document.getElementById(id).classList.add('visible');
    document.body.style.overflow = 'hidden';
}
function closeModal(id) {
    document.getElementById(id).classList.remove('visible');
    document.body.style.overflow = '';
}
document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', (e) => {
        if (e.target === m) closeModal(m.id);
    });
});

// ═══════════ HAMBURGER ═══════════
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}

// ═══════════ UNI CHIPS ═══════════
document.querySelectorAll('.uni-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('.uni-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
    });
});

// ═══════════ CONTACT FORM ═══════════
function handleContact(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours.');
    e.target.reset();
}

// ═══════════ SAVE / HEART TOGGLE ═══════════
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-save')) {
        e.target.textContent = e.target.textContent === '♡' ? '♥' : '♡';
        e.target.style.background = e.target.textContent === '♥' ? '#ef4444' : '';
    }
});

// ═══════════ INIT ═══════════
document.addEventListener('DOMContentLoaded', () => {
    renderProperties();
});
