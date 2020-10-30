/*
Descrizione
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.
*/

//OGGETTO STUDENTE
var studente = {
  nome : 'Davide',
  cognome : 'Benazzi',
  età : 40,
}
//STAMPA PROPRIETA'
for (var key in studente) {
  console.log(key);
  console.log(studente[key]);
}
//ARRAY DI OGGETTI STUDENTE
var studenti = [
  {
    nome : 'Laura',
    cognome : 'Rossi',
    età : 25,
  },
  {
    nome : 'Luca',
    cognome : 'Verdi',
    età : 30,
  },
  {
    nome : 'Giovanni',
    cognome : 'Bianchi',
    età : 28,
  }
];
//LOOP DI STAMPA NOME COGNOME DI STUDENTI
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome , studenti[i].cognome);
}
