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




