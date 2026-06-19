const customShoppingList = [
  { name: "masło", quantity: 2, urgent: true },
  { name: "kawa", quantity: 1, urgent: false },
  { name: "ser", quantity: 3, urgent: true },
  { name: "sok", quantity: 4, urgent: false },
  { name: "jabłka", quantity: 6, urgent: true }
];

console.log("=== PEŁNA LISTA ZAKUPÓW ===");
customShoppingList.forEach(item => {
  console.log(`- ${item.name} (sztuk: ${item.quantity}) [Pilne: ${item.urgent ? "Tak" : "Nie"}]`);
});

const urgentProducts = customShoppingList.filter(item => item.urgent === true);

const upperCaseProductNames = customShoppingList.map(item => item.name.toUpperCase());

console.log("\n=== PODSUMOWANIE ===");
console.log(`Liczba pilnych pozycji do kupienia: ${urgentProducts.length}`);
console.log("Wszystkie produkty (wielkimi literami):", upperCaseProductNames);

function calculateTotalQuantity(list) {
  const totalItems = list.reduce((total, item) => total + item.quantity, 0);
  return `🛍️ Łączna liczba wszystkich sztuk artykułów do wrzucenia do koszyka: ${totalItems}`;
}

console.log("\n--- Analiza dodatkowa ---");
console.log(calculateTotalQuantity(customShoppingList));
