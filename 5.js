for(let i=1;i<6;i++){
    console.log(i)
}

let j=0;
for(j;j<5;j++){
    console.log(j)
}
console.log(j)


for(let z=1;z<10;z++){
    if(z%2!==0){
        console.log(z)
    }
    
}


let user={
    name:"abc",
    id:22,
    class:"sst",
    sec:"2"
}
for(let x in user){
    if(x==="name"){
        console.log(x,user[x])
    }
}

let arr=['apple',"abc","def"]
for(let y of arr){
    console.log(y)
}


const user1 = {
  name: "Amit",
  age: 30,
  city: "Delhi"
};
for(let aa in user1){
    console.log(aa,user1[aa])
}

const product = {
  id: 101,
  name: "Laptop",
  price: 50000,
  inStock: true
};
for(let bb in product){
    console.log(product[bb])
}

const profile = {
  username: "rahul123",
  email: "rahul@gmail.com",
  active: true,
  followers: 560
};
console.log(Object.keys(profile).length)

const student = {
  name: "Riya",
  marks: {
    math: 85,
    english: 78,
    science: 92
  }
};
for(let xx in student){
    if(xx==="marks"){
        console.log(student[xx])
    }
}


const users = [
  { name: "Anil", age: 25 },
  { name: "Suman", age: 30 },
  { name: "Kriti", age: 22 }
];

let npm=users.filter(user=>user.age>24)
console.log(npm)
for(let zz of users){
    console.log(`name ${zz.name}`)
}

let np =  users.map(users=>users.name)
    console.log(np)



    const school = {
  name: "ABC School",
  classes: [
    { className: "1st", students: ["Aman", "Bina"] },
    { className: "2nd", students: ["Chetan", "Disha"] }
  ]
};

for(let nx in school){
    if(nx==="classes"){
            console.log(school[nx])
        for(let oo of school[nx]){
            console.log(oo.students)
            // for(let pp of oo.students){
            // }
            let pp=oo.students.filter(user=>user)
        
        }
    }
}

let obj2=[{name:"akash"},{name:"aaaa"},{name:"bbbb"}]
// let oo=obj2.filter(user=>user.name==="akash")
// console.log(oo)

for(let x of obj2){
    if(x.name==="akash"){
        console.log(x)
    }
}


