const weeklyCosts = [19.5, 45, 12.99, 27, 65.5, 15, 38.5];

const totalSum = weeklyCosts.reduce((accumulator, currentCost) => accumulator + currentCost, 0);

const averageCost = totalSum / weeklyCosts.length;

const maxCost = Math.max(...weeklyCosts);

console.log("=== RAPORT BUDŻETOWY ===");
console.log(`Całkowita suma wydatków: ${totalSum.toFixed(2)} PLN`);
console.log(`Średni koszt pojedynczego zakupu: ${averageCost.toFixed(2)} PLN`);
console.log(`Najwyższy odnotowany wydatek: ${maxCost.toFixed(2)} PLN`);

function analyzeBudget(costs, total, limit) {
  console.log("\n--- Analiza dodatkowa ---");
  
  if (total > limit) {
    console.log(`🚨 Uwaga! Twój tygodniowy budżet przekroczył bezpieczny limit ${limit} PLN!`);
  } else {
    console.log("✅ Gratulacje! Wydatki mieszczą się w wyznaczonym limicie.");
  }

  const expensiveItems = costs.filter(cost => cost > 50);
  console.log(`Liczba dużych wydatków (powyżej 50 PLN): ${expensiveItems.length}`);
}

analyzeBudget(weeklyCosts, totalSum, 200);
