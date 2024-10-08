function createPet(nameInput, speciesInput, happinessInput, energyInput) {
    let pet = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: energyInput,

        status() {
            console.log(`Pet name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 20;
            this.happiness += 30;
            console.log(`After playing with ${this.name} happiness is ${this.happiness} and energy is ${this.energy}.`);
        },
        feed() {
            this.energy += 20;
            this.happiness += 20;
            console.log(`After feeding ${this.name}, energy level is ${this.energy} and happiness level is now at ${this.happiness}.`);
        }
    }
    
    return pet;
}
let pet1 = createPet("Minou", "Cat", 100, 100);
let pet2 = createPet("Sheba", "Cat", 100, 100);
let pet3 = createPet("Orpheo", "Cat", 100, 100);

let catKennel = [];
catKennel.push(pet1);
catKennel.push(pet2);
catKennel.push(pet3);
catKennel.push(createPet("Twinkle", "Cat", 100, 100));
catKennel.push(createPet("Onyx", "Cat", 100, 80));
catKennel.push(createPet("Cloe", "Cat", 100, 100));
// console.table(catKennel)
catKennel.forEach(pet => pet.play());
console.table(catKennel)
catKennel.forEach(pet => pet.feed());
console.table(catKennel)

//for loop for feeding by calling the feed method on the object
for (let i=0; i < catKennel.length; i++) {
    catKennel[i].feed();
}
console.table(catKennel)

let fishTank = [];

fishTank.push(createPet("Max", "fish", 60, 60));
fishTank.push(createPet("Simone", "fish", 70, 80));
fishTank.push(createPet("Shark", "fish", 80, 100));
fishTank.push(createPet("Nemo", "fish", 60,80));
fishTank.push(createPet("Wanda", "fish", 80,80));
fishTank.push(createPet("Spike", "fish", 60,80));
fishTank.forEach(pet => pet.play());
console.table(fishTank)
fishTank.forEach(pet => pet.feed());
console.table(fishTank)

//for loop for feeding by calling the feed method on the object
for (let i=0; i < fishTank.length; i++) {
    fishTank[i].feed();
}
console.table(fishTank)


let dogKennel = [];
dogKennel.push(createPet("Honey", "Dog", 90, 100));
dogKennel.push(createPet("Smoke", "Dog", 100, 80));
dogKennel.push(createPet("Jack", "Dog", 80, 100));
dogKennel.push(createPet("Pookie", "Dog", 100, 100));
dogKennel.push(createPet("Frank", "Dog", 100, 80));
dogKennel.push(createPet("Ginger", "Dog", 100, 100));
console.table(dogKennel)
dogKennel.forEach(pet => pet.play());
console.table(dogKennel)
dogKennel.forEach(pet => pet.feed());
console.table(dogKennel)

//for loop for feeding by calling the feed method on the object
for (let i=0; i < dogKennel.length; i++) {
    dogKennel[i].feed();
}
console.table(dogKennel) 