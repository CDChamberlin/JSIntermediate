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

console.log(findMatchingAnimals("S"));

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
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?
/*
a. the method toFixed returns a string representation of the number, and string adition concatinates the strings. 
*/
// b: Creating a Function
function currencyAddition(float1, float2){
  return (float1 + float2).toFixed(2)
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

