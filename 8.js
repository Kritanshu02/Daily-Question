// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class hello{
    constructor(date,month,year){
        this.date=date
        this.month=month
        this.year=year
    }
    hi(){
        console.log(this.date+" "+this.month+" "+this.year)
    }
}
class bye extends hello{
    constructor(...args){
        super(...args)
    }
    by(){
        super.hi()
    }
}
// let x=new bye(5,8,2025)
// x.by()

// let count=1

// function cout(){
//     setInterval(()=>{
//         console.log(count)
//     count=count*2
//     },1000)
// }
// cout()



class User{
    constructor(name, email, age,){
        this.company=null;
        this.name=name;
        this.email=email;
        this.age=age;
    }
    setCompany(company){
        this.company=company;
    }
}
class Company{
    constructor(name, industry){
        this.name=name;
        this.industry=industry;
        this.employees=[];
    }
    addEmployee(user){
        user.setCompany(this.name)
        this.employees.push(user);
    }
    getEmployeeCount(){
        return this.employees.length;
    }
    getEmployeeNames(){
        return this.employees.map(item=>item.name)
    }
    
    
}
const techInnovators= new Company("Tech Innovators","Software")
const alice=new User("Alice","alice@123",22)
const bob=new User("Bob","bob@123",23)
const charlie=new User("Charlie","charlie@123",24)

techInnovators.addEmployee(alice);
// alice.setCompany(techInnovators.name)
techInnovators.addEmployee(bob);
// bob.setCompany(techInnovators.name)

techInnovators.addEmployee(charlie);
// charlie.setCompany(techInnovators.name)

console.log(techInnovators);
console.log("total number employee is",techInnovators.getEmployeeCount());
console.log("names are",techInnovators.getEmployeeNames());





















