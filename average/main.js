let quiz1 = Number(prompt('Enter the first quiz score'));
let quiz2 = Number(prompt('Enter the second quiz score'));
let quiz3 = Number(prompt('Enter the third quiz score'));

let average = (quiz1+quiz2+quiz3)/3;
console.log(average);

console.log(`First quiz score: ${quiz1}`);
console.log(`Second quiz score: ${quiz2}`);
console.log(`Third quiz score: ${quiz3}`);
console.log(`Averaged score: ${average}`)