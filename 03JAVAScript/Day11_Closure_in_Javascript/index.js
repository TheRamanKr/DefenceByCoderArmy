// Scope and Closure, HOF
// Global -> Accessible to everyone
// function -> accessible only to that function
// Block level scope -> accessible only to that Block

// var only respects function scope -> var under function only accessible under functional scope
// var not respects Block scope -> means var under Block also we can access it from out of the Block scope


// // Global Scope
// let a = 10;
// const b = 20;
// var e = 50;


// if(true){

//     // Block Scope of c
//     let c = 30
//     console.log(c);

//     console.log(b);
// }

// // // not able access of the block
// // console.log(c);

// function greet(){
//     // functional Scope of d
//     let d = 30;
//     // console.log(d);

//     var f = 70;

//     console.log(a);
// }

// // // f is not accessible out of the function
// // console.log(f);

// greet();



// let global = 30;


// function meet(){
//     let global = 40;

//     function see(){
//         let global = 10;
//         console.log(global);
//     }
//     // console.log(global);

//     see();
// }

// meet();



// function createCounter(){

//     let count = 0;
//     function increment(){
//         console.log("I am increment function");
//     }

//     return increment;
// }

// const counter = createCounter();   // 
// counter();

// console.log(counter)   // this line returns: [Function: increment]


// function createCounter(){

//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// Real life use of closure

// let balance = 500;


// balance+="Raman";
// balance-= 500;
// console.log(balance);


// let user = {
//     balance: 500,
//     deposite: function(amount){
//         if(typeof amount==="number" && amount>0){
//             this.balance+=amount;
//             return this.balance;
//         }
        
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && this.balance>=amount){
//             this.balance-=amount;
//             return this.balance;
//         }    
//         },
//         getbalance: function(amount){
//             return this.balance;
//     }
// }

// const deposite = user.deposite(200);
// console.log(user.getbalance());

// let balance = 500;

// let user = {
    
//     deposite: function(amount){
//         if(typeof amount==="number" && amount>0){
//             balance+=amount;
//             return balance;
//         }
        
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//             balance-=amount;
//             return balance;
//         }    
//         },
//         getbalance: function(amount){
//             return balance;
//     }
// }

// balance="Rohit";

// const deposite = user.deposite(200);
// console.log(user.getbalance());

// method ko access(function)
// balance: usko directly access na kare


// function createAccount(){

//     let balance = 500;
//     // private : ab isko koi bahar se change nhi kar sakta

//     const user = {
    
//     deposite: function(amount){
//         if(typeof amount==="number" && amount>0){
//             balance+=amount;
//             return balance;
//         }
        
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//             balance-=amount;
//             return balance;
//         }    
//         },
//         getbalance: function(amount){
//             return balance;
//     }
//     }

//     return user;
// }


// const customer = createAccount()
// console.log(customer.withdraw(100))


//======================================================================================

// // Higher Order Function 
// // similar to callback

// function double(){

//     function execute(){
//         console.log("Hello");    
//     }

//     return execute;
// }

// // ek aisa function jo aapke function ko return karta h
// const n = double();
// n();


// function double(value){

//     return function execute(num){
//         return num*value;    
//     }

// }

// // const n = double(20);
// // console.log(n(5));

// const n = double(20)(5);
// console.log(n);
