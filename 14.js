
let numCollatz = (num) => {
    let val = 0;
    while (num != 1) {
        if (num % 2 == 0) {
            num = num / 2;
        } else {
            num = 3*num + 1;
        }
        val++;
    }

    return val;
}

let longestCollatz = 0;
let collatz = 0;
for (let i = 1; i < 1000000; i++) {
    collatz = numCollatz(i);
    if () {

    } else {

    }
    longestCollatz = collatz > longestCollatz ? collatz : longestCollatz;
}

console.log(longestCollatz);
