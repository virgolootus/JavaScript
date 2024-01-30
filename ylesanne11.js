let nimed = ["virgo lootus", "mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

nimed = nimed.map(nimi => {
    let osad = nimi.split(" ");
    return osad.map(osa => osa.charAt(0).toUpperCase() + osa.slice(1)).join(" ");
});

console.log(nimed); // peaks väljastama nimed suure algustähega

let emails = nimed.map(nimi => {
    let perenimi = nimi.split(" ")[1].toLowerCase();
    return `${perenimi}@metshein.com`;
});
console.log(emails);

function otsiNimi(nimi) {
    let nimiSuurTäht = nimi.charAt(0).toUpperCase() + nimi.slice(1);
    let leitudNimi = nimed.find(element => element.includes(nimiSuurTäht));
    if (leitudNimi) {
        return leitudNimi;
    } else {
        return "Nime ei leitud!";
    }
}

let inimesteAndmed = [
    { nimi: "Virgo Lootus", isikukood: "50412030265" },
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
];

inimesteAndmed.forEach(inimene => {
    let sajand = parseInt(inimene.isikukood.charAt(0)) <= 4 ? 1900 : 2000;
    let aasta = sajand + parseInt(inimene.isikukood.slice(1, 3));
    let kuu = parseInt(inimene.isikukood.slice(3, 5));
    let päev = parseInt(inimene.isikukood.slice(5, 7));

    let sünniaeg = new Date(aasta, kuu - 1, päev);
    inimene.sünniaeg = sünniaeg;

    let täna = new Date();
    let vanus = täna.getFullYear() - sünniaeg.getFullYear();
    if (täna.getMonth() < sünniaeg.getMonth() || (täna.getMonth() == sünniaeg.getMonth() && täna.getDate() < sünniaeg.getDate())) {
        vanus--;
    }
    inimene.vanus = vanus;
});

console.log(inimesteAndmed);

let opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

opilased.forEach(opilane => {
    let maxTulemus = Math.max(...opilane.tulemused);
    let keskmineTulemus = opilane.tulemused.reduce((acc, val) => acc + val) / opilane.tulemused.length;

    console.log(`Õpilase nimi: ${opilane.nimi}, Parim tulemus: ${maxTulemus}, Keskmine tulemus: ${keskmineTulemus.toFixed(2)}`);
});
emails.forEach(email => {
    console.log(email);
});
function otsiJaKuvaNimi(nimi) {
    let nimiSuurTäht = nimi.charAt(0).toUpperCase() + nimi.slice(1);
    let leitudNimi = nimed.find(element => element.includes(nimiSuurTäht));
    if (leitudNimi) {
        console.log(`Leitud nimi: ${leitudNimi}`);
    } else {
        console.log("Nime ei leitud!");
    }
}

// Kasutamise näide:
otsiJaKuvaNimi("Jaan Jõesaar"); // Kuvab "Leitud nimi: Jaan Jõesaar"
otsiJaKuvaNimi("Kadri Kask"); // Kuvab "Leitud nimi: Kadi Kask"
otsiJaKuvaNimi("Marta Männik"); // Kuvab "Nime ei leitud!"

inimesteAndmed.forEach(inimene => {
    let sünniaeg = new Date(inimene.sünnikuupäev);
    inimene.sünniaeg = sünniaeg;

    let täna = new Date();
    let vanus = täna.getFullYear() - sünniaeg.getFullYear();
    if (täna.getMonth() < sünniaeg.getMonth() || (täna.getMonth() == sünniaeg.getMonth() && täna.getDate() < sünniaeg.getDate())) {
        vanus--;
    }
    inimene.vanus = vanus;
});

console.log(inimesteAndmed);
