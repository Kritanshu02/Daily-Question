

// class myclass{
//     constructor(){....}
//     method1(){....}
//     method2(){...}
//     method3(){...}
//     ....
// }

// class User{
//     constructor(name){
//         this.name=name
//     }
//     sayhi(){
//         console.log(this.name)
//     }
// }
// let user1=new User("abc")
// user1.sayhi()
// new User("abc").sayhi()


// class addition{
//     constructor(x,y){
//         this.x=x
//         this.y=y
//     }
//     add(){
//         console.log(this.x+this.y)
//     }
// }
// let a=new addition(2,6)
// // console.log(a.add())
// a.add();


// function User(name){
//     this.name=name
// }
// User.prototype.sayhi=function(){
//     console.log(this.name)
// }

// let User = class {
//   sayHi() {
//     console.log("Hello");
//   }
// };
// new User().sayHi()



// class User {

//   constructor(name) {
//     // invokes the setter
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(xyz) {
//     this._name = xyz;
//   }

// }

// let user = new User("John");
// user.name='abc'
// console.log(user.name); 



// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(this.name+" runs with speed "+this.speed)
//   }
//   stop() {
//     this.speed = 0;
//     console.log(this.name+" stands till "+this.speed)
//   }
// }

// let animal = new Animal("My animal");
// // animal.stop()
// // animal.run(9)


// class Rabbit extends Animal{
//     hide(){
//         console.log(this.name+" is a smallest animal")
//     }
//     stop(){
//         super.stop();
//         this.hide();
//     }
// }
// let rabbit=new Rabbit("White rabbit")
// // rabbit.hide()
// // rabbit.run(9)
// rabbit.stop()



// class Animal {
//   static planet = "Earth";

//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }

//   run(speed = 0) {
//     this.speed += speed;
//     console.log(this.name+" run with speed "+this.speed)
//   }

//   static compare(animalA, animalB) {
//     return animalA.speed - animalB.speed;
//   }

// }


// class Rabbit extends Animal {
//   hide() {
//     console.log(this.name+"hides")
//   }
// }

// let rabbits = [
//   new Rabbit("White Rabbit", 10),
//   new Rabbit("Black Rabbit", 5)
// ];

// rabbits.sort(Rabbit.compare);

// rabbits[1].run()
// console.log(Animal.planet); 


// class PowerArray extends Array{
//     isEmpty(){
//         return this.length===0;
//     }
// }
//     let arr=new PowerArray(1,2,3,4,5,6)
//     console.log(arr.isEmpty())
//     let filterArray=arr.filter(item=>item>=4)
//     console.log(filterArray)
//     console.log(filterArray.isEmpty())


class myClass{
    constructor(name){
        this.name=name;
    }
    sayHi(){
        console.log(this.name)
    }
}
let user=new myClass("abc")

