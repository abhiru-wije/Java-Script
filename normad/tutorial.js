//* const and let
const a = 10;
const b = 5;
let myName = "nico";


console.log(a);
console.log(a+b);
console.log(myName);

myName = "Abhiru";
console.log("My new name is: " + myName);

//* Arrays

const daysOfWeek = ["mon","tue","wed","thu","fri","sat","sun"];

console.log(daysOfWeek[3]);
daysOfWeek.push("OCT"); //add item to array
console.log(daysOfWeek);
daysOfWeek.pop(); //delete item in array
console.log(daysOfWeek);
 
//*objects

const player = {
    name: "Abhiru",
    points:10,
    fat:true,
};
console.log(player);
console.log(player.name);
//we can update objects
player.fat = false;
//we can add elements to object
player.lastname = "wijesinghe";
//update second method
player.points = player.points + 15;
console.log(player.points);

//*functions

function sayHello1(){
    console.log("hello!");
}
sayHello1();

function sayHello(nameOfPerson){
    console.log("your name is "+ nameOfPerson);
}

sayHello("sashini");
sayHello("sithum");
sayHello("Abhiru");

function hello (nameOfPerson, age){
    console.log("your name is "+ nameOfPerson + " your age is " + age);
}

hello("sasini", 10);