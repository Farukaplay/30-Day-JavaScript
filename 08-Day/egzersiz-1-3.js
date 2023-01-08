const users2 = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false
    }
  ];
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
        { userId: 'fg12cy', rate: 5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]

const randomIdSource = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let randomId = ""
for (let i = 0; i < 6; i++) {

    randomId += randomIdSource[Math.round(Math.random() * (randomIdSource.length - 1))]
    randomId = randomId.toLowerCase()
}
//console.log(randomId)

const time = new Date();
let year = time.getFullYear();
let month = time.getMonth() + 1;
let day = time.getDate();
let hours = time.getHours();
let minutes = time.getMinutes()

let createdUser = `${day}/${month}/${year} ${hours}:${minutes}`
let control = Object.values(users2)



function singUp(inputUserName, inputEmail, inputPassword) {

    let email = "" 
    
    for (let i = 0; i < control.length; i++) {
      email = control[i].email
  
      if (email == inputEmail) {
        
        console.log("Bu e-posta ile daha önce kayıt oluşturulmuştur")
        break
      
      } else {
        users2.push(
          {
            _id: randomId,
            userName: inputUserName,
            email: inputEmail,
            password: inputPassword,
            createdAt: createdUser,
            isLoggedIn: false
          })
          console.log("Kayıt oluştruldu")
        break
      }
    }
    console.log(users2)
  }
  
  singUp("Faruk", "faruk_kaplay@hotmail.com", "1234560");
  

  
function singIn(inputEmail, inputPassword) {

    let email = ""
    let password = ""
  
    for (let i = 0; i < control.length; i++) {
  
      email = control[i].email.includes(inputEmail)
      password = control[i].password.includes(inputPassword)
      if (email == true) break
    }
  
    if (email == true && password == true) {
      
      console.log("oturum acıldı")
    } else if(email == true && password == false) {
      
      console.log("şifre yanlış")
    }else {
  
      console.log("kullanıcı bulunamadı")
    }
  }
  
  singIn("thomas@thomas.com","123333")


  let productControl = Object.values(products)

// console.log(productControl)

function rateProduct (inputProductName, inputRating){
  
  let product = -1
  let index = 0
  // console.log(productControl)
  
  for(let i = 0; i < productControl.length; i++){
  
    product = productControl[i].name.indexOf(inputProductName)
    index = productControl[i]
    
    if (product == 0){ 
      // console.log(index)
      break
    }
  }

    index.ratings.push( {
      userId: "asdjk",
      rate: inputRating
    })
   
//   console.log(product, index)
}

rateProduct("Laptop", 3)


function rateAverage(rateProduct){
    let rateAve = ""
    let userId = ""
    let result = 0
    let averagerating = 0
  
  
    for(let i = 0; i < productControl.length; i++){
  
      rateAve = productControl[i].name
      // console.log(rateAve)
  
      if (rateAve == rateProduct ){
        userId = productControl[i].ratings
        // console.log(userId)
        for(let i = 0; i < userId.length; i++){
          result += userId[i].rate
          // console.log(result)
        }
        averagerating = result / userId.length
      }
    }
    console.log(rateProduct, averagerating.toFixed(1))
  }
  
  rateAverage("Laptop")