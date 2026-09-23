/* ============================================================
   KeyHouse - ร้านคีย์บอร์ดออนไลน์
   script.js : จาวาสคริปต์หลักของเว็บไซต์
   - ระบบเมนู Navbar ที่เรียกหน้าเพจอื่นด้วย JavaScript
   - แสดงสินค้าแนะนำ / Carousel หน้า Home
   - ระบบค้นหา + ตัวกรอง + เรียงลำดับ + Modal หน้า Products
   - ตรวจสอบความถูกต้องของฟอร์มหน้า Contact
   ============================================================ */

'use strict';

/* ------------------------------------------------------------
   ส่วนที่ 1 : ระบบเมนู (Navbar) ด้วย JavaScript
   ทุกเมนูจะถูกดักจับการคลิก แล้วสั่งเปลี่ยนหน้าผ่าน JavaScript
   (window.location.href) ไม่ได้ปล่อยให้เบราว์เซอร์ลิงก์เอง
   ------------------------------------------------------------ */

/** เปลี่ยนไปยังหน้าเพจที่ระบุ ด้วย JavaScript */
function navigateTo(page) {
  if (!page) return;
  document.body.classList.add('is-leaving');   // ทำเอฟเฟกต์จางก่อนเปลี่ยนหน้า
  window.setTimeout(function () {
    window.location.href = page;
  }, 160);
}

/** ชื่อไฟล์ของหน้าปัจจุบัน เช่น "index.html" */
function currentPage() {
  var path = window.location.pathname.split('/').pop();
  return path === '' ? 'index.html' : path;
}

/** ผูกเหตุการณ์คลิกให้ทุกอิลิเมนต์ที่มี data-page และไฮไลต์เมนูหน้าปัจจุบัน */
function initNavigation() {
  // ฟังก์ชันนี้ถูกเรียกซ้ำอีกครั้งหลัง menu.js แทรกเมนู/Footer เข้ามา
  // จึงทำเครื่องหมาย data-nav-bound ไว้ กันไม่ให้ผูกเหตุการณ์ซ้ำกับลิงก์เดิม
  document.querySelectorAll('[data-page]:not([data-nav-bound])').forEach(function (link) {
    link.setAttribute('data-nav-bound', '1');
    link.addEventListener('click', function (e) {
      e.preventDefault();                      // ยกเลิกการลิงก์แบบปกติ
      navigateTo(this.getAttribute('data-page'));
    });
  });

  // ไฮไลต์เมนูของหน้าที่กำลังเปิดอยู่
  var here = currentPage();
  document.querySelectorAll('.kh-navbar .nav-link[data-page]').forEach(function (link) {
    if (link.getAttribute('data-page') === here) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });

  // ปีปัจจุบันใน Footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear() + 543;   // พ.ศ.
  });
}

/* ------------------------------------------------------------
   ส่วนที่ 2 : ฟังก์ชันช่วยเหลือ
   ------------------------------------------------------------ */

/** จัดรูปแบบราคาเป็น 1,234 */
function formatPrice(n) {
  return Number(n).toLocaleString('th-TH');
}

/** กัน HTML แปลกปลอมจากข้อมูล */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** สร้าง Badge จาก tag ของสินค้า */
function badges(tags, limit) {
  return (tags || []).slice(0, limit || 3).map(function (t) {
    var cls = (t === 'RGB' || t === 'Hot-swap') ? 'kh-badge kh-badge-accent' : 'kh-badge';
    return '<span class="' + cls + '">' + esc(t) + '</span>';
  }).join(' ');
}

/** สร้าง HTML ของการ์ดสินค้า 1 ใบ */
function productCard(p) {
  return '' +
    '<div class="col-6 col-md-4 col-xl-3">' +
      '<article class="card kh-card">' +
        '<div class="kh-thumb">' +
          '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' +
        '</div>' +
        '<div class="card-body d-flex flex-column">' +
          '<div class="kh-brand mb-1">' + esc(p.brand) + '</div>' +
          '<h3 class="card-title">' + esc(p.name) + '</h3>' +
          '<div class="d-flex flex-wrap gap-1 mb-3">' + badges(p.tags) + '</div>' +
          '<div class="mt-auto d-flex flex-wrap gap-2 align-items-center justify-content-between">' +
            '<div class="kh-price">' + formatPrice(p.price) + ' <small>บาท</small></div>' +
            '<button type="button" class="btn btn-sm btn-kh" data-detail="' + esc(p.id) + '">' +
              'ดูรายละเอียด</button>' +
          '</div>' +
        '</div>' +
      '</article>' +
    '</div>';
}

/* ------------------------------------------------------------
   ส่วนที่ 3 : Modal รายละเอียดสินค้า (ใช้ร่วมกันทุกหน้า)
   ------------------------------------------------------------ */

function openProductModal(id) {
  var p = PRODUCTS.find(function (item) { return item.id === id; });
  var modalEl = document.getElementById('productModal');
  if (!p || !modalEl) return;

  modalEl.querySelector('[data-modal-title]').textContent = p.name;
  modalEl.querySelector('[data-modal-img]').src = p.image;
  modalEl.querySelector('[data-modal-img]').alt = p.name;
  modalEl.querySelector('[data-modal-brand]').textContent = p.brand;
  modalEl.querySelector('[data-modal-price]').innerHTML =
    formatPrice(p.price) + ' <small>บาท</small>';
  modalEl.querySelector('[data-modal-badges]').innerHTML = badges(p.tags, 6);

  modalEl.querySelector('[data-modal-desc]').textContent =
    p.desc || 'สินค้ารุ่นนี้ไม่มีคำบรรยายเพิ่มเติม ดูข้อมูลจากตารางสเปกด้านล่าง';

  // ตารางสเปก (Bootstrap Table)
  // ข้อมูลบางรุ่นเขียนสเปกเป็น "หัวข้อ : ค่า" อยู่แล้ว จึงใช้ชุดนั้นเป็นหลัก
  // ส่วนรุ่นที่เขียนเป็นหัวข้อย่อยสั้น ๆ จะใช้ข้อมูลสรุปที่เราแยกไว้แทน
  var rows = [];
  var bullets = [];

  (p.specs || []).forEach(function (s) {
    var i = s.indexOf(':');
    if (i > 0) rows.push([s.slice(0, i).trim(), s.slice(i + 1).trim()]);
    else bullets.push(s);
  });

  if (rows.length === 0) {
    rows.push(['ประเภทสวิตช์', p.switch]);
    if (p.size) rows.push(['ขนาดคีย์บอร์ด', p.size]);
    rows.push(['การเชื่อมต่อ', p.wireless ? 'ไร้สาย (2.4GHz / บลูทูธ) และแบบใช้สาย' : 'แบบใช้สาย']);
  }

  bullets.forEach(function (s, i) { rows.push([i === 0 ? 'คุณสมบัติ' : '', s]); });

  modalEl.querySelector('[data-modal-specs]').innerHTML = rows.map(function (r) {
    return '<tr><th scope="row" class="text-muted-kh fw-semibold" style="width:38%">' +
      esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>';
  }).join('');

  bootstrap.Modal.getOrCreateInstance(modalEl).show();
}

/** ดักคลิกปุ่ม "ดูรายละเอียด" ทุกปุ่มในหน้า (event delegation) */
function initProductModal() {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-detail]');
    if (btn) openProductModal(btn.getAttribute('data-detail'));
  });
}

/* ------------------------------------------------------------
   ส่วนที่ 4 : หน้า Home (index.html)
   ------------------------------------------------------------ */

function initHome() {
  var track = document.getElementById('featuredGrid');
  var carousel = document.getElementById('heroCarouselInner');
  if (!track && !carousel) return;

  // เรียงตามราคาสูงสุด เพื่อคัดรุ่นเรือธงขึ้นหน้าแรก
  var top = PRODUCTS.slice().sort(function (a, b) { return b.price - a.price; });

  if (carousel) {
    carousel.innerHTML = top.slice(0, 4).map(function (p, i) {
      return '' +
        '<div class="carousel-item' + (i === 0 ? ' active' : '') + '">' +
          '<div class="ratio ratio-4x3">' +
            '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '">' +
          '</div>' +
          '<div class="carousel-caption d-block">' +
            '<h5>' + esc(p.name) + '</h5>' +
            '<p>' + esc(p.brand) + ' · ' + esc(p.switch) + ' · ' +
              formatPrice(p.price) + ' บาท</p>' +
          '</div>' +
        '</div>';
    }).join('');
  }

  if (track) {
    // สินค้าแนะนำ 8 รุ่น คละราคาและแบรนด์
    var picked = [];
    var seen = {};
    top.forEach(function (p) {
      if (picked.length < 8 && !seen[p.brand]) {
        seen[p.brand] = true;
        picked.push(p);
      }
    });
    track.innerHTML = picked.map(productCard).join('');
  }

  // สถิติหน้าแรก
  var elCount = document.querySelector('[data-stat-count]');
  var elBrand = document.querySelector('[data-stat-brand]');
  var elMin = document.querySelector('[data-stat-min]');
  if (elCount) elCount.textContent = PRODUCTS.length + '+';
  if (elBrand) {
    var brands = {};
    PRODUCTS.forEach(function (p) { brands[p.brand] = 1; });
    elBrand.textContent = Object.keys(brands).length;
  }
  if (elMin) {
    elMin.textContent = formatPrice(Math.min.apply(null, PRODUCTS.map(function (p) {
      return p.price;
    })));
  }
}

/* ------------------------------------------------------------
   ส่วนที่ 5 : หน้า Products (services.html)
   ค้นหา + กรองตามแบรนด์/สวิตช์/การเชื่อมต่อ/ราคา + เรียงลำดับ
   ------------------------------------------------------------ */

function initProducts() {
  var grid = document.getElementById('productGrid');
  if (!grid) return;

  var fSearch = document.getElementById('fSearch');
  var fBrand = document.getElementById('fBrand');
  var fSwitch = document.getElementById('fSwitch');
  var fConn = document.getElementById('fConn');
  var fSort = document.getElementById('fSort');
  var countEl = document.getElementById('resultCount');
  var emptyEl = document.getElementById('emptyState');
  var resetBtn = document.getElementById('resetFilter');

  // เติมตัวเลือกแบรนด์และสวิตช์จากข้อมูลจริง
  function fillOptions(select, values) {
    values.sort().forEach(function (v) {
      var o = document.createElement('option');
      o.value = v;
      o.textContent = v;
      select.appendChild(o);
    });
  }
  fillOptions(fBrand, Array.from(new Set(PRODUCTS.map(function (p) { return p.brand; }))));
  fillOptions(fSwitch, Array.from(new Set(PRODUCTS.map(function (p) { return p.switch; }))));

  function render() {
    var q = (fSearch.value || '').trim().toLowerCase();
    var list = PRODUCTS.filter(function (p) {
      if (q && (p.name + ' ' + p.brand + ' ' + p.desc).toLowerCase().indexOf(q) === -1) return false;
      if (fBrand.value && p.brand !== fBrand.value) return false;
      if (fSwitch.value && p.switch !== fSwitch.value) return false;
      if (fConn.value === 'wireless' && !p.wireless) return false;
      if (fConn.value === 'wired' && p.wireless) return false;
      return true;
    });

    if (fSort.value === 'price-asc') list.sort(function (a, b) { return a.price - b.price; });
    else if (fSort.value === 'price-desc') list.sort(function (a, b) { return b.price - a.price; });
    else list.sort(function (a, b) { return a.name.localeCompare(b.name); });

    grid.innerHTML = list.map(productCard).join('');
    countEl.textContent = list.length;
    emptyEl.classList.toggle('d-none', list.length > 0);
  }

  [fSearch, fBrand, fSwitch, fConn, fSort].forEach(function (el) {
    el.addEventListener('input', render);
    el.addEventListener('change', render);
  });

  resetBtn.addEventListener('click', function () {
    fSearch.value = '';
    fBrand.value = '';
    fSwitch.value = '';
    fConn.value = '';
    fSort.value = 'name';
    render();
  });

  // รองรับลิงก์จากเมนู Dropdown เช่น services.html?brand=KEYCHRON
  var brandParam = new URLSearchParams(window.location.search).get('brand');
  if (brandParam) fBrand.value = brandParam;

  render();
}

/* ------------------------------------------------------------
   ส่วนที่ 6 : หน้า Contact (contact.html)
   ตรวจสอบฟอร์มด้วย Bootstrap Validation + JavaScript
   ------------------------------------------------------------ */

function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  var okBox = document.getElementById('formSuccess');
  var phone = document.getElementById('cPhone');

  // อนุญาตเฉพาะตัวเลขในช่องเบอร์โทรศัพท์
  phone.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.classList.add('was-validated');

    if (!form.checkValidity()) {
      form.querySelector(':invalid').focus();
      return;
    }

    okBox.querySelector('[data-ok-name]').textContent =
      document.getElementById('cName').value;
    okBox.classList.remove('d-none');
    okBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

    form.reset();
    form.classList.remove('was-validated');
  });
}

/* ------------------------------------------------------------
   ส่วนที่ 7 : เริ่มทำงานเมื่อโหลดหน้าเสร็จ
   ------------------------------------------------------------ */

document.addEventListener('DOMContentLoaded', function () {
  initNavigation();
  initProductModal();
  initHome();
  initProducts();
  initContactForm();
});
