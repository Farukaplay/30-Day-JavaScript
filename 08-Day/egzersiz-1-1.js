const dog ={
    name: "Dino",
    legs: 4,
    color: "Grey",
    age: 2,
    bark : function(){
        let bark = "woof woof"
        return bark
    }
}
console.log(dog)

console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark())

dog.breed = "Scootish"

console.log(dog)

dog.getDogInfo = function(){ 
    let getDogInfo =  `${dog.name}, ${dog.legs}, ${dog.color}`;
    return getDogInfo
}

console.log(dog.getDogInfo())