// // functions

// function greeting(){
//     console.log("Hello Raman");
// }


// function addNumber(num1, num2, num3=0, num4=0){
//     const sum = num1 + num2 + num3 + num4;
//     console.log(sum);
// }

// greeting();
// addNumber(5, 9);
// addNumber(10, 20);

// rest operator
// function addNumber(...num){

//     let sum = 0;

//     for(let n of num){
//         sum+=n;
//     }

//     console.log(sum)
// }


// addNumber(6, 8)
// addNumber(6, 9, 14)
// addNumber(6, 7, 8, 9)
// addNumber(6,7,8,9,10,11,12,13,14,15,16)


// const arr = [10, 20, 30, 40, 50, 60];
// const arr2 = [ 40, 50, 70, 80];

// rest  -> bahut sari values ko catch karne ke liye
// const [first, second, ...num] = arr;
// console.log(first, second, num);


// // spread operator -> arr ko kholne ke liye
// const ans = [...arr, ...arr2];
// console.log(ans);



// 2nd way of creation Function
// function: expression

// const addNumber = function(num1, num2){
//     return num1+num2;
// }

// console.log(addNumber(3,4));

//===================================================================================

// arrow function 

// ()=>{

// }

// const addNumber = (num1, num2)=>{
//     return num1 + num2;
// }

// const addNumber = (num1, num2)=> num1 + num2;

// console.log(addNumber(1, 2));


// let arr = [10, 20, 30, 9, 4, 50];

// arr.sort((a,b)=> a-b);
// console.log(arr)

// const squareOfNumber = (num) => num*num;

// if we have single parameter, no need of this ()
// const squareOfNumber = num => num*num;

// console.log(squareOfNumber(9))

// const greeting = ()=> {
//     return{
//         name: "Rohit",
//         age: 20,
//     }
// }


// const greeting = ()=> {
//     user = {
//         name: "Rohit",
//         age: 20,
//     }
//     return user;
// }

// const greeting = ()=> ({name: "Rohit",age: 20,})

// console.log(greeting());


// IIFE

// (function greeting(){
//     console.log("hello Dost");
// })();

// (()=>{
//     console.log("Hi");
// })();


// callback function

// function greet(){
//     console.log("Hello Ji, kaise ho aap?");
// }

// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     callback();

//     // code hota jisko execute karna hota
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);

// blinkit

function blinkitOrderPlaced(){
    console.log("We have started packing your order");
}


function zomatoOrderPlaced(){
    console.log("We have started preparing your order");
}


function payment(amount, callback){
    console.log(`${amount} payment has initialized`);
    console.log(`Payment is received`);
    callback();

    // GST: Government
    // Rider ko kitna payment dena h
    // company ko kitna dena h

}

payment(500, zomatoOrderPlaced);
payment(800, blinkitOrderPlaced);