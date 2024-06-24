let num1=parseInt(prompt("Digite el primer número"));
let num2=parseInt(prompt("Digite el segundo número"));
let num3=parseInt(prompt("Digite el tercer número"));

console.log("Primer numero digitado = " + num1, "Segundo numero digitado = " + num2, "Tercer número digitado = "+ num3);

// Número mayor

if(num1 >= num2 && num1 >= num3){
  console.log("Número mayor = " + num1);
}else if(num2 >= num1 && num2 >= num3){
  console.log("Número mayor = " + num2);
}else{
  console.log("Número mayor = " + num3);
}

// Número del medio

if ((num1 < num2 && num1 > num3) || (num1 > num2 && num1 < num3)) {
  console.log("Número del medio = " + num1);
}else if((num2 < num1 && num2 > num3) || (num2 > num1 && num2 < num3)){
  console.log("Número del medio = " + num2);
}else{
  console.log("Número del medio = " + num3);
}

// Numero Menor

if (num1 < num2 && num1 < num3){
  console.log("Número menor = " + num1);
}else if(num2 < num1 && num2 < num3){
  console.log("Número menor = " + num2);
}else{
  console.log("Número menor = " + num3);
}

//organizar menor a mayor y viceversa 

let numeros = [ num1, num2, num3];
function compararMenor(num1,num2,num3){
  return num1-num2;
}
console.log("Estos son los números de Menor a Mayor = " + numeros.sort(compararMenor));

function compararMayor(num1,num2,num3){
  return num2-num1;
}
console.log("Estos son los números de Mayor a Menor = " + numeros.sort(compararMayor));

//Numeros iguales

function numIgual(){
  
if (num1 === num2 && num2 === num3) {
  console.log("Los tres números son iguales 🤯");
}else if(num1 === num2){
  console.log("Número: " + num1 + " Esta repetido 😅"); 
}else if (num2 === num3){
  console.log("Número: " + num2 + " Esta repetido 😅");
}else if (num3 === num1){
  console.log("Número: " + num3 + " Esta repetido 😅");
}else{
    console.log("No hay números repetidos ✔");}
}
console.log(numIgual())