let API_URL = "https://restcountries.com/v2/all"

fetch(API_URL).then(res => {

    return res.json()

}).then(data => {

    return data

}).then( countryInfo => {
    let cntry = []
    for(let i = 0; i < countryInfo.length; i++){
        cntry.push({
            name: countryInfo[i].name,
            capital: countryInfo[i].capital,
            population: countryInfo[i].population,
            area: countryInfo[i].area
        })
    }
    return console.log(cntry);
}).catch(err => console.log("hata"))


let API_URL_CAT = "https://api.thecatapi.com/v1/breeds"

fetch(API_URL_CAT).then( res => res.json()).then(data => {
    let catName = []

    for(let name of data){
        catName.push(name.name)
    }
    console.log(catName);
    // console.log(data);
})