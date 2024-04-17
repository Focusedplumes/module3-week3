import { color, log, red, green } from 'console-log-colors';

console.log(color.red("this is a really RED boring dumb message"));
console.log(color.green("this is a really GREEN boring dumb message"));

const numbers = [1, 2, 3, 4, 5];

function addOne(array) {

    for (let i = 0; i < array.length; i++){
    console.log(color.red(array[i] + 1)); //red is the crappy way to do it
    }
}

addOne(numbers);

numbers.forEach(function(num){
    console.log(color.green(num+1));//green is the better way to do it aka my looping my numbers array. This is called an anonymous function.
});


// numbers.forEach((num)=>{ console.log(color.red(num+1)) }); // we will see this format a lot and Bobby will use this format.

//Holy Trinity fo Functions - MAP, REDUCE, FILTER -  (forEach  4th place)

//FILTER - Filtering our results with a function

// function isOdd(array, oddArray = []) {
//     for (let i = 0; i <)
// }

const oddArray = isOdd(numbers);
console.log(oddArray);

const easyOddArray = numbers.filter((num)=> num % 2 !==0);
console.log(easyOddArray);
