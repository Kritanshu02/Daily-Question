function sum(a,b){
    return a+b
}
console.log(sum(1,2,3,4,5));


function sum1(...num){
    return num.reduce((acc, val)=>acc+val,0)
}
console.log(sum1(1,2,3,4,5))

const[a,b,...rest]=[1,2,3,4,5,6,7]
console.log(a);
console.log(b)
console.log(...rest)



arr=[1,2,3,4,5]
arr1=[6,7,8]
arr2=[...arr,...arr1]
console.log(arr2)


function outer(){
    let name="kri"

    return function inner(){
        console.log(name)
    }
}
const aa = outer()

aa();

(function(){
    let msg="hello"
    console.log(msg)
})();

let az=function sum(a,b){
    return a+b
}
console.log(az(3,4));
console.log(az.length)
console.log(az.name)

let ay=(a,b)=>a+b
console.log(ay(2,3))


console.log("start")
setTimeout(function cb(){
    console.log("callback")
},5000);
console.log("end")


function sayhi(){
    console.log("hello")
}
setTimeout(sayhi,1000)
