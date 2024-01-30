// Sinu nimi: [Sinu nimi]
// Kuupäev: [Kuupäev]
// Ülesanne number: 1

// Ülesanne 1: Kellaaeg
var tunnid = 2;
var minutid = 38;
var sekundid = 59;
var kellaaeg = tunnid + ":" + minutid + ":" + sekundid + "PM";
console.log(kellaaeg); // Oodatav tulemus: "2:38:59PM"

// Ülesanne 2: Tsitaat lause sees
var tsitaat = 'Elu on ilus," ütles John."';
console.log(tsitaat); // Oodatav tulemus: 'Elu on ilus," ütles John."'

// Ülesanne 3: Mallide kasutamine
var eesnimi = "Jüri";
var perenimi = "Jurakas";
var nimetahed = `${eesnimi[0]}.${perenimi[0]}.`;
console.log(`${eesnimi} ${perenimi} nimetähed on ${nimetahed}`); // Oodatav tulemus: "Jüri Jurakas nimetähed on J.J."

// Ülesanne 4: Perenime pikkus
var nimi = "Jurakas, Jüri";
var komaIndex = nimi.indexOf(",");
var perenimi = nimi.substring(0, komaIndex);
perenimi = perenimi.toUpperCase();
console.log(perenimi); // Väljastab perenime suurtähtedega
console.log(perenimi.length); // Väljastab perenime pikkuse

// Ülesanne 5: E-posti aadressi muutmine
var epost = "karrolk@netlog.com";
epost = epost.replace("netlog.com", "gmail.com");
console.log(epost); // Oodatav tulemus: "karrolk@gmail.com"

// Ülesanne 6: Andmerida analüüs
var andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
var andmed = andmerida.split(",");
var ipAadress = andmed[5];
var kasutajanimi = andmed[3].split("@")[0];
console.log(ipAadress); // Oodatav tulemus: "40.19.226.175"
console.log(kasutajanimi); // Oodatav tulemus: "mmartinovic0"
