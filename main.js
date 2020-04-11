const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  
  //FILTER
  //1.Print out an array of the inventors whose name starts with 'A'.
  function firstCharA(name) {
    // return name.charAt(0)== "A"
    return name[0] == "A"
  }
  
  let filterArray = inventors.filter(firstCharA);  //method filter
  console.log(filterArray)
  
  
  //2.Print out an array of the inventors whose name contains 'n'.
  function charN(name) {
    for (i=0; i <= name.length; i++) {
      if (name[i]== "n") {
        return true
      }
    }
    return false
    // return name[0] == "N"
  }
  let filterArray = inventors.filter(charN);
  console.log(filterArray)


 //3.Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
  function test(fullName){
    for(let i = 0; i < fullName.length; i++){
      if(fullName[i] === fullName[i+1]) return true
    }
    return false  
  }
  const result = inventors.filter(test)
  console.log(result);

  //4.Print out an array of the numbers which are odd.
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

  function oddNumber (num) {
    return num % 2 == 1
  }
  let newArray = []
  for (let i = 0; i < numbers.length; i++) {
    if(oddNumber(numbers[i])== true) {
      newArray.push(numbers[i])
    }
  }
  console.log ("Odd number :", newArray)


  //5.Print out an array of the numbers that have two digits.
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

function twoDigit(number){
  if (number>=10 && number <=99){
    return true
  }
  else {
    return false
  }
}

let number = numbers.filter(twoDigit)
console.log("hello :",number)

//MAP
//1.Print out the first name of each inventor.
function firstName(name){
  for (i = 0; i<name.length; i++) {
    if(name[i]==" "){
      return name.slice(0, i)
    }
  }
}
 let getFirstName = inventors.map (firstName)
 console.log(getFirstName)


 //2.Print out the length of every inventor's full name.
 function lengthName (name){
  return name.length;
}

let filterLengthArray = inventors.map(lengthName);
console.log(filterLengthArray);


//3.Print out all the inventors' names in uppercase.
function upperCase (name) {
  return name.toUpperCase();
}
let upperCaseName = inventors.map(upperCase);
console.log(upperCaseName)

//4.Print out initials of all inventors(e.g. A.E., I.N., ...)
function firstInit(name) {
  return name.charAt(0) + name[name.indexOf(' ') + 1]
}
filterThirdArray = inventors.map(firstInit);
console.log(filterThirdArray);

// inventors.map((name)=>{
//   let nameSplit = name.split('');
//   let initials = ''
//   for(let i = o; i < nameSplit.length; i++){
//     initials += nameSplit[i].charAt(0);
//   }
//   return initials;
// })



//5.Print out an array of every number multiplied by 100.
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

function multiplied(num) {
       return num * 100
     }
let getMultiplied = numbers.map (multiplied)
console.log(getMultiplied)

//6.Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
let newArray = [];

for(let i =1; i<5 ;i ++){
  newArray.push(Math.pow(2,i))
}
console.log(newArray)


//SORT
//1.Sort all the inventors in alphabetical order, A-Z.
inventors.sort()
console.log(inventors)

//2.Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.


//4.Sort all the inventors by length of name, longest name first. Do not use the reverse method.
inventors.sort((a,b)=>{
  // let lengthA = a.length;
  // let lengthB = b.length;
  // console.log("a name",a,"length of a :",lengthA)
  // console.log("b name",b,"length of b :",lengthB)
  return a.length < b.length? :1-1
})

//5
let fizzBuzz = ( num) => {
  for ( let i = 1; i <= num ; i ++){
    if (i % 15 === 0 ) console.log ("fizzBuzz")
    else if (i % 3 === 0) console.log("fizz")
    else if ( i % 5 === 0 )console.log("buzz")
    else console.log(i)
  }
}
fizzBuzz(15)


 let str="hello"
 let reverse = (str) => {
   let array = str.split('');
   let reverseArr = array.reverse();
   let result = reverseArr.join('')
   console.log(result)
 }
 reverse(str)
 
 
const array = [1,2,3]
let mirror = (arr) => {
  console.log(arr)
  let newArray = [...arr]
  newArray.reverse()
  let result = arr.concat(newArray)
  console.log(result)
}

mirror(array)

function isPrime (num) {
  if(num >= 2){
  for ( let i = 2; i < num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
  }
}
// isPrime(9)
function primeNum(number) {
for ( let i =2; i < number; i++){
  if(isPrime(i)){
    console.log(i)
  }
}
}
primeNum(20)

let string = "I am the good boy"

function reversSentence (sentence){
  let array = sentence.split(' ')
  console.log(array)
  let arrayRevers = []
  for(let i=0; i<array.length; i++){
    let singleArray = array[i].split('').reverse().join('')
    console.log(singleArray)
    arrayRevers.push(singleArray)
  }
  
  console.log(arrayRevers.join(' '))
}
// [a,m] => [m,a] => 'ma'
reversSentence(string)

let sentence = 'I am am the best best please please hire me as a developer developer please'

function removeDuplicate (sentence){
  let array = sentence.split(' ')
  let newArray = []
  for(let i=0; i<array.length; i++){
    if(!newArray.includes(array[i])){
      newArray.push(array[i])
    }
  }
  return newArray.join(' ')
}
removeDuplicate(sentence)