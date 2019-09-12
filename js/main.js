/* Lightning Exercise 1: 
Write a factory function that creates an object that represents a doctor. The function should accept three arguments:

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice */

// Doctor factory function
const newDoctor = (name, specialty, address) => {
    return {
        name: name.name,
        specialty: specialty.specialty,
        address: address.address
    }
}

/* Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments:

Pet name
Pet breed

Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels */


// The pet factory function
const newPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

let BowWowKennels = [];

const simba = newPet("simba", "black lab")
BowWowKennels.push(simba);

const polo = newPet("Polo", "Akita Inu")
BowWowKennels.push(polo);

const PJ = newPet("PJ", "Akita Inu")
BowWowKennels.push(PJ);

console.log(BowWowKennels);