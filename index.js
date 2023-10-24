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
