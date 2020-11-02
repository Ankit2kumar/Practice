/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumFunction = function(num1,num2){
    if(num1!=num2){
        return num1+num2
    }else{
        return 3 * (num1 + num2)
    }
}
//console.log(sumFunction(5,5))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const check50 = function(num1, num2){
    if(num1 ===50 || num2 === 50 || (num1+num2) === 50){
        return true
    }else{
        return false
    }
}
//console.log(check50(50,25))


/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeCharacter = function(str,pos){
   
    return (str.slice(0,pos) + str.slice(pos+1, str.length));

}
//console.log(removeCharacter("November", 4))


/*

4)
 Create a function to find the largest of three given integers.
*/

const largest = function(x,y,z){
        if(x>y && x>z)
            return x
        else if(y>x && y>z)
            return y
        else
            return z
    
}
//console.log(largest(5,0,0))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkRange = function(num1, num2){
if ((num1 && num2) >= 40 && (num1 && num2) <=60 || (num1 && num2) >= 70 && (num1 && num2) <=100)
return true
else
return false
}
//console.log(checkRange(10,10))

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const copiesString = function(str, cop){
    let newStrArr = [];
    let res = " ";
    for (let i =0; i<cop; i++){
    newStrArr[i] = str;
     res=  res + newStrArr[i]
    
        }
            return res
}
//console.log(copiesString("Ankitwa",5))
/*


7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const displayCity = function(str){
    for (let i=0; i<=2; i++){
        if(str[i]==='N' && str[i+1]==='e' &&  str[i+2]==='w'){
            let res = "New York"
            return res
            break 
        }else if (str[i]==='L' && str[i+1]==='o' &&  str[i+2]==='s') {
            let res = "Los Angeles"
            return res
            break
        } else{
            return false
        }
    }
}
//console.log(displayCity("NewApple"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const calSum = function( arr ){
    let finSum = 0;
 for ( let i =0; i<arr.length; i++){
    finSum = finSum + arr[i]
 }
 return finSum
}
//console.log(calSum([1,2,3,0,2,2,2,2,2,2,2,2,2,2,22,2,2,0]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const testArray = function(arr){
    for (let i=0; i<arr.length; i++){
        if((arr[i] === 1) || (arr[i] === 3))
        return true
        else
        return false
    }
}
//console.log(testArray([1,2,2,2,2,2,1,1,2,1,2,1,2,1,2,1,,1,2,1,2,1,2,1,1,2,1,2,1,1,1,2,1,,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1]))
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */

const testArray1 = function(arr){
    for (let i=0; i<arr.length; i++){
    
        if((arr[i] != 1) || (arr[i] != 3)){
        let test = true
        return test
        }
        else
        return false
    }
}
//console.log(testArray1([1,2,3,4]))
 /*
11)

Create a function to find the longest string from a given array of strings.
**/

const longestArr = function(arrStr){

let lgth = 0;
let longest;

for(let i=0; i < arrStr.length; i++){
    if(arrStr[i].length > lgth){
        let lgth = arrStr[i].length;
        longest = arrStr[i];
    } else{
        continue
    }     
}
return longest 

}
console.log (longestArr(["abc", "hjasdads", "aksdjad", "jaasb"]));

/*
 
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle. */


    /*
13)

Create a function to find the index of the greatest element of a given array of integers */
 
const greatest = function(arrInt){
    let greatest = 0;
for(let i=0; i<arrInt.length; i++){
 if(arrInt[i]> greatest){
     greatest = arrInt[i]
 }
}
return greatest
}

console.log(greatest([1,2,3,4,5,6,7,1,2,10,100,1,1,1,0]))

/*
14)

Create a function to get the largest even number from an array of integers.
*/

const maxEven = function(arra) {
    let evenArr = [];
 for (let i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        evenArr.push(arra[i])
      }
      let greatest = 0;
for(let j=0; j<evenArr.length; j++){
 if(evenArr[j]> greatest){
     greatest = evenArr[j]
 }
}
return greatest

    }
  
  console.log(maxEven([1,3,4,5,6,7,9,10,1,20]))

/*


16)

Create a function to check from two given integers, whether one is positive and another one is negative.

*/

const checkPosNeg = function(n1,n2){
    if (n1<0)
    console.log(n1 + " is negative.")
    else
    console.log(n1 + " is positive")
    if (n2<0)
    console.log(n2 + " is negative.")
    else
    console.log(n2 + " is positive")
}

checkPosNeg(-1, 1)


/*

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/ 
const createString = function(){
    let str = "aa";
    if (str.length< 3) {
   let newStr = str.toUpperCase
    return newStr
} else{
    console.log("Strng length> 3")
}
}
console.log(createString())

/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. */

const sumCheck = function(num1, num2){
        let sum = num1 + num2 
        if(sum<= 80 && sum>= 50)
        return 65
        else
        return 80
}
console.log(sumCheck(40, 100))

/*

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
const numToStr = function(num){
for (let i=1; i<= num; i++){
    if(num % i ===0){
        let factor = i
        if(factor === 3){
            console.log("Diego")
        } if (factor ===5){
            console.log("Riccardo")
        } if(factor ===7){
            console.log("Stefano")
        }
        if(factor != 3 && factor != 5 && factor != 7){
            console.log (factor)
        }
    }
    else{
        continue
    }
}
}
numToStr(30);


/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
const acronym = function(shor){
   if(shor === "BBC"){
       console.log("British Broadcasting Corporation")
   }
   if(shor === "WWW"){
    console.log("World Wide Web")
}
if(shor === "HTML"){
    console.log("Hyper Text Markup Language")
}
if(shor === "HTTP"){
    console.log("Hyper Text Transfer Protocol")
}
}
acronym("WWW")
