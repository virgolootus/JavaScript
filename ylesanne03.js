// Küsi kasutajalt sõidu kaugus kilomeetrites ja kiirus kilomeetrites tunnis
let soiduKaugus = 90;
let kiirus = 90;

// Arvuta sõidu aeg
let soiduAeg = soiduKaugus / kiirus;

// Kuva sõidu aeg
console.log("Sõidu aeg on " + soiduAeg + " tundi");
// Andmete algväärtustamine
// Andmete algväärtustamine
let postitusteArv = 137;
let postitusiLeheküljel = 10;

// Arvuta lehekülgede arv ja viimase lehe postituste arv
let lehekülgedeArv = Math.ceil(postitusteArv / postitusiLeheküljel);
let viimaseLehePostitusteArv = postitusteArv % postitusiLeheküljel;

// Kuva tulemused
console.log("Lehekülgede arv: " + lehekülgedeArv);
console.log("Viimase lehe postituste arv: " + viimaseLehePostitusteArv);
// Andmete algväärtustamine
let võimsusWattides = 400;
let elektriHindSenti = 9.69;

// Arvuta voolutarbimine kilovatt-tundides (kWh)
let voolutarbimineKWh = võimsusWattides / 1000;

// Arvuta töökulu eurodes
let töökuluEurodes = voolutarbimineKWh * (elektriHindSenti / 100);

// Kuva serveri töökulu
console.log("Serveri töökulu ühe tunni jooksul on " + töökuluEurodes + " eurot");
