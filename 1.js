// function add(a,b){
//     return a+b
// }
// let a=10;
// let b=10;
// console.log(add(a,b))

// function makecounter(){
//     let count=0;
//     return function(){
//         return count++;
//     }
    
// }
// let counter=makecounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// const user = {
//   name: "Alice",
//   address: {
//     city: "Delhi"
//   }
// };

// console.log(user.address.city); 
// console.log(user.contact?.phone); 
// console.log()

// if (user && user.address && user.address.city) {
//   console.log(user.address.city);
// }
// const user1 = {
//   name: "kri"
// };

// user1.sayHello?.(); 



// const data = {
//   user: {
//     profile: {
//       name: "Kritanshu"
//     }
//   }
// };

// console.log(data.user.profile?.name); 
// console.log(data.user.contact?.email); 


// let map=new Map()

// map.set(1,"abc");
// map.set("1","b");
// map.set(true,"c");

// console.log(map.get(1))
// console.log(map.has("1"))
// // console.log(map.delete(true));
// console.log(map.size)
// console.log(map)


// let user2 = { name: "Alice" };
// let user3 = { name: "Bob" };

// let visits = new Map();

// visits.set(user2, 5);
// visits.set(user3, 10);

// console.log(visits.get(user2));
// console.log(visits.get(user3)); 
// console.log(visits)

let xyz=new Map([
    ["kri",20],
    ["abc",10],
    ["def",0]
])
for(let x of xyz.keys()){
    if(x==="abc"){
        console.log(x)
    }
}
for(let x of xyz.entries()){
    console.log(x)
}
// console.log(xyz)

// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);

// now prices = { banana: 1, orange: 2, meat: 4 }

// alert(prices.orange); // 2

// let set=new Set()
// let x=1;
// let y=2;
// let z=3;

// set.add(x)
// set.add(y)
// set.add(z)
// set.add(x)
// set.add(y)

// console.log(set)

// let set2=new Set(["abc","def","ghi","ijk"]);
// for(let x of set2){
//     if(x==="ghi"){
//         console.log(x)
//     }
// }

// let now=new Date();
// console.log(now)
// let now1=new Date(0);
// console.log(now1)
// let now2=new Date(24*3600*1000);
// console.log(now2)
// let now3=new Date(-24*3600*1000);
// console.log(now3)
// let now4=new Date(2025,7,17);
// console.log(now4)

// let arr=[1,2,3]
// let [a,b,c]=arr;

// console.log(a);
// console.log(b);
// console.log(c);


let [x, , z] = [10, 20, 30];

console.log(x); 
console.log(z); 

let [p, q = 5] = [1];

console.log(p);
console.log(q); 

let user={
    na:"kri",
    age:"23"
}

let{na,age}=user;

console.log(age);
console.log(na);









