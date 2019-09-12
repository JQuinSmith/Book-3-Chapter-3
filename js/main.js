/* Lightning Exercise 1: 
Write a factory function that creates an object that represents a doctor. The function should accept three arguments:

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice */

// Doctor factory function

// const newDoctor = (name, specialty, address) => {
//     return {
//         name: name.name,
//         specialty: specialty.specialty,
//         address: address.address
//     }
// }

/* Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments:

Pet name
Pet breed

Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels */


// The pet factory function

// const newPet = (name, breed) => {
//     return {
//         name: name,
//         breed: breed
//     }
// }

// let BowWowKennels = [];

// const simba = newPet("simba", "black lab")
// BowWowKennels.push(simba);

// const polo = newPet("Polo", "Akita Inu")
// BowWowKennels.push(polo);

// const PJ = newPet("PJ", "Akita Inu")
// BowWowKennels.push(PJ);

// console.log(BowWowKennels);

/* 
Practice: Music Row 


JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.

*/

const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

const createBluegrassArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createCountryArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createFunkArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createPopArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createRapArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const bruce = createCountryArtist("Bruce Atkins", "Country", "23")
    chattenRecords.push(bruce);

const jensen = createPopArtist("Jensen Brown", "Pop", "20")
    polarRecords.push(jensen);

const dre = createFunkArtist("Dre Funkz", "Funk", "25")
    jumpStopRecords.push(dre);

const dusta = createRapArtist("Dusta Grimes", "Rap", "21")
    jumpStopRecords.push(dusta);

const bartholomew = createBluegrassArtist("Bartholomew Danielson", "Bluegrass", "23")
    chattenRecords.push(bartholomew);

const avilee = createCountryArtist("Avilee Dallas", "Country", "19")
    jumpStopRecords.push(avilee);

const austin = createPopArtist("Austin Kinkaid", "Pop", "22")
    polarRecords.push(austin);

const loyonce = createRapArtist("Loyonce", "Rap", "27")
    jumpStopRecords.push(loyonce);


console.log(jumpStopRecords);
console.log(chattenRecords);
console.log(polarRecords);