

let Fransic = new charachter("Fransic", 100, "Fransic är jätte episk och skit trevlig");
let slav = new charachter("3ÅrigSlav", 1, "Han är fett cool och har ett snobben gossedjur. Det finns bevis på att han skapar trump figurer på amazon.");
let nallehpuhSnobben = new charachter("Nallehpuh Snobben", 25, "Jätte Episkt");
let basicPieere = new charachter("Basic Pieere", 10, "En Vanlig Pieere");
let EvilSven = new charachter("Evil Sven", "?", "Han är som Sven fast ond");
let GangstaPieere = new charachter("Gangsta Pieere", 10, "Han slängde te en gång och var fett gangsta");
let treÅrigGuldSlav = new charachter("3ÅrigGuldSlav", 1, "Han är jätte guldig och diamanting fanns i en pyramid som vaktades av Evil Sven");
let MAC = new charachter("Mr Angry Camel", "ska fråga Thomas", "Mr Angry Camel är en intressant karaktär! Han föddes i en namnlös by och har en tragisk historia. En dag dog hela hans familj av förgiftade bullar, men han överlevde eftersom han är glutenintolerant. Detta ledde till att Mr Angry Camel svor att söka hämnd mot Bagare Bengtsson, som han anklagar för att ha bakat bullarna.");
let FranskPieere = new charachter("Fransk Pieere", 10, "Han var fransk och han manglade oppsen i frankriske");
let IndianaPieere = new charachter("Indiana Pieere", 10, "Han var en vanlig Pieere men sen skaffade han en Indiana Jones hatt");
let Snobben = new charachter("Snobben", 25, "Snobben hoppar runt och sådant");
let Sven = new charachter("Sven", "?", "Han är en sven som generelt är snäll en gång hjälpte han till och räddade 3årigslav från en slav fabrik");
let TänkPieere = new charachter("Tänk Pieere", 10, "Det är en Pieere men han tänker välldigt mycket mer än andra.");
let Bagare = new charachter("Bagare Bengtsson", "ska kolla", "Han har ett bageri och bakar saker");
let Sven2 = new charachter("En anna Sven", "?", "Han är en annan variant av Sven");
let Helicop = new charachter("Helicopter", 0.5, "Det är en helicotper med 3ÅrigSlav Sven och snobben i");
let TreÅrigSlavJul = new charachter("3ÅrigSlav Jul", 1, "Det är jul så han firar jul");
let Klas = new charachter("Klas (knas-klas)", 0.2, "Han är en krabba som nyper saker med sina klor");

let charobj = [
    Fransic,
    slav,
    nallehpuhSnobben,
    basicPieere,
    EvilSven,
    GangstaPieere,
    treÅrigGuldSlav,
    MAC,
    FranskPieere,
    IndianaPieere,
    Snobben,
    Sven,
    TänkPieere,
    Bagare,
    Sven2,
    Helicop,
    TreÅrigSlavJul,
    Klas
];

for (let ind = 0; ind < charobj.length; ind++) {
    console.log("Name: " + charobj[ind].name);
    console.log("Age: " + charobj[ind].age);
    console.log("Description: " + charobj[ind].description);
    console.log("---");
}
