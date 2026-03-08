function sumToN(N) {
    let total = 0;

    for (let i = 1; i <= N; i++) {
        total += i;
    }

    return total;
}

console.log(sumToN(5));
console.log(sumToN(10));
console.log(sumToN(20));
console.log(sumToN(30));
console.log(sumToN(40));
console.log(sumToN(50));