let myBody = document.getElementsByTagName('body')[0];
//Ex2 error
let premElem= myBody.firstElementChild;
console.log(premElem);

//Ex3
let derElem = myBody.lastElementChild;
console.log(derElem);

//Ex4
let exo4 =document.getElementsByTagName('div')[0].children
console.log(exo4);

//Ex5
let premli = document.getElementsByTagName('li')[0];
let li2 =premli.nextElementSibling
console.log(li2);

//Ex6
console.log(li2.previousElementSibling);