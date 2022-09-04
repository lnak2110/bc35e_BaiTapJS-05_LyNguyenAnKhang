/**
 * Đầu vào:
 *  + diemChuan
 *  + diemMon1
 *  + diemMon2
 *  + diemMon3
 *  + khuVuc
 *  + doiTuong
 *
 * Xử lí:
 *  + Tính điểm
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnKetQua').onclick = function () {
  // Đầu vào:
  var diemChuan = document.getElementById('diemChuan').value * 1;
  var diemMon1 = document.getElementById('diemMon1').value * 1;
  var diemMon2 = document.getElementById('diemMon2').value * 1;
  var diemMon3 = document.getElementById('diemMon3').value * 1;
  var khuVuc = document.getElementById('khuVuc').value * 1;
  var doiTuong = document.getElementById('doiTuong').value * 1;

  // Xử lí:
  var tongDiem = tinhDiem(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong);
  if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
    var ketQua = 'Bạn đã rớt. Do có ít nhất 1 môn có điểm nhỏ hơn hoặc bằng 0.';
  } else if (tongDiem >= diemChuan) {
    var ketQua = `Bạn đã đậu. Tổng điểm: ${tongDiem}`;
  } else {
    var ketQua = `Bạn đã rớt. Tổng điểm: ${tongDiem}`;
  }

  // Đầu ra:
  document.getElementById('ketQua1').innerHTML = ketQua;
};

function tinhDiem(diem1, diem2, diem3, diemKV, diemDT) {
  return diem1 + diem2 + diem3 + diemKV + diemDT;
}
