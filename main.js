let lista_de_informacion = {};

let nombre = prompt("Digite su nombre");
lista_de_informacion.NOMBRE = nombre;
localStorage.setItem("NOMBRE", nombre);
let apellido = prompt("Digite su apellido");
lista_de_informacion.APELLIDO = apellido;
localStorage.setItem("APELLIDO", apellido);

console.log(lista_de_informacion);
