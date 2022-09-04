/**
 * Đầu vào:
 *  + ten
 *  + kw
 *
 * Xử lí:
 *  + Tính tiền điện dựa trên số kw
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnTienDien').onclick = function () {
  // Đầu vào:
  var ten = document.getElementById('ten').value;
  var kw = document.getElementById('kw').value * 1;

  // Xử lí:
  var tienDien = tinhTienDien(kw).toLocaleString();

  // Đầu ra:
  var ketQua = `Tên: ${ten}. Tiền điện: ${tienDien}d`;
  document.getElementById('ketQua2').innerHTML = ketQua;
};

function tinhTienDien(kw) {
  var tienDien;
  if (kw <= 0) {
    tienDien = 0;
  } else if (kw >= 1 && kw <= 50) {
    tienDien = kw * 500;
  } else if (kw >= 51 && kw <= 100) {
    tienDien = 50 * 500 + (kw - 50) * 650;
  } else if (kw >= 101 && kw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw >= 201 && kw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }
  return tienDien;
}
