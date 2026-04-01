const str = "Bar bar bar";

/**
 * Fungsi untuk menghitung karakter dalam string
 * @param {string} text - teks input
 * @param {string} mode - "semua" atau "huruf"
 * @returns {number}
 */
function hitung(text, mode) {
  let jumlah = 0;

  for (const char of text) {
    if (mode === "huruf" && char === " ") continue;
    jumlah++;
  }
  return jumlah;
}

/* TEST */

console.log(
  hitung(str, "semua") 
);

console.log(
  hitung(str, "huruf") 
);

hitung(str, "huruf");