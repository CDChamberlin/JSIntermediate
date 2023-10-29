// Question 1

function ucFirstLetters(string) {
  let m = string.split(" ");
  let uc = "";
  for (let i = 0; i < m.length; i++) {
    uc += m[i][0].toUpperCase() + m[i].substring(1) + " ";
  }
  return uc;
}
//console.log(ucFirstLetters("los angles"));
//console.log(ucFirstLetters("the Quick brown fox jumped over the lazy dog"));

//Question 2
function truncate(str, max) {
  if (str.length > max) return str.substring(0, max) + "...";
  else return str;
}
//console.log(truncate("This text will be truncated if it is too long", 25));

// Question 3
const animals = ["Tiger", "Giraffe"];
animals.push("Panther");
animals.push("Snow Lepard");
animals.unshift("Lion");
animals.unshift("Grey Wolf");
function replaceMiddleAnimal(newValue) {
  animals.splice((animals.length + 1) / 2, 0, newValue);
}
replaceMiddleAnimal("Red Wolf");
replaceMiddleAnimal("Serval");
function findMatchingAnimals(beginsWith) {
  let match = [];
  for (let animal of animals) {
    // console.log(animal)
    // console.log(animal.substring(0, beginsWith.length))
    if (
      animal.substring(0, beginsWith.length).toLowerCase() ===
      beginsWith.toLowerCase()
    ) {
      match.push(animal);
    }
    // console.log(animal);
  }
  return match;
}

//console.log(findMatchingAnimals("S"));


// Question 4
function camelCase1(cssProp) {
  let m = cssProp.split("-");
  let uc = m[0];
  for (let i = 1; i < m.length; i++) {
    uc += m[i][0].toUpperCase() + m[i].substring(1);
  }
  return uc;
}
function camelCase2(cssProp) {
  let m = cssProp.split("-");
  let uc = "";
  for (let i of m) {
    if (uc === "") uc += i;
    else uc = uc + i[0].toUpperCase() + i.substring(1);
    //console.log(i.toUpperCase())
  }
  return uc;
}
function camelCase3(cssProp) {
  let m = cssProp.split("-");
  uc = "";
  for (let i of m) {
    uc === "" ? (uc += i) : (uc = uc + i[0].toUpperCase() + i.substring(1));
  }
  return uc;
}
//console.log(camelCase2("margin-left")); // marginLeft
//console.log(camelCase3("background-image")); // backgroundImage
//console.log(camelCase1("display")); // display

// Question 5
let twentyCents = Math.random()
let tenCents = Math.random()
//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
//console.log(fixedTwenty + fixedTen) //why is this not working?
/*
a. the method toFixed returns a string representation of the number, and string adition concatinates the strings. 
*/
// b: Creating a Function
function currencyAddition(float1, float2){
  return Number((float1 + float2).toFixed(2))
}
function currencyOpperation(float1, float2, operation, numDecimals){

  switch(operation){
    case '+': return (float1 + float2).toFixed(numDecimals)
    break;
    case '-': return (float1 - float2).toFixed(numDecimals)
    break;
    case '*':return (float1 * float2).toFixed(numDecimals)
    break;
    case '/': return (float1 / float2).toFixed(numDecimals)
    break;
    default:
      throw new Error(console.log("Not one of the four basic math functions, '+', '-', '*', or '/'.")) 
  }
}

//console.log(currencyOpperation(twentyCents, tenCents, "+"))

// Question 6
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
//console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
//console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

function unique(givenArray){
  //givenArray = givenArray.sort();
  a = [];
  for (i of givenArray){
    if (!(a.includes(i))){
      a.push(i)
    }
  }
  return a;
}

//Question 7
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  {id: 6, title: "Random Title", author: 'Frank', year: 2023}
  ];

  function getBookTitle(bookId){
    console.log(bookId)
    return books.find(({id}) => id == bookId).title
  }
  //console.log(getBookTitle(4))

  function getOldBooks(){
    return books.filter(({year}) => year < 1950)
  }

  //console.log(getOldBooks())
// Nonworking part c
   function addGenre(){
    return books.map( book => ({...book, genre: 'Classic'}))
  }
// const genre = addGenre()
//console.log(addGenre())


function getTitles(authorInitials){
  return books.filter(({author}) => 
  author.substring(0, authorInitials.length).toLowerCase() === authorInitials.toLowerCase()
  ).map(book => book.title)
}
// console.log(getTitles('F'))

//Question 8
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map()
phoneBookDEF.set('Daniel', '6365553226')
phoneBookDEF.set('Edward', '5552386')
phoneBookDEF.set('Frankie', '5550123')

phoneBookABC.set('Caroline', '0455221128')

function printPhoneBook(contacts){
  contacts.forEach((value, key) => console.log(`${key}: ${value}`))
}
// printPhoneBook(phoneBookABC)
phoneBook = new Map([...phoneBookABC, ...phoneBookDEF])
// printPhoneBook(phoneBook)

// Question 9
let salaries = {
  "Timothy" : 35000,
  "David" : 25000,
  "Mary" : 55000,
  "Christina" : 75000,
  "James" : 43000
  };

  function sumSalaries(salaries){
    let sum = 0
    let amounts = Object.values(salaries)
    amounts.forEach((m) => {sum += m});
    return sum;

  }
  console.log(sumSalaries(salaries))

  