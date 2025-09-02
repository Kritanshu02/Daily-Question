// Your given data
const data = {
  user: {
    id: "u1",
    name: "Yashashvi Maurya",
    email: "yash@example.com",
    friends: [
      { id: "u2", name: "Ankur Sharma", email: "ankur@example.com" },
      { id: "u3", name: "Neha Singh", email: "neha@example.com" }
    ]
  },
  groups: [
    {
      id: "g1",
      name: "Goa Trip",
      members: [
        { id: "u1", name: "Yashashvi Maurya" },
        { id: "u2", name: "Ankur Sharma" },
        { id: "u3", name: "Neha Singh" }
      ],
      expenses: [
        {
          id: "e1",
          description: "Hotel Booking",
          amount: 9000,
          paidBy: "u1",
          splitType: "equal",
          splitBetween: ["u1", "u2", "u3"],
          createdAt: "2025-08-07T12:30:00Z"
        },
        {
          id: "e2",
          description: "Dinner",
          amount: 3000,
          paidBy: "u2",
          splitType: "exact",
          splitBetween: [
            { userId: "u1", amount: 1000 },
            { userId: "u2", amount: 1500 },
            { userId: "u3", amount: 500 }
          ],
          createdAt: "2025-08-07T20:00:00Z"
        }
      ]
    }
  ],
  balances: [
    { owedBy: "u3", owedTo: "u1", amount: 3000 },
    { owedBy: "u3", owedTo: "u2", amount: 500 },
    { owedBy: "u1", owedTo: "u2", amount: 500 }
  ]
};

function getGroupMembers(groupId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const group = data.groups.find(g => g.id === groupId);
      if (group) {
        resolve(group.members);
      } else {
        reject(`Group with id ${groupId} not found`);
      }
    }, 1000);
  });
}

getGroupMembers("g1")
  .then(members => {
    console.log("Group Members:", members);
  })
  .catch(err => {
    console.error("Error:", err);
  });


// Expected Output: ["Alice", "Bob", "Charlie"]
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const user=users.map((user)=>user.name)
console.log(user)

// Expected Output: [{ name: "Jerry", age: 20 }, { name: "Sam", age: 18 }]

let people = [
  { name: "Tom", age: 16 },
  { name: "Jerry", age: 20 },
  { name: "Sam", age: 18 }
];

const peope1=people.filter((people)=>people.age>=18)
console.log(peope1)

let users1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
// Input: 2 → Expected Output: { id: 2, name: "Bob" }
const userss=users1.filter((user)=>user.id==2)
console.log(userss)

let employees = [
  { name: "A", salary: 3000 },
  { name: "B", salary: 4000 },
  { name: "C", salary: 5000 }
];
// Expected Output: 12000

const epm=employees.reduce((sum, emp)=>(sum+emp.salary),0)
console.log(epm)

 

let students = [
  { name: "Raj", score: 85 },
  { name: "Simran", score: 72 },
  { name: "Aman", score: 90 }
];
// Expected Output: [{ name: "Raj", score: 85 }, { name: "Aman", score: 90 }]

const stu=students.filter(stu=>stu.score>=80)
console.log(stu)

let use = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];
// Expected Output: sorted array by age → [Bob, Alice, Charlie]

const userr=use.sort((a,b)=>a.age-b.age).map(user=>user.name)
console.log(userr)

let peoplee = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
  { name: "D", city: "Mumbai" }
];
// Expected Output:
// {
//   Delhi: [{ name: "A", city: "Delhi" }, { name: "C", city: "Delhi" }],
//   Mumbai: [{ name: "B", city: "Mumbai" }, { name: "D", city: "Mumbai" }]
// }
const grouped={}
for(let person of peoplee){
    if(!grouped[person.city]){
        grouped[person.city]=[]
    }
    grouped[person.city].push(person)
}
console.log(grouped)



let studentss = [
  { name: "Raj", score: 35 },
  { name: "Simran", score: 50 },
  { name: "Aman", score: 75 }
];
// Expected Output: 2

let count=0
for(let stud of studentss){
    if(stud.score>=50){
        count ++
    }
}
console.log(count)



const stud=studentss.filter(stud=>stud.score>=50).length
console.log(stud)


const arr=[1,"c",2,3,"z","a"]

console.log(arr.sort())



const stri="abcdefghi"
const strig=stri.split("").reverse().join()
console.log(strig)


let peop = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
  { name: "D", city: "Mumbai" }
];
// Expected Output:
// {
//   Delhi: [{ name: "A", city: "Delhi" }, { name: "C", city: "Delhi" }],
//   Mumbai: [{ name: "B", city: "Mumbai" }, { name: "D", city: "Mumbai" }]
// }

let grp={}
for(let item of peop){
  if(!grp[item.city]){
    grp[item.city]=[]
  }
  grp[item.city].push(item)
}
console.log(grp)


let employeeso = [
  { name: "A", salary: 3000 },
  { name: "B", salary: 4000 },
  { name: "C", salary: 5000 }
];

// total salary 
//[=>400]

const emp=employeeso.reduce((sum,emp)=>(sum+emp.salary),0)
console.log(emp)

const empl=employeeso.filter(item=>item.salary>=4000).map(item=>item.name)
console.log(empl)



// Q1: Write a function to reverse the words in a given sentence without reversing the characters of
//  each word. Example: "I love JavaScript" → "JavaScript love I".


const text="I Love Javascript"

const text1=text.split(' ').reverse().join(' ')
console.log(text1)


function reverseWords() {
   const sentence="I Love Javascript"
    const words = sentence.split(' ');

    const reversedWords = words.reverse();

    const reversedSentence = reversedWords.join(' ');
    console.log(reversedSentence)

}
reverseWords()



// 2. Find Unique Elements in Array
// Q2: Given an array [1, 2, 2, 3, 4, 4, 5], return an array of unique elements.

const arrs=[1, 2, 2, 3, 4, 4, 5]

const arry=arrs.filter((item, index)=>arrs.indexOf(item)===lastIndexOf())



// Q4: Flatten an array without using flat().
//  Example: [1, [2, [3, 4], 5]] → [1, 2, 3, 4, 5]

const arra=[1, [2, [3, 4], 5]] 

let result=[]

for(let item of arra){
  if(Array.isArray(item)){
    result.push(...item)
  }else{
    result.push(item)
  }
}
console.log(result)


// Q10: Remove duplicate objects by id.
//  Input:
// [
//   {id:1, name:"A"}, 
//   {id:2, name:"B"}, 
//   {id:1, name:"C"}
// ]

const dataa= [
  {id:1, name:"A"}, 
  {id:2, name:"B"}, 
  {id:1, name:"C"}
]

const unique=[]
const sameId=new Set()

for(let item of dataa){
   if (!sameId.has(item.id)) {
    sameId.add(item.id);
    unique.push(item);
  }
}
console.log(unique)





