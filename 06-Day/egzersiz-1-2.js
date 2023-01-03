function RastgeleID(){

    const randomIdArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const count = randomIdArray.length
    let randomId = ""
    let randA = ""



    for(let i = 0; i < 15; i++){
           
        let rand4 = Math.round(Math.random() * (count - 1) )
        randA = randomIdArray[rand4]       
        randomId += randA
    }
    console.log("RandomId: " + randomId.toLowerCase() + "  ----->>>>  " + randomId.length)
}

RastgeleID()

function RastgeleHexa(){

    const hexaArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A" ,"B" ,"C" ,"D" ,"E" ,"F"]
    
    let code = ""
    for(let i = 0 ; i < 6; i++){
        
        let counter = Math.round(Math.random() * (hexaArray.length - 1))

        code += hexaArray[counter]
        
    }
    console.log("Random Hexa: #" + code)
}

RastgeleHexa()

function RastgeleRGB(){
        //Chatgpt yardımcı oldu.
        let counterRed = Math.round(Math.random() * 256)
        let counterGreen = Math.round(Math.random() * 256)
        let counterBlue = Math.round(Math.random() * 256)

    console.log(`rgb(${counterRed},${counterGreen},${counterBlue})`)
}

RastgeleRGB()

let arr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "ICELAND", "JAPAN", "KENYA"]
let newArr = []

for (let i = 0; i < arr.length; i++){

    let arrayIndex  = Math.round(Math.random() * (arr.length - 1))
    let arrayItem = arr[arrayIndex]

    if(newArr.includes(arrayItem)){
        
        console.log("Item var: " + arrayItem)
        i--
    }else{
        
        newArr.push(arr[arrayIndex])
    }
}

console.log(newArr)

let arrayItemIndex = []

for(let i = 0; i < arr.length; i++){

    arrayItemIndex.push(arr[i].length)
}
console.log(arrayItemIndex)

let newArrayCountries = []

for(let i = 0; i < arr.length; i++){
    let name = arr[i];
    countriesLover = name.substring(1).toLowerCase();
    let threeLetter = name.substring(0,3)
    newArrayCountries.push( ["'" + name[0] + countriesLover + "'" +` '${threeLetter}'` + " " + arrayItemIndex[i]] ) 
}

console.log(newArrayCountries)

console.log("<---------------------->")

let land = [];

for(let i = 0; i < newArr.length; i++){

    let control = ""
    control = newArrayCountries[i][0].match("land")

    if(control == null){
        
    }else{
        land.push(control.input)
    }
}
console.log(land)

let ia = [];

for(let i = 0; i < newArr.length; i++){

    let control = ""
    control = newArrayCountries[i][0].match("ia")

    if(control == null){
        
    }else{
        ia.push(control.input)
    }
}
console.log(ia)

let uzunString = ""

for (let i = 0; i < arr.length; i++){
    
    if(uzunString.length < arr[i].length){
        uzunString = arr[i]
    }
}

console.log(uzunString)



let fiveChar = []

for (let i = 0; i < arr.length; i++){
    
    if(arr[i].length < 6){
        fiveChar.push(arr[i])
    }
}

console.log(fiveChar)
