//  HOW TO GENERATE FIXED AND PRECISION NUMBERS!!!!!!!!!    ////////////////////////////////////////


let originalNumber = 10.23456;
let toFixed = originalNumber.toFixed(3);
let toPrecision = originalNumber.toPrecision(3);

let msg = originalNumber; 
msg += originalNumber.toFixed(3); 
msg += originalNumber.toPrecision(3);
let el1 = document.getElementById("h2-1");
let el2 = document.getElementById("h2-2");
let el3 = document.getElementById("h2-3");
el1.innerHTML = originalNumber;
el2.innerHTML = toFixed;
el3.innerHTML = toPrecision;

console.log(originalNumber.toPrecision(3));


let streetNumber = "2845 Petter St"
parseFloat(streetNumber)
console.log(parseFloat(streetNumber))



//      HOW TO GENERATE A RANDOM NUMBER!!!!!!!   ////////////////////////////////////////////////////////////////
let randomNum = Math.floor((Math.random() * 10) + 1);
let el4 = document.getElementById("random");
el4.innerHTML = randomNum;


// SEE PAGES 132-135 IN JAVASCRIPT BOOK!!!!!!!!           /////////////////////////////////////////////////


// IT'S BETTER TO PLACE THESE TWO VARIBLES INTO ONE VARIBLE FOR CLEANER CODE.
// let a = 2145
// let b = 3425


// RETURN GREATER NUMBER   /////////////////////////////////////////////////////////
let number = max(9, 15);


function max(a, b) {
   return (a > b) ? a : b;
}

console.log(number)

let greaterNumber = document.getElementById("number")
greaterNumber.textContent =  number

//  THIS IS AN EVEN CLEANER WAY TO WRITE THE SAME CONCEPT AS ABOVE, YOU CAN EXCLUDE THE ? A : B  AND IT WILL RETURN TRUE OR FALSE   ///////////////////////////
let number2 = max2(9, 15);

function max2(A, B) {
   return (A > B);
}

console.log(number2)
//  YOU CAN LEAVE THE VALUE OF WIDTH AND HEIGHT EMPTY UNTIL YOU NEED THE FUNTION IF NEED BE /////////////////////////////
let width = 589
let height = 474

function isLandscape(width, height) {
return(width > height);
}
console.log(isLandscape)