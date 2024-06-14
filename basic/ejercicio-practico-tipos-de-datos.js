//Social Media Profile

// 1 user information
const username='codingAdventurer'
const fullName='Jhon Doe'
const age=25
const isStudent=true

// 2 address information    
const address={
    street:'123 Main Street',
    city:'Techville',
    state:'Codingland',
    zipCode:54321
}

// 3 hobbies
const hobbies=['Coding',
    'Reading',
    'Gaming'
]

// 4 social media profile
const personalizedBio=`Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!`

//5 print user profile
console.log(personalizedBio)