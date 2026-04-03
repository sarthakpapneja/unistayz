// ═══════════ DATA & STATE ═══════════
const properties = [
    { id:1, title:"Sunrise Heights 1BHK", type:"1bhk", location:"Kharar", exact:"ONKAR Society, Kharar", price:8500, beds:1, baths:1, sqft:550, images:["images/prop1.png","images/prop2.png"], rating:4.5, tag:"Verified", lat:30.7499, lng:76.6411, desc:"Beautiful 1BHK with ample natural light.", amenities:["WiFi","Parking","Power Backup"] },
    { id:2, title:"Modern Valley 2BHK", type:"2bhk", location:"Landran", exact:"Modern Valley, Landran", price:14000, beds:2, baths:2, sqft:900, images:["images/prop3.png","images/prop1.png"], rating:4.8, tag:"Popular", lat:30.6953, lng:76.6669, desc:"Spacious 2BHK perfect for sharing.", amenities:["WiFi","Gym","CCTV"] },
    { id:3, title:"Villa Palacio 2BHK", type:"2bhk", location:"Mohali", exact:"Villa Palacio, Mohali", price:16500, beds:2, baths:2, sqft:1050, images:["images/prop1.png","images/prop3.png"], rating:4.9, tag:"Premium", lat:30.7046, lng:76.7179, desc:"Luxury living in the heart of Mohali.", amenities:["Pool","Club House","Parking"] },
    { id:4, title:"Darpan Green 1BHK", type:"1bhk", location:"Kharar", exact:"Darpan Green, Kharar", price:7000, beds:1, baths:1, sqft:480, images:["images/prop2.png","images/prop1.png"], rating:4.2, tag:"Budget", lat:30.7511, lng:76.6500, desc:"Budget-friendly flat near CU.", amenities:["WiFi","Water Supply","Laundry"] },
    { id:5, title:"Boys PG — CU Campus", type:"pg", location:"Kharar", exact:"Near CU Gate, Kharar", price:5500, beds:1, baths:1, sqft:200, images:["images/prop2.png","images/prop3.png"], rating:4.6, tag:"Meals Included", lat:30.7681, lng:76.5754, desc:"Strictly for boys studying at CU.", amenities:["WiFi","Meals","Cleaning"] },
    { id:6, title:"Girls PG — Rayat Bahra", type:"pg", location:"Mohali", exact:"Near Rayat Bahra, Mohali", price:6000, beds:1, baths:1, sqft:220, images:["images/prop1.png","images/prop2.png"], rating:4.7, tag:"Girls Only", lat:30.7300, lng:76.6500, desc:"Safe and secure girls PG.", amenities:["Meals","CCTV","WiFi"] },
    { id:7, title:"Skyline Residency 3BHK", type:"3bhk", location:"Mohali", exact:"Sector 66, Mohali", price:22000, beds:3, baths:2, sqft:1400, images:["images/prop3.png","images/prop1.png"], rating:5.0, tag:"Premium", lat:30.6800, lng:76.7300, desc:"Huge 3BHK for large groups.", amenities:["Gym","Pool","Parking"] },
    { id:8, title:"Green Meadows 2BHK", type:"2bhk", location:"Mohali", exact:"Phase 7, Mohali", price:12000, beds:2, baths:1, sqft:820, images:["images/prop1.png","images/prop3.png"], rating:4.4, tag:"Verified", lat:30.7100, lng:76.7200, desc:"Peaceful society.", amenities:["Garden","Parking","Power Backup"] },
    { id:9, title:"Co-ed PG — CGC", type:"pg", location:"Landran", exact:"Near CGC, Landran", price:4500, beds:1, baths:1, sqft:180, images:["images/prop2.png","images/prop1.png"], rating:4.1, tag:"Budget", lat:30.6900, lng:76.6600, desc:"Affordable PG for CGC students.", amenities:["WiFi","Meals","Laundry"] }
];

const blogPosts = [
    { title:"5 Tips for Choosing the Right PG", tag:"Guide", img:"images/hero.png", meta:"Oct 12 • 4 min read" },
    { title:"Cost of Living in Chandigarh for Students", tag:"Finance", img:"images/city.png", meta:"Oct 10 • 6 min read" },
    { title:"Top 10 Cafes Near CU for Studying", tag:"Lifestyle", img:"images/prop3.png", meta:"Oct 05 • 3 min read" }
];

const roommates = [
    { name:"Rajesh K.", avatar:"R", gender:"Male", col:"CU", area:"Kharar", budget:6000, note:"Looking for a non-smoking roommate. I have a PS5!" },
    { name:"Simran J.", avatar:"S", gender:"Female", col:"Rayat Bahra", area:"Mohali", budget:8000, note:"Need a tidy roommate for a 2BHK we can rent together." },
    { name:"Amit", avatar:"A", gender:"Male", col:"CGC Landran", area:"Landran", budget:4500, note:"Budget conscious, looking for shared PG." }
];

let currentUser = JSON.parse(localStorage.getItem('unistayz_user'));
let favorites = JSON.parse(localStorage.getItem('unistayz_fav')) || [];
let compareList = [];
let mapInstance = null;
let markers = [];
let currentLang = localStorage.getItem('unistayz_lang') || 'en';

// ═══════════ MULTI-LANGUAGE (i18n) ═══════════
const i18n = {
    en: {
        nav_home:"Home", nav_properties:"Properties", nav_blog:"Blog", nav_roommates:"Roommates", nav_calculator:"Calculator", nav_contact:"Contact", nav_signin:"Sign In",
        hero_badge:"Trusted by 2,000+ Students Across Punjab", hero_title_1:"Find Your Perfect", hero_title_2:"Student Home", hero_subtitle:"Premium PGs, flats, and apartments near top universities.",
        search_location:"Location", search_type:"Property Type", search_budget:"Budget (₹)", search_btn:"Search",
        stat_properties:"Properties", stat_students:"Happy Students", stat_cities:"Cities", stat_universities:"Universities",
        featured_tag:"Featured Listings", featured_title_1:"Discover Our ", featured_title_2:"Top Picks", featured_desc:"Handpicked properties near your university.", view_all:"View All Properties →",
        why_tag:"Why Choose Us", why_title_1:"Everything You Need,", why_title_2:"Under One Roof",
        f1_title:"Verified Properties", f1_desc:"Every listing is personally inspected.", f2_title:"Near Your College", f2_desc:"Properties within walking distance.", f3_title:"Student-Friendly", f3_desc:"Budget options starting from ₹4,000.", f4_title:"Safe & Secure", f4_desc:"Gated societies with CCTV.", f5_title:"Meals Included", f5_desc:"Home-cooked meals available.", f6_title:"High-Speed WiFi", f6_desc:"Dedicated internet in every room.",
        cta_title:"Own a Property?", cta_desc:"List it on UniStayz and reach thousands.", cta_btn:"List Your Property",
        login_title:"Welcome Back", login_desc:"Sign in to save properties."
    },
    hi: {
        nav_home:"होम", nav_properties:"संपत्ति", nav_blog:"ब्लॉग", nav_roommates:"रूममेट्स", nav_calculator:"कैलकुलेटर", nav_contact:"संपर्क करें", nav_signin:"साइन इन",
        hero_badge:"पंजाब के 2,000+ छात्रों का भरोसा", hero_title_1:"अपना सही", hero_title_2:"छात्र घर खोजें", hero_subtitle:"शीर्ष विश्वविद्यालयों के पास प्रीमियम पीजी और फ्लैट्स।",
        search_location:"स्थान", search_type:"संपत्ति का प्रकार", search_budget:"बजट (₹)", search_btn:"खोजें",
        stat_properties:"संपत्ति", stat_students:"छात्र", stat_cities:"शहर", stat_universities:"विश्वविद्यालय",
        featured_tag:"विशेष सूची", featured_title_1:"हमारी ", featured_title_2:"शीर्ष पसंद", featured_desc:"आपके विश्वविद्यालय के पास चुनिंदा संपत्तियां।", view_all:"सभी संपत्तियां देखें →",
        why_tag:"हमें क्यों चुनें", why_title_1:"आपको जो चाहिए,", why_title_2:"सब एक छत के नीचे",
        f1_title:"सत्यापित संपत्ति", f1_desc:"हर सूची का व्यक्तिगत निरीक्षण किया गया है।", f2_title:"कॉलेज के पास", f2_desc:"पैदल दूरी पर संपत्तियां।", f3_title:"छात्रों के अनुकूल", f3_desc:"बजट विकल्प ₹4,000 से शुरू।", f4_title:"सुरक्षित", f4_desc:"सीसीटीवी के साथ गेटेड सोसायटी।", f5_title:"भोजन शामिल", f5_desc:"घर का बना खाना उपलब्ध है।", f6_title:"हाई-स्पीड वाईफाई", f6_desc:"हर कमरे में समर्पित इंटरनेट।",
        cta_title:"क्या आपके पास संपत्ति है?", cta_desc:"इसे यूनीस्टेज़ पर सूचीबद्ध करें।", cta_btn:"अपनी संपत्ति सूचीबद्ध करें",
        login_title:"वापसी पर स्वागत है", login_desc:"संपत्ति सहेजने के लिए साइन इन करें।"
    }
};

function toggleLang() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    localStorage.setItem('unistayz_lang', currentLang);
    document.getElementById('langToggle').textContent = currentLang === 'en' ? 'HI' : 'EN';
    applyTranslations();
}

function applyTranslations() {
    const dict = i18n[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        if(dict[el.dataset.i18n]) el.innerHTML = dict[el.dataset.i18n];
    });
}

/* ═══════════ SPA ROUTING ═══════════ */
function navigate(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    
    // Handle nav active state
    const link = document.querySelector(`.nav-links a[data-page="${pageId}"]`);
    if(link) link.classList.add('active');
    
    // Show specific page
    const view = document.getElementById(`page-${pageId}`);
    if(view) {
        view.style.display = 'block';
        window.scrollTo(0,0);
        
        // Page specific logic
        if(pageId === 'properties') renderAllProperties();
        if(pageId === 'favorites') renderFavorites();
        if(pageId === 'compare') renderCompare();
        if(pageId === 'calculator') calcBudget();
    }
    
    // Close mobile menu
    document.getElementById('navLinks').classList.remove('open');
}

/* ═══════════ AUTH SYSTEM ═══════════ */
function updateAuthUI() {
    if(currentUser) {
        document.getElementById('navAuth').style.display = 'none';
        document.getElementById('navUser').style.display = 'block';
        document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
    } else {
        document.getElementById('navAuth').style.display = 'block';
        document.getElementById('navUser').style.display = 'none';
    }
}
function doLogin() {
    const name = document.getElementById('loginName').value;
    const email = document.getElementById('loginEmail').value;
    currentUser = { name, email };
    localStorage.setItem('unistayz_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeModal('loginModal');
    showToast(`Welcome back, ${name}!`, 'success');
}
function logout() {
    currentUser = null;
    localStorage.removeItem('unistayz_user');
    updateAuthUI();
    document.getElementById('userDropdown').classList.remove('show');
    showToast('Signed out successfully.', 'info');
    if(document.getElementById('page-favorites').style.display === 'block') navigate('home');
}
function toggleUserMenu() { document.getElementById('userDropdown').classList.toggle('show'); }

/* ═══════════ RENDERING CARDS ═══════════ */
function generateCardHTML(p) {
    const isFav = favorites.includes(p.id) ? 'saved' : '';
    const favIcon = isFav ? '♥' : '♡';
    
    return `
        <div class="property-card" onclick="viewProperty(${p.id})">
            <div class="card-image"><img src="${p.images[0]}" alt="${p.title}"></div>
            <span class="label" style="margin-bottom:8px;">${p.tag}</span>
            <div class="card-title" style="font-family:var(--font-heading); font-size:1.2rem; margin-bottom:8px;">${p.title}</div>
            <div class="card-location">📍 ${p.location}</div>
            <div class="card-price">₹${p.price.toLocaleString('en-IN')}<small style="font-weight:400; font-size:0.8rem; color:var(--text-muted);"> / month</small></div>
            <div class="card-amenities">
                <span>${p.beds} Beds</span> • <span>${p.baths} Baths</span> • <span>${p.sqft} sqft</span>
            </div>
            <div style="margin-top:24px; display:flex; gap:12px;">
                <button class="btn-primary" style="flex:1; padding:12px; font-size:0.7rem;" onclick="event.stopPropagation();viewProperty(${p.id})">View Details</button>
                <button class="btn-outline" style="padding:12px; border-color:var(--border);" onclick="event.stopPropagation();toggleFav(${p.id})">${favIcon}</button>
            </div>
        </div>
    `;
}

function renderHomeProperties(filter = 'all') {
    const grid = document.getElementById('propertyGrid');
    const filtered = filter === 'all' ? properties.slice(0,6) : properties.filter(p => p.type === filter).slice(0,6);
    grid.innerHTML = filtered.map(p => generateCardHTML(p)).join('');
}

function renderAllProperties(data = properties) {
    document.getElementById('allPropertyGrid').innerHTML = data.map(p => generateCardHTML(p)).join('');
}

function renderFavorites() {
    const favProps = properties.filter(p => favorites.includes(p.id));
    const grid = document.getElementById('favGrid');
    if(favProps.length === 0) grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted)">You haven't saved any properties yet.</p>`;
    else grid.innerHTML = favProps.map(p => generateCardHTML(p)).join('');
}

/* ═══════════ CAROUSEL LOGIC ═══════════ */
function switchImage(dot, index) {
    const card = dot.closest('.carousel');
    card.querySelectorAll('img').forEach((img,i) => img.classList.toggle('active', i===index));
    card.querySelectorAll('.carousel-dot').forEach((d,i) => d.classList.toggle('active', i===index));
}
function navImage(btn, dir) {
    const card = btn.closest('.carousel');
    const imgs = card.querySelectorAll('img');
    let idx = Array.from(imgs).findIndex(img => img.classList.contains('active'));
    idx = (idx + dir + imgs.length) % imgs.length;
    switchImage(card.querySelectorAll('.carousel-dot')[idx], idx);
}

/* ═══════════ FAVORITES & COMPARE ═══════════ */
function toggleFav(id) {
    if(!currentUser) return openModal('loginModal');
    if(favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        showToast('Removed from favorites', 'info');
    } else {
        favorites.push(id);
        showToast('Saved to favorites', 'success');
    }
    localStorage.setItem('unistayz_fav', JSON.stringify(favorites));
    if(document.getElementById('page-properties').style.display === 'block') renderAllProperties();
    else if(document.getElementById('page-favorites').style.display === 'block') renderFavorites();
    else renderHomeProperties(document.querySelector('.filter-btn.active').dataset.filter);
}

function toggleCompare(id) {
    if(compareList.includes(id)) {
        compareList = compareList.filter(cId => cId !== id);
    } else {
        if(compareList.length >= 3) return showToast('You can compare max 3 properties.', 'warning');
        compareList.push(id);
    }
    document.getElementById('compareCount').textContent = compareList.length;
    document.getElementById('compareBar').style.display = compareList.length > 0 ? 'block' : 'none';
    if(document.getElementById('page-properties').style.display === 'block') renderAllProperties();
    else renderHomeProperties(document.querySelector('.filter-btn.active').dataset.filter);
}

function clearCompare() {
    compareList = [];
    document.getElementById('compareCount').textContent = 0;
    document.getElementById('compareBar').style.display = 'none';
    if(document.getElementById('page-properties').style.display === 'block') renderAllProperties();
    else renderHomeProperties(document.querySelector('.filter-btn.active').dataset.filter);
}

function showCompare() {
    if(compareList.length === 0) return;
    navigate('compare');
    renderCompare();
}

function renderCompare() {
    const list = properties.filter(p => compareList.includes(p.id));
    if(list.length === 0) return document.getElementById('compareContent').innerHTML = '<p>No properties selected for comparison.</p>';
    
    let html = `<table class="compare-table">
        <tr><th>Image</th>${list.map(p=>`<td><img src="${p.images[0]}"></td>`).join('')}</tr>
        <tr><th>Name</th>${list.map(p=>`<td><h3>${p.title}</h3></td>`).join('')}</tr>
        <tr><th>Price</th>${list.map(p=>`<td><strong>₹${p.price}</strong>/mo</td>`).join('')}</tr>
        <tr><th>Location</th>${list.map(p=>`<td>${p.exact}</td>`).join('')}</tr>
        <tr><th>Beds/Baths</th>${list.map(p=>`<td>${p.beds} Bed, ${p.baths} Bath</td>`).join('')}</tr>
        <tr><th>Area</th>${list.map(p=>`<td>${p.sqft} sqft</td>`).join('')}</tr>
        <tr><th>Amenities</th>${list.map(p=>`<td>${p.amenities.join(', ')}</td>`).join('')}</tr>
    </table>`;
    document.getElementById('compareContent').innerHTML = html;
}

/* ═══════════ DETAILED VIEW ═══════════ */
function viewProperty(id) {
    const p = properties.find(prop => prop.id === id);
    if(!p) return;
    
    navigate('detail');
    
    const html = `
        <div class="detail-header" style="display:grid; grid-template-columns: 1.5fr 1fr; border-bottom:1px solid var(--border); padding-bottom:80px; gap:60px;">
            <div class="detail-photos">
                <div class="detail-gallery" style="border:1px solid var(--border); overflow:hidden;"><img src="${p.images[0]}" id="mainPropImg" style="filter:grayscale(0.2); height:600px; width:100%; object-fit:cover;"></div>
                <div class="detail-thumbs" style="display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-top:12px;">
                    ${p.images.map(img => `<img src="${img}" style="width:100%; height:80px; border:1px solid var(--border); opacity:0.6; cursor:pointer; object-fit:cover;" onclick="document.getElementById('mainPropImg').src=this.src;document.querySelectorAll('.detail-thumbs img').forEach(i=>i.style.opacity=0.6);this.style.opacity=1">`).join('')}
                </div>
            </div>
            <div class="detail-info">
                <span class="label">Property Detail</span>
                <h1 style="font-size:clamp(2.5rem, 5vw, 4.5rem); margin-bottom:20px;">${p.title}</h1>
                <div class="card-location" style="font-size:1rem; margin-bottom:32px;">📍 ${p.exact}</div>
                <div class="detail-price" style="font-family:var(--font-heading); font-size:2.5rem; margin-bottom:40px;">₹${p.price.toLocaleString('en-IN')}<small style="font-size:1rem; font-weight:400; color:var(--text-muted);"> / month</small></div>
                
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:32px; margin-bottom:40px; border-top:1px solid var(--border); padding-top:40px;">
                    <div><span class="label">Space</span><strong>${p.sqft} SQFT</strong></div>
                    <div><span class="label">Layout</span><strong>${p.beds} BED / ${p.baths} BATH</strong></div>
                    <div><span class="label">Verification</span><strong>VERIFIED</strong></div>
                    <div><span class="label">Rating</span><strong>★ ${p.rating}</strong></div>
                </div>

                <p style="margin-bottom:40px; font-size:1.1rem; line-height:1.6;">${p.desc} This space has been selected for its unique combination of location and functionality. Perfect for long-term study stays.</p>

                <div class="detail-actions" style="display:flex; gap:20px;">
                    <button class="btn-primary" style="flex:1" onclick="openModal('reviewModal');document.getElementById('reviewPropId').value=${p.id}">Submit Review</button>
                    <a href="https://wa.me/919876543210?text=Hi,%20I%20am%20interested%20in%20${p.title}" target="_blank" class="btn-outline" style="flex:1; text-align:center; padding:18px;">Enquire Now</a>
                </div>
            </div>
        </div>
        <div class="detail-map" id="singleMap" style="height:400px; margin:80px 0; border:1px solid var(--border);"></div>
        <div class="detail-reviews">
            <span class="label">Resident Feed</span>
            <h2 style="margin-bottom:40px;">Recent Reviews</h2>
            <div id="reviewsBox" style="display:grid; grid-template-columns:1fr 1fr; gap:24px;">
                <div class="review-card" style="border:1px solid var(--border); padding:32px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:16px;"><strong>ARJUN S.</strong><span style="color:var(--accent-alt)">★★★★★</span></div>
                    <p style="font-size:0.9rem;">"A remarkably quiet and well-maintained space. Exactly what the archive promised."</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('detailContent').innerHTML = html;
    
    setTimeout(() => {
        if(window.singleMapObj) { window.singleMapObj.remove(); }
        window.singleMapObj = L.map('singleMap').setView([p.lat, p.lng], 15);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(window.singleMapObj);
        L.marker([p.lat, p.lng]).addTo(window.singleMapObj);
    }, 100);
}

/* ═══════════ SEARCH & MAP VIEW ═══════════ */
function doSearch() {
    const loc = document.getElementById('heroLocation').value;
    const type = document.getElementById('heroType').value;
    const bud = document.getElementById('heroBudget').value;
    
    document.getElementById('filterCity').value = loc;
    document.getElementById('filterType').value = type;
    document.getElementById('filterBudget').value = bud;
    
    navigate('properties');
    applyFilters();
}

function searchByCity(city) {
    document.getElementById('filterCity').value = city;
    document.getElementById('filterType').value = "";
    document.getElementById('filterBudget').value = "";
    navigate('properties');
    applyFilters();
}

function searchByUni(btn) {
    document.querySelectorAll('.uni-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const word = btn.textContent.split(' ')[0]; // E.g. "Chandigarh"
    searchByCity(word);
}

function applyFilters() {
    const city = document.getElementById('filterCity').value;
    const type = document.getElementById('filterType').value;
    const bud = document.getElementById('filterBudget').value;
    const sort = document.getElementById('filterSort').value;
    
    let res = [...properties];
    if(city) res = res.filter(p => p.exact.includes(city));
    if(type) res = res.filter(p => p.type === type);
    if(bud) {
        if(bud === "5000") res = res.filter(p => p.price <= 5000);
        else if(bud === "10000") res = res.filter(p => p.price > 5000 && p.price <= 10000);
        else if(bud === "20000") res = res.filter(p => p.price > 10000 && p.price <= 20000);
        else res = res.filter(p => p.price > 20000);
    }
    
    if(sort === 'low') res.sort((a,b) => a.price - b.price);
    if(sort === 'high') res.sort((a,b) => b.price - a.price);
    if(sort === 'rating') res.sort((a,b) => b.rating - a.rating);
    
    renderAllProperties(res);
    if(mapInstance) updateMapMarkers(res);
}

function setView(mode) {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(mode+'ViewBtn').classList.add('active');
    
    if(mode === 'grid') {
        document.getElementById('propertyGrid').style.display = 'grid';
        document.getElementById('mapContainer').style.display = 'none';
        renderHomeProperties(document.querySelector('.filter-btn.active').dataset.filter);
    } else {
        document.getElementById('propertyGrid').style.display = 'none';
        document.getElementById('mapContainer').style.display = 'block';
        initMap();
    }
}

function initMap() {
    if(mapInstance) { mapInstance.invalidateSize(); return; }
    mapInstance = L.map('propertyMap').setView([30.7333, 76.7794], 11); // Chandigarh center
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO', maxZoom: 19
    }).addTo(mapInstance);
    updateMapMarkers(properties);
}

function updateMapMarkers(data) {
    if(!mapInstance) return;
    markers.forEach(m => mapInstance.removeLayer(m));
    markers = [];
    data.forEach(p => {
        const m = L.marker([p.lat, p.lng]).addTo(mapInstance)
            .bindPopup(`<div style="font-family:var(--font)"><b>${p.title}</b><br>₹${p.price}/mo<br><a href="#" onclick="viewProperty(${p.id})">View Details</a></div>`);
        markers.push(m);
    });
}

/* ═══════════ RENT CALCULATOR ═══════════ */
function calcBudget() {
    const rent = parseInt(document.getElementById('calcRent').value) || 0;
    const dep = parseInt(document.getElementById('calcDeposit').value) || 0;
    const mos = parseInt(document.getElementById('calcMonths').value) || 1;
    const elec = parseInt(document.getElementById('calcElec').value) || 0;
    const food = parseInt(document.getElementById('calcFood').value) || 0;
    const misc = parseInt(document.getElementById('calcMisc').value) || 0;
    
    const monthly = rent + elec + food + misc;
    const first = monthly + dep;
    const total = (monthly * mos) + dep;
    
    document.getElementById('resMonthly').textContent = `₹${monthly.toLocaleString('en-IN')}`;
    document.getElementById('resFirst').textContent = `₹${first.toLocaleString('en-IN')}`;
    document.getElementById('resTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
}

/* ═══════════ BLOG & ROOMMATES ═══════════ */
function renderBlog() {
    document.getElementById('blogGrid').innerHTML = blogPosts.map(b => `
        <div class="property-card">
            <div class="card-image"><img src="${b.img}" style="height:200px;"></div>
            <span class="label">${b.tag}</span>
            <div class="card-title" style="font-family:var(--font-heading); font-size:1.1rem;">${b.title}</div>
            <p style="font-size:0.8rem; margin:12px 0;">${b.meta}</p>
            <button class="btn-outline" style="padding:10px 20px; font-size:0.7rem; margin-top:auto;">Read Post</button>
        </div>
    `).join('');
}

function renderRoommates() {
    document.getElementById('roommateGrid').innerHTML = roommates.map(r => `
        <div class="property-card" style="padding:32px;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:24px;">
                <div style="width:60px; height:60px; background:var(--accent-alt); color:black; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.5rem;">${r.avatar}</div>
                <div><strong>${r.name}</strong><br><span style="font-size:0.7rem; text-transform:uppercase; color:var(--text-dim); letter-spacing:0.05em;">${r.area}</span></div>
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px;">
                <span class="label" style="background:var(--card-alt); padding:4px 12px; font-size:0.6rem;">${r.gender}</span>
                <span class="label" style="background:var(--card-alt); padding:4px 12px; font-size:0.6rem;">${r.col}</span>
                <span class="label" style="background:var(--accent-alt); color:black; padding:4px 12px; font-size:0.6rem;">Budget: ₹${r.budget}</span>
            </div>
            <p style="font-size:0.9rem; line-height:1.4; color:var(--text-muted);">"${r.note}"</p>
            <button class="btn-primary" style="width:100%; margin-top:32px; padding:12px; font-size:0.7rem;" onclick="showToast('Initiating contact...','info')">Contact Roommate</button>
        </div>
    `).join('');
}

function postRoommate() {
    const name = document.getElementById('rmName').value;
    roommates.unshift({
        name, avatar:name.charAt(0).toUpperCase(),
        gender:document.getElementById('rmGender').value, col:document.getElementById('rmCollege').value,
        area:document.getElementById('rmArea').value, budget:document.getElementById('rmBudget').value,
        note:document.getElementById('rmNote').value
    });
    closeModal('roommateModal');
    renderRoommates();
    showToast('Roommate request posted!', 'success');
}

/* ═══════════ REVIEWS ═══════════ */
document.querySelectorAll('#starRating span').forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.dataset.v;
        document.querySelectorAll('#starRating span').forEach(s => {
            if(s.dataset.v <= rating) { s.classList.add('filled'); s.textContent = '★'; }
            else { s.classList.remove('filled'); s.textContent = '☆'; }
        });
    });
});
function submitReview() {
    const txt = document.getElementById('reviewText').value;
    const name = currentUser ? currentUser.name : "Guest User";
    const ht = `<div class="review-card"><div class="review-header"><strong>${name}</strong><span class="stars" style="margin:0;font-size:1rem;color:var(--accent-warm)">★★★★★</span></div><p>${txt}</p></div>`;
    document.getElementById('reviewsBox').innerHTML = ht + document.getElementById('reviewsBox').innerHTML;
    closeModal('reviewModal');
    showToast('Review submitted!', 'success');
}

/* ═══════════ UTILITIES ═══════════ */
function showToast(msg, type='info') {
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.style.cssText = "background:var(--card); border:1px solid var(--border-bright); padding:16px 32px; color:white; margin-bottom:10px; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.1em; animation:toastIn 0.3s ease;";
    t.innerHTML = msg;
    document.getElementById('toastContainer').appendChild(t);
    setTimeout(() => t.remove(), 4000);
}

function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('themeToggle');
    if(html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        btn.textContent = '☀️';
    } else {
        html.setAttribute('data-theme', 'dark');
        btn.textContent = '🌙';
    }
}

// Global UI bindings
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderHomeProperties(btn.dataset.filter);
    });
});
document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
function openModal(id) { document.getElementById(id).classList.add('visible'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('visible'); document.body.style.overflow = ''; }
document.querySelectorAll('.modal-overlay').forEach(m => { m.addEventListener('click', (e) => { if(e.target === m) closeModal(m.id); }); });
function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); document.getElementById('navActions').classList.toggle('open'); }
window.addEventListener('scroll', () => { document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60); });

// SPA Navigation Bindings
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        if(page) navigate(page);
    });
});

// Animations
function animateCounters() {
    document.querySelectorAll('.stat-num:not(.animated)').forEach(el => {
        el.classList.add('animated');
        const target = parseInt(el.dataset.target);
        const suffix = target >= 1000 ? '+' : '+';
        let current = 0;
        const timer = setInterval(() => {
            current += target / 60;
            if (current >= target) { el.textContent = target.toLocaleString('en-IN') + suffix; clearInterval(timer); }
            else { el.textContent = Math.floor(current).toLocaleString('en-IN'); }
        }, 16);
    });
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting) { if(entry.target.classList.contains('hero-stats')) animateCounters(); } });
}, { threshold: 0.2 });
document.querySelectorAll('.hero-stats').forEach(el => observer.observe(el));

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
    renderHomeProperties();
    renderBlog();
    renderRoommates();
    applyTranslations();
    updateAuthUI();
    document.getElementById('langToggle').textContent = currentLang === 'en' ? 'EN' : 'HI';
    
    // Auto-update Active Nav on Scroll (for Home Anchors)
    window.addEventListener('scroll', () => {
        if(document.getElementById('page-home').style.display !== 'none') {
            const sections = document.querySelectorAll('#page-home section[id]');
            let current = 'home';
            sections.forEach(s => { if(window.scrollY >= s.offsetTop - 200) current = s.id.replace('sec-',''); });
            // Highlight specific links based on scroll position wouldn't map exactly to SPA, so we handle it gracefully inside SPA logic.
        }
    });

    // Handle initial hash routing
    if(window.location.hash) {
        const pg = window.location.hash.substring(1);
        if(document.getElementById(`page-${pg}`)) navigate(pg);
    }
});
