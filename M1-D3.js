/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

let First = [1, 2, 3, 4, 5];
console.log(First);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let Myobject = {
	name: 'Ankit',
	surname: 'Kumar',
	email: 'ankitlucky.kumar99@gmail.com',
	age: 3.14567554,
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
Myobject.License = 'False';
console.log(Myobject.License);
console.log(Myobject);

/* EXERCISE 4
Remove from the previously created object the age
*/

delete Myobject.age;
console.log(Myobject);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

let SecondObject = {
	name: 'Tikna',
	surname: 'Ramuk',
	email: 'dp.ankit21@gmail.com',
};
if (Myobject.email === SecondObject.email) {
	console.log('Not Verified!! Same Email Found');
} else {
	console.log('Verified!!');
}

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

let totalShoppingCart = 513;
if (totalShoppingCart >= 50) {
	console.log('Eligible for free shipping');
} else {
	console.log('Shipping Costs 10 euros');
}

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
let newsum = (20 * totalShoppingCart) / 100;
let payableAmount = totalShoppingCart - newsum;
if (payableAmount >= 50) {
	totalShopping = payableAmount - 10;
	console.log('Thank you for shopping with us. Please pay', totalShopping);
} else {
	console.log('Not eligible for free shipping', payableAmount);
}

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

let Mycars1 = {
	brand: 'Tesla',
	model: 'Tesla Y',
	licenseplate: 'DI230045',
};

let copycar = Object.assign({}, Mycars1);
let Mycars2 = {
	brand: 'Tesla',
	model: 'Tesla S',
	licenseplate: 'DI230045',
};

let Mycars3 = {
	brand: 'Tesla',
	model: 'Tesla E',
	licenseplate: 'DI230045',
};

let Mycars4 = {
	brand: 'Tesla',
	model: 'Tesla H',
	licenseplate: 'DI200345',
};

let Mycars5 = {
	brand: 'Tesla',
	model: 'Tesla P',
	licenseplate: 'DI23435',
};

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

let carsForRent = [Mycars1, Mycars2, Mycars3, Mycars4, Mycars5];
console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

delete carsForRent[0];
delete carsForRent[4];
console.log(carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

console.log(Mycars4.brand);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

let carsForSale = ['Tesla', 'BMW', 'Mercedes'];
console.log(carsForSale);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/ for (
	let k = 0;
	(k = carsForSale.length);
	k++
) {
	console.log(carsForSale[k]);
}

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
