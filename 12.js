let findNumFactors = (num) => {
    let numFacts = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            numFacts++;
        }
    }
    return numFacts;
};

let nextNum = 2;
let nextTriangleNum = 1;
let numFactors = 1;
while (numFactors < 5) {
    nextTriangleNum += nextNum;
    nextNum++;
    numFactors = findNumFactors(nextTriangleNum);
}

console.log(nextTriangleNum);
