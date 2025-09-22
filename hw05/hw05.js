let diemBaiKt = Number(prompt("Hãy nhập điểm bài kiểm tra!"));
let diemGiuaKy = Number(prompt("Hãy nhập điểm bài thi giữa kỳ!"));
let diemCuoiKy = Number(prompt("Hãy nhập điểm bài thi cuối kỳ!"));

let diemTB = ((diemBaiKt + diemGiuaKy*2 + diemCuoiKy*3) / 6).toFixed(2);

if (diemTB <= 10 && diemTB >= 9) {
  alert(`Điểm trung bình là ${diemTB}. Học lực Xuất Sắc!`);
} else if (diemTB < 9 && diemTB >= 8) {
  alert(`Điểm trung bình là ${diemTB}. Học lực Giỏi!`);
} else if (diemTB < 8 && diemTB >= 6) {
  alert(`Điểm trung bình là ${diemTB}. Học lực Khá!`);
} else if (diemTB < 6 && diemTB >= 5) {
  alert(`Điểm trung bình là ${diemTB}. Học lực Trung Bình!`);
} else {
  alert(`Điểm trung bình là ${diemTB}. Học lực Yếu!`);
}
