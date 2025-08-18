// built a promise and that promise should give members of group based 
// on this object  based on groupId

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

function groupMember(groupId){
    return new promise1((resolve,reject){
        const group=obj.groups.find

    })
}
