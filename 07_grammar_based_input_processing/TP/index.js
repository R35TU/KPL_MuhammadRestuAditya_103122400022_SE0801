function toNumberArray(number) {
  // Jika input string, ubah jadi array dulu
  if (typeof number === "string") {
    number = number.split(",");
  }

  return number
    .map(item => item.trim())          // hapus spasi
    .map(item => Number(item))         // ubah ke number
    .filter(item => !isNaN(item));     // ambil yang valid saja
}

console.log(toNumberArray("1, 2")) 
console.log(toNumberArray(["1", "2"])) 
console.log(toNumberArray("11,55,33   ")) 
console.log(toNumberArray(["0.2", "-11", "abc23"])) 