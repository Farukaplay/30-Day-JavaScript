let input = document.querySelector("input")
let option = document.querySelector("select")
let button = document.querySelector("button")
let message = document.querySelector(".description")


let gezegen = [
    {
        name: "EARTH",
        gravity: 9.80
    },
    {
        name: "JUPITER",
        gravity: 24.79
    },
    {
        name: "MARS",
        gravity: 3.72
    },
    {
        name: "SATURN",
        gravity: 10.44
    },
    {
        name: "VENUS",
        gravity: 8.87
    },
    {
        name: "NEPTUNE",
        gravity: 11.15
    },
    {
        name: "MERCURY",
        gravity: 3.7
    },
    {
        name: "MOON",
        gravity: 1.62
    }
]


// console.log(value);
let result = 0

button.addEventListener("click", () => {

    let numbers = parseInt(input.value)
    let selectedItem = option.options[option.selectedIndex].text
    let selectedIndex = option.options[option.selectedIndex].index
    let find = false
    let numberErr = document.createElement("div")

    if(input.value.length == "" || input.value == String){
        
        numberErr.innerHTML = "Geçerli bir sayı giriniz"
        message.append(numberErr)
    }else if (selectedIndex == 0){

        numberErr.innerHTML = ""
        numberErr.innerHTML += "Gezegen seçiniz"
        message.append(numberErr)
    }else {
        
        for(let i = 0; i < gezegen.length; i++){
        
            // console.log(gezegen[i].name);
            if(selectedItem === gezegen[i].name){
    
                // console.log("selected:", selectedItem);
                result = gezegen[i].gravity * numbers
                console.log(result.toFixed(2));
                find = true
                break
            }
        }
        if(find == false)
        alert("bu gezegene ait veri bulunmamaktadır.")
    }
})


// console.log(text);