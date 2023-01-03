let i = 0

while(i < 10){
    console.log(i)
    i++
}
i = 0


do{
    console.log(i + ": " +i)
    i++
}while(i < 10)

i = 10

while(i > 0){
    console.log(i)
    i--
}

i = 10

do{
    console.log(i + ": " +i)
    i--
}while(i > 0)

let a = "";
for(let i = 0; i < 10; i++){
    
    a += "#" 
    console.log(a)
}

let result = 0;

for(let i = 0; i < 11; i++ ){

    result = i * i
    console.log( i + " x " + i + " = " + result) 
}

for(let i = 0; i < 11; i++ ){
    
    
    console.log( i + "\t\t" + i * i + "\t\t" + i * i *i) 
}

result = 0
console.log("Çift Sayı")
for(let i = 0; i < 101; i++ ){

    let mod = i % 2

    if(mod == 0){
        result = i
        console.log( result )
    }
}

result = 0
console.log("Tek Sayı")
for(let i = 0; i < 101; i++ ){

    let mod = i % 2

    if(mod == 1){
        result = i
        console.log( result )
    }
}

result = 0
console.log("Toplam")
for(let i = 0; i < 101; i++ ){

    let mod = i % 2

    if(mod == 0){
        result += i
        console.log( result )
    }
}