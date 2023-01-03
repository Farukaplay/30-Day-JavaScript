function fullName(){
    let fullName = "Faruk Kaplay"
    console.log(fullName)
}

fullName()

function fullName2(name, surName){

    let fullName = name + surName
    return fullName
}

console.log(fullName2("Faruk", " Kaplay"))

function addNumbers(one, two){

    let sum = one + two
    return sum
}

console.log(addNumbers(10, 15))


function areaOfRectangle(length, width){

    let result = length * width
    return result
}

console.log(areaOfRectangle(20,10))

function perimeterOfRectagle(length, width){

    let result = 2 * (length + width)
    return result
}

console.log(perimeterOfRectagle(42,12))

function volumeOfRectPrism(length, width, height){

    let result = length * width * height
    return result
}

console.log(volumeOfRectPrism(35, 14, 50))


function areaOfCircle(r){
    
    const PI = Math.PI;
    let result = PI * r *r
    return result
}

console.log(areaOfCircle(14))


function circumOfCircle(r){
    const PI = Math.PI;

    let result = 2 * PI * r
    return result
}

console.log(circumOfCircle(12))


function destiny(mass, volume){

    let destiny = mass / volume
    return destiny
}

console.log(destiny(83, 32))


function speed(distance, time){

    let speed = distance / time
    return speed
}

console.log(speed(40, 30))


function weight(mass){

    const gravity = 9.18
    let weight = mass * gravity
    return weight
}

console.log(weight(9))


function convertCelsiusToFahrenheit(oC){

    let oF = 1.8
    let result = (oC * oF) + 32
    return result
}

console.log(convertCelsiusToFahrenheit(24))


function bmi(weight, height){

    let bmi = weight / (height * height)
    bmi = bmi.toFixed(1)
    let result = ""

    if(bmi > 18.5){
        
        result = bmi + " : Normal"

    }else if(bmi > 24.9){

        result = bmi + " : Overweight"

    }else if(bmi > 29.9){

        result = bmi + " : Obese"

    }else{
        
        result = bmi + " : Underweight"
    }

    return result
}

console.log(bmi(85, 1.82))


function checkSeason(season){

    let result = ""

    if(season == "Aralik" || season == "Ocak" || season == "Şubat"){

        result = "Kış"
    }else if(season == "Mart" || season == "Nisan" || season == "Mayıs"){

        result = "İlkbahar"
    }else if (season == "Haziran" || season == "Temmuz" || season == "Ağustos"){

        result = "Yaz"
    }else if(season == "Eylül" || season == "Ekim" || season == "Kasım"){
        
        result = "Sonbahar"
    }else{

        result = "Yanlış değer"
    }

    return result
}

console.log(checkSeason("Aralik"))


function findMax(int1, int2, int3){

    let numbers = [int1, int2, int3]
    let findMax;

    findMax = Math.max(...numbers)

    return findMax
}

console.log(findMax(15, 15, 5))