function nimi() {
    console.log("virgo");
}

nimi();

const nooleNimi = () => {
    console.log("virgo lootus");
};

nooleNimi();

function kuupeesti(kuupaev) {
    const kuuNimed = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
    const [paev, kuu, aasta] = kuupaev.split(".");
    console.log(`Kuupäev eesti keeles: ${paev}. ${kuuNimed[parseInt(kuu) - 1]} ${aasta}`);
}

kuupeesti("19.07.23");

function kuupjakesk(...arvud) {
    const kogusum = arvud.reduce((sum, arv) => sum + arv, 0);
    const keskmine = kogusum / arvud.length;
    console.log(`Koguarv: ${kogusum}, Keskmine: ${keskmine.toFixed(2)}`);
}

kuupjakesk(5, 10, 15, 20);

const salajanesonum = (sisendSõnum) => {
    const salajaneVersioon = sisendSõnum.replace(/[aeiouAEIOU]/g, '*');
    return salajaneVersioon;
};

console.log(salajanesonum("Tere, ma olen salajane sõnum!"));

const uniknimed = (nimedeMassiiv) => {
    const unikaalsedNimed = [...new Set(nimedeMassiiv)];
    return unikaalsedNimed;
};

const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
const aintuniknimed = uniknimed(nimed);
console.log("Unikaalsed nimed:", aintuniknimed);
