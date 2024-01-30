const products = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

for (let i = 0; i < products.length; i++) {
  if (products[i] === "Muna" || products[i] === "Sibul" || products[i] === "Riis") {
    continue;
  }
  console.log(`${i + 1}. ${products[i]}`);
}
const months = "Jaanuar, Veebruar, Märts, Aprill, Mai, Juuni, Juuli, August, September, Oktoober, November, Detsember";
const temperatures = [
    [5, 8, 12, 10, 7, 9, 11, 14, 16, 13, 10, 6, 4, 3, 2, 4, 6, 8, 10, 12, 15, 17, 18, 16, 13, 10],
    
  ];
  
  const monthsArray = months.split(", ");
  
  let maxTemp = -Infinity;
  let minTemperature = Infinity;
  let kuumkuu = "";
  let coldestMonth = "";
  
  for (let i = 0; i < temperatures.length; i++) {
    const averageTemperature = temperatures[i].reduce((acc, cur) => acc + cur, 0) / temperatures[i].length;
  
    if (averageTemperature > maxTemp) {
      maxTemp = averageTemperature;
      kuumkuu = monthsArray[i];
    }
  
    if (averageTemperature < minTemperature) {
      minTemperature = averageTemperature;
      coldestMonth = monthsArray[i];
    }
  }
  
  console.log(`Kõrgeim temperatuur oli kuus "${kuumkuu}" ja see oli ${maxTemp.toFixed(2)} kraadi.`);
  console.log(`Madalaim temperatuur oli kuus "${coldestMonth}" ja see oli ${minTemperature.toFixed(2)} kraadi.`);
  