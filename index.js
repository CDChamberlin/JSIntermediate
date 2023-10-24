// Question 1

function ucFirstLetters(string) {
  let m = string.split(" ");
  let uc = "";
  for (let i = 0; i < m.length; i++) {
    uc += m[i][0].toUpperCase() + m[i].substring(1) + " ";
  }
  return uc;
}
console.log(ucFirstLetters("los angles"));
console.log(ucFirstLetters("the Quick brown fox jumped over the lazy dog"));

//Question 2
function truncate(str, max) {
  if (str.length > max) return str.substring(0, max) + "...";
  else return str;
}
console.log(truncate("This text will be truncated if it is too long", 25));

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
    if (uc === "")
    uc += i
  else
  uc = uc + i[0].toUpperCase()+i.substring(1) 
  //console.log(i.toUpperCase())
  }
  return uc;
}
function camelCase3(cssProp){
  let m = cssProp.split("-")
  uc = ""
  for (let i of m){
    uc === "" ? uc += i : uc = uc + i[0].toUpperCase()+i.substring(1)
  }
  return uc
}
console.log(camelCase2("margin-left")); // marginLeft
console.log(camelCase3("background-image")); // backgroundImage
console.log(camelCase1("display")); // display
