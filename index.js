// Question 1

function ucFirstLetters(string){
    let m = string.split(' ')
    let uc = ''
    for (let i = 0; i < m.length; i++){
        uc+= (m[i][0].toUpperCase() + m[i].substring(1)+" ")
    }
    return uc
}
console.log(ucFirstLetters("los angles"))
console.log(ucFirstLetters('the Quick brown fox jumped over the lazy dog'))

//Question 2 
function truncate(str, max){
    if (str.length > max) return str.substring(0, max) +'...'
    else return str
}
truncate2 = (str, max) => str.length > max ?  str.substring(0, max) + '...' : str
console.log(truncate('This text will be truncated if it is too long', 25))
console.log(truncate2('This text will be truncated if it is too long', 25))
