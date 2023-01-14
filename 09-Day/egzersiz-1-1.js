const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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

//3:
// countries.forEach(country => console.log(country))
//4:
// names.forEach(name => console.log(name))
//5:
// numbers.forEach(number => console.log(number))
//6:
// let newArr = countries.map(country => country.toUpperCase())

// console.log(newArr)
//7:
// let countryLength = countries.map(country => country.length)

// console.log(countryLength)

//8:
// let square = numbers.map(number => number * number)
// let square = numbers.map(number => Math.pow(number, 2))

// console.log(square)

//9:
// let upName = names.map(name => name.toUpperCase())

// console.log(upName)

//10:
// let productPrice = products.map(product => {
//     return [product.product, product.price]
// })

// console.log(productPrice)

//11:
// let land = countries.filter(country => {
//     country = country.toLowerCase()
//     return country.includes("land")
// })

// console.log(land)

//12:
// let sixLetter = countries.filter(country => country = country.length == 6)

// console.log(sixLetter)
//13:
// let sixLetter = countries.filter(country => country = country.length >= 6)

// console.log(sixLetter)
//14:
// let startE = countries.filter(country => {
//     country = country.startsWith("E")
//     return country
// })

// console.log(startE)

//15:
// let filterPrice = products.filter(item => item.price > 0)

// console.log(filterPrice)



//16:
// getStringLists(stringArray) anlamadım


//17:
// let result = numbers.reduce(function (acc, number){
//     acc += number
//     return acc
// })

// console.log(result)
//18:
// let concatenate = countries.reduce(function(acc, item, i){
//     acc = item 
//     return acc
// })
// //Yapılmadıı

// console.log(concatenate)

//20:
// let some = names.some(name => name.length > 7)

// console.log(some)
//21:
// let every = countries.every(country => {
//     country == "land"
//     return country
// })

// console.log(every)

//22:
// let first6 = countries.find(country => country.length == 6)

// console.log(first6)

//23:
// let first6Index = countries.findIndex(country => country.length == 6)

// console.log(first6Index)

//24:
// let norway = countries.findIndex(country => country == "Norway")
// console.log(norway)

//25:
// let russia = countries.findIndex(country => country == "Russia")
// console.log(russia)

