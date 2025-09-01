

let obj={
    name:"kritanshu",
    age:23
}
let obj1={
    name:"deva",
    age:22,
    }

let fun=function(){
    console.log(this.name+this.age)
}
fun.call(obj)

// let obj={
//     name:"abc",
//     age:21
// }
// let obj1={
//     name:"def",
//     age:2,
//     say:function(){
//         console.log(this.name+this.age)
//     }
// }

// let obj3=obj1.say.bind(obj1)

// obj3()
const car = { 
    brand: "Tesla" 
  };

function showDetails(...model) {
  console.log(`${this.brand} ${model} costs ${price}`);
}

// showDetails.apply(car, ["Model X", 80000,4555]);


// let numbers = [5, 6, 2, 3, 7];
// let maxNum=Math.max.apply(null,numbers)
// console.log(maxNum)

// let num=Math.max(...numbers)
// console.log(num)

const user1 = {
  name: "Rahul",
  introduce: function() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const user2 = {
    name: "Simran" 
    
};
user1.introduce.call(user2)



const obj5 = {
  name: "Kri",
  printName: function() {
    setTimeout(function() {
      console.log(this.name,'ggg');
    },1000);
  }
};

let obj6=obj5.printName.bind(obj5)
obj6()




function sayHi() {
  console.log(`Hi, I am ${this.name}`);
}

// const person1 = { 
//     name: "A"
//     };
// const person2 = {
//     name: "B"
//     };

// const bound1 = sayHi.bind(person1);
// const bound2 = bound1.bind(person2);

// bound2();






