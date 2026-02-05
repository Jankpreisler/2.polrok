function uhadni() {
    const randomInt = Math.floor(Math.random() * 10) + 1

    let guess = 0;
    let attempts = 3;
    

    
    for (i = 1; i <= 3; i++) {

        let hint = "5";

        if(randomInt > 5){
            hint = "Cislo je vacsie ako 5";
        }
        else{
            hint = "Cislo je mensie ako 5";
        }


        const input = prompt("Zadajte cislo od 1 az do 10");
        guess = input;

        if (randomInt == guess) {
            alert("Uhadol si")
            break;

        }
        
        if (i < attempts) {

            let hintText = randomInt > 5 ? "väčšie ako 5" : "5 alebo menšie";

            if (guess < randomInt) {

                alert("Secret je vacsi ako tip Hint cislo je: " + hintText)

            }
            else if (guess > randomInt) {


                alert("Secret je mensi ako tip Hint cislo je: " + hintText)

            }

        }
    }

    if (randomInt !== guess) {
        alert("Cislo bolo " + randomInt)

    }
}
