// implicit binding

const house={
    dogName:'Fido',
    dogGreeting:function(){
        console.log(`Hi, I'm ${this.dogName

        }`)
    }
}

house.dogGreeting()

// explicit binding
function dogGreeting(){
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse={dogName:'Coconut',}

dogGreeting.call(newHouse)



function newDogGreeting(owner,address){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const owner='Lucy'
const address='Avenue 123'

newDogGreeting.call(newHouse,owner,address)