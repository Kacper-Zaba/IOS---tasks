const customTripCosts = [
  { label: "nocleg", amount: 480, paidBy: "Anna" },
  { label: "paliwo", amount: 320, paidBy: "Piotr" },
  { label: "jedzenie", amount: 150, paidBy: "Anna" },
  { label: "bilety", amount: 180, paidBy: "Ola" },
  { label: "parking", amount: 70, paidBy: "Kamil" } 
];

const totalTripCost = customTripCosts.reduce((sum, item) => sum + item.amount, 0);

const expensesPerPerson = customTripCosts.reduce((accumulator, item) => {
  if (!accumulator[item.paidBy]) {
    accumulator[item.paidBy] = 0;
  }
  accumulator[item.paidBy] += item.amount;
  return accumulator;
}, {});

let topSpender = "";
let maxPaidAmount = 0;

for (const person in expensesPerPerson) {
  if (expensesPerPerson[person] > maxPaidAmount) {
    maxPaidAmount = expensesPerPerson[person];
    topSpender = person;
  }
}

console.log("====== RAPORT KOSZTÓW WYJAZDU ======");
console.log(`Całkowity koszt całej wycieczki: ${totalTripCost} PLN`);
console.log("\nSuma wydatków poszczególnych osób:");
for (const person in expensesPerPerson) {
  console.log(`- ${person}: ${expensesPerPerson[person]} PLN`);
}
console.log(`\n👑 Osoba, która wyłożyła najwięcej pieniędzy: ${topSpender} (${maxPaidAmount} PLN)`);

console.log("\n--- Rozliczenie końcowe (Kto ma oddać / odebrać) ---");

const participantsCount = Object.keys(expensesPerPerson).length;
const fairShare = totalTripCost / participantsCount;

console.log(`Każda osoba powinna docelowo ponieść koszt: ${fairShare.toFixed(2)} PLN\n`);

for (const person in expensesPerPerson) {
  const balance = expensesPerPerson[person] - fairShare;
  if (balance > 0) {
    console.log(`✅ ${person} powinien OTRZYMAĆ zwrot: ${balance.toFixed(2)} PLN`);
  } else if (balance < 0) {
    console.log(`🚨 ${person} musi ODDAĆ: ${Math.abs(balance).toFixed(2)} PLN`);
  } else {
    console.log(`⚖️ ${person} jest rozliczony na czysto.`);
  }
}
