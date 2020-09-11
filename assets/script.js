
var rain = prompt ("How many inches of rain fell?");

let inches=parseInt(rain)


console.log("*".repeat(inches))

let yield = 50;
let tooMuch = .9;
let tooLittle = .8;

let newYield = 0;


if (inches >= 20){
 newYield = yield * tooMuch;
} 

else if (inches < 10){
 newYield = yield * tooLittle;
} 
else {
    newYield = yield;
}

var fertilizer = prompt ("Did you use fertilizer?");

if (fertilizer === 'yes'){
    var grade = prompt ("Did you use premium or regular fertilizer?");
    if (grade ==='premium'){
        newYield = newYield * 1.15
        console.log(`The new yield should be ${newYield}  bushels per acre.`)
    }
    else if (grade === 'regular'){
        newYield = newYield * 1.1
        console.log(`The new yield should be ${newYield}  bushels per acre.`)
    }
} else if (fertilizer === 'no'){
    console.log(newYield)
}
