let number = parseInt(prompt("Sisesta number:"));

switch (true) {
    case number > 0:
        console.log("Number on positiivne.");
        break;
    case number < 0:
        console.log("Number on negatiivne.");
        break;
    default:
        console.log("Number on null.");
        break;
}

let broneeringuArv = parseInt(prompt("Sisesta broneeringu arv:"));

switch (true) {
    case broneeringuArv >= 1 && broneeringuArv <= 2:
        console.log("Valige laud kahele inimesele.");
        break;
    case broneeringuArv >= 3 && broneeringuArv <= 4:
        console.log("Valige laud neljale inimesele.");
        break;
    case broneeringuArv >= 5 && broneeringuArv <= 6:
        console.log("Valige laud kuuele inimesele.");
        break;
    case broneeringuArv > 6:
        console.log("Valige suur laud.");
        break;
    default:
        console.log("Sisestage kehtiv broneeringu arv.");
        break;
}
