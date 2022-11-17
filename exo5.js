const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
    ];

    let arr = []

    console.log("liste des entrepreneurs qui sont nés dans les années 70")
    entrepreneurs.forEach(human => { 
        arr.push(human.first +" "+ human.last)

        if (human.year > 1970){

            console.log(human.first +" "+ human.last) 
        }
        
      });

console.log("--------------------------------------------------------------------")
      console.log("Le prénom et le nom des entrepreneurs")
      arr.forEach(human => { 
       console.log(human)   
      });

      
console.log("--------------------------------------------------------------------")

entrepreneurs.forEach(human => { 

        let age = 2022 - human.year 

        console.log(human.first +" "+ human.last + " aurai " + age + " ans aujourd'hui") 
  
  });

  console.log("--------------------------------------------------------------------")
  
  console.log("Tris par ordre alphabetique")

  entrepreneurs.sort(function (a, b) {
    if (a.last < b.last) {
      return -1;
    }
    if (a.last > b.last) {
      return 1;
    }
    return 0;
  });

  entrepreneurs.forEach(human => { 

    console.log(human) 
  
  });
 