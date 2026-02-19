const numbers = [4, 8, 15, 16, 23, 42];

// 1.

for (let cisla of numbers) {
    console.log(cisla);
}

console.log("Odelenie");

let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++
}

//2.
console.log("2. cvicenie");


for (let i = 0; i < numbers.length; i++) {
    console.log("Index", i, ":", numbers[i]);
}


console.log("3. cvicenie");

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log("Index", i, ":", numbers[i]);
}

console.log("4. cvicenie");

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Celkový súčet je:", sum);

console.log("5. cvicenie");

let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}
console.log("Pocet parnych cisel:", count);

console.log("6. cvicenie");

let max = [0];
let min = [0];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > max) {
        max = numbers[i]
    }
    else if (numbers[i] > min) {
        min = numbers[i]
    }

}
console.log(max, min);

//7 cvicenie

console.log("7. cvicenie");


const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

console.log(randomArray);

randomArray.sort(function (a, b) { return a - b });
console.log(randomArray);

//8. cvicenie

console.log("8. cvicenie");

const minusrandomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) - 49);
console.log(minusrandomArray);

minus = minusrandomArray.filter(function (x) { return x > -1 });
minus.sort(function (a, b) { return a - b });
console.log(minus);

//Bonusova bez filteru
// skuska a nefunguje :\
for (let i = 0; i < minusrandomArray.length; i++) {
    if (minusrandomArray[i] > -1) {
        console.log("dostame sa sem", minusrandomArray[i]);
        const pole = [];
        pole.push(minusrandomArray);
    }

}
