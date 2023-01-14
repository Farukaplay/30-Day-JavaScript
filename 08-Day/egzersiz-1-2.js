const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


//keyler
let user = Object.keys(users)
console.log(user)

//Obje içindeki valuelara ulaşmak
console.log(users.Alex.skills)

//obje icindeki valuelara oto ulaşmak
for (let key of user) {
  let deneme = users[key].skills
  console.log(key, deneme)
}

// value uzunlukları
for (let key of user) {
  let deneme = users[key].skills

  console.log(key, deneme.length)
}



for (let key of user) {
  let isLoggedIn = users[key].isLoggedIn
  let points = users[key].points

  if (isLoggedIn == true && points >= 50) {
    console.log(key + ":", "Online,", "Points:", points)
  }
}

console.log("<-------------------------------------->")

for (let key of user) {
  let value = users[key].skills

  if (value.includes("MongoDB")) {

    console.log(key + ": MERN Dev")

  } else {
    console.log(key + ": Not MERN")
  }
}

console.log("<-------------------------------------->")

let copyUser = Object.assign({},    users)
  copyUser.Faruk = {
  email: "faruk_kaplay@hotmail.com",
  skills: ["HTML", "CSS", "JavaScript"],
  age: 26,
  isLoggedIn: true,
  points: 250
}

console.log(copyUser.Faruk)


console.log("<-------------------------------------->")

let keys = Object.keys(users)
console.log(keys)

let value = Object.values(users)
console.log(value)

console.log("<-------------------------------------->")
const countries = {
  USA: {
    name: "United Satate of America",
    capital: "Washinton DC",
    populations: "331.9 Million",
    languages: "English"
  },
  UK: {
    name: "United Kingdom",
    capital: "London",
    populations: "66.040 Million",
    languages: "English"
  },
  Germany: {
    name: "Germany",
    capital: "Berlin",
    populations: "83.019 Million",
    languages: "German"
  },
  France: {
    name: "France",
    capital: "Paris",
    populations: "67,897 Million",
    languages: "French"
  },
  Spain: {
    name: "Spain",
    capital: "Marid",
    populations: "47,519 Million",
    languages: "Spanish"
  }
}

console.log(countries)