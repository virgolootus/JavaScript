const myndid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
let summa = 0;
let mitumynti = 0;
let indeks = 0;
const sorteeritudMündid = [];

while (indeks < myndid.length) {
  const mündiVäärtus = myndid[indeks];
  if (mündiVäärtus >= 1) {
    sorteeritudMündid.push(mündiVäärtus);
    summa += mündiVäärtus;
    mitumynti++;
  }
  indeks++;
}

console.log(`Saite ${mitumynti} münti ja nende summa on ${summa} senti.`);
console.log("Sorteeritud mündid suuruse järjekorras:", sorteeritudMündid);
