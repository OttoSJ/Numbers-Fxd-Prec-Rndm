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


//      HOW TO GENERATE A RANDOM NUMBER!!!!!!!   ////////////////////////////////////////////////////////////////
let randomNum = Math.floor((Math.random() * 10) + 1);
let el4 = document.getElementById("random");
el4.innerHTML = randomNum;


// SEE PAGES 132-135 IN JAVASCRIPT BOOK!!!!!!!!           /////////////////////////////////////////////////