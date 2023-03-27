//Definir las palabras
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".es", ".net", ".coon", ".er"];

for (let i = 0; i < pronoun.length; i++) {//Bucle para los pronombres  v
  for (let j = 0; j < adj.length; j++) {//Bucle para los adjetivos    
    for (let k = 0; k < noun.length; k++) {//Bucle para los sustantivos
      for (let l = 0; l < extension.length; l++) {//Bucle para las extensiones
        let domain = pronoun[i] + adj[j] + noun[k] + extension[l]; // Concatenar los elementos
        if (noun[k].endsWith(extension[l].substring(1))) {// Verificar si coincide la ultima parte del sustantivo con la extension
          domain = pronoun[i] + adj[j] + noun[k].substring(0, noun[k].length - extension[l].length + 1) + extension[l]; //Si coincide, reemplazar
        }
        console.log(domain); //Imprimir
      }
    }
  }
}
