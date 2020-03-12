var myName = 'Vee';
var lastName = 'Authari';
var favNumber = 5;
var favNumberString = '5';
var Ani = false;
var myArray = ['V','E','E'];
var myArrays = ['6',6, true];
var fullName = 'Vee' + ' ' + 'Authari';
var integers = 50 + 50;
var firstItem = myArray[0];
var lastItem = myArray[2];
lastItem = myArray[myArray.length - 1];
var numberThree = 'supercalifragilisticexpialidocious';
var numberOfStudents = 14;

var todayDate = new Date;
var hour = todayDate.getHours();
var day = todayDate.getDay();

var favRestaurants = ['eak ramen', 'pure kitchen', 'uc cafeteria'];
var favAnimals = ['sea otter', 'snow leapord', 'german sheperd'];
var favPlaces = ['bryant park', 'barnes & nobles', 'bang bang nyc'];
var favPokemon = ['pikachu', 'pikachu', 'pikachu'];

var arrayOfArrays = [favRestaurants, favAnimals, favPlaces, favPokemon]

console.log('My name is', myName);
console.log('My favorite color is', favNumber);
console.log('My favorite color is', favNumberString);
console.log('I hate Ani', Ani);
console.log('The letters in my name are', myArray);
console.log('a lot of arrays', myArrays);
console.log('This is my full name', fullName);
console.log('50 + 50 is', integers);

console.log('the first letter of my first name is', firstItem);
console.log('the last letter of my first name is', lastItem);

console.log('these are the characters for the word supercalifragilisticexpialidocious', numberThree.length);
console.log('the length of characters in your first name is equal to the length of characters in your last name', myName.length == lastName.length);

if ( numberOfStudents == 14 ) {
	console.log('all students are present');
} else {
	console.log('not all students are here');
}

for ( var i = 0; i < myArray.length; i++ ) {
  console.log('characters in my name ' + myArray[i]);
}

if ( hour == 18 ) {
  console.log("current time is not between 7pm and 9:40pm. ");
} else if ( hour > 19 && hour < 21 ) {
  console.log("current time is between 7pm and 9:40pm.");
} 

if ( day == 5) {
	console.log("tomorrow is saturday!");
} else if ( day == 1 ){
	console.log("boohoo tomorrow is not saturday");
} else if ( day == 2 ){
	console.log("boohoo tomorrow is not saturday");
} else if ( day == 3 ){
	console.log("boohoo tomorrow is not saturday");
} else if ( day == 4 ){
	console.log("boohoo tomorrow is not saturday");
} else if ( day == 6 ){
	console.log("yay! it's saturday");
} else if ( day == 7 ){
	console.log("boohoo tomorrow is not saturday");
}

console.log('my favorite restaurants are', favRestaurants);
console.log('my favorite animals are', favAnimals);
console.log('my favorite spots in nyc are', favPlaces);
console.log('my favorite pokemons are', favPokemon);

console.log('arrays from the previous question', arrayOfArrays);

for ( var i = 0; i < arrayOfArrays.length; i++ ) {
  console.log('loop from the previous question' + arrayOfArrays[i]);
} 

