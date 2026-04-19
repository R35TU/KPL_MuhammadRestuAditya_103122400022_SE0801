function is_not_fizzbuzz(number) {
  // Validasi: harus bilangan bulat
  if (!Number.isInteger(number)) {
    throw new TypeError("Input harus berupa bilangan bulat");
  }

  // Jika kelipatan 3 atau 5 (fizzbuzz), tolak
  if (number % 3 === 0 || number % 5 === 0) {
    return false;
  }

  return true;
}


try {
  console.log(is_not_fizzbuzz(1));   
  console.log(is_not_fizzbuzz(3));   
  console.log(is_not_fizzbuzz(5));   
  console.log(is_not_fizzbuzz(30));  
  console.log(is_not_fizzbuzz(7));  

  console.log(is_not_fizzbuzz(null));     
  console.log(is_not_fizzbuzz(NaN));     
  console.log(is_not_fizzbuzz(Infinity)); 
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}