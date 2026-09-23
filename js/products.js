// ข้อมูลสินค้าคีย์บอร์ด (แปลงจากไฟล์ข้อมูลในโฟลเดอร์ img)
const PRODUCTS = [
  {
    "id": "acer-aethon-303-rgb-black",
    "name": "ACER AETHON 303 RGB - BLACK",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) ACER AETHON 303 RGB - BLACK",
    "brand": "ACER",
    "price": 1990,
    "size": "Full-size",
    "switch": "Clicky",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "คีย์แคปไทย"
    ],
    "desc": "Acer Aethon 303 คีย์บอร์ดเกมมิ่งแบบมีสายที่มาพร้อมสวิตช์ Kailh Blue ให้สัมผัสการพิมพ์ที่แม่นยำและชัดเจน ดีไซน์แข็งแรงด้วยแผ่นอลูมิเนียมสีดำ ทนทานกว่า 50 ล้านครั้ง พร้อมไฟ RGB สุดตระการตา มอบประสบการณ์การเล่นเกมที่ดุดันและเต็มไปด้วยสไตล์",
    "specs": [
      "สวิตช์ : Kailh Blue Switches",
      "ขนาด : 100% (Full-size)",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย"
    ],
    "image": "images/products/acer-aethon-303-rgb-black.jpg"
  },
  {
    "id": "ajazz-ak820-white-blue-switch-en-th",
    "name": "AJAZZ AK820 (WHITE) (BLUE SWITCH EN/TH)",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) AJAZZ AK820 (WHITE) (BLUE SWITCH EN/TH)",
    "brand": "AJAZZ",
    "price": 990,
    "size": "",
    "switch": "Clicky",
    "wireless": false,
    "tags": [
      "มีสาย",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "",
    "specs": [
      "Blue Switch (Clicky)",
      "English / Thai Keycap",
      "ANSI",
      "Wired (Detachable USB-C to USB-A)",
      "Hot Swappable",
      "Windows / macOS / Android"
    ],
    "image": "images/products/ajazz-ak820-white-blue-switch-en-th.jpg"
  },
  {
    "id": "ajazz-ak820-v2-pro-lychee-switch-rgb-en-th-glass-soda",
    "name": "AJAZZ AK820 V2 PRO - LYCHEE SWITCH RGB EN/TH GLASS SODA",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) AJAZZ AK820 V2 PRO - LYCHEE SWITCH RGB EN/TH GLASS SODA",
    "brand": "AJAZZ",
    "price": 2700,
    "size": "75%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย",
      "Gasket"
    ],
    "desc": "Ajazz AK820 V2 Pro คีย์บอร์ดเกมมิ่งและทำงานขนาด 75% ที่ออกแบบมาเพื่อประสิทธิภาพและความสะดวกสูงสุด รองรับการเชื่อมต่อแบบ Tri-Mode พร้อมแบตเตอรี่ความจุสูง 10,000mAh ใช้งานได้ยาวนาน มาพร้อม Polling Rate สูงถึง 8KHz ในโหมด Wired และ 2.4G เพื่อการตอบสนองที่รวดเร็วและแม่นยำ หน้าจอสีและปุ่ม Knob อเนกประสงค์ช่วยควบคุมการใช้งานได้อย่างสะดวก รองรับการปรับแต่งปุ่ม มาโคร และไฟ RGB อย่างเต็มรูปแบบ พร้อมโครงสร้าง Gasket Mount และวัสดุซับเสียง 5 ชั้น เพื่อสัมผัสการพิมพ์ที่นุ่ม เงียบ และพรีเมียม รองรับ Windows, Mac และ Android",
    "specs": [
      "สวิตช์ : Lychee Switch (Linear)",
      "ขนาด : 75%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "จอแสดงผล : หน้าจอสี TFT ขนาด 0.9 นิ้ว",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/ajazz-ak820-v2-pro-lychee-switch-rgb-en-th-glass-soda.jpg"
  },
  {
    "id": "ajazz-ak820max-magnetic-switch-edition-mountain-mist-magnetic-switch-rgb-en-th",
    "name": "AJAZZ AK820MAX MAGNETIC SWITCH EDITION (MOUNTAIN MIST) (MAGNETIC SWITCH RGB EN/TH)",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) AJAZZ AK820MAX MAGNETIC SWITCH EDITION (MOUNTAIN MIST) (MAGNETIC SWITCH RGB EN/TH)",
    "brand": "AJAZZ",
    "price": 2090,
    "size": "",
    "switch": "Magnetic",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "",
    "specs": [
      "Magnetic Switch",
      "RGB",
      "English / Thai Keycap",
      "ANSI",
      "Wired (Detachable USB-C to USB-A)",
      "Hot Swappable"
    ],
    "image": "images/products/ajazz-ak820max-magnetic-switch-edition-mountain-mist-magnetic-switch-rgb-en-th.jpg"
  },
  {
    "id": "ajazz-ak980-v2-pro-lychee-switch-rgb-en-th-periodic-table",
    "name": "AJAZZ AK980 V2 PRO - LYCHEE SWITCH RGB EN/TH PERIODIC TABLE",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) AJAZZ AK980 V2 PRO - LYCHEE SWITCH RGB EN/TH PERIODIC TABLE",
    "brand": "AJAZZ",
    "price": 2700,
    "size": "98%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย",
      "Gasket"
    ],
    "desc": "Ajazz AK980 V2 PRO คือคีย์บอร์ดเกมมิ่งขนาด 98% ระดับพรีเมียมที่ตอบโจทย์ทั้งการทำงานและการแข่งขันอีสปอร์ต รองรับการเชื่อมต่อครบทั้ง USB, 2.4GHz Wireless และ Bluetooth 5.1 พร้อม Dual 8K Polling Rate และค่า Latency ต่ำเพียง 0.125ms เพื่อการตอบสนองที่รวดเร็วและแม่นยำ ฟังก์ชันปรับแต่งขั้นสูงอย่าง SOCD, Macro, CB, MT และ TGL ช่วยให้ใช้งานได้หลากหลายสถานการณ์ แบตเตอรี่ขนาดใหญ่ 10,000mAh ใช้งานได้ยาวนาน เสริมด้วยจอสี TFT HD 1.14 นิ้วและปุ่มหมุนอเนกประสงค์ โครงสร้าง Gasket ช่วยลดเสียงและเพิ่มความนุ่มนวลในการพิมพ์ พร้อมไฟ RGB 16 ล้านสีที่ปรับแต่งได้อย่างสวยงาม",
    "specs": [
      "สวิตช์ : Lychee Switch (Linear)",
      "ขนาด : 98%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "จอแสดงผล : 1.14\"",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/ajazz-ak980-v2-pro-lychee-switch-rgb-en-th-periodic-table.jpg"
  },
  {
    "id": "ajazz-pixel68-ice-sea-spirit-switch-rgb-en-th-white",
    "name": "AJAZZ PIXEL68 - ICE SEA SPIRIT SWITCH RGB EN/TH WHITE",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) AJAZZ PIXEL68 - ICE SEA SPIRIT SWITCH RGB EN/TH WHITE",
    "brand": "AJAZZ",
    "price": 3500,
    "size": "65%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย",
      "Gasket"
    ],
    "desc": "Ajazz Pixel68 คีย์บอร์ด Mechanical ขนาดกะทัดรัด 65% โดดเด่นด้วยจอ Pixel Matrix LED 260 ดวง ปรับแต่งภาพและเอฟเฟกต์ได้ พร้อมโครงสร้าง Gasket Mount และไฟ RGB รองรับการเชื่อมต่อ 3 โหมด Wired USB-C / 2.4GHz / Bluetooth 5.1 แบตเตอรี่ขนาดใหญ่ 10000mAh พร้อมปุ่มหมุนโลหะ เหมาะทั้งเล่นเกมและจัดโต๊ะคอม",
    "specs": [
      "สวิตช์ : Ice Sea Spirit Switch (Linear)",
      "ขนาด : 65%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/ajazz-pixel68-ice-sea-spirit-switch-rgb-en-th-white.jpg"
  },
  {
    "id": "alienware-pro-alienware-linear-switch-rgb-en-dark-side-of-the-moon",
    "name": "ALIENWARE PRO ALIENWARE LINEAR SWITCH RGB EN - DARK SIDE OF THE MOON",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) ALIENWARE PRO ALIENWARE LINEAR SWITCH RGB EN - DARK SIDE OF THE MOON",
    "brand": "ALIENWARE",
    "price": 5190,
    "size": "75%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "ALIENWARE PRO เป็นคีย์บอร์ดเกมมิ่งแบบ Mechanical ระดับพรีเมียม ขนาดกะทัดรัด 75% ที่โดดเด่นด้วยสวิตช์เฉพาะจาก Alienware แบบ Linear ให้สัมผัสที่ลื่นไหล เงียบ ตอบสนองไว เหมาะทั้งการเล่นเกมและการทำงาน ด้วยดีไซน์ที่สวยงาม พร้อมแสงไฟ RGB ปรับแต่งได้หลากหลาย",
    "specs": [
      "สวิตช์ : Alienware Switch (Linear)",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "ขนาดคีย์บอร์ด : 75%",
      "การเชื่อมต่อ : สาย USB-C เป็น USB-A แบบถอดออกได้, ไร้สาย 2.4GHz, บลูทูธ",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/alienware-pro-alienware-linear-switch-rgb-en-dark-side-of-the-moon.jpg"
  },
  {
    "id": "arrow-x-ak-950-pro-blue-switch-rainbow-led-en-th-black",
    "name": "ARROW X AK-950 PRO BLUE SWITCH RAINBOW LED EN/TH - BLACK",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) ARROW X AK-950 PRO BLUE SWITCH RAINBOW LED EN/TH - BLACK",
    "brand": "ARROW X",
    "price": 760,
    "size": "",
    "switch": "Clicky",
    "wireless": false,
    "tags": [
      "มีสาย",
      "คีย์แคปไทย"
    ],
    "desc": "",
    "specs": [
      "Blue Switch (Clicky)",
      "Rainbow LED",
      "English / Thai Keycap",
      "ANSI",
      "Wired (NON-Detachable USB-A)"
    ],
    "image": "images/products/arrow-x-ak-950-pro-blue-switch-rainbow-led-en-th-black.jpg"
  },
  {
    "id": "asus-rog-azoth-x-rog-nx-snow-v2-switch-rgb-en-white",
    "name": "ASUS ROG AZOTH X - ROG NX SNOW V2 SWITCH RGB EN WHITE",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) ASUS ROG AZOTH X - ROG NX SNOW V2 SWITCH RGB EN WHITE",
    "brand": "ASUS ROG",
    "price": 10590,
    "size": "75%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "Gasket"
    ],
    "desc": "Asus ROG Azoth X คือคีย์บอร์ดเกมมิ่งระดับพรีเมียมขนาด 75% ที่ออกแบบมาเพื่อเกมเมอร์และผู้ใช้สายคัสตอมโดยเฉพาะ มาพร้อมสวิตช์ ROG NX V2 แบบ Mechanical ที่ถอดเปลี่ยนได้ ให้สัมผัสการพิมพ์ที่แม่นยำและลื่นไหล โครงสร้าง Gasket Mount เสริมด้วยแผ่นซับแรงสั่นสะเทือนถึง 5 ชั้น และแผ่น FR4 ช่วยลดเสียงและเพิ่มความนุ่มในการกด ตัวบอดี้ด้านบนทำจากโลหะแข็งแรง ทนทาน รองรับการเชื่อมต่อแบบ Tri-Mode ทั้ง USB, 2.4GHz SpeedNova และ Bluetooth พร้อมจอ OLED และปุ่มควบคุมอเนกประสงค์ รองรับทั้ง Windows และ Mac",
    "specs": [
      "สวิตช์ : ROG NX Snow V2 Switch (Linear)",
      "ขนาด : 75%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "จอแสดงผล : 2\" OLED",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/asus-rog-azoth-x-rog-nx-snow-v2-switch-rgb-en-white.jpg"
  },
  {
    "id": "asus-rog-falcata-rog-hfx-v2-magnetic-switch-rgb-en-black",
    "name": "ASUS ROG FALCATA - ROG HFX V2 MAGNETIC SWITCH RGB EN BLACK",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) ASUS ROG FALCATA - ROG HFX V2 MAGNETIC SWITCH RGB EN BLACK",
    "brand": "ASUS ROG",
    "price": 12500,
    "size": "75%",
    "switch": "Magnetic",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "Asus ROG Falcata คือคีย์บอร์ดเกมมิ่งแบบ Split ขนาด 75% ที่ออกแบบมาเพื่อการแข่งขันและการปรับแต่งขั้นสูง มาพร้อมสวิตช์แม่เหล็ก ROG HFX V2 ที่ถอดเปลี่ยนได้ ทำงานร่วมกับ ROG Hall Sensor ให้การตอบสนองรวดเร็วและแม่นยำ รองรับฟังก์ชัน Rapid Trigger ที่ช่วยรีเซ็ตการกดได้ทันที เพิ่มความได้เปรียบในเกม เชื่อมต่อได้แบบ Tri-Mode ด้วยเทคโนโลยี ROG SpeedNova 8K ให้ความหน่วงต่ำมาก เสริมด้วยระบบซับแรงสั่นสะเทือน 4 ชั้น ปุ่มควบคุมและลูกล้ออเนกประสงค์ โหมด Zone Mode และที่รองข้อมือซิลิโคนแบบถอดได้ เพื่อความสบายในการใช้งานระยะยาว",
    "specs": [
      "สวิตช์ : ROG HFX V2 Magnetic Switch (Linear)",
      "ขนาด : 75%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/asus-rog-falcata-rog-hfx-v2-magnetic-switch-rgb-en-black.jpg"
  },
  {
    "id": "asus-rog-strix-scope-ii-96-wireless-black-asus-rog-nx-storm-switch-aura-sync-rgb-en-th",
    "name": "ASUS ROG STRIX SCOPE II 96 WIRELESS (BLACK) (ASUS ROG NX STORM SWITCH - AURA SYNC RGB - EN/TH)",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) ASUS ROG STRIX SCOPE II 96 WIRELESS (BLACK) (ASUS ROG NX STORM SWITCH - AURA SYNC RGB - EN/TH)",
    "brand": "ASUS ROG",
    "price": 4790,
    "size": "",
    "switch": "Clicky",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "",
    "specs": [
      "Asus ROG NX Storm Switch (Clicky)",
      "Aura Sync RGB",
      "English / Thai Keycap",
      "ANSI",
      "Wired (Detachable USB-C to USB-A)",
      "2.4GHz Wireless (USB Receiver Included)",
      "Bluetooth 5.1",
      "Hot Swappable"
    ],
    "image": "images/products/asus-rog-strix-scope-ii-96-wireless-black-asus-rog-nx-storm-switch-aura-sync-rgb-en-th.jpg"
  },
  {
    "id": "aula-hero68he-uranus-magnetic-switch-rgb-en-black",
    "name": "AULA HERO68HE URANUS MAGNETIC SWITCH RGB EN - BLACK",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) AULA HERO68HE URANUS MAGNETIC SWITCH RGB EN - BLACK",
    "brand": "AULA",
    "price": 2090,
    "size": "",
    "switch": "Magnetic",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "เข้าร่วมกับเหล่าเกมเมอร์ระดับแนวหน้า ด้วยคีย์บอร์ดแม่เหล็ก Hero68 HE ที่ผสานความเร็ว สไตล์ และเสียงที่น่าพึงพอใจเข้าไว้ด้วยกัน ไม่เพียงแค่มีค่าความหน่วงเพียง 0.125 มิลลิวินาที ซึ่งเร็วกว่าเกือบ 10 เท่าเมื่อเทียบกับคีย์บอร์ดแมคคานิคทั่วไป Hero68 HE ยังมาพร้อมแผ่นโลหะและโครงสร้างลดเสียงรบกวนถึง 5 ชั้น ซึ่งหาได้ยากในคีย์บอร์ดแม่เหล็กทั่วไป ยกระดับจากเสียง “แคร่ก” ที่น่ารำคาญของคีย์บอร์ดแม่เหล็กแบบเดิม สู่ความเพลิดเพลินแบบ “ท็อก” ที่แท้จริง ทั้งภายในและภายนอก Hero68 HE โดดเด่นด้วยดีไซน์สุดประณีตจากแผงโลหะคุณภาพสูงและกล่องไฟบรรยากาศสุดล้ำ ออกแบบมาเพื่อเกมเมอร์ที่ต้องการสิ่งที่ดีที่สุดเท่านั้น",
    "specs": [
      "สวิตช์ : Uranus Magnetic Switch (Linear)",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : สาย USB-C เป็น USB-A แบบถอดออกได้",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/aula-hero68he-uranus-magnetic-switch-rgb-en-black.jpg"
  },
  {
    "id": "aula-hero84he-pluto-magnetic-switch-rgb-white",
    "name": "AULA HERO84HE PLUTO MAGNETIC SWITCH RGB - WHITE",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) AULA HERO84HE PLUTO MAGNETIC SWITCH RGB - WHITE",
    "brand": "AULA",
    "price": 2290,
    "size": "75%",
    "switch": "Magnetic",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "AULA HERO 84HE คีย์บอร์ดเกมมิ่งขนาด 75% พร้อมเทคโนโลยี Magnetic Switch เปลี่ยนสวิตช์ได้แบบ Hot-swap ตอบสนองเร็วด้วย Polling Rate 8000Hz และ Key Scanning Rate 128KHz รองรับ Dynamic Keystroke 1 ปุ่มใช้ได้ 4 คำสั่ง พร้อมระบบ DKS, MT, TGL และ SOCD โครงสร้างเสริมความทนทานด้วยแผ่น Carbon Fiber และวัสดุกันเสียง 5 ชั้น ไฟ RGB ปรับแต่งได้ 16 ล้านสี ผ่าน Web Driver ใช้งานผ่านสาย Type-C ดีไซน์กะทัดรัด ขนาด 84 ปุ่ม น้ำหนักเบาเพียง 910 กรัม",
    "specs": [
      "สวิตช์ : Pluto Magnetic Switch",
      "แสงไฟ : RGB",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : สาย USB-C เป็น USB-A แบบถอดออกได้",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/aula-hero84he-pluto-magnetic-switch-rgb-white.jpg"
  },
  {
    "id": "aula-l99-rain-switch-rgb-en-th-black-gray-yellow",
    "name": "AULA L99 - RAIN SWITCH RGB EN/TH BLACK-GRAY-YELLOW",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) AULA L99 - RAIN SWITCH RGB EN/TH BLACK-GRAY-YELLOW",
    "brand": "AULA",
    "price": 3590,
    "size": "75%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย",
      "Gasket"
    ],
    "desc": "Aula L99 เป็นคีย์บอร์ด Mechanical ขนาด 75% แบบ Tri-Mode ที่รองรับการเชื่อมต่อทั้งแบบมีสาย, 2.4GHz และ Bluetooth โดดเด่นด้วยหน้าจอ IPS Touchscreen ขนาด 3.98 นิ้ว ความละเอียด 320×480 สามารถปรับตั้งค่าและอัปโหลดภาพ GIF หรือ JPG เพื่อปรับแต่งหน้าจอได้ตามต้องการ โครงสร้างแบบ Gasket ช่วยให้การพิมพ์นุ่มนวล รองรับ Hot-Swap ทุกปุ่มเพื่อเปลี่ยนสวิตช์ได้ง่าย มาพร้อมไฟ RGB เพิ่มความสวยงาม และแบตเตอรี่ความจุสูง 8000mAh ใช้งานได้ยาวนานตลอดวัน เหมาะสำหรับทั้งการทำงานและการเล่นเกมที่ต้องการทั้งประสิทธิภาพและความโดดเด่นในการปรับแต่ง",
    "specs": [
      "สวิตช์ : Rain Switch (Linear)",
      "ขนาด : 75%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "จอแสดงผล : 3.98\" IPS touchscreen",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/aula-l99-rain-switch-rgb-en-th-black-gray-yellow.jpg"
  },
  {
    "id": "aula-leobog-amg65-jasper-switch-rgb-en-white",
    "name": "AULA LEOBOG AMG65 - JASPER SWITCH RGB EN WHITE",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) AULA LEOBOG AMG65 - JASPER SWITCH RGB EN WHITE",
    "brand": "AULA",
    "price": 3490,
    "size": "65%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "Gasket"
    ],
    "desc": "คีย์บอร์ด Aula LEOBOG AMG65 เป็นคีย์บอร์ดแมคคานิคอลไร้สายแบบ Tri-mode (บลูทูธ 2.4G และมีสาย) ขนาด 65% ที่โดดเด่นด้วยดีไซน์โครงสร้าง Gasket มอบสัมผัสการพิมพ์ที่ยืดหยุ่นและเสียงที่ดีเยี่ยม มาพร้อมจอแสดงผลอัจฉริยะถึงสองหน้าจอ ได้แก่ 315 LED Smart Dot Matrix Screen (โครงสร้าง 5x63 จุด) และหน้าจอสีขนาด 1.14 นิ้ว ให้ผู้ใช้ปรับแต่งการแสดงผลได้อย่างอิสระ ไม่ว่าจะเป็นภาพเคลื่อนไหวหรือข้อมูลสำคัญ นอกจากนี้ ยังรองรับการถอดเปลี่ยนสวิตช์แบบ Hot-swappable ได้อย่างสมบูรณ์ ทำให้การปรับแต่งและบำรุงรักษาเป็นเรื่องง่ายสำหรับผู้ที่ชื่นชอบคีย์บอร์ด",
    "specs": [
      "สวิตช์ : Jasper Switch (Linear)",
      "ขนาด : 65%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "จอแสดงผล : จอ LED Smart Dot Matrix 315 จุด พร้อมจอสี 1.14 นิ้ว",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/aula-leobog-amg65-jasper-switch-rgb-en-white.jpg"
  },
  {
    "id": "cherry-mx-1-1-tkl-rgb-white-en",
    "name": "CHERRY MX 1.1 TKL RGB (WHITE) (EN)",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) CHERRY MX 1.1 TKL RGB (WHITE) (EN)",
    "brand": "CHERRY",
    "price": 2190,
    "size": "TKL",
    "switch": "Mechanical",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB"
    ],
    "desc": "",
    "specs": [
      "CHERRY MX",
      "RGB",
      "English Keycap",
      "Wired (Detachable USB-C to USB-A)",
      "Windows 10, Windows 11, Windows 7, Windows 8"
    ],
    "image": "images/products/cherry-mx-1-1-tkl-rgb-white-en.jpg"
  },
  {
    "id": "cherry-xtrfy-k5v2-compact-red-switch-transparent-white-en",
    "name": "CHERRY XTRFY K5V2 COMPACT RED SWITCH (TRANSPARENT WHITE) (EN)",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) CHERRY XTRFY K5V2 COMPACT RED SWITCH (TRANSPARENT WHITE) (EN)",
    "brand": "CHERRY XTRFY",
    "price": 4990,
    "size": "",
    "switch": "Linear",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "",
    "specs": [
      "Hot-swappable CHERRY MX2A Red Switch",
      "Strip LED RGB illumination",
      "English Keycap",
      "Wired (Detachable USB-C to USB-A, 2 m braided)",
      "USB plug-and-play"
    ],
    "image": "images/products/cherry-xtrfy-k5v2-compact-red-switch-transparent-white-en.jpg"
  },
  {
    "id": "cooler-master-mk770-kailh-box-v2-white-switch-rgb-en-space-gray-mk-770-gkkw1-us",
    "name": "COOLER MASTER MK770 - KAILH BOX V2 WHITE SWITCH RGB EN SPACE GRAY MK-770-GKKW1-US",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) COOLER MASTER MK770 - KAILH BOX V2 WHITE SWITCH RGB EN SPACE GRAY MK-770-GKKW1-US",
    "brand": "COOLER MASTER",
    "price": 2990,
    "size": "96%",
    "switch": "Clicky",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "Gasket"
    ],
    "desc": "Cooler Master MK770 คือคีย์บอร์ดขนาด 96% ที่ผสมผสานประสิทธิภาพเข้ากับการปรับแต่งได้ดั่งใจ โดดเด่นด้วยโครงสร้าง Full Gasket ที่ช่วยลดแรงสั่นสะเทือนและเสียงรบกวน มอบสัมผัสการพิมพ์ที่นุ่มนวล รองรับการเชื่อมต่อ 3 โหมด (Wired, 2.4GHz, Bluetooth 5.1) และใช้งานได้ทุกแพลตฟอร์ม (Windows, Mac, iOS, Android) มาพร้อมฟีเจอร์ Hot-Swappable ให้คุณเปลี่ยนสวิตช์เองได้ง่ายๆ เสริมด้วย Multi-Function Roller สำหรับการควบคุมที่รวดเร็ว และไฟ RGB ที่ปรับแต่งได้ละเอียดผ่านซอฟต์แวร์",
    "specs": [
      "สวิตช์ : Kailh Box V2 White Switch (Clicky)",
      "ขนาด : 96%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/cooler-master-mk770-kailh-box-v2-white-switch-rgb-en-space-gray-mk-770-gkkw1-us.jpg"
  },
  {
    "id": "corsair-galleon-100-sd-built-in-stream-deck-corsair-mlx-pulse-linear-switch-rgb-en-black-ch-912a31i-na",
    "name": "CORSAIR GALLEON 100 SD - BUILT-IN STREAM DECK CORSAIR MLX PULSE LINEAR SWITCH RGB EN BLACK CH-912A31I-NA",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) CORSAIR GALLEON 100 SD - BUILT-IN STREAM DECK CORSAIR MLX PULSE LINEAR SWITCH RGB EN BLACK CH-912A31I-NA",
    "brand": "CORSAIR",
    "price": 11990,
    "size": "Full-size",
    "switch": "Linear",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap",
      "Gasket"
    ],
    "desc": "Corsair GALLEON 100 SD คีย์บอร์ด Full Size ที่รวมหน้าจอ Stream Deck ไว้ในตัว พร้อมปุ่ม LCD และปุ่มหมุนที่ปรับแต่งได้อิสระ มอบประสิทธิภาพระดับโปรด้วย 8,000Hz Hyper-polling และเทคโนโลยี FlashTap รองรับการ Hot-swap เพื่อเปลี่ยนสวิตช์ได้ทันที สัมผัสการพิมพ์พรีเมียมด้วยระบบ Gasket Mount และเลเยอร์ซับเสียง 6 ชั้น สะดวกยิ่งขึ้นด้วยการตั้งค่า Macro, รีแมปปุ่ม และปรับไฟ RGB ผ่านเบราว์เซอร์ได้โดยตรงโดยไม่ต้องลงซอฟต์แวร์ให้หนักเครื่อง",
    "specs": [
      "สวิตช์ : Corsair MLX Pulse Linear Switch",
      "ขนาด : 100% (Full-size)",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/corsair-galleon-100-sd-built-in-stream-deck-corsair-mlx-pulse-linear-switch-rgb-en-black-ch-912a31i-na.jpg"
  },
  {
    "id": "corsair-k65-plus-wireless-corsair-mlx-tactile-switch-rgb-en-black-ch-91d441f-na",
    "name": "CORSAIR K65 PLUS WIRELESS CORSAIR MLX TACTILE SWITCH RGB EN - BLACK (CH-91D441F-NA)",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) CORSAIR K65 PLUS WIRELESS CORSAIR MLX TACTILE SWITCH RGB EN - BLACK (CH-91D441F-NA)",
    "brand": "CORSAIR",
    "price": 3790,
    "size": "75%",
    "switch": "Tactile",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "โดดเด่นเหนือใครด้วยทักษะอันยอดเยี่ยมและการออกแบบที่เป็นเอกลักษณ์ คีย์บอร์ดเกม CORSAIR K65 PLUS WIRELESS TACTILE ขนาด 75% ที่สามารถเปลี่ยนสวิตช์ได้ (Hot-swappable) ที่เต็มเปี่ยมไปด้วยประสิทธิภาพและบุคลิกภาพ ปรับประสบการณ์การพิมพ์ของคุณด้วยสวิตช์ CORSAIR MLX Fusion แบบสัมผัส (Tactile) ที่ได้รับการหล่อลื่นล่วงหน้า ซึ่งมาพร้อมกับการบัมพ์ในตอนต้นเพื่อให้สัมผัสการพิมพ์ที่พึงพอใจ",
    "specs": [
      "สวิตช์ : Corsair MLX Tactile Switch",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : สาย USB-C เป็น USB-A แบบถอดออกได้, ไร้สาย 2.4GHz, บลูทูธ",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/corsair-k65-plus-wireless-corsair-mlx-tactile-switch-rgb-en-black-ch-91d441f-na.jpg"
  },
  {
    "id": "corsair-k70-core-black-corsair-mlx-red-switch-rgb-led-en-th-ch-910971e-th",
    "name": "CORSAIR K70 CORE (BLACK) (CORSAIR MLX RED SWITCH - RGB LED - EN/TH) (CH-910971E-TH)",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) CORSAIR K70 CORE (BLACK) (CORSAIR MLX RED SWITCH - RGB LED - EN/TH) (CH-910971E-TH)",
    "brand": "CORSAIR",
    "price": 2590,
    "size": "",
    "switch": "Linear",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "คีย์แคปไทย"
    ],
    "desc": "",
    "specs": [
      "Corsair MLX Red Switch (Linear)",
      "RGB LED",
      "English / Thai Keycap",
      "ANSI",
      "Wired (Non-Detachable USB-A)"
    ],
    "image": "images/products/corsair-k70-core-black-corsair-mlx-red-switch-rgb-led-en-th-ch-910971e-th.jpg"
  },
  {
    "id": "corsair-vanguard-pro-96-corsair-mgx-hyperdrive-magnetic-switch-rgb-en-black-ch-91e911g-na",
    "name": "CORSAIR VANGUARD PRO 96 - CORSAIR MGX HYPERDRIVE MAGNETIC SWITCH RGB EN BLACK CH-91E911G-NA",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) CORSAIR VANGUARD PRO 96 - CORSAIR MGX HYPERDRIVE MAGNETIC SWITCH RGB EN BLACK CH-91E911G-NA",
    "brand": "CORSAIR",
    "price": 7290,
    "size": "96%",
    "switch": "Magnetic",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "Corsair VANGUARD PRO 96 มาพร้อมสวิตช์แม่เหล็ก MGX Hyperdrive ให้ความแม่นยำและตอบสนองฉับไวยิ่งขึ้น รองรับอัตราโพลลิง 8,000Hz สำหรับการสั่งงานที่รวดเร็วระดับแข่งขัน ดีไซน์กะทัดรัดแบบ 96% ใช้งานสะดวกโดยไม่เสียปุ่มสำคัญ พร้อมจอ LCD สำหรับปรับแต่งได้ล้ำกว่าเดิม รองรับ Elgato Virtual Stream Deck เพื่อสร้างชอร์ตคัตและเพิ่มประสิทธิภาพการทำงาน เทคโนโลยี FlashTap SOCD ยังช่วยให้ควบคุมทิศทางซับซ้อนได้มั่นใจทุกการเคลื่อนไหว",
    "specs": [
      "สวิตช์ : Corsair MGX Hyperdrive Magnetic Switch (Linear)",
      "ขนาด : 96%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "จอแสดงผล : 1.9\"",
      "การเชื่อมต่อ : แบบใช้สาย",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ - แนะนำให้ทำการคาลิเบรตเมื่อใช้สวิตช์ชนิดอื่น เพื่อให้ได้ประสิทธิภาพที่ดีที่สุด"
    ],
    "image": "images/products/corsair-vanguard-pro-96-corsair-mgx-hyperdrive-magnetic-switch-rgb-en-black-ch-91e911g-na.jpg"
  },
  {
    "id": "dareu-a81-pro-transparent-black-dareu-sky-blue-v3-switch-rgb-en",
    "name": "DAREU A81 PRO (TRANSPARENT BLACK) (DAREU SKY BLUE V3 SWITCH RGB EN)",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) DAREU A81 PRO (TRANSPARENT BLACK) (DAREU SKY BLUE V3 SWITCH RGB EN)",
    "brand": "DAREU",
    "price": 3590,
    "size": "",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "",
    "specs": [
      "Dareu Sky Blue V3 Switch (Linear)",
      "RGB",
      "English Keycap",
      "ANSI",
      "Wired (Detachable USB-C to USB-A)",
      "2.4GHz Wireless (USB Receiver Included)",
      "Bluetooth",
      "Hot Swappable (5 pin)"
    ],
    "image": "images/products/dareu-a81-pro-transparent-black-dareu-sky-blue-v3-switch-rgb-en.jpg"
  },
  {
    "id": "dareu-a98-master-white-blue-dareu-sky-pom-switch-rgb-en-th",
    "name": "DAREU A98 MASTER (WHITE-BLUE) (DAREU SKY POM SWITCH RGB EN/TH)",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) DAREU A98 MASTER (WHITE-BLUE) (DAREU SKY POM SWITCH RGB EN/TH)",
    "brand": "DAREU",
    "price": 4190,
    "size": "",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "",
    "specs": [
      "Dareu Sky Pom Switch (Linear)",
      "RGB",
      "English / Thai Keycap",
      "ANSI",
      "Wired (Detachable USB-C to USB-A)",
      "2.4GHz Wireless (USB Receiver Included)",
      "Bluetooth",
      "Hot Swappable (5 pin)"
    ],
    "image": "images/products/dareu-a98-master-white-blue-dareu-sky-pom-switch-rgb-en-th.jpg"
  },
  {
    "id": "ega-type-cmk10-red-switch-rgb-en-th-white",
    "name": "EGA TYPE CMK10 - RED SWITCH RGB EN/TH WHITE",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) EGA TYPE CMK10 - RED SWITCH RGB EN/TH WHITE",
    "brand": "EGA TYPE",
    "price": 1390,
    "size": "75%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "EGA TYPE CMK10 คีย์บอร์ดเกมมิ่งไร้สายขนาด 75% มาพร้อม 80 ปุ่ม รองรับการเชื่อมต่อ 3 โหมด ทั้ง USB to Type-C, 2.4GHz Wireless และ Bluetooth 5.0 เพิ่มความสะดวกด้วย Knob สำหรับปรับระดับเสียง รองรับ Hot Swap สูงสุด 5 Pin พร้อมไฟ RGB Spectrum 18 โหมด รองรับอายุการกดสูงสุด 50 ล้านครั้ง เหมาะทั้งเล่นเกมและใช้งานทั่วไป",
    "specs": [
      "สวิตช์ : Red Switch (Linear)",
      "ขนาด : 75%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/ega-type-cmk10-red-switch-rgb-en-th-white.jpg"
  },
  {
    "id": "ega-type-cmk8-white-green-saiko-one-switch-rgb-en-th",
    "name": "EGA TYPE CMK8 (WHITE-GREEN) (SAIKO ONE SWITCH RGB EN/TH)",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) EGA TYPE CMK8 (WHITE-GREEN) (SAIKO ONE SWITCH RGB EN/TH)",
    "brand": "EGA TYPE",
    "price": 1290,
    "size": "",
    "switch": "Clicky",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "",
    "specs": [
      "Saiko One Switch (Clicky)",
      "RGB",
      "English / Thai Keycap",
      "ANSI",
      "Wired (Detachable USB-C to USB-A)",
      "2.4GHz Wireless",
      "Bluetooth 5.3",
      "Hot Swappable (5 pin)",
      "Windows / macOS"
    ],
    "image": "images/products/ega-type-cmk8-white-green-saiko-one-switch-rgb-en-th.jpg"
  },
  {
    "id": "ega-type-mg69he-magnetic-switch-rgb-en-th-white-purple-black-green",
    "name": "EGA TYPE MG69HE - MAGNETIC SWITCH RGB EN/TH WHITE-PURPLE-BLACK-GREEN",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) EGA TYPE MG69HE - MAGNETIC SWITCH RGB EN/TH WHITE-PURPLE-BLACK-GREEN",
    "brand": "EGA TYPE",
    "price": 1290,
    "size": "65%",
    "switch": "Magnetic",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "EGA TYPE MG69HE คีย์บอร์ดเกมมิ่งดีไซน์กะทัดรัดขนาด 65% มาพร้อม Hall Effect Magnetic Switch แบบไร้การสัมผัส ให้ความทนทานสูงถึง 100 ล้านครั้ง และการตอบสนองที่รวดเร็วเหนือสวิตช์ทั่วไป เสริมความแม่นยำด้วย 8K Polling Rate (8000Hz) เร็วกว่ามาตรฐานถึง 8 เท่า รองรับ Rapid Trigger 0.01 มม. ปรับจุดกดได้ละเอียด 0.1–3.4 มม. พร้อมโหมดแข่งขัน SOCD / DKS / MT / TGL ตอบโจทย์เกมเมอร์ระดับจริงจัง",
    "specs": [
      "สวิตช์ : Magnetic Switch (Linear)",
      "ขนาด : 65%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/ega-type-mg69he-magnetic-switch-rgb-en-th-white-purple-black-green.jpg"
  },
  {
    "id": "fantech-mk896-atom-pro106d-berry-frost-switch-argb-en-th-luffy",
    "name": "FANTECH MK896 ATOM PRO106D - BERRY FROST SWITCH ARGB EN/TH LUFFY",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) FANTECH MK896 ATOM PRO106D - BERRY FROST SWITCH ARGB EN/TH LUFFY",
    "brand": "FANTECH",
    "price": 2480,
    "size": "Full-size",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย",
      "Gasket"
    ],
    "desc": "Fantech MK896 ATOM PRO106D คือคีย์บอร์ดเกมมิ่งแบบ Full Size 106 ปุ่ม ดีไซน์ลิขสิทธิ์แท้จาก Toei Animation ถ่ายทอดเอกลักษณ์จาก One Piece อย่างโดดเด่น รองรับการเชื่อมต่อ 3 โหมด Wired, Bluetooth และ 2.4GHz พร้อมไฟ ARGB ปรับแต่งได้ ฟังก์ชัน Anti-Ghosting ครบทุกปุ่ม และแบตเตอรี่ใช้งานยาวนาน มาพร้อมโมดูลสลับใช้งานระหว่างหน้าจอ LCD และปุ่มเสริม รวมถึง Gasket Mount ที่ช่วยลดเสียงและเพิ่มความนุ่มนวลในการพิมพ์ รองรับทั้ง Windows และ macOS",
    "specs": [
      "สวิตช์ : Berry Frost Switch (Linear)",
      "ขนาด : 100% (Full-size)",
      "แสงไฟ : ARGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "จอแสดงผล : Smart LCD",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/fantech-mk896-atom-pro106d-berry-frost-switch-argb-en-th-luffy.jpg"
  },
  {
    "id": "fantech-mk922-atom-he68-pro-super-maxfit-magnetic-emerald-switch-rgb-en-th-gray",
    "name": "FANTECH MK922 ATOM HE68 PRO SUPER MAXFIT - MAGNETIC EMERALD SWITCH RGB EN/TH GRAY",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) FANTECH MK922 ATOM HE68 PRO SUPER MAXFIT - MAGNETIC EMERALD SWITCH RGB EN/TH GRAY",
    "brand": "FANTECH",
    "price": 1390,
    "size": "65%",
    "switch": "Magnetic",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "คีย์แคปไทย"
    ],
    "desc": "Fantech MK922 ATOM HE68 PRO SUPER MAXFIT คีย์บอร์ดเกมมิ่งขนาด 65% ดีไซน์กะทัดรัด ช่วยประหยัดพื้นที่โต๊ะและเพิ่มความเรียบหรูให้กับทุกเซ็ตอัป รองรับการเชื่อมต่อ Tri Mode ทั้ง Bluetooth 5.0, 2.4GHz และสาย USB ให้ใช้งานได้หลากหลายอุปกรณ์ มาพร้อม Polling Rate สูงสุด 8K และ Key Scan Rate 256K ตอบสนองรวดเร็วแม่นยำระดับแข่งขัน รองรับ Full-Key Anti-Ghosting และความละเอียดการกด 0.01 พร้อมฟังก์ชันขั้นสูง RS, SOCD, DKS, MT และ TGL เพื่อการเล่นเกมที่ลื่นไหลและควบคุมได้เหนือกว่า",
    "specs": [
      "สวิตช์ : Magnetic Emerald Switch (Linear)",
      "ขนาด : 65%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A"
    ],
    "image": "images/products/fantech-mk922-atom-he68-pro-super-maxfit-magnetic-emerald-switch-rgb-en-th-gray.jpg"
  },
  {
    "id": "fiio-kb3-hifi-audio-with-dac-amp-gateron-gpro-3-0-yellow-switch-rgb-en-black",
    "name": "FIIO KB3 HIFI AUDIO WITH DAC/AMP GATERON GPRO 3.0 YELLOW SWITCH RGB EN - BLACK",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) FIIO KB3 HIFI AUDIO WITH DAC/AMP GATERON GPRO 3.0 YELLOW SWITCH RGB EN - BLACK",
    "brand": "FIIO",
    "price": 5490,
    "size": "75%",
    "switch": "Linear",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap",
      "Gasket"
    ],
    "desc": "Fiio KB3 เป็นคีย์บอร์ดแมคคานิคอลที่ผสานระบบเสียง HiFi ไว้อย่างลงตัว ด้วยดีไซน์แบบ Gasket Mount เพื่อสัมผัสที่นุ่มนวล ปรับเปลี่ยนสวิตช์ได้ทุกปุ่ม (Hot-swappable) ใช้สวิตช์ Gateron G Pro 3.0 Yellow ตอบสนองเร็ว รองรับทั้ง Windows และ macOS มาพร้อม DAC คู่รุ่น CS43131 ให้กำลังขับสูงถึง 550mW รองรับทั้งแจ็คหูฟัง 3.5 มม. และ 4.4 มม. เสียงทรงพลังในคีย์บอร์ดระดับมืออาชีพ",
    "specs": [
      "สวิตช์ : Gateron Gpro 3.0 Yellow Switch (Linear)",
      "ขนาด : 75%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : สาย USB-C เป็น USB-A แบบถอดออกได้"
    ],
    "image": "images/products/fiio-kb3-hifi-audio-with-dac-amp-gateron-gpro-3-0-yellow-switch-rgb-en-black.jpg"
  },
  {
    "id": "glorious-gmmk-3-prebuilt-100-glorious-fox-linear-switch-rgb-en-black",
    "name": "GLORIOUS GMMK 3 PREBUILT 100% - GLORIOUS FOX LINEAR SWITCH RGB EN BLACK",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) GLORIOUS GMMK 3 PREBUILT 100% - GLORIOUS FOX LINEAR SWITCH RGB EN BLACK",
    "brand": "GLORIOUS",
    "price": 6990,
    "size": "Full-size",
    "switch": "Linear",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap",
      "Gasket"
    ],
    "desc": "Glorious GMMK 3 Prebuilt 100% คือคีย์บอร์ดที่สมบูรณ์แบบสำหรับผู้ที่ชื่นชอบการปรับแต่ง ด้วยการออกแบบที่เน้นความยืดหยุ่นถึง 9 จุด (9 Points of Modularity) ช่วยให้คุณสามารถสร้างคีย์บอร์ดในฝันได้อย่างง่ายดาย ไม่ว่าจะเป็นการเปลี่ยนรูปลักษณ์ เสียง หรือสัมผัสการพิมพ์ให้ตรงตามความต้องการของคุณ ระบบ Gasket แบบโมดูลาร์ที่โดดเด่นทำให้ผู้ใช้สามารถปรับความแน่นหรือความยืดหยุ่นของการกดแป้นพิมพ์ได้อย่างง่ายดายด้วยดีไซน์ที่ได้แรงบันดาลใจจากตัวต่อ นอกจากนี้ ยังรองรับการถอดเปลี่ยนสวิตช์แบบ Hot-swap 5-pin MX ทำให้การเปลี่ยนสวิตช์เป็นเรื่องง่าย และมาพร้อมโฟมซับเสียงภายในตัว (Sound Dampening Foam) ช่วยลดเสียงสะท้อนที่ไม่พึงประสงค์ มอบประสบการณ์การพิมพ์ที่เงียบและนุ่มนวลยิ่งขึ้น",
    "specs": [
      "สวิตช์ : Glorious Fox Linear Switch",
      "ขนาด : 100% (Full-size)",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/glorious-gmmk-3-prebuilt-100-glorious-fox-linear-switch-rgb-en-black.jpg"
  },
  {
    "id": "gravastar-mercury-k1-pro-special-edition-cyberpunk-gravastar-x-kailh-speedy-mint-linear-switch-rgb-en",
    "name": "GRAVASTAR MERCURY K1 PRO SPECIAL EDITION (CYBERPUNK) (GRAVASTAR X KAILH SPEEDY MINT LINEAR SWITCH RGB EN)",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) GRAVASTAR MERCURY K1 PRO SPECIAL EDITION (CYBERPUNK) (GRAVASTAR X KAILH SPEEDY MINT LINEAR SWITCH RGB EN)",
    "brand": "GRAVASTAR",
    "price": 5690,
    "size": "",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "",
    "specs": [
      "GravaStar x Kailh Speedy Mint Linear Switch",
      "RGB",
      "English Keycap",
      "ANSI",
      "Wired (Detachable USB-C to USB-A)",
      "2.4GHz Wireless",
      "Bluetooth",
      "Hot Swappable (3 / 5 pin)"
    ],
    "image": "images/products/gravastar-mercury-k1-pro-special-edition-cyberpunk-gravastar-x-kailh-speedy-mint-linear-switch-rgb-en.jpg"
  },
  {
    "id": "gravastar-mercury-k98-pro-gravastar-custom-ufo-mechanical-switch-rgb-en-phantom-black",
    "name": "GRAVASTAR MERCURY K98 PRO - GRAVASTAR CUSTOM UFO MECHANICAL SWITCH RGB EN PHANTOM BLACK",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) GRAVASTAR MERCURY K98 PRO - GRAVASTAR CUSTOM UFO MECHANICAL SWITCH RGB EN PHANTOM BLACK",
    "brand": "GRAVASTAR",
    "price": 7400,
    "size": "98%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "Gasket"
    ],
    "desc": "Gravastar Mercury K98 Pro เป็นคีย์บอร์ดเกมมิ่ง Mechanical ขนาด 98% ที่มาพร้อมโครงสร้าง Premium Glossy Aluminum Alloy Exoskeleton แข็งแรงและโดดเด่น รองรับ Dual 8K Polling Rate ทั้งโหมด USB-C และ 2.4GHz มีหน้าจอ Smart TFT ขนาด 1.65 นิ้ว สำหรับแสดงข้อมูลแบบเรียลไทม์ โครงสร้าง Gasket Mount พร้อมวัสดุดูดซับเสียง 5 ชั้น ให้สัมผัสการพิมพ์และเสียงคีย์ที่นุ่มแน่น แบตเตอรี่ 8000mAh ใช้งานได้ยาวนาน และรองรับ Web-Based Driver สำหรับปรับแต่งปุ่ม มาโคร และไฟ RGB ได้โดยไม่ต้องติดตั้งซอฟต์แวร์",
    "specs": [
      "สวิตช์ : Gravastar Custom UFO Mechanical Switch (Linear)",
      "ขนาด : 98%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "จอแสดงผล : จอสี TFT 1.65\"",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/gravastar-mercury-k98-pro-gravastar-custom-ufo-mechanical-switch-rgb-en-phantom-black.jpg"
  },
  {
    "id": "gravastar-mercury-v60-pro-special-edition-gravastar-ufo-magnetic-switch-rgb-en-cyber-frost-black",
    "name": "GRAVASTAR MERCURY V60 PRO SPECIAL EDITION - GRAVASTAR UFO MAGNETIC SWITCH RGB EN CYBER FROST BLACK",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) GRAVASTAR MERCURY V60 PRO SPECIAL EDITION - GRAVASTAR UFO MAGNETIC SWITCH RGB EN CYBER FROST BLACK",
    "brand": "GRAVASTAR",
    "price": 6200,
    "size": "60%",
    "switch": "Magnetic",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "Gravastar Mercury V60 Pro คือคีย์บอร์ดเกมมิ่งขนาด 60% ที่ออกแบบมาเพื่อความเร็วและความแม่นยำสูงสุด มาพร้อม True 8khz Polling Rate และการสแกนปุ่ม 256khz ลดความหน่วงเหลือเพียง 0.125ms ใช้สวิตช์แม่เหล็ก Gravastar UFO Magnetic Gaming Switch รองรับการปรับระยะกดละเอียดถึง 0.005mm พร้อม Rapid Trigger, Dynamic Rapid Trigger และ Lkp + Snap Click เพื่อการตอบสนองที่รวดเร็วแม่นยำ โครงสร้างอะลูมิเนียมแข็งแรง Hot-Swap ได้ และไฟ RGB 16 โหมดแบบ Multi-Zone สวยโดดเด่น",
    "specs": [
      "สวิตช์ : Gravastar UFO Magnetic Switch (Linear)",
      "ขนาด : 60%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ (รองรับการใช้งานร่วมกับสวิตช์บางรุ่นของ TTC และ Gateron)"
    ],
    "image": "images/products/gravastar-mercury-v60-pro-special-edition-gravastar-ufo-magnetic-switch-rgb-en-cyber-frost-black.jpg"
  },
  {
    "id": "hyperx-origins-2-65-hyperx-linear-red-switch-rgb-en-black",
    "name": "HYPERX ORIGINS 2 65 - HYPERX LINEAR RED SWITCH RGB EN BLACK",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) HYPERX ORIGINS 2 65 - HYPERX LINEAR RED SWITCH RGB EN BLACK",
    "brand": "HYPERX",
    "price": 3490,
    "size": "65%",
    "switch": "Linear",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "HyperX Origins 2 65 คือคีย์บอร์ดเกมมิ่งขนาด 65% ที่ผสานความกะทัดรัดเข้ากับความสามารถในการปรับแต่งอย่างเต็มรูปแบบ รองรับ Hot-Swap Switch สามารถเปลี่ยนสวิตช์ได้ง่ายและรองรับสวิตช์แบบ 3-pin และ 5-pin ส่วนใหญ่ในตลาด โครงสร้าง Silicone O-Ring Mount และแผ่น Polycarbonate ช่วยลดแรงสั่นสะเทือนและเสียงสะท้อน มอบสัมผัสการพิมพ์ที่นุ่มนวลและเงียบยิ่งขึ้น รองรับ Polling Rate สูงสุด 8,000Hz เพื่อการตอบสนองที่รวดเร็วและแม่นยำ พร้อมขาตั้งปรับองศาได้ และซอฟต์แวร์ HyperX NGENUITY สำหรับปรับแต่งปุ่ม มาโคร แสง RGB และบันทึกโปรไฟล์ได้สูงสุด 3 ชุด",
    "specs": [
      "สวิตช์ : HyperX Linear Red switch",
      "ขนาด : 65%",
      "การตั้งค่าคีย์บอร์ด : HyperX NGENUITY",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/hyperx-origins-2-65-hyperx-linear-red-switch-rgb-en-black.jpg"
  },
  {
    "id": "keychron-q1-max-qmk-via-shell-white-gateron-jupiter-red-switch-rgb-en-th-q1m-p1-th",
    "name": "KEYCHRON Q1 MAX (QMK/VIA) (SHELL WHITE) (GATERON JUPITER RED SWITCH - RGB - EN/TH) (Q1M-P1-TH)",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) KEYCHRON Q1 MAX (QMK/VIA) (SHELL WHITE) (GATERON JUPITER RED SWITCH - RGB - EN/TH) (Q1M-P1-TH)",
    "brand": "KEYCHRON",
    "price": 5033,
    "size": "",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "",
    "specs": [
      "Gateron Jupiter Red Switch (Linear)",
      "QMK / VIA",
      "RGB",
      "English / Thai Keycap",
      "ANSI",
      "Wired (Detachable USB-C to USB-C with USB-A Adapter)",
      "2.4GHz Wireless (USB Receiver Included)",
      "Bluetooth 5.1",
      "Hot Swappable (3 or 5 pin)"
    ],
    "image": "images/products/keychron-q1-max-qmk-via-shell-white-gateron-jupiter-red-switch-rgb-en-th-q1m-p1-th.jpg"
  },
  {
    "id": "keychron-r3-keychron-super-banana-switch-rgb-en-th-retro-r3-m4-th",
    "name": "KEYCHRON R3 - KEYCHRON SUPER BANANA SWITCH RGB EN/TH RETRO R3-M4-TH",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) KEYCHRON R3 - KEYCHRON SUPER BANANA SWITCH RGB EN/TH RETRO R3-M4-TH",
    "brand": "KEYCHRON",
    "price": 2390,
    "size": "TKL",
    "switch": "Tactile",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "Keychron R3 คือคีย์บอร์ด Mechanical ไร้สายขนาด TKL (80%) ที่นำดีไซน์คลาสสิกจาก IBM Model M มาผสานกับความทันสมัยได้อย่างลงตัว โดดเด่นด้วยแผงไฟสถานะแบบวินเทจ ปุ่มสลับโหมดสไตล์คลาสสิก และโลโก้เรียบหรู รองรับการเชื่อมต่อทั้ง 2.4GHz, Bluetooth และแบบสาย ตอบโจทย์การใช้งานหลากหลาย พร้อมระบบปรับแต่งผ่าน Keychron Launcher ที่ให้คุณรีแมปปุ่ม สร้างมาโคร และตั้งค่าคีย์ลัดได้อย่างอิสระ เหมาะสำหรับทั้งสายทำงานและสายคีย์บอร์ดที่หลงใหลความคลาสสิก",
    "specs": [
      "สวิตช์ : Keychron Super Banana Switch (Tactile)",
      "ขนาด : 80% (TKL)",
      "การตั้งค่าคีย์บอร์ด : Keychron launcher",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/keychron-r3-keychron-super-banana-switch-rgb-en-th-retro-r3-m4-th.jpg"
  },
  {
    "id": "keychron-v6-ultra-8k-keychron-silk-pom-switch-red-rgb-en-th-black-v6u-d1-th",
    "name": "KEYCHRON V6 ULTRA 8K - KEYCHRON SILK POM SWITCH - RED RGB EN/TH BLACK V6U-D1-TH",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) KEYCHRON V6 ULTRA 8K - KEYCHRON SILK POM SWITCH - RED RGB EN/TH BLACK V6U-D1-TH",
    "brand": "KEYCHRON",
    "price": 4290,
    "size": "Full-size",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "Keychron V6 Ultra 8K Wireless Custom Mechanical Keyboard คีย์บอร์ดขนาด 100% Full-size เจเนอเรชันใหม่ที่ออกแบบมาเพื่อประสิทธิภาพและความยืดหยุ่นระดับสูง รองรับการเชื่อมต่อทั้ง 2.4 GHz, Bluetooth 5.3 และแบบสาย พร้อม 8K Polling Rate ในโหมดไร้สาย (2.4 GHz) เพื่อการตอบสนองที่รวดเร็วและแม่นยำ ขับเคลื่อนด้วยระบบ ZMK Next Gen ให้การทำงานที่เสถียร โครงสร้างพรีเมียมเสริมชั้นโฟมซับเสียงหลายชั้น ช่วยให้การพิมพ์แน่น นุ่ม และลดเสียงรบกวน แบตเตอรี่ใช้งานได้นานสูงสุด 660 ชั่วโมง (Backlit off) และสามารถปรับแต่งปุ่ม รีแมปคำสั่ง รวมถึงตั้งค่าไฟ RGB ได้ผ่านหน้าเว็บ Keychron Launcher โดยไม่ต้องติดตั้งซอฟต์แวร์เพิ่มเติม",
    "specs": [
      "สวิตช์ : Keychron Silk POM Switch - Red (Linear)",
      "ขนาด : 100% (Full-size)",
      "การตั้งค่าคีย์บอร์ด : Keychron launcher",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-C + อะแดปเตอร์ USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/keychron-v6-ultra-8k-keychron-silk-pom-switch-red-rgb-en-th-black-v6u-d1-th.jpg"
  },
  {
    "id": "lenovo-legion-k510-mini-pro-brown-switch-rgb-en-th-black-gy41p80871",
    "name": "LENOVO LEGION K510 MINI PRO - BROWN SWITCH RGB EN/TH BLACK GY41P80871",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) LENOVO LEGION K510 MINI PRO - BROWN SWITCH RGB EN/TH BLACK GY41P80871",
    "brand": "LENOVO LEGION",
    "price": 1890,
    "size": "75%",
    "switch": "Tactile",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "Lenovo Legion K510 Mini Pro คีย์บอร์ดเกมมิ่งแมคคานิคอลดีไซน์กะทัดรัดขนาด 75% จำนวน 84 ปุ่ม ครบทั้งปุ่มลูกศรและฟังก์ชัน ช่วยเพิ่มพื้นที่การใช้งานบนโต๊ะ รองรับ Hot Swappable เปลี่ยนสวิตช์ได้สะดวก ปรับระดับเสียงและสั่งงานมัลติมีเดียผ่านปุ่ม Fn มาพร้อมไฟ RGB 16.8 ล้านสีแบบ Per-Key และโหมดแสงสำเร็จรูปกว่า 10 แบบ คีย์แคปผิวด้านกันรอยนิ้วมือ ให้สัมผัสดี ควบคุมแม่นยำ รองรับ Microsoft Dynamic Lighting และปุ่ม Copilot",
    "specs": [
      "สวิตช์ : Brown Switch (Tactile)",
      "ขนาด : 75%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/lenovo-legion-k510-mini-pro-brown-switch-rgb-en-th-black-gy41p80871.jpg"
  },
  {
    "id": "logitech-g-g512-x-98-tactile-switch-rgb-en-th-black",
    "name": "LOGITECH G G512 X 98 - TACTILE SWITCH RGB EN/TH BLACK",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) LOGITECH G G512 X 98 - TACTILE SWITCH RGB EN/TH BLACK",
    "brand": "LOGITECH G",
    "price": 5200,
    "size": "98%",
    "switch": "Tactile",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "คีย์แคปไทย"
    ],
    "desc": "Logitech G G512 X 98 คีย์บอร์ดเกมมิ่งที่ผสานความเร็วแบบแอนะล็อกและสัมผัสแบบแมกคานิคอลเข้าไว้ด้วยกันผ่านเทคโนโลยี TMR Analog และโครงสร้าง Dual Swap ให้การควบคุมที่แม่นยำ ตอบสนองรวดเร็ว และเล่นเกมได้ลื่นไหลยิ่งขึ้น มาพร้อมไฟ LIGHTSYNC RGB 16.8 ล้านสี เพิ่มความโดดเด่นให้ทุกเซ็ตอัป รองรับการตั้งค่าปุ่มและปุ่มหมุนผ่าน KEYCONTROL เพื่อสร้างมาโครหรือคำสั่งเฉพาะได้ตามต้องการ เชื่อมต่อผ่านสาย USB-C to USB-A ยาว 1.8 เมตร และรองรับทั้ง Windows และ macOS",
    "specs": [
      "สวิตช์ : Tactile Switch",
      "ขนาด : 98%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย",
      "สายเคเบิล : สาย USB-C เป็น USB-A"
    ],
    "image": "images/products/logitech-g-g512-x-98-tactile-switch-rgb-en-th-black.jpg"
  },
  {
    "id": "logitech-g-g515-lightspeed-wireless-tkl-tactile-white",
    "name": "LOGITECH G G515 LIGHTSPEED WIRELESS TKL TACTILE WHITE",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) LOGITECH G G515 LIGHTSPEED WIRELESS TKL TACTILE WHITE",
    "brand": "LOGITECH G",
    "price": 3290,
    "size": "TKL",
    "switch": "Tactile",
    "wireless": false,
    "tags": [
      "ไร้สาย"
    ],
    "desc": "คีย์บอร์ดเกมมิ่งไร้สาย Logitech G515 LIGHTSPEED TKL ห้ประสิทธิภาพสูงและความสวยงามแบบ low-profile ยกระดับไปอีกขั้นด้วยอุปกรณ์ที่ออกแบบมาเพื่อรองรับช่วงเวลาอันเข้มข้นของการเล่นและออกแบบมา เพื่อประสบการณ์การเล่นเกมที่ปรับแต่งมาอย่างดี",
    "specs": [],
    "image": "images/products/logitech-g-g515-lightspeed-wireless-tkl-tactile-white.jpg"
  },
  {
    "id": "mistel-barocco-md770-rgb-bt-5-0-brown-switch-us",
    "name": "MISTEL BAROCCO MD770 RGB BT 5.0 BROWN SWITCH (US)",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) MISTEL BAROCCO MD770 RGB BT 5.0 BROWN SWITCH (US)",
    "brand": "MISTEL",
    "price": 5790,
    "size": "",
    "switch": "Mechanical",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB"
    ],
    "desc": "",
    "specs": [
      "Cherry MX RGB",
      "PBT Double Shot",
      "English Keycap",
      "ANSI",
      "Wired (Detachable USB-C to USB-A)"
    ],
    "image": "images/products/mistel-barocco-md770-rgb-bt-5-0-brown-switch-us.jpg"
  },
  {
    "id": "rapoo-v125s-4-in-1-gaming-set-black",
    "name": "RAPOO V125S - 4 IN 1 GAMING SET BLACK",
    "fullTitle": "OARD (คีย์บอร์ด) RAPOO V125S - 4 IN 1 GAMING SET BLACK",
    "brand": "RAPOO",
    "price": 1290,
    "size": "",
    "switch": "Membrane",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "คีย์แคปไทย"
    ],
    "desc": "Rapoo V125S ชุดเกมมิ่งครบเซ็ต 4-in-1 ที่รวมทุกอุปกรณ์สำคัญสำหรับเกมเมอร์ไว้ในชุดเดียว",
    "specs": [
      "คีย์บอร์ด V50S คีย์บอร์ดขนาดเต็ม 104 ปุ่ม พร้อมไฟแบ็คไลท์ รองรับปุ่มลัดมัลติมีเดีย 12 ปุ่มสำหรับ Windows ใช้สวิตช์ Membrane ให้สัมผัสนุ่มนวล เชื่อมต่อผ่านสาย USB และมี แป้นพิมพ์ภาษาไทย ใช้งานสะดวกทั้งทำงานและเล่นเกม",
      "เมาส์ V16RGB เมาส์เกมมิ่งดีไซน์สมมาตร เหมาะสำหรับทั้งมือซ้ายและขวา ปรับความละเอียดได้สูงสุด 12,800 DPI มีปุ่มควบคุม 5 ปุ่ม ไฟ RGB ปรับแต่งได้ และเชื่อมต่อผ่านสาย USB เพื่อการตอบสนองที่แม่นยำ",
      "หูฟัง VH360 หูฟังเกมมิ่งเชื่อมต่อแบบ USB ให้เสียงคมชัดรอบทิศ พร้อมไมค์คุณภาพสูงสำหรับการสื่อสารในเกม ให้ประสบการณ์เสียงสมจริงในทุกสมรภูมิ",
      "แผ่นรองเมาส์ V10P ขนาด 300 x 300 มม. พื้นผิวนุ่มลื่น ช่วยให้เมาส์เคลื่อนไหวได้อย่างแม่นยำ เหมาะกับทุกแนวการเล่นเกม"
    ],
    "image": "images/products/rapoo-v125s-4-in-1-gaming-set-black.jpg"
  },
  {
    "id": "razer-ornata-v3-x-black-membrane-rgb-en-th",
    "name": "RAZER ORNATA V3 X (BLACK) (MEMBRANE - RGB -EN/TH)",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) RAZER ORNATA V3 X (BLACK) (MEMBRANE - RGB -EN/TH)",
    "brand": "RAZER",
    "price": 1190,
    "size": "",
    "switch": "Membrane",
    "wireless": false,
    "tags": [
      "มีสาย",
      "RGB",
      "คีย์แคปไทย"
    ],
    "desc": "",
    "specs": [
      "Membrane",
      "RGB LED",
      "English / Thai Keycap",
      "ANSI",
      "Wired USB"
    ],
    "image": "images/products/razer-ornata-v3-x-black-membrane-rgb-en-th.jpg"
  },
  {
    "id": "redragon-cyrus-pro-k681acg-pink-switch-rgb-en-blue-anime-edition",
    "name": "REDRAGON CYRUS PRO K681ACG PINK SWITCH RGB EN - BLUE-ANIME EDITION",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) REDRAGON CYRUS PRO K681ACG PINK SWITCH RGB EN - BLUE-ANIME EDITION",
    "brand": "REDRAGON",
    "price": 2590,
    "size": "75%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "REDRAGON CYRUS PRO K681ACG มาพร้อมเลย์เอาต์ขนาด 75% ดีไซน์ลาย Blue Anime และสวิตช์แบบ Pink Linear ที่พิมพ์ได้อย่างลื่นไหล มีไฟ RGB ที่สามารถปรับแต่งได้ รองรับการเปลี่ยนสวิตช์ (Hot-Swappable) และการเชื่อมต่อ 3 แบบ: ผ่านสาย USB-C, ไร้สาย 2.4GHz และ Bluetooth ใช้เลย์เอาต์ ANSI พร้อมคีย์แคปภาษาอังกฤษ",
    "specs": [
      "สวิตช์ : Pink Switch (Linear)",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "ขนาดคีย์บอร์ด : 75%",
      "การเชื่อมต่อ : สาย USB-C เป็น USB-A แบบถอดออกได้, ไร้สาย 2.4GHz, บลูทูธ",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/redragon-cyrus-pro-k681acg-pink-switch-rgb-en-blue-anime-edition.jpg"
  },
  {
    "id": "royal-kludge-kzzi-rkz98-linear-switch-rgb-en-blackberry-mousse",
    "name": "ROYAL KLUDGE KZZI RKZ98 LINEAR SWITCH RGB EN - BLACKBERRY MOUSSE",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) ROYAL KLUDGE KZZI RKZ98 LINEAR SWITCH RGB EN - BLACKBERRY MOUSSE",
    "brand": "ROYAL KLUDGE",
    "price": 2390,
    "size": "95%",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap"
    ],
    "desc": "Royal Kludge KZZI RKZ98 คีย์บอร์ดขนาด 95% ที่รวมความครบถ้วนของปุ่มใช้งานและความกะทัดรัดไว้ด้วยกัน รองรับการเปลี่ยนสวิตช์แบบ Hot-swap 3/5 พิน เชื่อมต่อได้ 3 โหมด (มีสาย, 2.4GHz, Bluetooth) พร้อมไฟ RGB เต็มรูปแบบ เพิ่มความสวยงามในการใช้งาน มาพร้อมแบตเตอรี่ขนาด 3750 mAh ใช้งานไร้สายได้นาน และรองรับการปรับแต่งผ่านซอฟต์แวร์ เหมาะสำหรับทั้งเล่นเกมและทำงาน",
    "specs": [
      "สวิตช์ : Linear Switch",
      "ขนาด : 95%",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/royal-kludge-kzzi-rkz98-linear-switch-rgb-en-blackberry-mousse.jpg"
  },
  {
    "id": "royal-kludge-rk87-red-switch-rgb-en-th-black",
    "name": "ROYAL KLUDGE RK87 - RED SWITCH RGB EN/TH BLACK",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) ROYAL KLUDGE RK87 - RED SWITCH RGB EN/TH BLACK",
    "brand": "ROYAL KLUDGE",
    "price": 1290,
    "size": "TKL",
    "switch": "Linear",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย"
    ],
    "desc": "Royal Kludge RK87 คีย์บอร์ดเกมมิ่งขนาด 80% แบบ TKL รองรับการเชื่อมต่อ 3 โหมด ทั้ง Bluetooth 5.1, ไร้สาย 2.4 GHz และแบบใช้สาย มาพร้อมไฟ RGB และรองรับ Hot-Swap เปลี่ยนสวิตช์ได้สะดวก ใช้งานได้กับ Windows, macOS, iOS และ Android เหมาะสำหรับทั้งเล่นเกมและทำงาน",
    "specs": [
      "สวิตช์ : Red Switch (Linear)",
      "ขนาด : 80% (TKL)",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ 5.1",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้"
    ],
    "image": "images/products/royal-kludge-rk87-red-switch-rgb-en-th-black.jpg"
  },
  {
    "id": "saru-kx87-tactile-switch-rgb-en-th-midnigh",
    "name": "SARU KX87 - TACTILE SWITCH RGB EN/TH MIDNIGH",
    "fullTitle": "WIRELESS KEYBOARD (คีย์บอร์ดไร้สาย) SARU KX87 - TACTILE SWITCH RGB EN/TH MIDNIGH",
    "brand": "SARU",
    "price": 2890,
    "size": "TKL",
    "switch": "Tactile",
    "wireless": true,
    "tags": [
      "ไร้สาย",
      "RGB",
      "Hot-swap",
      "คีย์แคปไทย",
      "Gasket"
    ],
    "desc": "Saru KX87 เป็นคีย์บอร์ด TKL (80%) ที่ออกแบบมาเพื่อสายคัสต้อมและผู้ใช้งานที่ต้องการทั้งความสวยงามและประสิทธิภาพ มาพร้อมปุ่ม 87 ปุ่ม และสามารถปรับ F Row ให้เป็นหน้าจอ Pixel LED ได้ เพิ่มความโดดเด่นด้วย Knob และจอ Color TFT ที่แสดงภาพหรือ GIF ได้อย่างอิสระ โครงสร้าง Gasket ช่วยให้สัมผัสการพิมพ์นุ่มและเสียงดี รองรับการเชื่อมต่อครบทั้ง Bluetooth 5.1, 2.4GHz และ USB พร้อม Hot-Swap 5 Pin และแบตเตอรี่ 4,000 mAh ใช้งานได้ยาวนาน",
    "specs": [
      "สวิตช์ : Tactile Switch",
      "ขนาด : 80% (TKL)",
      "แสงไฟ : RGB",
      "คีย์แคป : ภาษาอังกฤษ / ภาษาไทย",
      "เลย์เอาต์ : ANSI",
      "การเชื่อมต่อ : แบบใช้สาย / ไร้สาย 2.4GHz / บลูทูธ",
      "สายเคเบิล : สาย USB-C เป็น USB-A",
      "การเปลี่ยนสวิตช์ : เปลี่ยนสวิตช์ได้ รองรับสวิตช์ 3 ขา / 5 ขา"
    ],
    "image": "images/products/saru-kx87-tactile-switch-rgb-en-th-midnigh.jpg"
  },
  {
    "id": "vortex-model-m-ssk-wk-switch-gateron-g-pro-yellow-us",
    "name": "VORTEX MODEL M SSK WK SWITCH GATERON G PRO YELLOW (US)",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) VORTEX MODEL M SSK WK SWITCH GATERON G PRO YELLOW (US)",
    "brand": "VORTEX",
    "price": 5590,
    "size": "",
    "switch": "Mechanical",
    "wireless": false,
    "tags": [
      "มีสาย"
    ],
    "desc": "",
    "specs": [
      "Keyboard",
      "User Manual",
      "USB Type-C Cable",
      "2.4GHz Dongle",
      "Additional badge (\"VTK\" logo)",
      "Keycap Puller",
      "Switch Puller"
    ],
    "image": "images/products/vortex-model-m-ssk-wk-switch-gateron-g-pro-yellow-us.jpg"
  },
  {
    "id": "vortex-pc66-68-key-switch-cherry-mx-blue-us",
    "name": "VORTEX PC66 (68 KEY) SWITCH CHERRY MX BLUE (US)",
    "fullTitle": "KEYBOARD (คีย์บอร์ด) VORTEX PC66 (68 KEY) SWITCH CHERRY MX BLUE (US)",
    "brand": "VORTEX",
    "price": 5790,
    "size": "",
    "switch": "Mechanical",
    "wireless": false,
    "tags": [
      "มีสาย"
    ],
    "desc": "",
    "specs": [
      "Barebone Version Keyboard",
      "User Manual",
      "USB Type-C Cable",
      "2.4G Receiver",
      "Keycap Puller",
      "Switch Puller",
      "Hex Key"
    ],
    "image": "images/products/vortex-pc66-68-key-switch-cherry-mx-blue-us.jpg"
  }
];
