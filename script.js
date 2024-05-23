//ESERCIZI JS

//Esercizio 1

function somma(num1,num2){
    if (num1 === 50 || num2 === 50 || num1 + num2 ===50){
        return true
    }else{
        return false
    }
}
console.log (somma(50,50))
console.log (somma(50,3))
console.log (somma(5,50))
console.log (somma(10,130))
console.log (somma(25,25))

//Esercizio 2

function remove (string,x){
   let newParola = string.split("")
   newParola.splice(x,1)
   return newParola.join("")   
}
console.log(remove('patrizia',0))

//Esercizio 3

function controllaNumeri(num1,num2){
    if((num1  >= 40 && num1 <=60 && num2 >= 40 && num2 <=60) || (num1 >= 70 && num1 <=100 && num2 >= 70 && num2 <=100)){
        return true
    } else return false
}
console.log(controllaNumeri(1,2)) 
console.log(controllaNumeri(29,52)) 
console.log(controllaNumeri(40,60)) 
console.log(controllaNumeri(71,98)) 
console.log(controllaNumeri(100,119))

//Esercizio 4

function startsW (city){
    if (city.startsWith("Los") || city.startsWith("New")){
        return city
    }else return false
}
console.log(startsW("Los Angeles"))
console.log(startsW("New Orleans"))
console.log(startsW("London"))
console.log(startsW("Palermo"))

//Esercizio 5

function somma(array){
    let sum = 0
    for (let i= 0; i < array.length; i++){
        sum += array[i] 
    }
    return sum
}
console.log(somma([1,2,3,4,5]))

//Esercizio 6

function includi(array){
return !array.includes(1) && !array.includes(3)
}
console.log(includi([1,4,5,6]))
console.log(includi([2,4,5,6]))

//Esercizio 7

function angoli (gradi){
    let angolo= 0
    if (gradi < 90){
        return "acuto"
    }if (gradi === 90){
        return "retto"
    }if (gradi > 90 && gradi < 180){
        return "ottuso"
    }if (gradi === 180){
        return "piatto"
    }else{
        return "angolo non valido"
    }
}
console.log(angoli(100))

//Esercizio 8

function acronimi(Fiat){
    let FIAT = Fiat.toUpperCase()
    let array= FIAT.split(" ")
    let acronimo = ""
    for (index of array){
        acronimo += index.charAt(0)
    }return acronimo
}
console.log(acronimi("Fabbrica Italiana Automobili Torino"))

//esercizio extra1

function extra1(string){
    let letteraPiuUsata = "" //variabile della lettera piu usata
    let count = 0 //variabile che serve per contare quante volte viene ripetuta una lettera
    let arrayLettere = string.split("") //creo array dalla stringa con lo split come parametro dello split il divisore
    for (let i = 0; i < arrayLettere.length; i++){
        let calcoloSingolaLettera = string.split(string.charAt(i)).length-1 //splitto la stringa per il carattere che sto ciclando, calcoliamo quante volte è presetne la lettera all'interno e tolgo 1
        if (calcoloSingolaLettera>count){
            count=calcoloSingolaLettera
            letteraPiuUsata = string.charAt(i)
        }
    }
    return letteraPiuUsata
}
console.log(extra1("epicodecpippo"))

//esercizio extra2

function anagrammi(str1,str2){
    let var1 = str1.toLowerCase().split("").sort().join()
    let var2 = str2.toLowerCase().split("").sort().join()
    if (var1 === var2){
        return true
    }else{
        return false
    }
}
console.log(anagrammi("noTizia","tiziano"))

//esercizio extra3

function anagramma(par1,par2){
    let array = []
    for(let i=0; i < par1.length; i++){
        if(anagrammi(par1[i], par2)){
                array.push(par1[i])
        }     
        } return array
    }
console.log(anagramma(["ciao", "Notizia"], "tiziano"))

//esercizio extra4

function palindromo(string){
    let reverse=string.split("").reverse().join("")
    if(reverse===string){
        return true
    }else{
        return false;
    }
}
console.log(palindromo("radar"))