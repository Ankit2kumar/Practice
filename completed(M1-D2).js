

/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

console.log(12 + 20);

/* EXERCISE 2
Create a variable named X containing the number 12
*/

let x = 12;

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

let name = 'john Doe';

/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

let x1 = 12;
Differece = 12 - x;
console.log(Differece);

/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

let name1 = 'john';
let name2 = 'John';
console.log(name1 === name2);
console.log(name1 == name2.toLowerCase());

/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

let x2 = 8;
if ((x2 = 8)) {
	console.log('eight');
}
// Would like to know other ways to do this!!
/* EXERCISE 7 (EXTRA)
Insert a value in a variable based on the result of a ternary if
*/
let s1 = 'Ankit';
let s2 = 'Mac';
let value = s1.length > s2.length ? s1 : s2;
console.log(value);

