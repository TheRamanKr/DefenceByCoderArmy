// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is comming";
// }


// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     // element.textContent = "Strike is coming";
//     element.style.backgroundColor= "pink";
// }

// element.onclick = function handleClick(){
//     element.textContent = "I am the Best";
// }


// element.addEventListener('dblclick', () =>{
//     element.textContent = "Strike is coming";
// })

// element.addEventListener('mouseenter', () =>{
//     element.textContent = "Strike is coming";
//     element.style.backgroundColor = "brown";
// })

// element.addEventListener('mouseleave', () =>{
//     element.textContent = "Strike is coming";
//     element.style.backgroundColor = "brown";
// })



// element.addEventListener('click', () =>{
//     element.textContent = "Strike is coming";
// })

// element.onclick = function handleClick(){
//     // element.textContent = "Strike is coming";
//     element.style.backgroundColor= "brown";
// }


// let a = {
//     b:50,
//     greet:function(value){
//         console.log("Hello",value);
//     }
// }

// a.greet(10);
// a.greet(20);



// const child1 = document.getElementById("child1");
// child1.addEventListener('click', function(){
//     child1.textContent = "I am clicked";
//     child1.style.backgroundColor = "pink"
// })


const parent = document.getElementById("parent");
// console.log(parent.children)


function handleClick(e){
    e.target.textContent = "I am clicked";
    // parent.removeEventListener('click', handleClick)
}

parent.addEventListener('click', handleClick)




// // Wrong way
// parent.removeEventListener('click', (e)=>{
//     // console.log(e.target)
//     e.target.textContent = "I am clicked";
// })

// parent.addEventListener('click', (e)=>{
//     // console.log(e.target)
//     e.target.textContent = "I am clicked";
// })

// for(let child of parent.children){
//     child.addEventListener('click', function(){
//         // console.log(child);
//         child.textContent = "I am clicked";
//     })
// }



// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click', (e)=>{
//     console.log(e.target);
//     // console.log("GrandParent is clicked");
// })


// const parent = document.getElementById("parent");
// parent.addEventListener('click', (e)=>{
//         // console.log(e)
//     // console.log("Parent is clicked");
// },false)


// const child = document.getElementById("child");
// child.addEventListener('click', (e)=>{
//         // console.log(e)
//         // e.stopPropagation();
//     // console.log("Child is clicked");
// },false)  