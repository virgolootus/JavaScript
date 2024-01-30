// Toote objekt
const toode = {
    nimetus: 'Piim',
    hind: 1.20,
    kogus: 5,
    koguHind: function() {
        return this.hind * this.kogus;
    },
    muudaKogust: function(uusKogus) {
        this.kogus = uusKogus;
    },
    kuvatudSisu: function() {
        return `${this.nimetus} - ${this.hind} EUR - Kogus: ${this.kogus}`;
    }
};

// Ostukorv objekt
const ostukorv = {
    tooted: [
        { nimi: 'Piim', hind: 3.60, kogus: 2 },
        { nimi: 'Leib', hind: 2.00, kogus: 1 },
        { nimi: 'Munad', hind: 1.50, kogus: 6 },
        { nimi: 'Juust', hind: 4.20, kogus: 1 },
        { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
    ],
    kuvaSisu: function() {
        this.tooted.forEach(function(toode) {
            console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
        });
    },
    lisaToode: function(nimi, hind, kogus) {
        this.tooted.push({ nimi, hind, kogus });
    },
    koguSumma: function() {
        let summa = 0;
        this.tooted.forEach(function(toode) {
            summa += toode.hind * toode.kogus;
        });
        return summa.toFixed(2);
    }
};

// Näidete kasutamine
console.log("Toote omadused:");
console.log(toode.kuvatudSisu());
console.log("Toote koguhind: " + toode.koguHind());

console.log("\nOstukorvi sisu enne uue toote lisamist:");
ostukorv.kuvaSisu();
ostukorv.lisaToode('Kohv', 5.80, 2);

console.log("\nOstukorvi sisu pärast uue toote lisamist:");
ostukorv.kuvaSisu();
console.log("Ostukorvi kogu summa: " + ostukorv.koguSumma() + " EUR");
