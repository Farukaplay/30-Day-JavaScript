// let parag1 = document.querySelector("#parag1")
// let parag2 = document.querySelector("#parag2")
// let parag3 = document.querySelector("#parag3")
// let parag4 = document.querySelector("#parag4")
// console.log(parag1, parag2, parag3, parag4);

// let parag = document.querySelectorAll("p").forEach((p, index) => {
    
//     if(index % 2 == 1){
//         p.style.color = "red"
//     }else{
//         p.style.color = "green"
//     }
//     p.innerHTML = ""
//     console.log(p);
// })

// parag1.style.color = "red"
// parag2.style.backgroundColor = "yellow"
// parag3.style.fontSize = "25px"
// parag4.style.border = "1px solid blue"

function control(i){
    
    if(i < 10){
        i = "0" + i
    }

    return i
}


let dateDive = document.querySelector(".date")
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
dateDive.innerHTML = time()

function time(){
    
    let date = new Date()
    let hour = control(date.getHours());
    let minutes = control(date.getMinutes())
    let second = control(date.getSeconds())

    return  dateDive.innerHTML = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${hour}:${minutes}:${second}`
    
}

setInterval(time, 1000)

let wrapper = document.querySelector(".wrapper")

wrapper.style.display = "flex"
wrapper.style.flexDirection = "column"
wrapper.style.alignItems = "center"


let yearPaint = document.querySelector("h1 > span")

function colorYears (){

    let hexaArray = "ABCDEF0123456789"
    let color = ""
    for(let i = 0; i < 6; i++){
        color += hexaArray[Math.round(Math.random() * (hexaArray.length - 1))]
    }
          
    return yearPaint.style.color = "#" + color
}

setInterval(colorYears, 1000)

yearPaint.style.fontSize = "55px"


let title = document.querySelector("h2")
title.style.textDecoration = "underline"


function timeBackgorund(){
    
    let hexaArray = "ABCDEF0123456789"
    let color = ""
    for(let i = 0; i < 6; i++){
        color += hexaArray[Math.round(Math.random() * (hexaArray.length - 1))]
    }
       
    return dateDive.style.backgroundColor = "#" + color
}

setInterval(timeBackgorund, 1000)

dateDive.style.padding = "5px 10px"


let li = document.querySelectorAll(".wrapper li").forEach((list, index) => {
    list.style.padding = "10px 15px"
    list.style.marginBottom = "10px"
    list.style.borderRadius = "6px"
    list.style.width = "500px"

    if (index == 0){
        list.style.backgroundColor = "#50C878"

    }else if(index == 1){

        list.style.backgroundColor = "#FFC300"
    }else{

        list.style.backgroundColor = "#C70039"
    }
})