const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

let age = 250;

let isMarried = true

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

let skillJson = JSON.stringify(skills, undefined, 4)
// console.log(skillJson);

let ageJson = JSON.stringify(age)
// console.log(ageJson);

let marriedJson = JSON.stringify(isMarried)
// console.log(marriedJson);

let studentJson = JSON.stringify(student, undefined, 4)
// console.log(studentJson);

let studentJson2 = JSON.stringify(student, ["firstName", "lastName", "skills"], 4)
// console.log(studentJson2);

let txtParse = JSON.parse(txt)
console.log(txtParse);

let value = Object.values(txtParse)
console.log(value);

let count = 0
let skill = ""

for(let key = 0; key < value.length; key++){
    console.log(value[key].skills);
    
    if(value[key].skills.length > count){
        count = value[key].skills.length
        skill = value[key]
    }
    
}
console.log(count, skill)