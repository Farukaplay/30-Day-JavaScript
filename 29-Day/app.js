let title = document.querySelector("#title")

title.innerHTML = "30 Days of javascript challenge 2020 Faruk Kaplay".toUpperCase()

let i = 1
let count = 2

setInterval(() => {
    
    while (i < count) {

        title.setAttribute("class", `font-family-${i}`)
        i++
    }
    count++

    let rgbSource = "ABCDEF0123456789"
    let color = "#"
    
    for (let j = 0; j < 6; j++) {

        color += rgbSource[Math.round(Math.random() * (rgbSource.length - 1))]
    }
    title.style.color = color

   
    if (count == 10) {
        count = 2
        i = 1
    }
}, 2000)