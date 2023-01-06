//1 xxxxxxx
//2 xxxxxxx



function printArray(){
    
    let array;
    for(let i = 0; i < arguments.length; i++){

        array = arguments[i]
    }
    return array;
}

console.log(printArray(["Faruk", "Kaplay", 26]))


function showDateTime(){

    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    day = control(day)
    month = control(month)
    hour = control(hour)
    minutes = control(minutes)

    function control(i){
        
        if (i < 10){
            i = "0" + i
        }
        return i;
    }

    let showDateTime = `${day}/${month}/${year} ${hour}:${minutes}`
    return showDateTime
}
console.log(showDateTime())


function swapValues(num, num2){

    let x = num2
    let y = num

    console.log(x, y)
}

swapValues(12,32)


function reverseArray([...arguments]){
    let reverse = []
    reverse = arguments.reverse()
    return reverse
}

console.log(reverseArray([1,2,3,4,5]))


function capitalizeArray(arr){

    let newArr = ""

    for(let i = 0; i < arr.length; i++){

        newArr += " " + arr[i].toUpperCase(); 
    }

    return newArr
}

console.log(capitalizeArray(["Faruk", "Kaplay"]))


function addItem(item){
    
    let addItem = []
    addItem.push(item)

    return addItem
}

console.log(addItem("faruk"))


let items = ["Faruk", "Kaplay", 26]

function removeItem(index){

    let newArray = []
    newArray = items.slice(0, index).concat(items.slice(index + 1))

    return newArray
}

console.log(removeItem(1)) // chapgpt'den yardım alınmıştır. :))


function sumOfNumbers(sayi){

    let result = 0;
    for(let i = 1; i <= sayi; i++){

        result = result + i 

    }

    return result
}

console.log(sumOfNumbers(7))

function sumOfOdd(int){

    let result = 0;

    for(let i = 1; i <= int; i++){

        let sonuc = i % 2

        if(sonuc == 1){
            result += i
        }
    }
    return result
}

console.log(sumOfOdd(20))


function sumOfEven(int){

    let result = 0;

    for(let i = 1; i <= int; i++){

        let sonuc = i % 2

        if(sonuc == 0){
            result += i
        }
    }
    return result
}

console.log(sumOfEven(10))


function evenAndOdd(int){

    let even = 0;
    let odd = 0;

    for(let i = 0 ; i <= int; i++){

        let sonuc = i % 2

        if(sonuc == 0){
          
            even++
        }else{ 
          
            odd++
        } 
    }

    console.log(`The number of odds are ${odd}.
The number of eves are ${even}.`)
    
}

evenAndOdd(100)

function sumArgs(){

    let result = 0
    for (let i = 0; i < arguments.length; i++){

        result += arguments[i]
    }
    return result
}

console.log(sumArgs(1,2,3,4))


function randomUserIp(){

    let result = 0;

    let ip1 = Math.round((Math.random() * 20) + 101)
    let ip2 = Math.round(Math.random() * 9)
    let ip3 =  Math.round(Math.random() * 9)
    let ip4 =  Math.round(Math.random() * 9)

    result = `${ip1}.${ip2}.${ip3}.${ip4}`
    return result
}

console.log(randomUserIp())

// Bu fonksiyonu doğru çalışmıyordu chatpgt'nin verdiği fonksiyonda doğru çalışmıyor 

function randomMacAddress(){

    const source = "0123456789ABCDEF";
    let macAddress = "";

    for(let i = 0; i < 6; i++){

        macAddress += source.charAt(Math.floor(Math.random() * source.length));
        
        if(i < 5){
            macAddress += ":"
        } 
    }
    
    return macAddress;
}

console.log(randomMacAddress())



function randomHexaNumber(){
    const hexaArray = ["0", "1", "2", "3", "4", "5", "6","7", "8", "9", "A", "B", "C", "D", "E", "F"]
    
    let randomHexaNumber = "#"

    for(let i = 0; i < 6; i++){

        randomHexaNumber += hexaArray[Math.floor(Math.random() * hexaArray.length)]
    }

    randomHexaNumber = randomHexaNumber.toLowerCase()
    return randomHexaNumber
}

console.log(randomHexaNumber())


function userIdGenerator(){
    const idSource = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] 
    let userId = ""

    for(let i = 0; i < 7; i++){

        userId += idSource[Math.floor(Math.random() * idSource.length)]
    }

    return userId
}

console.log(userIdGenerator())