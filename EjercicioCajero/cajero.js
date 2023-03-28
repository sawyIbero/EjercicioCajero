// cajero  automatico //

// variables  //
let saldo = 1000000; // saldo inicial del usuario
let intentos = 3; // número máximo de intentos
let usuario = "juan"; // nombre de usuario
let clave = "1234"; // clave de acceso

// pedir al usuario que ingrese su nombre y su clave
let nombreIngresado = prompt("Ingrese su nombre de usuario:");
let claveIngresada = prompt("Ingrese su clave:");

// mientras el usuario no ingrese los datos correctos y tenga intentos restantes
// se reliza la  comparacion con los operadores !== que permite y devolver true o false con los  datos igresados en el  prompt 
// con el operador && devuelve true si ambas expresiones se comparan son verdaderas y si no nos devuelve false 
// se utiliza el operador -- para decrementar los  intentos 

while ((nombreIngresado !== usuario || claveIngresada !== clave) && intentos > 0) {
  intentos--;
  alert(`Usuario o clave incorrectos. Intentos restantes: ${intentos}`); // $ se realiza la  contatenacion 

 // pedir al usuario que vuelva a ingresar sus datos
  nombreIngresado = prompt("Ingrese su nombre de usuario:");
  claveIngresada = prompt("Ingrese su clave:");
}

// se utiliza el operador === para comparar los  valores 
// con el operador && devuelve true si ambas expresiones se comparan son verdaderas y si no nos devuelve false
if (nombreIngresado === usuario && claveIngresada === clave) {
  alert(`Bienvenido ${usuario}. Su saldo actual es de $${saldo}.`);
       } else {
  alert("Ha excedido el número máximo de intentos. Por favor, inténtelo más tarde.");
}
document.write