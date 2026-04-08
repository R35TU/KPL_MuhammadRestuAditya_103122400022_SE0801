/**
 * Menentukan hasil FizzBuzz dari sebuah angka
 * @param {number} value - bilangan bulat
 * @returns {string|number} "Fizz", "Buzz", "FizzBuzz", atau angka itu sendiri
 */
function zzzzOrNum(value) {
  // validasi: harus number
  if (typeof value !== "number" || !Number.isInteger(value)) {
    throw new Error("Input harus bilangan bulat");
  }

  if (value % 3 === 0 && value % 5 === 0) {
    return "FizzBuzz";
  } else if (value % 3 === 0) {
    return "Fizz";
  } else if (value % 5 === 0) {
    return "Buzz";
  } else {
    return value;
  }
}

/**
 * Mengubah array angka menjadi hasil FizzBuzz
 * @param {number[]} sequence - array berisi bilangan bulat
 * @returns {(string|number)[]} array hasil FizzBuzz
 */
function fizzBuzz(sequence) {
  // validasi: harus array
  if (!Array.isArray(sequence)) {
    throw new Error("Input harus array");
  }

  // validasi isi array
  sequence.forEach((e) => {
    if (typeof e !== "number" || !Number.isInteger(e)) {
      throw new Error("Semua elemen harus bilangan bulat");
    }
  });

  return sequence.map((e) => zzzzOrNum(e));
}

module.exports = {
  fizzBuzz,
  zzzzOrNum,
};