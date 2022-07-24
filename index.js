// Bài tập 1:
const thueSuat1 = 5 / 100;
const thueSuat2 = 10 / 100;
const thueSuat3 = 15 / 100;
const thueSuat4 = 20 / 100;
const thueSuat5 = 25 / 100;
const thueSuat6 = 30 / 100;
const thueSuat7 = 35 / 100;

var thueMuc1 = 0;
var thueMuc2 = 0;
var thueMuc3 = 0;
var thueMuc4 = 0;
var thueMuc5 = 0;
var thueMuc6 = 0;
var thueMuc7 = 0;
var tongThue = 0;
var thuNhapChiuThue = 0;

document.getElementById("tinhThue").onclick = function () {
  var name = document.getElementById("name").value;
  var thuNhap = document.getElementById("income").value * 1;
  var soNguoi = document.getElementById("people").value * 1;
  if (soNguoi > 0) {
    thuNhapChiuThue = thuNhap - 4e6 - soNguoi * 1.6e6;
  } else {
    thuNhapChiuThue = thuNhap;
  }
  tinhThueTNCN(
    thuNhapChiuThue,
    thueSuat1,
    thueSuat2,
    thueSuat3,
    thueSuat4,
    thueSuat5,
    thueSuat6,
    thueSuat7
  );
  document.getElementById("baoCaoThue").innerHTML =
    "<p>Họ và tên: " +
    name +
    "</p>" +
    "<p>Thuế TNCN phải đóng: " +
    tongThue.toLocaleString() +
    "VND</p>";
};

function tinhThueTNCN(
  thuNhapChiuThue,
  thueSuat1,
  thueSuat2,
  thueSuat3,
  thueSuat4,
  thueSuat5,
  thueSuat6,
  thueSuat7
) {
  if (0 < thuNhapChiuThue && thuNhapChiuThue <= 6e7) {
    thueMuc1 = thuNhapChiuThue * thueSuat1;
    tongThue = thueMuc1;
  } else if (thuNhapChiuThue > 6e7 && thuNhapChiuThue <= 12e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = (thuNhapChiuThue - 6e7) * thueSuat2;
    tongThue = thueMuc1 + thueMuc2;
  } else if (thuNhapChiuThue > 12e7 && thuNhapChiuThue <= 21e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = 6e7 * thueSuat2;
    thueMuc3 = (thuNhapChiuThue - 12e7) * thueSuat3;
    tongThue = thueMuc1 + thueMuc2 + thueMuc3;
  } else if (thuNhapChiuThue > 21e7 && thuNhapChiuThue <= 38.4e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = 6e7 * thueSuat2;
    thueMuc3 = 9e7 * thueSuat3;
    thueMuc4 = (thuNhapChiuThue - 21e7) * thueSuat4;
    tongThue = thueMuc1 + thueMuc2 + thueMuc3 + thueMuc4;
  } else if (thuNhapChiuThue > 38.4e7 && thuNhapChiuThue <= 62.4e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = 6e7 * thueSuat2;
    thueMuc3 = 9e7 * thueSuat3;
    thueMuc4 = 17.4e7 * thueSuat4;
    thueMuc5 = (thuNhapChiuThue - 38.4e7) * thueSuat5;
    tongThue = thueMuc1 + thueMuc2 + thueMuc3 + thueMuc4 + thueMuc5;
  } else if (thuNhapChiuThue > 38.4e7 && thuNhapChiuThue <= 62.4e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = 6e7 * thueSuat2;
    thueMuc3 = 9e7 * thueSuat3;
    thueMuc4 = 17.4e7 * thueSuat4;
    thueMuc5 = 24e7 * thueSuat5;
    thueMuc6 = (thuNhapChiuThue - 62.4e7) * thueSuat7;
    tongThue = thueMuc1 + thueMuc2 + thueMuc3 + thueMuc4 + thueMuc5 + thueMuc6;
  } else if (thuNhapChiuThue > 62.4e7 && thuNhapChiuThue <= 96e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = 6e7 * thueSuat2;
    thueMuc3 = 9e7 * thueSuat3;
    thueMuc4 = 17.4e7 * thueSuat4;
    thueMuc5 = 24e7 * thueSuat5;
    thueMuc6 = 33.6e7 * thueSuat7;
    thueMuc7 = (thuNhapChiuThue - 96e7) * thueSuat7;
    tongThue =
      thueMuc1 +
      thueMuc2 +
      thueMuc3 +
      thueMuc4 +
      thueMuc5 +
      thueMuc6 +
      thueMuc7;
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
  return tongThue;
}

// Bài tập 2:
const billND = 4.5;
const serviceND = 20.5;
const channelND = 7.5;

const billDN = 15;
const serviceDNBasic = 70;
const serviceDNExtra = 5;
const channelDN = 50;

var tienDVCoBanDN = 0;
var tienDVCaoCap = 0;
var tongTienCap = 0;

function loaiKH() {
  var loaiKhachHang = document.getElementById("typeCustomer").value;
  if (loaiKhachHang === "Doanh Nghiệp") {
    document.getElementById("numConnection").style.display = "inline";
  } else if (loaiKhachHang === "Nhà Dân") {
    document.getElementById("numConnection").style.display = "none";
  }
  return loaiKhachHang;
}

function tienDVDN(soKetNoi) {
  if (0 < soKetNoi && soKetNoi <= 10) {
    tienDVCoBanDN = 75;
  } else if (soKetNoi > 10) {
    tienDVCoBanDN = 75 + (soKetNoi - 10) * 5;
  }
  return tienDVCoBanDN;
}

document.getElementById("tinhTien").onclick = function () {
  var maKH = document.getElementById("customerCode").value;
  var soKenhCC = document.getElementById("numChannel").value * 1;
  var soKetNoi = document.getElementById("numConnection").value * 1;
  var khachHang = loaiKH();
  tienDVCoBanDN = tienDVDN(soKetNoi);

  if (khachHang === "Nhà Dân") {
    tongTienCap = billND + serviceND + channelND * soKenhCC;
  } else if (khachHang === "Doanh Nghiệp") {
    tongTienCap = billDN + tienDVCoBanDN + channelDN * soKenhCC;
  }

  document.getElementById("thongBao").innerHTML =
    "<p>Mã Khách Hàng: " +
    maKH +
    "</p>" +
    "<p>Tổng tiền cáp: $" +
    tongTienCap +
    "</p>";
};
