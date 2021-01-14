//Tính giá tiền taxi
var kmTaxi = prompt("Nhập vào số km mà bạn muốn đi để hiển thị giá tiền");
moneyTaxi = 0;
if (+kmTaxi) {


    if (0 < kmTaxi && kmTaxi < 50) {
        moneyTaxi = (moneyTaxi + kmTaxi) * 1;

    }
    if (50 <= kmTaxi && kmTaxi <= 100) {
        moneyTaxi = (moneyTaxi + kmTaxi - 50) * 1.5 + (moneyTaxi + 50) * 1;
    }
    if (100 < kmTaxi) {
        moneyTaxi = (moneyTaxi + kmTaxi - 100) * 2 + (moneyTaxi + 50) * 1.5 + (moneyTaxi + 50) * 1;
    }

    console.log("Số tiền taxi bạn phải trả là ", moneyTaxi, "$");
} else {
    console.log("giá trị bạn nhập không phù hợp");
}