// // variable ko kaise banate h

// let name = "Raman";
// let age = 20;

// age = 21;

// console.log(name, age);



// const account = 1234;
// // account = 123;

// console.log(account);


// // old tarika 
// var ka scope Global hota hai ya fir functional var block ka respect nhi karta

// var a = 10;
// var a = 20;
// console.log(a);

// // var in Block scope
// if(true){
//     var a = 20;
// }

// console.log(a);


// function fun(){
//     var c = 30;
// }

// // access nhi kar payegaa var functional scope ka respect karta hai
// console.log(c);


// =============================================================================

// Data types

// primitive data type
// number, string,  boolean, undefined, null, bigint, symbol

// // number
// let a = 10;
// let b = 2.367;
// console.log(a, b);
// console.log(typeof a,typeof b);

// // string 
// let c = "Riya";
// let d = "Naisha";
// console.log(c, d);
// console.log(typeof c, d);


// // boolean -> true, false or (0, 1)
// let login = true;
// let f = false;
// console.log(login, f);
// console.log(typeof f);

// // undefined
// let user;
// // const ke saath rule hai usko define/asign karna hi padega 
// // const p;
// console.log(typeof user);

// console.log(user);


// // bigint
// let num = 121212454121454511245n;
// // without n output :- 121212454121454520000
// // n last me dene se bigint ban jayega aur humara output puraa real aayega
// console.log(num);
// console.log(typeof num);


// // null
// let weather = null;  // Intentionally set to have no value
// console.log(weather);
// console.log(typeof null);  // object :- sabse bada bug of javaScript

// //API call exaple
// let weather = current_weather("Dwaraka");
// // 25  :- find
// // null  :- abhi find nhi kar paa rha h
// // undefined  :- Dwakarka exist hi nhi karta


// // symbol
// // symbol se ek unique value generate ho jate hai
// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id1==id2);
// console.log(typeof id1);


// Non Primitive data types
// array, object, function

// // array
// let arr = [10, 20, 30, "Raman", true]

// console.log(arr);
// console.log(typeof arr);   // obj :- or this is not a bug 


// // object
// let obj = {
//     name: "Raman",
//     account: 12125,
//     age: 18,
//     category: "gen"
// }

// console.log(obj);
// console.log(typeof obj);


// // function
// function add(){
//     console.log("hello");
// }

// add();

// let s = function add(){
//     console.log("hello");
// }

// console.log(s);
// console.log(typeof s);


// ===========================================================================

// // Primitive data type is immutable

// let a = 10;
// a = 20;

// console.log(a);


// // Non primitive sata type is mutable

// let arr = [10, 20, 30, 40];
// arr.push(90);
// arr[0] = 70;


// // console.log(arr)


// let obj = {
//     name: "Mohan",
//     age: 20
// }
// obj.name = "Rohan";
// console.log(obj);