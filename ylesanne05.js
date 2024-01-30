let temperatuur = prompt("Sisestage praegune temperatuur"); 

if (temperatuur > 25) {
    console.log("Väga kuum ilm!");
} else if (temperatuur >= 15 && temperatuur <= 25) {
    console.log("Mõnus temperatuur.");
} else {
    console.log("Jahe ilm.");
}

let kasutajanimi = prompt("Sisesta kasutajanimi:");
if (kasutajanimi.toLowerCase() === "admin") {
    console.log("Tere, administraator!");
} else {
    console.log("Tere, külaline!");
}

let piletitüüp = prompt("Sisesta piletitüüp (taispilet või sooduspilet):");
let vanus = prompt("Sisesta vanus:");

if (piletitüüp.toLowerCase() === "taispilet") {
    if (vanus < 18) {
        console.log("Pileti hind: 10 eurot.");
    } else if (vanus >= 18 && vanus <= 64) {
        console.log("Pileti hind: 20 eurot.");
    } else if (vanus >= 65) {
        console.log("Pileti hind: 15 eurot.");
    } else {
        console.log("Palun sisestage kehtiv vanus.");
    }
} else if (piletitüüp.toLowerCase() === "sooduspilet") {
    if (vanus < 18 || vanus >= 65) {
        console.log("Pileti hind: 8 eurot.");
    } else if (vanus >= 18 && vanus <= 64) {
        console.log("Pileti hind: 15 eurot.");
    } else {
        console.log("Palun sisestage kehtiv vanus.");
    }
} else {
    console.log("Palun sisestage kehtiv piletitüüp.");
}
