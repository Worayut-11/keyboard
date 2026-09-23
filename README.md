# KeyHouse — เว็บไซต์ร้านคีย์บอร์ดออนไลน์
แบบฝึกหัดที่ 12 : การออกแบบเว็บไซต์ด้วย Bootstrap 5 Template

## หัวข้อที่เลือก
ลำดับ 14 — เว็บไซต์ร้านค้าออนไลน์ (ร้านจำหน่ายคีย์บอร์ด)
ข้อมูลสินค้าจริง 50 รุ่น จาก 27 แบรนด์ ราคา 760 – 12,500 บาท

## โครงสร้างไฟล์
```
my-bootstrap-web/
├── index.html        หน้า Home
├── about.html        หน้า About
├── services.html     หน้า Products (สินค้า)
├── contact.html      หน้า Contact
├── menu.html         เมนู Navbar ใช้ร่วมกันทุกหน้า (เขียนที่เดียว)
├── footer.html       Footer ใช้ร่วมกันทุกหน้า (เขียนที่เดียว)
├── css/
│   └── style.css     CSS ที่เขียนเองทั้งหมด (ปรับแต่งทับ Bootstrap)
├── js/
│   ├── products.js   ข้อมูลสินค้า 50 รุ่น
│   ├── script.js     เมนู JavaScript, Carousel, ตัวกรอง, Modal, ตรวจฟอร์ม
│   └── menu.js       โหลด menu.html / footer.html เข้าทุกหน้าด้วย fetch()
└── images/
    ├── logo.svg      โลโก้ร้าน
    └── products/     ภาพสินค้า 50 ไฟล์
```

## ตรวจสอบตามเงื่อนไขของโจทย์

| เงื่อนไข | สถานะ |
|---|---|
| เว็บไซต์อย่างน้อย 4 หน้า | 4 หน้า |
| Home: Navbar, Hero, Carousel, ข้อความแนะนำ, CTA, Card ≥ 3, Footer | ครบ (Card 3 ใบ + สินค้าแนะนำ 8 ใบ) |
| About: หัวข้อ, รายละเอียด, รูปภาพ, Card/Information, Button | ครบ |
| Services/Products: แสดงข้อมูล ≥ 6 รายการ เป็นคอลัมน์ | 50 รายการ |
| Contact: ชื่อ, Email, เบอร์โทร, หัวข้อ, รายละเอียด, Submit, แผนที่ | ครบ |
| Bootstrap Components ≥ 8 ชนิด | ใช้ 14 ชนิด (ดูด้านล่าง) |
| ใช้ HTML5 + Bootstrap 5 (CDN) | ใช้ Bootstrap 5.3.3 |
| CSS ที่เขียนเองอย่างน้อย 1 ไฟล์ | css/style.css |
| Responsive (Desktop / Tablet / Mobile) | ใช้ Grid + Media Query 3 ระดับ |
| ทุกหน้าเชื่อมโยงถึงกัน | Navbar + Footer ทุกหน้า |
| Navbar ทำงานทุกหน้า และเมนูเรียกหน้าอื่นด้วย JavaScript | ฟังก์ชัน `navigateTo()` ใน js/script.js |
| รูปภาพ | ภาพสินค้า 50 รูป + โลโก้ |

## Bootstrap Components ที่ใช้ (14 ชนิด)
1. Navbar   2. Dropdown   3. Collapse (ปุ่มเมนูมือถือ)   4. Carousel
5. Card     6. Button     7. Badge     8. Alert
9. Modal   10. Accordion 11. Form + Validation           12. Table
13. Breadcrumb          14. Progress

## จุดที่ปรับแต่งจาก Template เดิม
สี (ธีมมืดม่วง-ฟ้า), โลโก้, รูปภาพ, ข้อความทั้งหมด, เมนู, Layout,
รูปแบบ Card, ปุ่ม (btn-kh / btn-kh-outline), Footer, ตัวกรองสินค้า

## การใช้ไฟล์เมนูและ Footer ร่วมกัน
`menu.html` และ `footer.html` เก็บเมนูกับ Footer ไว้ไฟล์เดียว
ทุกหน้าเตรียมช่องว่างไว้เป็น `<nav id="menu">` และ `<footer id="footer">`
แล้ว `js/menu.js` จะใช้ `fetch()` ดึงเนื้อหามาแสดงให้อัตโนมัติ
เวลาแก้เมนูหรือ Footer จึงแก้ที่ไฟล์เดียว มีผลครบทั้ง 4 หน้า

## วิธีเปิดเว็บไซต์
**ต้องเปิดผ่านเว็บเซิร์ฟเวอร์** เช่น Live Server ของ VS Code
(คลิกขวาที่ `index.html` แล้วเลือก Open with Live Server)

เพราะ `fetch()` ที่ใช้โหลด `menu.html` / `footer.html` ทำงานกับ `file://` ไม่ได้
ถ้าเปิดด้วยการดับเบิลคลิกไฟล์ เมนูและ Footer จะไม่แสดง
และต้องต่ออินเทอร์เน็ตเพื่อโหลด Bootstrap จาก CDN
