function fizzBuzz(arr) {

    if (!Array.isArray(arr)) {
        return "Input tidak valid";
    }

    let result = [];

    for (let num of arr) {

        if (num % 14 === 0) {
            result.push("FizzBuzz");
        }
        else if (num % 2 === 0) {
            result.push("Fizz");
        }
        else if (num % 7 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(num);
        }

    }

    let useComma = arr.some(x => x <= 1);

    return useComma ? result.join(", ") : result.join(" ");
}

module.exports = fizzBuzz;