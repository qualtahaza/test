var input = prompt("nhập vào chuỗi kí tự bạn muốn đảo ngược");
reserveNumber = 0;
while (input != 0) {
    remainder = input % 10;
    reserveNumber = reserveNumber * 10 + remainder;
    input /= 10;

}
console.log(reserveNumber);