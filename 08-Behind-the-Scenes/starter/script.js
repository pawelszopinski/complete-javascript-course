'use strict';

// function calcAge(birthyear) {
//     const age = 2037 - birthyear
//     function printAge() {
//         const output = `${firstName} you are ${age} born in ${birthyear}`
//         console.log(output);

//         if(birthyear >= 1981 && birthyear <= 1996) {
//             var millenial = true
//             const str = `Oh, you're millenial, ${firstName}`
//             console.log(str);
//         }
//         console.log(millenial);
//     }
//     printAge()

//     return age;
// }
// const firstName = "Pawel"
// calcAge(1987)
// printAge()

// console.log(name1)
// console.log(name2);
// console.log(surname);

// var name1 = "Pawelo"
// let name2 = 'Paweł'
// const surname = 'Michal'
// console.log(addDecl(2,3))
// console.log(addEXP(2,3))
// console.log(addArrow (2,3))
// function addDecl(a,b) {
//     return a+b;
// }

// var addArrow = (a,b) => a+b

// var addEXP = function(a,b) {
//     return a+b
// }

    
// if(!numProducts) deleteShopCart()
// var numProducts = 10
// function deleteShopCart(){
//     console.log("Cart deleted");
// }
// var x =1
// let y = 2
// const z = 3
// console.log(window);
// console.log(this);

// const calcAge = function (birthyear) {
//     console.log(2037 - birthyear);
//     console.log(this);
// }
// calcAge(1878);
const calcAgeArr = (birthyear) =>{
    console.log(2037 - birthyear);
    console.log(this);
}
// calcAgeArr(1870);

const pawel = {
    year:1987,
    calcAge: function() {
        console.log(this);
console.log(2027 - this.year);
    }
}
// pawel.calcAge()

const matilda = {
    year: 1999,
}
matilda.calcAge = pawel.calcAge

matilda.calcAge()