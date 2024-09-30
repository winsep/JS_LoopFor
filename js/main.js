// Tính tổng các số từ 1 đến 100
function tinhTong100() {
    let tong = 0;
    for (let i = 1; i <= 100; i++) {
        tong += i;
    }
    document.getElementById("resultTong100").innerHTML = `Tổng từ 1 đến 100 là: ${tong}`;
}

// Tính tổng các số chia hết cho 3 bé hơn n
function tinhTongChiaHetCho3() {
    let n = parseInt(document.getElementById("soN").value);
    let tong = 0;
    for (let i = 3; i < n; i += 3) {
        tong += i;
    }
    document.getElementById("resultTongChiaHetCho3").innerHTML = `Tổng các số chia hết cho 3 nhỏ hơn ${n} là: ${tong}`;
}

// In ra 100 số Fibonacci đầu tiên
function inFibonacci() {
    let fibonacci = [0, 1];
    for (let i = 2; i < 100; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    document.getElementById("resultFibonacci").innerHTML = `100 số Fibonacci đầu tiên: ${fibonacci.join(", ")}`;
}

// Kiểm tra số Palindrome
function kiemTraPalindrome() {
    let n = document.getElementById("soPalindrome").value;
    let nStr = n.toString();
    let nDaoNguoc = nStr.split('').reverse().join('');
    let ketQua = (nStr === nDaoNguoc) ? `${n} là số Palindrome` : `${n} không phải là số Palindrome`;
    document.getElementById("resultPalindrome").innerHTML = ketQua;
}

// Liệt kê các số từ 100 đến 999 có tổng các chữ số chia hết cho 3
function lietKeSoChiaHetCho3() {
    let ketQua = [];
    for (let i = 100; i <= 999; i++) {
        let tongChuSo = Math.floor(i / 100) + Math.floor((i % 100) / 10) + (i % 10);
        if (tongChuSo % 3 === 0) {
            ketQua.push(i);
        }
    }
    document.getElementById("resultLietKe").innerHTML = `Các số từ 100 đến 999 có tổng các chữ số chia hết cho 3: ${ketQua.join(", ")}`;
}