const serviceRepairs = [
  { id: 101, client: "Jan", device: "MacBook Pro", status: "nowe", estimatedCost: 450 },
  { id: 102, client: "Marta", device: "iPhone 15", status: "w trakcie", estimatedCost: 300 },
  { id: 103, client: "Paweł", device: "iPad Air", status: "zakończone", estimatedCost: 150 }
];

const targetId = 102;
const foundRepair = serviceRepairs.find(repair => repair.id === targetId);
console.log("=== ZNALEZIONE ZGŁOSZENIE ===");
console.log(foundRepair);

const updatedServiceRepairs = serviceRepairs.map(repair => {
  if (repair.id === targetId) {
    return { ...repair, status: "zakończone" };
  }
  return repair;
});

const inProgressCount = updatedServiceRepairs.filter(repair => repair.status === "w trakcie").length;

console.log("\n=== ORYGINALNA TABLICA (Niezmieniona) ===");
console.log(serviceRepairs);

console.log("\n=== ZAKTUALIZOWANA TABLICA (Nowy obiekt z id 102 ma status 'zakończone') ===");
console.log(updatedServiceRepairs);

console.log(`\nLiczba zgłoszeń 'w trakcie' w nowym rejestrze: ${inProgressCount}`);

function calculateActiveRepairsValue(repairsArray) {
  const activeRepairs = repairsArray.filter(repair => repair.status !== "zakończone");
  const totalValue = activeRepairs.reduce((sum, repair) => sum + repair.estimatedCost, 0);
  
  console.log("\n--- Analiza dodatkowa (Rozszerzenie) ---");
  console.log(`Kwota zamrożona w aktywnych naprawach (status inny niż zakończone): ${totalValue} PLN`);
}

calculateActiveRepairsValue(serviceRepairs);
