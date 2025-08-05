// let arr=["abc","def"]

// let[fname,surname]=arr;

// console.log(fname);
// console.log(surname);

// console.log(arr);

// let [first,second,third]="kri ans pqr".split(' ')
// console.log(first,second,third);

// let user={
//     name:"xyz",
//     age:"23",
//     class:4,
//     sec:"A"
// }
// for(let [key,value] of Object.entries(user)){
//   if(key==="class"|| key==="sec"){
//         console.log(`${key}:${value}`)

//   }
// }

// let user={
//     name:"xyz",
//     age:"23"
// }
// for(let x of Object.values(user)){
//     console.log(x)

// }

// const option={
//     tittle:"menu",
//     width:100,
//     height:22
// }
// let{tittle, width,height}=option;
// console.log(tittle)
// console.log(width)
// console.log(height)
// for(let [key,value] of Object.entries(option)){
//     console.log(`${key}:${value}`)
// }

// const object={
//     size:{
//         height:57,
//         width:20
//     },
//     item:["cake","donut",[22]],
// };
// let {
//     size:{
//         height,
//         width
//     },
//     item:[item1,item2,[item3]],
//     title= "Menu",
// } = object;
// console.log(title);
// console.log(height);
// console.log(width)
// console.log(item3)

// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// let{brand:b,year:y}=car;
// console.log(b)
// console.log(y)

// const student = {
//     name: "John",
//     scores: {
//         math: 90,
//         science: 85
//     }
// };
// let {name,
//     scores:{
//         math,
//         science
//     }
// }=student;
// console.log(math)
// console.log(science)

// const users = [
//     { name: "Sam", age: 30 },
//     { name: "Tom", age: 25 }
// ];
// let[{name:firstname,age:age},
//     {name:secondname}
// ]=users;
// console.log(firstname,age)
// // console.log(firstage)
// console.log(secondname)

// const colors = ["red", "green", "blue"];
// let[one,two,three]=colors;
// console.log(one)

// const numbers = [10, 20, 30, 40];
// let[a,z]=numbers
// console.log(a)
// console.log(z)

// let x = 5;
// let o = 10;
// // Swap x and y
// [x,o]=[o,x]
// console.log(`${x} ${o}`)


// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(first)
// console.log(...rest)

// const data = [100, 200, 300, 400];
// let[ , ,u]=data;
// console.log(u)

const obj={
    name:"abc",
    age:12,
    class:2
}
let a=obj.toString();
console.log(a)

let b=JSON.stringify(obj)
console.log(b)

let arr=[1,2,3,4]
console.log(arr.toString())
console.log(JSON.stringify(arr))

const user1={
    name1:"krit",
    password:"abcdefg",
    toJSON(){
    return {name1:this.name1}
}
};
console.log(JSON.stringify(user1))


const jsonString = '{"name":"Alice","age":25}';
const user = JSON.parse(jsonString);
console.log(user.name); 




let num=34.338;

console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))
console.log(Math.trunc(num))

let i=.1;
let j=.2;
let sum=i+j;
console.log(sum.toFixed(1))

let str="djhds"
console.log(str.length)
console.log(str.toUpperCase())
console.log(str[str.length-1])

let arre=['apple','banana','orange']
let dd=arre.shift()
console.log(dd,arre)

let cc=[1,2,3,4]
let ff=[5,6,7,0,70,65]
// let pp=cc.concat(ff);
// console.log(cc.concat(ff))
// console.log(arr.reverse())
// console.log(pp.sort())


// let arr4=[5,6,7,0,70,65]
// let arr5=arr4.sort((a,b)=>(a-b))
// console.log(arr5)

// let zz= cc.reduce((sum,curr)=>sum+curr,0)
// console.log(zz)

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); 


// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.map(num => num * 2);
// console.log(evenNumbers); 



const numbers = [1, 2, 3, 4, 5, 6,5,4,3,2,1];
const set=new Set(numbers)
console.log(set)
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 


let date=new Date()
console.log(date)



let string="abcdefg"
console.log(string.split('').reverse().join(''))







