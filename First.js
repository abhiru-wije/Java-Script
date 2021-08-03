// increment number
var num1 = 10;
num1++;
console.log(num1);

// increment in differrent Way
 num1 += 9;
console.log(num1); */

Functions in JS
function fun(){
    alert("This is a function");
}
fun();

// example
function greetings() {
    let name = prompt("What is your name? ");
    let result = 'Hello' + ' ' + name;
    console.log(result);
}
greetings();

// argument function
function question(a, b){
    let name = prompt("What is your name? ");
    let age = prompt("What is your age?");
    let result1 = "Hello" + ' ' + name +' '+ 'Your age is'+ ' '+ age;
    console.log(result1);
}
question();

// while loop

var num = 0;
while(num < 5) {
    num += 1;
    console.log(num);
}

// for loops
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

let age = 10; //number
let name = 'bob'; //string
let name = {first: 'Abhiru', last: 'Wije'}; //object
let truth = false; //boolean
let array = [1,2,3]; // array


let fruit = 'banana';
console.log(fruit.length); //length
console.log(fruit.indexOf('nan')); //find element statring number
console.log(fruit.slice(2,6)); //slice the string 
console.log(fruit.replace('ban', 'Abh')); //replace 
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3)); 
console.log(fruit[3]); //these are same things



// Array
let fruit = ['banana', 'apple', 'orange'];
friend = new Array ('sithum', 'sashini', 'Abhiru');

alert(friend[0]);
friend[3] = 'lasith';
console.log(friend);

for (let i = 0; i<friend.length; i++) {
    console.log(friend[i]);
}


// array common method

console.log('to string', fruit.toString());
console.log(fruit.join(' - '));
console.log(fruit.pop(), fruit); //eleminate last element on array
console.log(fruit.push('Pineapple'), fruit); //add item to an array
console.log(fruit.shift()); // remove first element from a list
fruit.unshift('KIWi'); //add element to first 
console.log(fruit); 

let vegetables = ['aspharagas', 'tomatoe','brocoli'];
let all = fruit.concat(vegetables); //add two arrays
console.log(all);
console.log(all.reverse()); //reverse array brings last element to first

let numbers  = [2,6,49,16,21,2323,46,49,64,999,45];
console.log(numbers.sort()); //sort the array
console.log(numbers.sort(function(a,b) {return a-b})); //sorted in asending order
console.log(numbers.sort(function(a,b) {return b-a})); //sorted in desending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray); // add element to array through for loop 

let student = {  first: 'rafeh',
                 last:'qazi', 
                 age:25, 
                 height: 170,
                 studentInfo: function(){
                     return this.first + '\n' + this.last;
                 }};



console.log(student.first);
console.log(student.last);
console.log(student.age);
console.log(student.height);
student.first = 'Abhiru'; // change the object variables
console.log(student.first);
student.age++; //increment object variable by 1
console.log(student.age);
console.log(student.studentInfo());