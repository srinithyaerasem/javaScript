// var a=10
// var b=20
// console.log(a==b)
// console.log(b===a)
// console.log(a!=b)
// console.log(a!==b)
// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)

// var age=+prompt("Enter your age")
// var data =(age>=18)?"Adult":"Child"
// console.log(data)

// var num1 = +prompt("Enter a number")
// var ans = (num1%2==0)?"Even":"Odd"
// console.log(ans)

// let marks = +prompt("Enter your marks")
// let result = (marks>=90)?"A":(marks>=75)?"B":(marks>=60)?"C":(marks>=45)?"D":"F"
// console.log("Your grade is: "+result)

// var temp = +prompt("Enter temperature in celsius")
// var weather = (temp>30)?"Hot":(temp>=20)?"Warm":(temp>=10)?"Cool":"Cold"
// console.log("The weather is: "+weather)

var age = +prompt("Enter your age")
var category = (age<13)?"Child":(age>=13 && age<20)?"Teenager":(age>=20 && age<60)?"Adult":"Senior"
console.log("You are classified as: "+category)
