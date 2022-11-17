
const books = [
{ title: 'Gatsby le magnifique', id: 133712, rented: 39 },
{ title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
{ title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
{ title: 'Les frères Karamazov', id: 450911, rented: 55 },
{ title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
{ title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
{ title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
{ title: 'Le meilleur des mondes', id: 88847, rented: 58 },
{ title: 'La disparition', id: 364445, rented: 33 },
{ title: 'La lune seule le sait', id: 63541, rented: 43 },
{ title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
{ title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

let rentedTest = true
books.forEach(book => { 

    if (book.rented <= 0) {
        rentedTest = false
    }

});

console.log(rentedTest)

console.log("--------------------------------------------------------------------")

console.log("Quel est livre le plus emprunté ?")

let nb = 0
let maxbook 

books.forEach(book => { 

    if (book.rented > nb) {
        nb = book.rented
        maxbook = book
    }

});

console.log(maxbook)

console.log("--------------------------------------------------------------------")

console.log("Quel est livre le moins emprunté ?")

let nb2 = nb

let minbook 

books.forEach(book => { 

    if (book.rented < nb2) {
        nb2 = book.rented
        minbook = book
    }

});

console.log(minbook)

console.log("--------------------------------------------------------------------")

console.log("Quel est livre le avec l'ID: 873495")

console.log(books.find(c => c.id === 873495));

console.log("--------------------------------------------------------------------")

console.log("Destroy livre le avec l'ID: 133712")

books.shift(c => c.id === 133712);

console.log(books)

console.log("--------------------------------------------------------------------")
  
console.log("Tris par ordre alphabetique")

books.sort(function (a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
});

books.forEach(book => { 

  console.log(book) 

});
