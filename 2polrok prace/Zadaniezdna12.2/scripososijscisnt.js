let age = 15;

if (age >= 18) {
    console.log("Plnolety");
}
else {
    console.log("Neplnolety");
}

//-----------------------------

let parita = 9.9;

if (parita % 2 === 0 && parita !== 0) {
    console.log("Parne");
}
else {
    console.log("Neparne");
}

//------------------------------

let score = 90;

if (score >= 90) {
    console.log("Vyborny");
}
else if (score >= 70) {
    console.log("dobry");
}
else {
    console.log("nedostatocny");
}

//--------------------------------

let den = "Sobota";

if (den === "Sobota" || den === "Nedela") {
    console.log("Je vikend");
}
else {
    console.log("Je tyzden");
}

//---------------------------------

let vek = 15;
let ticket = false;

if (vek >= 15 && ticket === true) {
    console.log("Moze vstupit");
}
else if (vek >= 18 || ticket === false) {
    console.log("Moze vstupit");
}
else {
    console.log("Nesmie ist dnu");
}

//--------------------------------------

let blocked = true;

if (blocked !== true) {
    console.log("NIESi blokovani")

}
else {
    console.log("Si blokovani");
}

//----------------------------------------

let number = 12;

if (number % 3 === 0) {

    console.log("Je delitelne")
}
else {
    console.log(number)
}

//-------------------------------------
// Switch

let znamka = 2;

switch (znamka) {
    case 1: console.log("Vyborny")
        break;

    case 2: console.log("Chvalitebny")
        break;

    case 3: console.log("Dobry")
        break;

    case 4: console.log("Dostatocny")
        break;

    case 5: console.log("Nedostatocny")
        break;
    default:
        console.log("Zla znamka")
        break;

}


// Uroven 2

for (i = 0; i <= 20; i += 2) {
    console.log(i);
}

for (o = 1; o <= 19; o += 2) {
    console.log(o);
}

for (s = 0; s <= 20; s += 2) {
    console.log(s);
}

for (d = 20; d <= 20; d -= 2) {
    console.log(d);
}

for (d = 0; d <= 100; d += 10) {
    console.log(d);
}

// 3 uroven

for (i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }

}

for (i = 1; i <= 30; i++) {

    if (i > 10) {
        console.log(i);
    }

}

for (i = 1; i <= 30; i++) {

    if (i > 10) {
        console.log(i);
    }

}

for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}

for (i = 1; i <= 20; i++) {
    if (i %5 !== 0) {
        console.log(i);
    }

}

for (i = 1; i <= 100; i++) {
    if (i %4 === 0 && i <=50) {
        console.log(i);
    }

}

// 4 uroven

let sucet = 0;
for (i = 1; i <= 10; i++) 
{
  sucet += i;

}
console.log(sucet);

let sucet1 = 0;

for (i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        sucet1 +=i;
    }

}
console.log(sucet1);

let sucetcisel = 0;

for (i = 1; i <= 100; i++) {

    if (i % 7 === 0) {
        sucetcisel++
    }

}
console.log(sucetcisel);

for (i = 1; i <= 50; i++) {

    if (i % 6 === 0 ) {
        if(i > 43) 
        {
          console.log(i);
        }
        
    }

}

let sucin = 1;
for (i = 1; i <= 10; i++) 
{
  sucet *= i;

}
console.log(i);