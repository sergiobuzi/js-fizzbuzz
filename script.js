//creo le variabili e gli do la classe css
const row = document.querySelector(".row");
const container = document.querySelector(".container");


//apro un ciclo che parte da 1 fino ad arrivare a 100
for (let i = 1; i <= 100; i++) {

    //creo un div generico
    const square = document.createElement("div");
    //aggiungo al div la classe square
    square.classList.add("square");
    //aggiungo il contenuto di square alla variabile row
    row.append(square);
    //aggiungo il contenuto di row all'interno di container
    container.append(row);


        // i numeri divisibili per 3 e per 5 vengono sostituiti da fizzbuzz
    if (i % 3 === 0  &&  i % 5 === 0) {
        const fizzbuzz = "fizzbuzz";
        console.log("fizzbuzz");
        square.append(fizzbuzz);
        square.classList.add("red");
    
        // i numeri divisibili per 3 vengono sostituiti da fizz
    } else if (i % 3 === 0) {
        const fizz = "fizz";
        console.log("fizz");
        square.append(fizz);
        square.classList.add("green");

        // numeri  divisibili per 5  vengono sostituiti da buzz
    } else if (i % 5 ===0) {
        const buzz = "buzz";
        console.log("buzz");
        square.append(buzz);
        square.classList.add("yellow");

        // tutti gli altri numeri rimangono tali
    } else {
        console.log(i);
        square.append(i);
    }

}

