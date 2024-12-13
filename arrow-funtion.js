/**
 * membuat fungsi menghitung luas lingkaran
 * fungsi dibuat dengan gaya arrow function
 * @param {number} radius (jari-jari)
 * @return {number} area (luas lingkaran)
 */

const calAreaCircle = (radius) => {
  const phi = 3.14;
  const area = phi * radius * radius;
  return area;
};

// memanggil fungsi dengan mengirimkan parameter
console.log(calAreaOfCircle(3));
console.log(calAreaOfCircle(7));

/**
 * membuat fungsi menghitung luas lingkaran
 * fungsi dibuat dengan gaya arrow function
 * @param {number} radius (jari-jari)
 * @return {number} area (luas lingkaran)
 */

const calcAreaCircle = (radius) => 3.14 * radius * radius;

// memanggil fungsi dengan mengirimkan parameter
console.log(calcAreaCircle(2));
console.log(calcAreaCircle(5));
