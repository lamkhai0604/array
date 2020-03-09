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
  
  
  //1.Print out an array of the inventors whose name starts with 'A'.
  function firstCharA(name) {
    // return name.charAt(0)== "A"
    return name[0] == "A"
  }
  
  let filterArray = inventors.filter(firstCharA);
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


  //Print out an array of the numbers that have two digits.
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


//Print out the first name of each inventor.
function firstName(name){
  for (i = 0; i<name.length; i++) {
    if(name[i]==" "){
      return name.slice(0, i)
    }
  }
}
 let getFirstName = inventors.map (firstName)
 console.log(getFirstName)


 //Print out the length of every inventor's full name.
 function lengthName (name){
  return name.length;
}

let filterLengthArray = inventors.map(lengthName);
console.log(filterLengthArray);


//Print out all the inventors' names in uppercase.
function upperCase (name) {
  return name.toUpperCase();
}
let upperCaseName = inventors.map(upperCase);
console.log(upperCaseName)

//Print out initials of all inventors(e.g. A.E., I.N., ...)