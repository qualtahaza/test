var khoBau = [2, 4, 5, 6, 32, 43, 54, 34, "#", 46, 87, 86, 23, 32, 43];
console.log(khoBau);
var sum = 0;
var sum2 = 0;

for (i = 0; i < khoBau.length; i++) {
    if (khoBau[i] == "#") {

        break;
    }
    sum = khoBau[i] + sum;
}
console.log(sum);

for (i = 0; i < khoBau.length; i++) {
    if (khoBau[i] == "#") {

        sum2 = 0;

    } else {
        sum2 = khoBau[i] + sum2;
    }
}
console.log(sum2);