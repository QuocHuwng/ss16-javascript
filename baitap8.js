let a, b, c;

do {
    a = Number(prompt("Nhap so thu nhat: "));
    b = Number(prompt("Nhap so thu hai: "));
    c = Number(prompt("Nhap so thu ba: "));

    if (a == b && a == c && b == c) {
        alert("Bi trung xin moi nhap lai:");
    }
} while (a == b && a == c && b == c);

let max = Math.max(a, b, c);
document.write("So lon nhat la: " + max);