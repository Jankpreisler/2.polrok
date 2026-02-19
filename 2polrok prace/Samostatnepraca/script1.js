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

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Celkový súčet je:", sum);

console.log("5. cvicenie");

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}
console.log("Pocet parnych cisel:", count);

console.log("6. cvicenie");

let max = [42];
let min = [4];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > max) {
        max = numbers[i]
    }
    elseif(numbers[i] > min)
    {
        min = numbers[i]
    }

}
console.log(max, min);