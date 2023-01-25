// let body =  document.querySelector("body")
// body.style.display = "flex"
// body.style.alignItems = "center"
// body.style.flexDirection = "column"
// body.style.fontFamily = "Cascadia Code"
// body.style.gap = "10px"

// let title = document.querySelector("h1")
// title.style.margin = "0"
// title.style.color = "#50C878"

// let subTitle = document.querySelector("h2")
// subTitle.style.margin = "0"

// let author = document.querySelector("h3")
// author.style.margin = "0"

// let wrapper = document.querySelector(".wrapper")
// wrapper.style.width = "80%"
// wrapper.style.display = "flex"
// wrapper.style.justifyContent = "center"
// wrapper.style.flexDirection = "column"
// wrapper.style.gap = "20px"



// let inputArea = document.createElement("div")
// inputArea.style.display = "flex"
// inputArea.style.width = "100%"

// let inputNumber = document.createElement("input")
// inputNumber.setAttribute("placeholder", "Sayı girin")
// inputNumber.style.border = "2px solid #50C878"
// inputNumber.style.outline = "none"
// inputNumber.style.width = "70%"
// inputNumber.style.height = "30px"




// let button = document.createElement("button")
// button.innerHTML = "Generate Number"
// button.style.backgroundColor = "#50C878"
// button.style.border = "none"


// inputArea.append(inputNumber, button)

// let numbersArea = document.createElement("div")
// numbersArea.style.display = "flex"
// numbersArea.style.flexWrap = "wrap"
// numbersArea.style.justifyContent = "center"
// numbersArea.style.alignItems = "center"
// numbersArea.style.gap = "15px"


// button.addEventListener("click", () => {
    

//     let input = inputNumber.value;

//     for(let i = 0; i <= input; i++){
        
//         let number = document.createElement("div")
//         number.style.width = "120px"
//         number.style.height = "90px"
//         number.style.borderRadius = "6px"
//         number.style.display = "flex"
//         number.style.justifyContent = "center"
//         number.style.alignItems = "center"
//         number.style.fontSize = "30px"
//         number.style.color = "#fff"
//         number.innerHTML = i
        
//         if(i % 2 == 0){
            
//             number.style.backgroundColor = "#50C878"
//         }else {
//             number.style.backgroundColor = "#FFC300"
//         }
//         numbersArea.append(number)
//     }
// })



// wrapper.append(inputArea, numbersArea)

/*------ II. Bölüm ------*/

// let wrapper = document.querySelector(".wrapper")
// wrapper.style.width = "50%"
// wrapper.style.height = "70px"
// wrapper.innerHTML = "Press any key"
// wrapper.style.display = "flex"
// wrapper.style.justifyContent = "center"
// wrapper.style.alignItems = "center"
// wrapper.style.border = "2px solid #DDD"
// wrapper.style.marginTop = "50px"



// document.addEventListener("keydown", (e) => {
//     console.log(e);
//     // alert(e.key)
//     wrapper.innerHTML = e.key + " " + e.keyCode
// })
