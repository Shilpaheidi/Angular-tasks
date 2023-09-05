import { Component, Input } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //         Task 1
  // items:string[] = ['item1','item2','item3','item4']
  //  Task 2
  // itemName!: string;
  // cartItems: string[] = [];
  // addItem() {
  //   if (this.itemName) {
  //     this.cartItems.push(this.itemName);
  //     // this.itemName = '';
  //   }
  // }
  // task 13
  // inputString = '';
  // count = 0;
  // vowels: string[] = ['a','e','i','o','u'];
  // countVowels() {
  //   for (let index = 0; index < this.inputString.length; index++) {
  //     if (this.vowels.includes(this.inputString[index].toLowerCase())) {
  //       this.count++;
  //     }
  //   }
  // }
  // Task 14
  // namesContainer:string[]=['container1','container2','container3','container4']
  //Task 15
  // cartItems:any[]=['item1','item2','item3','item4'];

  // task 31

  // userData = [{name:"user1",email:"user@gmail.com",profilePicture:"../assets/profile"}]
  userData = { name: "user1", email: "user@gmail.com", profilePicture: "../../assets/profile" };
}

// 3rd task in another component
// task 4

// function findEvenNumbers(numbers: string | any[]){
// let n1 = 0;
// for (let i = 0; i < numbers.length; i++) {

//   if (numbers[i] % 2 === 0) {

//     n1 += numbers[i];
//   }

// }
// return n1;
// }
// const nums = [3,4,5,23,1939,4747]
// console.log(findEvenNumbers(nums))

// function sumEvenNumbers(numbers: string | any[]) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       sum += numbers[i];
//     }
//   }
//   return sum;
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = sumEvenNumbers(numbers);
// console.log(result); // Output: 12

// Task 5

// function findAverage(num: number[]) {
//   let total = 0;

//   for (let i = 0; i < num.length; i++) {
//   total += num[i];

//   }
//   return total / num.length
// }
// let n = [33,3838,3939,1626,122]
// console.log(findAverage(n));

//task 6

// function findLargestValue(num: number[]){
// let large = num[0];
// for (let index = 1; index < num.length; index++) {

//   if (num[index]  > large) {

//     large = num[index];
//   }

// }

// return large;
// }

// let largeNumbers = [383,18919,2774,1763,198,2992]
// console.log(findLargestValue(largeNumbers));

//task 7

// function findVowels(str:String){
// let count = 0;
// let vowels = ['a','e','i','o','u'];
// for (let index = 0; index < str.length; index++) {
//  if (vowels.includes(str[index].toLowerCase())) {
//   count++;
//  }

// }

// return count;
// }

// let myString = "Surely you will get a goog Job";
// console.log(findVowels(myString));

//task 8

// function reverseString(str:String) {
//   let reverseValues = '';
// for (let index= str.length - 1; index >=0; index--) {
//  reverseValues += str[index];

// }

// console.log(reverseValues);
// let reverseValues2 = ''
// for(let i=reverseValues.length -1; i>=0;i--){
//   reverseValues2 += reverseValues[i];
// }
//   return reverseValues2;

// }

// let mystring = 'hello my name is shilpa'
// console.log(reverseString(mystring));

//task 18

// function reverseString(str:string) {

//  return str.split('').reverse().join('');

// }

// let myString = "hello my name is shilpa";

// console.log(reverseString(myString));

// function reverseStringUsingLoop(str:string) {
//   let reverseLetter = '';
//   for (let index = str.length - 1; index >= 0; index--) {
//    reverseLetter += str[index]

//   }

//   return reverseLetter;
// }

// console.log(reverseStringUsingLoop(myString));

//task 19
// let count = 0;
// let vowels = ['a','e','i','o','u'];
// function findVowels(str:string) {

//   for (let index = 0; index < str.length; index++) {

//     if (vowels.includes(str[index].toLowerCase())) {

//       count++;
//     }

//   }
//   return count;
// }
// let mystring = 'hello world'
// console.log(findVowels(mystring));
// function countVowels(str: string): number {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// task 20
// function addItemToCart(cart:string[],item:string) {

// cart.push(item);

// return cart;
// }

// let mycart = ['apple','banana'];
// let newItem = 'grapes';

// console.log(addItemToCart(mycart,newItem));

//task 21
// let sum = 0;
// function findAverage(numbers:number[]) {

//   for (let index = 0; index < numbers.length; index++) {

//     sum += numbers[index];

//   }
// return sum / numbers.length;

// }
// let n1 =[1,484,988,374,988929,40499]
// console.log(findAverage(n1));

//task 22

// function findMaximumNumber(numbers: number[]) {
//   let maxnum = numbers[0];

//   for (const n1 of numbers) {

//     if(n1 > maxnum)
//     maxnum = n1;
//   }
//   return maxnum;
// }

// let numbers = [26,282,363,939,3992]
// console.log(findMaximumNumber(numbers));

//task 23

// function findLongestWord(sentence:string) {
//   let words= sentence.split(" ");
//   let longestWord = '';


//   for (const word of words) {
//     if(word.length > longestWord.length){
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// let makeWords = "daisy id waiting to go out";

// console.log(findLongestWord(makeWords));

//task 24

// function findLongestWord(sentence: string): string {
//   let words = sentence.split(" ");
//   let longestWord = '';

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// task 25
// let makeWords = "daisy id waiting to go out";

// console.log(findLongestWord(makeWords));

// let evennumber: any[]= [];
// function findEvenNumbers(numbers:number[]) {
// for (let index = 0; index < numbers.length; index++) {
 
//   if (numbers[index] % 2 === 0) {
//   evennumber.push(numbers[index]);
//   }
// }
// return evennumber;
  
  
// }

// let num = [27,38,27,65,299,625,88,12,34]
// console.log(findEvenNumbers(num));


// task 26


// function removeDuplicates(numbers:number[]) {
 
//   let uniqueNumber: number[] = [];

//   for(let i=0; i<numbers.length; i++){
//     if (!uniqueNumber.includes(numbers[i])) {
//       uniqueNumber.push(numbers[i]);
//     }
//   }

//   return uniqueNumber;
// }

// let nums =[26,92,1,2,4,2,87,89,100,4,26,28,3939,999]
// console.log(removeDuplicates(nums));



//task 27
// function checkPalindrome(str:string){
// let palindromeString = '';

// for (let index = str.length -1 ; index >= 0; index--) {
// //  if (palindromeString.includes(str[index])) {
//   palindromeString += str[index];
// //  }
  
// }

// return palindromeString === str;
// }

// let sting = "racecar"
// console.log(checkPalindrome(sting));


// function sumOfPositiveNumbers(numbers:number[]) {
//   let sum = 0;
// for (let index = 0; index < numbers.length; index++) {

//   if (numbers[index] > 0) {
    
//     sum += numbers[index];
//   }
  
// }
//   return sum;
// }

// let arrayOfNumber = [32,33,21,33,11,-22,27,9,-82]
// console.log(sumOfPositiveNumbers(arrayOfNumber));


//task 29

// function findLength(str:string[]) {
//   let longLenght:any = [];
//   for (let index = 0; index < str.length; index++) {
//    if (str[index].length > 5) {
//     longLenght.push(str[index]);
//    }
    
//   }

//   return longLenght;
// }
// let array = ["apple", "banana", "kiwi", "grapefruit", "orange"]
// console.log(findLength(array));


// function findLength(str: string[]) {
//   let longLength: string[] = [];
//   for (let index = 0; index < str.length; index++) {
//     if (str[index].length > 5) {
//       longLength.push(str[index]);
//     }
//   }
//   return longLength;
// }

// let array = ["apple", "banana", "kiwi", "grapefruit", "orange"];
// console.log(findLength(array));

// task 30

// function sumOfEvenNumber(numbers:number[]) {

//   let addingEvenNumbers = [];
//   let total = 0;
//   for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] % 2 === 0) {

//     total += numbers[index]
//     addingEvenNumbers.push(total)
//   }
    
//   }

//   return total;
// }

// let nums = [243,383,655,12,263,14,18,22,44,2929,3838,355,124,33,38]
// console.log(sumOfEvenNumber(nums));


// function findMinimumNumber(value:number[]) {
  
//   let minimumNumber = Infinity;

//   for (let index = 0; index < value.length; index++) {
//     if (value[index] < minimumNumber ) {
//       minimumNumber = value[index];
//     }
    
//   }

//   return minimumNumber;
// }

// let array = [122,29,82,3983,983,2827,383,1]
// console.log(findMinimumNumber(array));


function findAverage(numbers:number[]) {
  let average = 0;

  for (let index = 0; index < numbers.length; index++) {

      average += numbers[index];
    
    
  }

  return average / numbers.length;
}

let array = [112,282,218,29]
console.log(findAverage(array));
