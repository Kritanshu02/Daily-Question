// let obj1={
//     name:"abc",
//     last:"def",
// }
// let fullname=function(hometown,state){
//         console.log(this.name+" "+this.last+" "+hometown+" "+state)
//     }

//     fullname.call(obj1,"gwalior","mp")

// let obj2={
//     name:"ghi",
//     last:"jkl"
// }

//     fullname.call(obj2)
//     let printfull=fullname.bind(obj1,"kkk","oooo")
//      printfull();

// // let obj={
// //     name:"kri",
// //     age:22,
// //     full:function(){
// //         console.log(this.name+" "+this.age)
// //     }
// // }
// // obj.full()
// // let obj1={
// //     name:"oo",
// //     age:22,
// // }
// // obj.full.call(obj1)

// let nameObj = {
//     name: "Tony"
// }

// let PrintName = {
//     name: "steve",
//     sayHi: function (age) {
//         console.log(this.name + " age is " + age);
//     }
// }

// PrintName.sayHi.call(PrintName, 42);


// let obje={
//     naam:"kri",
//     lasto:"abcd",
//     hello(){
//         console.log(this.naam+" "+this.lasto)
//     }
// }
// setTimeout(obje.hello,2000)

// setTimeout(function(){
//     obje.hello();
// },1000)


// let obje={
//     naam:"kri",
//     lasto:"abcd",
    
// }
// let x=function(){
//         console.log(this.naam+" "+this.lasto)
//     }

// let y=x.bind(obje)
// y()
// setTimeout(y,2000)


// function getFunc() {
//   let value = "test";

//   let func = function() { 
//     console.log(value)
//   }
//   return func;
// }
// getFunc()(); 


// console.log("start")
// setInterval(function cb(){
//     console.log("callback")
// },2000)
// console.log("end")


// //from 0 to n
// function printnumber(from,to){
//     let current=from;
//     let y=setInterval(function (){
//         console.log(current)
//         if(current==to){
//             clearInterval(y)
//         }
//         current++;
//     },1000);
// }
// printnumber(2,5)








