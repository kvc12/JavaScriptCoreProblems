// week switch case

let day = 3
let dayname

switch(day){
    case 1:
        dayname = "Monday"
        break

    case 2:
        dayname = "tuesday"
        break

    case 3:
        dayname = "wednesday"
        break
    default:
        dayname = "Invalid  day"
        break
}

console.log(dayname)


//do while loop

count = 1
do{
    console.log("count =", count)
    count++
}while(count <=5)

// while loop

num = 1
while (num <=5){
    console.log("current numnber is :",num)
    num ++
}

// for in loop

let person ={
    "name":"alice",
    "age":30,
    "gender":"male"
}
for(let key in person){
    console.log(key, "is : ", person[key])
}

// for of loop

fruits = ["apple ","chikoo", "banana"]

for(let fruit of fruits){
    console.log(fruit)
}