const userCart = [
  { name: "Bułki", price: 1.2, quantity: 5, category: "pieczywo" },
  { name: "Szynka", price: 14.5, quantity: 1, category: "wędliny" },
  { name: "Sok Pomarańczowy", price: 7.5, quantity: 2, category: "napoje" }
];

const promoThreshold = 30;
const promoPercent = 10;

const cartItemsWithDescriptions = userCart.map(item => {
  const itemTotalValue = item.price * item.quantity;
  return {
    ...item,
    totalValue: itemTotalValue,
    description: `${item.quantity} x ${item.name} (${itemTotalValue.toFixed(2)} PLN)`
  };
});

const textReceiptList = cartItemsWithDescriptions.map(item => item.description);

const totalCartValueBeforeDiscount = cartItemsWithDescriptions.reduce((sum, item) => sum + item.totalValue, 0);

let finalCartValue = totalCartValueBeforeDiscount;
const qualifiedForDiscount = totalCartValueBeforeDiscount > promoThreshold;

if (qualifiedForDiscount) {
  const discountAmount = (totalCartValueBeforeDiscount * promoPercent) / 100;
  finalCartValue = totalCartValueBeforeDiscount - discountAmount;
}

console.log("=== PARAGON ZAKUPOWY ===");
textReceiptList.forEach(line => console.log(line));
console.log("------------------------");
console.log(`Łączna wartość zamówienia: ${totalCartValueBeforeDiscount.toFixed(2)} PLN`);

if (qualifiedForDiscount) {
  console.log(`🎁 Naliczono rabat ${promoPercent}% (Suma przekroczyła ${promoThreshold} PLN)!`);
  console.log(`Ostateczna cena do zapłaty: ${finalCartValue.toFixed(2)} PLN`);
} else {
  console.log("Do naliczenia rabatu zabrakło: " + (promoThreshold - totalCartValueBeforeDiscount).toFixed(2) + " PLN");
}

function checkShippingStatus(finalPrice) {
  console.log("\n--- Informacje o dostawie (Rozszerzenie) ---");
  const FREE_SHIPPING_LIMIT = 40;
  
  if (finalPrice >= FREE_SHIPPING_LIMIT) {
    console.log("🚚 Gratulacje! Twoje zamówienie kwalifikuje się na DARMOWĄ DOSTAWĘ.");
  } else {
    const shippingCost = 12.99;
    const orderTotalWithShipping = finalPrice + shippingCost;
    console.log(`📦 Koszt dostawy wynosi: ${shippingCost} PLN (Darmowa dostawa od ${FREE_SHIPPING_LIMIT} PLN).`);
    console.log(`Suma razem z dostawą: ${orderTotalWithShipping.toFixed(2)} PLN`);
  }
}

checkShippingStatus(finalCartValue);
