// question 1
async function makePizza(toppings) {
  const pizzaPromise = new Promise(function(resolve, reject) {
    resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
  });
  
  return pizzaPromise;
}

// const pepperoniPromise = await makePizza(['pepperoni'])
// const canadianPromise = await makePizza(['pepperoni', 'mushroom', 'onions'])
// console.log(pepperoniPromise, canadianPromise);


// question 2


const pizzaPromise1 = await makePizza(['hot peppers', 'onion', 'feta'])
const pizzaPromise2 = await makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four'])
const pizzaPromise3 = await makePizza(['ham', 'cheese'])

const promise1=await Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3])
console.log(promise1)


// question 3


// async function makeDinner() {
//   const pizzaPromise1 = await makePizza(['pepperoni']);
//   const pizzaPromise2 = await makePizza(['mushrooms']);
//   console.log(pizzaPromise1, pizzaPromise2 )
// }
// makeDinner()


// question 4

const obj={
  "user": {
    "id": "u1",
    "name": "Yashashvi Maurya",
    "email": "yash@example.com",
    "friends": [
      { "id": "u2", "name": "Ankur Sharma", "email": "ankur@example.com" },
      { "id": "u3", "name": "Neha Singh", "email": "neha@example.com" }
    ]
  },
  "groups": [
    {
      "id": "g1",
      "name": "Goa Trip",
      "members": [
        { "id": "u1", "name": "Yashashvi Maurya" },
        { "id": "u2", "name": "Ankur Sharma" },
        { "id": "u3", "name": "Neha Singh" }
      ],
      "expenses": [
        {
          "id": "e1",
          "description": "Hotel Booking",
          "amount": 9000,
          "paidBy": "u1",
          "splitType": "equal",
          "splitBetween": ["u1", "u2", "u3"],
          "createdAt": "2025-08-07T12:30:00Z"
        },
        {
          "id": "e2",
          "description": "Dinner",
          "amount": 3000,
          "paidBy": "u2",
          "splitType": "exact",
          "splitBetween": [
            { "userId": "u1", "amount": 1000 },
            { "userId": "u2", "amount": 1500 },
            { "userId": "u3", "amount": 500 }
          ],
          "createdAt": "2025-08-07T20:00:00Z"
        }
      ]
    }
  ],
  "balances": [
    {
      "owedBy": "u3",
      "owedTo": "u1",
      "amount": 3000
    },
    {
      "owedBy": "u3",
      "owedTo": "u2",
      "amount": 500
    },
    {
      "owedBy": "u1",
      "owedTo": "u2",
      "amount": 500
    }
  ]
}
console.log(obj.groups[0].members.map(item=>item.name))
console.log(obj.groups[0].expenses[1].splitBetween[0].amount)


const product = [
    {
        productId: '123',
        productName: 'Laptop',
    },
    {
        productId: '456',
        productName: 'Smartphone',
    },
    {
        productId: '789',
        productName: 'Tablet',
    },
    {        productId: '101',
        productName: 'Smartphone'
    },
    {        productId: '102',
        productName: 'Tablet'
    }
]

const grouped={}
for(let item of product){
  if(!grouped[item.productName]){
    grouped[item.productName]=[]
  }
  grouped[item.productName].push(item)
}
console.log(grouped)


// {
//     'Smartphone': [
//        { productId: '456',
//         productName: 'Smartphone'},
//         {productId: '101',
//         productName: 'Smartphone'},],
//     'Tablet': [
//         { productId: '789',
//         productName: 'Tablet' },
//         { productId: '102',
//         productName: 'Tablet' },],
//     'Laptop': [
//         { productId: '123',
//         productName: 'Laptop' }
//     ]
// }

// let result = {};
// for(let item of arr)
//   {
//     if(!result[item.productName]){
//         result[item.productName] = [];
//     }
//     result[item.productName].push(item);
// }

// console.log(result);





let result ={}
for (let item of arr){
  if(!result[item.productName]){
    result[item.productName]=[]
  }
  result[item.productName].push(item)
}
console.log(result)

















