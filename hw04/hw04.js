let a = parseInt(prompt("Hãy nhập số a!"));
let b = parseInt(prompt("Hãy nhập số b!"));
let c = parseInt(prompt("Hãy nhập số c!"));

if (a > b && a > c) {
  alert(`Số ${a} lớn nhất!`);
} else if (b > a && b > c) {
  alert(`Số ${b} lớn nhất!`);
} else {
  alert(`Số ${c} lớn nhất!`);
}
