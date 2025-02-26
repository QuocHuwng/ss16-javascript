let num1 = parseFloat(prompt("Nhap so thu nhat: "));
let num2 = parseFloat(prompt("Nhap so thu hai: "));

if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

let middle = (num1 + num2) / 2;
alert("Mot so trong khoang (" + num1 + ", " + num2 + ") la: " + middle);