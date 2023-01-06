// let input1 = window.prompt("Karakter sayısı: ")
// let input2 = window.prompt("Kaç tane ID: ")

// // input1 = parseInt(input1)
// // input2 = parseInt(input2)
// let rndomId = "";
// input1 = 3
// input2 = 2

// function userIdGenerator(){
//     const idSource = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] 
//     let userId = ""

//     for(let i = 0; i < input2; i++){

//         for (let i = 0; i < input1; i++){

//             userId = idSource[Math.floor(Math.random() * idSource.length)]

//         }
//         rndomId += userId + ": " 

//     }



//     return rndomId
// }

//Hesabı sorulacak

// console.log(userIdGenerator())

//Bu fonksiyon iki günümü yedi :(
function generateColors(str, int) {

    let hexa = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let generateColors = []
    let random = 0
    if (str == "hexa") {

        for (let i = 0; i < int; i++) {

            let color = ""

            for (let i = 0; i < 6; i++) {

                random = Math.floor(Math.random() * hexa.length)
                color += hexa[random]

            }
            color = "#" + color
            generateColors[i] = color
        }
        return generateColors
    } else if (str == "rgb") {

        let rgb = []

        let color = ""
        for (let i = 0; i < int; i++) {
            
            let colorRed = 0
            let colorGreen = 0
            let colorBlue = 0

            for (let i = 0; i < 6; i++) {
                colorRed = Math.floor(Math.random() * 256)
                colorGreen = Math.floor(Math.random() * 256)
                colorBlue = Math.floor(Math.random() * 256)
            }
             color = `rgb(${colorRed},${colorGreen},${colorBlue})`
             rgb.push(color)
        }
        return rgb
    }else{
        console.log("Eksik veya Yanlış bilgi girdiniz.")
    }
}

// console.log(generateColors("rgb", 1))


function shuffleArray(arr){
//burda sınırsız döngüye girdi sebebi Math.floor() yapmış olmamdı round'a çevirince sorun kalmadı.
    let shuffleArray = []
    for (let i = 0; i < arr.length; i++){

        let arrayIndex  = Math.round(Math.random() * (arr.length - 1))
        let arrayItem = arr[arrayIndex]
    
        if(shuffleArray.includes(arrayItem)){
            i--
        }else{
            
            shuffleArray.push(arr[arrayIndex])
        }
    }
    
    return shuffleArray
}

console.log(shuffleArray([1,2,4,5,6,7,8,9,0]))
console.log(shuffleArray(["A", "B", "C", "D", "E"]))



function faktoriyal(int){

    let result = 1

    for(let i = 1; i <= int; i++){
        result *= i
    }
    return result
}

console.log(faktoriyal(5))


function isEmpty(param1){

    if(param1.length == ""){
        console.log("Boş")
    }else{
        console.log("Dolu")
    }
return param1
}

// console.log(isEmpty(""))


function sum(int, int2){
    
    let result = int + int2
    return result
}

console.log(sum(10,12))


function sumOfArrayItems(array){

    let result = 0
    let control = Array.isArray(array)
    
    if(control == true){
        
        for(let i = 0; i < array.length; i++){
            
            result += array[i] 
        }
    }else{
        alert("Lütfen Array giriniz....")
    }

    return result
}

console.log(sumOfArrayItems([]))


function average(array){

    let control = Array.isArray(array)
    let result = 0;

    if(control == true){
        
        for(let i = 0; i < array.length; i++){
            
            result += array[i] 
        }
    }else{
        alert("Lütfen Array giriniz....")
    }
    result = result / array.length
    return result
}

console.log(average([12]))


function modifyArray(array){
    let newArr = []

    if (array.length < 5){

        console.log("item not found")
    }else{

        for(let i = 0; i < array.length; i++){
            newArr[i] = array[i]
            
            if (i == 4){
                let fifth = array[4]
                newArr[4] = fifth.toUpperCase()
            }
            
        }
        
    }

    return newArr
}

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))



