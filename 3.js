let weakMap = new WeakMap();
let obj = { name: "John" };
weakMap.set(obj, "secret");
console.log(weakMap.get(obj));
obj = null;


let weakSet = new WeakSet();
let user = { name: "Alice" };
weakSet.add(user);
console.log(weakSet.has(user));
user = null;


let set = new Set()
set.add(1)
set.add(2)
console.log(set)


const data = {
    name: "kri",
    age: 23,
    fulldetail: function () {
        return this.name + " " + this.age
    }
}
console.log(data.fulldetail())


// const data1={
//     name:"kri",
//     age:23,
//     fulldetail:function(){
//         return this
//     }
// }
// console.log(data1.fulldetail())


function setUsername(username) {
    this.username = username
    console.log("called")
}
function createuser(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password
    this.super = function () {
        console.log(`${this.username},${this.email},${this.password}`)
    }
    // return this
}
const abc = new createuser("kri", "kri@123", 12345)

// createuser("kri","kri@123",12345)
abc.super()

// console.log(abc)
// console.log(Object.values(abc))


// const ooo = {
//     a: 10,
//     c:function(){
//     b: () => {
//         console.log(this)
//     }
// }
// ooo.b();


// const b = () => {
//     console.log(this)
// }
// b();

const obj2={
    a:10,
    b:function(){
                console.log("this inside main function",this)
     
        function y(){
            console.log("this inside nested normal function",this)
        }

        const arr=()=>{
             console.log("this inside nested arrow function",this);
             
        }
        // y.call(obj2)
        y();
        arr();
    }
}
obj2.b()









