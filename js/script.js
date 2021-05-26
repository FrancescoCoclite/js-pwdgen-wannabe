var nome = prompt('Inserisci Nome');
console.log(nome);

var cognome = prompt('Inserisci Cognome');
console.log(cognome);


var colore = prompt('Inserisci colore preferito');
console.log(colore);

var somma = nome + cognome + colore + '21';
document.getElementById('testo').innerHTML = somma.toLowerCase();
console.log(somma);