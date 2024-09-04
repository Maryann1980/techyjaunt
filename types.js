let name = "Mike"; //string
let age = 25; //number
let isValid = true; //boolean
let isCar = false; //boolean
let emptyValue = null; //null
console.log(age)
let notDefined = undefined; //undefined
let notDefinedV2; //undefined

let person = {
  firstname : "Mike",
  lastname :"samson" //this is an object
}


let person2 = {
    "firstname" : "Mike",
    "lastname" :"samson" //this is a JSON
  }

  let today = new Date() //date
  let aDate = new Date("2024-01-14") //date
  let fruits = ["Paw", "Mango", "Orange"]

// console.log(name, "DType:", typeof name);
// console.log(age, "DType:", typeof age);
// console.log(isValid, "DType:", typeof isValid);
// console.log(isCar, "DType:", typeof isCar);
// console.log(emptyValue, "DType:", typeof emptyValue);
// console.log(notDefined, "DType:", typeof notDefined);
// console.log(notDefinedV2, "DType:", typeof notDefinedV2);
console.log(person, "DType", typeof person);
console.log(person2, "DType", typeof person2);
console.log(today, "Dtype", typeof today);
console.log(aDate, "Dtype", typeof aDate);
console.log(fruits, "Dtype:", typeof fruits);