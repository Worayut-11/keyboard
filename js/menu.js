
'use strict';

/** โหลดไฟล์ HTML มาใส่ในอิลิเมนต์ที่ระบุ */
function loadPartial(elementId, file) {
  var box = document.getElementById(elementId);
  if (!box) return Promise.resolve();         

  return fetch(file)
    .then(function (res) {
      if (!res.ok) throw new Error(file + ' : ' + res.status);
      return res.text();
    })
    .then(function (html) {
      box.innerHTML = html;
    })
    .catch(function (err) {
      console.error('โหลด ' + file + ' ไม่สำเร็จ:', err);
      console.warn('ถ้าเปิดไฟล์แบบดับเบิลคลิก (file://) fetch จะใช้ไม่ได้ ' +
                   'ให้เปิดผ่าน Live Server หรือเว็บเซิร์ฟเวอร์แทน');
    });
}

/* โหลดทั้งเมนูและ Footer พร้อมกัน แล้วค่อยผูกเหตุการณ์ให้ลิงก์ทั้งหมด */
document.addEventListener('DOMContentLoaded', function () {
  Promise.all([
    loadPartial('menu', 'menu.html'),
    loadPartial('footer', 'footer.html')
  ]).then(function () {
    // ผูกเมนู JavaScript + ไฮไลต์หน้าปัจจุบัน + ใส่ปี พ.ศ. ให้ส่วนที่เพิ่งแทรกเข้ามา
    initNavigation();
  });
});
