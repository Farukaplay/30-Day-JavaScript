// let info = {
//     name: "Faruk",
//     surname: "Kaplay",
//     age: 26,
//     country: "Turkey",
//     city: "Hakkâri", 
// }

// let infoJson = JSON.stringify(info, undefined, 4) 
// // console.log(infoJson);

// // localStorage.setItem(infoJson)

// localStorage.setItem("info", infoJson)

// let toParse = localStorage.getItem("info")


// let personAccount ={
//     fistName: "Faruk",
//     lastName: "Kaplay",
//     incomes:[
       
//     ],
//     expense: [

//     ],
//     totalIncome: function(){
//         let total = 0
        
//         for(let income of this.incomes){
//             total += income.amount
//         } 
//         return total;
//     },
//     totalExpense: function(){
//         let total = 0
        
//         for(let expense of this.expense){
//             total += expense.amount
//         } 
//         return total;
//     },
//     accountInfo: function(){
//         return `Adı Soyadı: ${this.fistName} ${this.lastName}
// Gelir: ${this.totalIncome()}
// Gider: ${this.totalExpense()}`
//     },
//     addIncome: function(income){
//         this.incomes.push(income)
//     },
//     addExpence: function(expense){
//         this.expense.push(expense)
//     },
//     accountBalance: function(){
//         let result = this.totalIncome() - this.totalExpense()
//         return result
//     }
// }