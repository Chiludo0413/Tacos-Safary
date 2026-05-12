// ================================================
//  TACOS SAFARI — script.js
// ================================================

const menuData = {
  tacos: {
    type: 'list',
    items: [
      { name: "Carne Asada",  desc: "Grilled marinated beef, seasoned and diced.",    price: "$3.50", badge: "Must Try" },
      { name: "Al Pastor",    desc: "Slow-roasted pork with pineapple and achiote.",  price: "$3.50", badge: "Fan Favorite" },
      { name: "Pollo Asado",  desc: "Chargrilled citrus-marinated chicken.",          price: "$3.50", badge: null },
    ]
  },

  Caldos: {
    type: 'list',
    items: [
      { name: "Caldo de Res",        desc: "Beef chuck slow-cooked with traditional spices and vegetables.", price: "$16 + tax", badge: "Must Try" },
      { name: "Birria",              desc: "Rich braised beef served with consomé for dipping.",             price: "$17 + tax", badge: null },
      { name: "Caldo de Albondigas", desc: "Meatballs in a flavorful broth with vegetables.",               price: "$16 + tax", badge: null },
      { name: "Caldo de Pollo",      desc: "Savory chicken broth with fresh tortillas and toppings.",       price: "$16 + tax", badge: null },
      { name: "Caldo de Menudo",     desc: "Traditional tripe soup slow-simmered with dried chiles.",       price: "$16 + tax", badge: null },
      { name: "Caldo de Pozole",     desc: "Hearty hominy stew with pork and your choice of garnishes.",    price: "$16 + tax", badge: null },
    ]
  },

  Platillos: {
    type: 'list',
    items: [
      { name: "Molcajete",           desc: "Sizzling stone bowl with grilled meats, peppers, nopales, and cheese.", price: "", badge: "Must Try" },
      { name: "Mojarra Frita",       desc: "Whole fried fish, golden and crispy outside, tender inside.",           price: "", badge: null },
      { name: "Fajitas Mixtas",      desc: "Sizzling skillet of grilled meats, peppers, and onions.",               price: "", badge: null },
      { name: "Chiles Rellenos",     desc: "Roasted poblano peppers stuffed with cheese, battered and fried.",      price: "", badge: null },
      { name: "Mole Poblano",        desc: "Rich, complex mole sauce over tender chicken.",                         price: "", badge: null },
      { name: "Costillas de Puerco", desc: "Tender pork ribs, slow-cooked and full of flavor.",                     price: "", badge: null },
      { name: "Carne Asada Plate",   desc: "Grilled beef served with rice, beans, and fresh tortillas.",            price: "", badge: null },
      { name: "Pechuga de Pollo",    desc: "Grilled chicken breast with citrus and spices.",                        price: "", badge: null },
      { name: "Filete de Pescado",   desc: "Pan-seared fish fillet with house seasonings.",                         price: "", badge: null },
      { name: "Enchiladas",          desc: "Rolled tortillas with your choice of meat, smothered in salsa.",        price: "", badge: null },
      { name: "Enmoladas",           desc: "Tortillas dipped in rich mole sauce, filled with chicken.",             price: "", badge: null },
      { name: "Flautas",             desc: "Crispy rolled tortillas with beef or chicken, served with crema.",      price: "", badge: null },
    ]
  },

  Antojitos: {
    type: 'list',
    items: [
      { name: "Tacos",       desc: "Your choice of meat on handmade corn tortillas.",        price: "" },
      { name: "Burritos",    desc: "Large flour tortilla with meat, rice, and beans.",       price: "" },
      { name: "Enchiladas",  desc: "Rolled tortillas in salsa with your choice of meat.",    price: "" },
      { name: "Quesadillas", desc: "Griddled tortilla with cheese and choice of filling.",   price: "" },
      { name: "Sopes",       desc: "Thick masa base topped with beans, meat, and crema.",    price: "" },
      { name: "Huaraches",   desc: "Oval masa shell loaded with toppings.",                  price: "" },
      { name: "Torta",       desc: "Mexican sandwich on a bolillo roll.",                    price: "" },
      { name: "Gorditas",    desc: "Stuffed masa pockets, griddled until golden.",           price: "" },
      { name: "Picaditas",   desc: "Small thick tortillas with pinched edges, piled high.",  price: "" },
    ]
  },

  Desayunos: {
    type: 'list',
    items: [
      { name: "Huevos Rancheros",    desc: "Fried eggs over tortillas in a spiced tomato salsa.", price: "" },
      { name: "Huevos con Chorizo",  desc: "Scrambled eggs with Mexican chorizo.",               price: "" },
      { name: "Huevos con Jamon",    desc: "Scrambled eggs with ham.",                           price: "" },
      { name: "Huevos con Nopales",  desc: "Scrambled eggs with tender cactus strips.",          price: "" },
      { name: "Omelette",            desc: "Fluffy eggs with your choice of ingredients.",       price: "" },
      { name: "Burrito de Desayuno", desc: "Breakfast burrito with eggs, potatoes, and meat.",   price: "" },
    ]
  },

  Mariscos: {
    type: 'list',
    items: [
      { name: "Mojarra Frita",     desc: "Whole fried tilapia, golden and crispy.",                price: "" },
      { name: "Camarones",         desc: "Shrimp in a rich house salsa with rice and beans.",      price: "" },
      { name: "Ceviche",           desc: "Fresh seafood cured in citrus with cilantro and onion.", price: "" },
      { name: "Filete de Pescado", desc: "Seasoned fish fillet, grilled or fried.",                price: "" },
      { name: "Tacos de Mariscos", desc: "Seafood tacos on handmade tortillas.",                   price: "" },
    ]
  },

  Bebidas: {
    type: 'drinks',
    items: [
      { name: "Horchata",        desc: "Fresh cinnamon rice water, cold and refreshing." },
      { name: "Jarritos",        desc: "Tamarind, Pineapple, or Mandarin." },
      { name: "Coke Botella",    desc: "Mexican Coke in a glass bottle, cane sugar sweetened." },
      { name: "Liquados",        desc: "Smoothies — de fresa or chocomilk." },
      { name: "Sangria Botella", desc: "Chilled Señorial wine-based soda." },
      { name: "Sidral Mundet",   desc: "Traditional apple soda." },
      { name: "Cafe",            desc: "Freshly brewed hot coffee." },
      { name: "Coke Can",        desc: "Regular or diet." },
      { name: "Fanta Botella",   desc: "Citrus soda in a glass bottle." },
    ]
  }
};

// ---- RENDER MENU ----
function renderMenu(category) {
  const grid = document.getElementById('menu-grid');
  const section = menuData[category];

  if (section.type === 'list') {
    grid.className = 'menu-grid menu-grid--list';
    grid.innerHTML = `<div class="menu-list">${
      section.items.map((item, i) => `
        <div class="menu-list-item" style="animation-delay: ${i * 0.05}s">
          <div class="menu-list-left">
            <span class="menu-list-name">
              ${item.name}
              ${item.badge ? `<span class="menu-list-badge">${item.badge}</span>` : ''}
            </span>
            ${item.desc ? `<span class="menu-list-desc">${item.desc}</span>` : ''}
          </div>
          ${item.price ? `<span class="menu-list-price">${item.price}</span>` : ''}
        </div>
      `).join('')
    }</div>`;

  } else if (section.type === 'drinks') {
    grid.className = 'menu-grid menu-grid--drinks';
    grid.innerHTML = `<div class="menu-drinks">${
      section.items.map((item, i) => `
        <div class="menu-drink-item" style="animation-delay: ${i * 0.05}s">
          <span class="menu-list-name">${item.name}</span>
          <span class="menu-list-desc">${item.desc}</span>
        </div>
      `).join('')
    }</div>`;
  }
}

// ---- TABS ----
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.cat);
  });
});

renderMenu('tacos');

// ---- SCROLL REVEAL ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .about-stats .stat, .contact-item').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ---- NAV SCROLL STATE ----
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 60
    ? 'rgba(27,58,45,0.98)'
    : 'rgba(27,58,45,0.96)';
});

// ---- MOBILE MENU ----
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

let mobileOpen = false;
burger.addEventListener('click', () => {
  mobileOpen = !mobileOpen;
  if (mobileOpen) {
    navLinks.style.cssText = `
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 60px; left: 0; right: 0;
      background: rgba(27,58,45,0.99);
      padding: 2rem 4vw 2.5rem;
      gap: 1.5rem;
      z-index: 99;
      border-bottom: 1px solid rgba(212,168,83,0.2);
    `;
    burger.innerHTML = '✕';
  } else {
    navLinks.style.cssText = 'display: none;';
    burger.innerHTML = '&#9776;';
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileOpen) burger.click();
  });
});

// ---- MAP FALLBACK ----
document.addEventListener('DOMContentLoaded', () => {
  const mapFallback = document.querySelector('.map-fallback');
  const mapImg = document.querySelector('.map-placeholder img');
  if (mapFallback && mapImg) {
    mapImg.style.display = 'none';
    mapFallback.style.display = 'flex';
  }
});
