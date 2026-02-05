function findCoin(fakecoin, isHeavy) {
    console.log("User input: " + fakecoin, "Is heavy", isHeavy)

    const coins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    function weight(left, right) {

        let leftweight = 0;
        let rightweight = 0;

        for (let coins of left) {

            if (coins == 9) {

                leftweight += isHeavy ? 2 : 0.5;
            }
            else {
                leftweight++
            }
        }

        for (let coins of right) {

            if (coins == 9) {

                rightweight += isHeavy ? 2 : 0.5;

            }
            else {
                rightweight++
            }
        }

        if (leftweight > rightweight) return ("left is hevier");
        if (leftweight < rightweight) return ("right is hevier");
        return "Balanced are"

    }

    console.log("=== Prve vazenie ===");
    let vysledok1 = weight([1, 2, 3, 4], [5, 6, 7, 8]);
    console.log("Vysledok prveho vazenia je:", vysledok1);

    if (vysledok1 === "Balanced are") {

        console.log("=== Druhe vazenie vazenie ===");
        let vysledok2 = weight([1, 2, 3], [10, 9, 11]);
        console.log("Vysledok druheho vazenia je:", vysledok2);

        if (vysledok2 === "left is hevier") {

            console.log("=== Tretie vazenie vazenie ===");
            let vysledok3 = weight([9], [10]);
            console.log("Vysledok tretieho vazenia je:", vysledok3);
            if (vysledok3 !== "Balanced are") {

                console.log("Vysledok merania je cislo " ? 9 : 10);
            }
            else {
                console.log("Vysledok merania je cislo 11 ");
            }
        }
        else if (vysledok2 === "Balanced are") {

            console.log("Vysledok merania je cislo 12");
        }
        else if (vysledok2 === "right is hevier") {

            console.log("=== Tretie vazenie vazenie ===");
            let vysledok3 = weight([9], [10]);
            console.log("Vysledok tretieho vazenia je:", vysledok3);
            if (vysledok3 !== "Balanced are") {

                console.log("Vysledok merania je cislo " ? 9 : 10);
            }
            else {
                console.log("Vysledok merania je cislo 11 ");
            }
        }
    }


    else if (vysledok1 === "left is hevier") {

        console.log("=== Druhe vazenie vazenie ===");
        let vysledok2 = weight([1, 2, 5], [3, 9, 10]);
        console.log("Vysledok druheho vazenia je:", vysledok2);

        if (vysledok2 === "Balanced are") {        // ostalo mi 4 6 7 8
            console.log("=== Tretie vazenie vazenie ===");
            let vysledok2 = weight([4,6], [3, 9, 10]);
            console.log("Vysledok druheho vazenia je:", vysledok2);

        }
        else if(vysledok2 === "left is hevier") {

        }
        else if(vysledok2 === "right is hevier") {

        }


    }
    
}

findCoin(9, false);