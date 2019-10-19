// 1. From years in array check for leap years [1974, 1900, 1985, 2000]

function leapYear(year) {
 let leap = year
  if (leap % 4 == 0 && leap % 100 !=0 || leap % 400 == 0) {
  return "yes" }

    else {

    return "no"
  }
  }


leapYear()



// 2. Calculate factorial of 7.

function factorialize(num) {
 if (num == 0 || num == 1)
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(7);

// 3. Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

var myArray = [1,6,23,8,4,98,3,7,3,98,4,98];

var result = 0

for (var i = 0; i < myArray.length; i++ ) {
  if ( (myArray[i] % 2) > 0) {
  result += myArray[i]
  }
}

console.log(result);

// 4. Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

var myArray = [1,6,23,8,4,98,3,7,3,98,4,98];
var high = Math.max(...myArray);
var low = Math.min(...myArray);

var result = high + ' and ' + low ;

console.log(result);

// 5. Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].

var myArray = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];

const sortedArray = myArray.sort((a, b) => {
return b.length - a.length;
}
)

console.log(sortedArray[0]);

// 6. Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].

var myArray = [1,6,23,8,4,98,3,7,3,98,4,98];

function compareNr(a, b) {
return a < b
}

const sortedArray = myArray.sort(compareNr);

var max = 0;

for (var i=0; i < sortedArray.length; i++) {
    if (max <= sortedArray[i]) {
        max = sortedArray[i];
    }
}

var result = max + ' ' ;



console.log(result);

// 7. Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

var myArray = [1,6,23,8,4,98,3,7,3,98,4,98];

var sum = 0;
 for (var i = 0; i < myArray.length; i++) {
  sum = sum + myArray[i];
 }

 var result = sum / myArray.length;

 console.log(result);

// 8. Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

var myArray = [1,6,23,8,4,98,3,7,3,98,4,98];
var result = 0
for ( i = 2; i < myArray.length ; i++ ) {
if ((i % 2) === 0){
result += myArray[i]
}}
newArray = []
for ( i = 2; i < myArray.length ; i++ ) {
if ((i % 2) === 0){
newArray.push(myArray[i])
}}

var avg = result / newArray.length ;

// 9. With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

var myArray = [1,6,23,8,4,98,3,7,3,98,4,98];
newArray =[];
for ( i = 0 ; i < myArray.length ; i++) {
if ((i % 2) > 0) {
  newArray.push(myArray[i])
}
}

console.log(newArray)
