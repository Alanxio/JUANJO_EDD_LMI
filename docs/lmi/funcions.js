
// Funcions
// Funció que retorna un valor
function doble(num) {
    return num * 2;
}
console.log(doble(5));
console.log(doble(10));

// Funció amb paràmetres per defecte
function salutacio(nom = "amic") {
    console.log(`Hola, ${nom}!`);
}
salutacio();
salutacio("Alan");
