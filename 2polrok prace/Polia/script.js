let fruits = ["mango", "kiwi", "banan"]

console.log(fruits[1]);

fruits[1] = "yellow";

console.log(fruits[1]);

console.log(fruits.length);

fruits.push("Orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("pear");
fruits.log(fruits);

for (let fruit of fruits) {
    console.log(fruit);
}


let i = 0;
while (i < fruits.length) {
    console.log(fruits);
    i++
}

let mixed = ["Jan", 33, true, null];
console.log(mixed);



let oblubene = ["Halusky", "Paprikas", "Pizza", "Spagethi", "Polievka"];
console.log (oblubene[0], oblubene[4]);

oblubene.push("Lasagne");
console.log(oblubene);


let jedla = ["halusky", "palacinky", "pizza", "rezen", "zivanska"];
for (let jedlo of jedla) {
    console.log(jedlo);
}
console.log("------------------");

//vypis prveho a posledneho jedla 
console.log(jedla[0], jedla[jedla.length-1]);
console.log("------------------");

//pridanie noveho jedla na koniec pola
jedla.push("gulas")
console.log(jedla);
console.log("------------------");

//odstranenie prveho jedla z pola
jedla.shift();
for (let jedlo of jedla) {
    console.log(jedlo);
}
console.log("------------------");

//vypis dlzky pola
console.log(jedla.length);