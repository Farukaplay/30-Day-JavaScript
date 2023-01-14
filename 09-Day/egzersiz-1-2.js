import countries from "./countries.js"

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//1:
// let total = products.filter(item => item.price > 0).map(price => price.price).reduce((acc, currentValue) => acc + currentValue)

// console.log(total)

//2:
// let priceValue = 0;
// let sum = products.reduce((acc, currentValue) => {
    
//     if(currentValue.price > 0){
//         priceValue = currentValue.price
//         acc += priceValue
//     }
//     return acc
// },0)

// console.log(sum)


// let sum = products.reduce((acc, currentValue) => {
//     currentValue.price = Number(currentValue.price)
//     return acc + currentValue.price
// }, 0)

// console.log(sum)

//3: doğru yol mu bilmiyorum

// function categorizeCoutries(){
//     let categorizeCoutries = countries.filter(country => {

//         return country.includes("land") + country.includes("island") + country.includes("ia") + country.includes("stan")
//     })
//     return categorizeCoutries
// }                    

// console.log(categorizeCoutries())

//4: ??

//5:
 
// function getFirstTenCountries(){
//     let firstTen = countries.slice(0,10)
//     return firstTen
// }

// console.log(getFirstTenCountries())

// 6: 
// function getLastTenCountries(){
//     let lastTen = countries.slice( Math.max(countries.length - 10 , 0))
//     return lastTen
// }

// console.log(getLastTenCountries())

