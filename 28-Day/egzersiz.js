let addButton = document.querySelector("button"),
    firstNameInput = document.querySelector("#first-name"),
    lastNameInput = document.querySelector("#last-name"),
    countryInput = document.querySelector("#country"),
    scoreInput = document.querySelector("#score"),
    playersDom = document.querySelector(".players tbody"),
    inputArea = document.querySelector(".container .error")
let playerItem = document.createElement("div")
let inputError = document.createElement("span")
let controlInput = document.createElement("span")


// let data = [
//     {
//         fullname: "faruk kplay",
//         country: "tur",
//         score: 20
//     },
//     // {
//     //     fullname: firstNameInput.value + " " + lastNameInput.value,
//     //     country: countryInput.value,
//     //     score: scoreInput.value
//     // },
//     // {
//     //     fullname: firstNameInput.value + " " + lastNameInput.value,
//     //     country: countryInput.value,
//     //     score: scoreInput.value
//     // }
// ]

// let div = document.createElement("div")
// for(let key of data){

//     div.innerHTML = key.fullname
// }
// playersDom.append(div)

// inputError.style.color = "rgb(252, 104, 104)"


// console.log(data);


// function controlDate(time){

//     if(time < 10){
//         time = "0" + time
//     }

//     return time
// }


// const date = function getDate(){

//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//     let getDate = new Date()
//     let hours = controlDate(getDate.getHours())
//     let minutes = controlDate(getDate.getMinutes())
//     let time;

//     return time = `${months[getDate.getMonth()]} ${getDate.getDay()},${getDate.getFullYear()} ${hours}:${minutes}`   
// }



// inputArea.append(inputError)

/*
tableRow.classList.add("player-item")
        tableRow.innerHTML = `<td class="player-name">${firstNameInput.value} ${lastNameInput.value}
            <span>${date()}</span>
        </td>
        <td>${countryInput.value}</td>
        <td>${scoreInput.value}</td>
        <td class="control">
            <button class="button-delete">
                <span class="material-symbols-outlined">
                delete
                </span>
            </button>
            <button class="button-add-5">
                +5
            </button>
            <button class="button-decrease-5">
                -5
            </button>
        </td>`
    //     firstNameInput.value = ""
    //     lastNameInput.value = ""
    //     countryInput.value = ""
    //     scoreInput.value = ""
        playersDom.append(tableRow)
        */

let data = []
playerItem.innerHTML = `<button class="delete">tıkla</button> <button class="ekle">ekle</button> <button>cıkar</button>`

addButton.addEventListener("click", () => {

    data.push({
        name: firstNameInput.value,
        score: 50
    })

    playerItem.innerHTML += `${data[0].score}`
    
    let deleteButton = document.querySelector(".ekle")
    
    deleteButton.addEventListener("click", (e) => {

        console.log(e);
    })

    // console.log(playerItem.children.className == "delete");
})

playersDom.append(playerItem)
